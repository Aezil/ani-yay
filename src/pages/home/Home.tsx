import { useLazyQuery } from '@apollo/client';
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

import { AniYayButton, AniYayDropdown, AniYayInput, AniYayTable, Heading, Text } from '../../components';
import { AnimeQueryResult, Media, MediaStatus, MediaType } from '../../interfaces/interfaces';
import { pageQuery } from '../../queries/pageQueries';
import {
  StyledButtonContainer,
  StyledFilter,
  StyledFilterContainer,
  StyledHeadingContainer,
  StyledInputContainer,
  StyledLoadingText,
  StyledSearchContainer,
  StyledSpinnerContainer,
} from './styled-components';

const StatusDropdown = [
  {
    value: MediaStatus.finished,
    label: 'Finished',
  },
  {
    value: MediaStatus.releasing,
    label: 'Releasing',
  },
  {
    value: MediaStatus.notYetReleased,
    label: 'Not Yet Released',
  },
  {
    value: MediaStatus.cancelled,
    label: 'Cancelled',
  },
  {
    value: MediaStatus.hiatus,
    label: 'Hiatus',
  },
];

export const TypeDropdown = [
  {
    value: MediaType.anime,
    label: 'Anime',
  },
  {
    value: MediaType.manga,
    label: 'Manga',
  },
];

export const Home = () => {
  const [title, setTitle] = useState<string>('');
  const [media, setMedia] = useState<Media[]>([]);
  const [statusFilter, setStatusFilter] = useState<MediaStatus>();
  const [typeFilter, setTypeFilter] = useState<MediaType>();

  const [loadAnime, { called, data, loading }] = useLazyQuery<AnimeQueryResult>(pageQuery);

  useEffect(() => {
    if (loading || !data) {
      return;
    }

    setMedia(data.Page.media);
  }, [data, loading]);

  useEffect(() => {
    if (data) {
      const statusResult = statusFilter
        ? data.Page.media.filter((option: Media) => option.status === statusFilter)
        : data.Page.media;
      const filteredResult = typeFilter
        ? statusResult.filter((option: Media) => option.type === typeFilter)
        : statusResult;
      setMedia(filteredResult);
    }
  }, [data, statusFilter, typeFilter]);

  const handleOnChange = (event: any): void => {
    setTitle(event.target.value);
  };

  const handleOnSearch = (): void => {
    loadAnime({
      variables: {
        page: 1,
        title: title,
      },
    });
  };

  const handleStatusChange = (value: MediaStatus): void => {
    setStatusFilter(value);
  };

  const handleTypeChange = (value: MediaType): void => {
    setTypeFilter(value);
  };

  return (
    <>
      <StyledHeadingContainer>
        <Heading>AniYAY</Heading>
      </StyledHeadingContainer>
      <StyledSearchContainer>
        <StyledInputContainer>
          <AniYayInput type='text' onChange={handleOnChange} placeholder='Enter an anime title...' />
        </StyledInputContainer>
        <StyledButtonContainer>
          <AniYayButton handleClick={handleOnSearch} label={'Search'} icon={<FontAwesomeIcon icon={faSearch} />} />
        </StyledButtonContainer>
      </StyledSearchContainer>
      {!called ? (
        <Text>Lets find you some anime to watch or manga to read!</Text>
      ) : loading ? (
        <StyledSpinnerContainer>
          <FontAwesomeIcon size='2x' icon={faSpinner} />
          <StyledLoadingText>loading...</StyledLoadingText>
        </StyledSpinnerContainer>
      ) : (
        <>
          <StyledFilterContainer>
            <StyledFilter>
              <AniYayDropdown label='Choose a Status Filter' options={StatusDropdown} onChange={handleStatusChange} />
            </StyledFilter>
            <StyledFilter>
              <AniYayDropdown label='Choose a Type Filter' options={TypeDropdown} onChange={handleTypeChange} />
            </StyledFilter>
          </StyledFilterContainer>
          <AniYayTable media={media} />
        </>
      )}
    </>
  );
};

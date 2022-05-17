import { useLazyQuery } from '@apollo/client';
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

import { AniYayButton, AniYayDropdown, AniYayInput, AniYayTable, Heading, Text } from '../../components';
import { StatusDropdown, TypeDropdown } from '../../constants';
import { AnimeQueryResult, Media, MediaStatus, MediaType, PageInfo } from '../../interfaces/interfaces';
import { pageQuery } from '../../queries/pageQueries';
import {
  StyledButtonContainer,
  StyledErrorText,
  StyledFilter,
  StyledFilterContainer,
  StyledHeadingContainer,
  StyledInputContainer,
  StyledLoadingText,
  StyledSearchContainer,
  StyledSpinnerContainer,
} from './styled-components';

export const Home = () => {
  const [title, setTitle] = useState<string>('');
  const [media, setMedia] = useState<Media[]>([]);
  const [pageInfo, setPageInfo] = useState<PageInfo>();
  const [statusFilter, setStatusFilter] = useState<MediaStatus>();
  const [typeFilter, setTypeFilter] = useState<MediaType>();

  const [loadAnime, { called, data, loading, error }] = useLazyQuery<AnimeQueryResult>(pageQuery);

  useEffect(() => {
    if (loading || !data) {
      return;
    }

    setMedia(data.Page.media);
    setPageInfo(data.Page.pageInfo);
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
      ) : error ? (
        <StyledErrorText>An error has occurred: {error.message}</StyledErrorText>
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
          <div className='table-responsive'>
            {media.length === 0 ? (
              <Text>There are 0 results.</Text>
            ) : (
              <>
                <Text>
                  There are {media.length} and this is page {pageInfo?.currentPage} out of {pageInfo?.lastPage}
                </Text>
                <AniYayTable media={media} />
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

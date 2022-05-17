import { MediaStatus, MediaType } from './interfaces/interfaces';

export const StatusDropdown = [
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

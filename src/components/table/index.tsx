import React from 'react';
import { Table } from 'react-bootstrap';

import { Media } from '../../interfaces/interfaces';

interface Props {
  media: Media[];
}

export const AniYayTable = ({ media }: Props) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
          <th>Type</th>
          <th>Popularity</th>
        </tr>
      </thead>
      <tbody>
        {media.map((item: Media, index: number) => (
          <tr key={index}>
            <td>{item.title.romaji}</td>
            <td>{item.description}</td>
            <td>{item.status}</td>
            <td>{item.type}</td>
            <td>{item.popularity}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

import { ActionIcon, Grid, Table } from '@mantine/core';
import { IconEye, IconPencil, IconTrashX } from '@tabler/icons-react';
import { ButtonIcon, StreamCard } from '@/components';

export interface IntStreamData {
  stramUrl: string;
  name: string;
  location: string;
  description: string;
}

// eslint-disable-next-line no-unused-vars
interface StreamPanel {
  isGridView: 'grid' | 'table';
}
// eslint-disable-next-line no-redeclare
export function StreamPanel({ isGridView }: StreamPanel) {
  const streamData: IntStreamData[] = [
    {
      stramUrl:
        'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
      name: 'Verudela Beach',
      location: 'Croatia',
      description: 'Completely renovated for the season 2020',
    },
    {
      stramUrl:
        'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
      name: 'Verudela Beach',
      location: 'Croatia',
      description: 'Completely renovated for the season 2020',
    },
    {
      stramUrl:
        'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
      name: 'Verudela Beach',
      location: 'Croatia',
      description: 'Completely renovated for the season 2020',
    },
    {
      stramUrl:
        'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
      name: 'Verudela Beach',
      location: 'Croatia',
      description: 'Completely renovated for the season 2020',
    },
    {
      stramUrl:
        'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
      name: 'Verudela Beach',
      location: 'Croatia',
      description: 'Completely renovated for the season 2020',
    },
  ];
  return isGridView === 'grid' ? (
    <StreamGride data={streamData} />
  ) : (
    <StreamTable data={streamData} />
  );
}

interface IntStreamComponent {
  data: IntStreamData[];
}

export function StreamGride(props: IntStreamComponent) {
  const { data } = props;
  return (
    <Grid>
      {data.map((stream: IntStreamData) => (
        // eslint-disable-next-line react/jsx-key
        <Grid.Col span={3}>
          <StreamCard {...stream} />
        </Grid.Col>
      ))}
    </Grid>
  );
}
export function StreamTable(props: IntStreamComponent) {
  const { data } = props;

  const rows = data.map((element: IntStreamData) => (
    <Table.Tr key={element.name}>
      <Table.Td>1</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.location}</Table.Td>
      <Table.Td>{element.stramUrl}</Table.Td>
      <Table.Td>{element.description}</Table.Td>

      <Table.Td>
        <ActionIcon.Group>
          <ButtonIcon color="green" icon={IconEye} variant="light" aria-label="show" />
          <ButtonIcon icon={IconPencil} variant="light" aria-label="edit" />
          <ButtonIcon color="red" icon={IconTrashX} variant="light" aria-label="trash" />
        </ActionIcon.Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>id</Table.Th>
          <Table.Th>Screen Shoot</Table.Th>
          <Table.Th>name</Table.Th>
          <Table.Th>Location</Table.Th>
          <Table.Th>action</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}

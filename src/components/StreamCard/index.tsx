import { IconCamera, IconMaximize, IconX } from '@tabler/icons-react';
import { Card, Text, Group, ActionIcon } from '@mantine/core';
import ReactPlayer from 'react-player';
import classes from './BadgeCard.module.css';
import ButtonIcon from '../ButtonIcon';
import { IntStreamData } from '@/pages/Streems/StreamePanel';

export default function StreamCard(props: IntStreamData) {
  const { stramUrl, name, location } = props;

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section bg="#1a96e5" className={classes.session}>
        <Group py={4} px={16} align="center" justify="space-between">
          <Text className={classes.label}>{name}</Text>
          <ActionIcon.Group>
            <ButtonIcon c="#fff" icon={IconMaximize} variant="light" aria-label="full" />
            <ButtonIcon c="#fff" icon={IconCamera} variant="light" aria-label="screenshot" />
            <ButtonIcon c="#fff" icon={IconX} variant="light" aria-label="close" />
          </ActionIcon.Group>
        </Group>

        <ReactPlayer
          loop
          width="100%"
          height="auto"
          muted
          playing
          url={stramUrl}
          controls={false}
        />

        <Group py={4} px={16} align="center" justify="space-between">
          <Text className={classes.label}>{location}</Text>
        </Group>
      </Card.Section>
    </Card>
  );
}

import ReactPlayer from 'react-player';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
function VideoCard(props: any) {
  const { recorder } = props;
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <ReactPlayer style={{ width: '100%' }} url={recorder.streamUrl} controls />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{recorder.name}</Text>
        <Badge color="pink">{recorder.isActive ? 'oline' : 'ofline'}</Badge>
      </Group>
      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
  );
}

export default VideoCard;

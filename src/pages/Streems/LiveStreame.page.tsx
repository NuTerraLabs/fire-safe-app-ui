import { Button, Drawer, Group, Tabs } from '@mantine/core';
import {
  IconPhoto,
  IconBrandYoutube,
  IconPresentationAnalytics,
  IconBrowser,
  IconLayoutGridAdd,
  IconPlus,
} from '@tabler/icons-react';
import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import AuthLayout from '@/layout/AuthLayout';
import classes from './Stream.module.css';
import { StreamPanel } from './StreamePanel';
import CreateStream from './CreateStreem';

export default function LiveStreamPage() {
  const [isGridView, setIsGrideView] = useState<'grid' | 'table'>('grid');

  const tabs = [
    {
      value: 'streams',
      label: 'streams',

      icon: IconBrandYoutube,
    },
    {
      value: 'gallery',
      label: 'gallery',

      icon: IconPhoto,
    },
    {
      value: 'aiAnalytics',
      label: 'ai Analytics',

      icon: IconPresentationAnalytics,
    },
  ];

  const viewTypes = [
    {
      value: 'grid',
      label: 'Grid',
      icon: IconLayoutGridAdd,
    },
    {
      value: 'table',
      label: 'Table',
      icon: IconBrowser,
    },
  ];
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <AuthLayout>
      <Drawer opened={opened} onClose={close} title="Create Stream">
        <CreateStream />
      </Drawer>
      <Tabs defaultValue="streams" classNames={classes}>
        <Group
          bg="#fff"
          py={10}
          justify="space-between"
          style={{ position: 'sticky', top: 60, zIndex: 100 }}
        >
          <Tabs.List>
            {tabs.map((tab) => (
              <Tabs.Tab key={tab.value} value={tab.value} leftSection={<tab.icon size={14} />}>
                {tab.label}
              </Tabs.Tab>
            ))}
          </Tabs.List>
          <Button.Group>
            {viewTypes.map((type) => (
              <Button
                key={type.value}
                variant={type.value === isGridView ? 'filled' : 'outline'}
                onClick={() => setIsGrideView(type.value as 'grid' | 'table')}
                leftSection={<type.icon size={14} />}
              >
                {type.label}
              </Button>
            ))}
            <Button onClick={open} variant="filled" ml={10}>
              <IconPlus size={14} />
            </Button>
          </Button.Group>
        </Group>
        <Tabs.Panel value="streams" py={16}>
          <StreamPanel isGridView={isGridView} />
        </Tabs.Panel>

        <Tabs.Panel value="gallery">Messages tab content</Tabs.Panel>

        <Tabs.Panel value="aiAnalytics">Settings tab content</Tabs.Panel>
      </Tabs>
    </AuthLayout>
  );
}

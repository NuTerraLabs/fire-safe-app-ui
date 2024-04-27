import { Burger, Group, Text } from '@mantine/core';

type PropsType = {
  mobileOpened: boolean;
  toggleMobile: () => void;
  desktopOpened: boolean;
  toggleDesktop: () => void;
};
export default function NavbarHeader(props: PropsType) {
  const { mobileOpened, toggleMobile, desktopOpened, toggleDesktop } = props;
  return (
    <Group h="100%" px="md" bg="#1a96e5">
      <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
      <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
      <Text tt="capitalize" fw={900} c="#fff" style={{ fontSize: 25 }}>
        fire safe
      </Text>
    </Group>
  );
}

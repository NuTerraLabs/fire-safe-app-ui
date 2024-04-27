import { useState } from 'react';
import { Tooltip, UnstyledButton, Stack, rem } from '@mantine/core';
import {
  IconHome2,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
  IconDeviceComputerCamera,
  IconLayoutDashboard,
} from '@tabler/icons-react';

import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';

interface NavbarLinkProps {
  icon: typeof IconHome2;
  link?: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

function NavbarLink({ icon: Icon, label, active, onClick, link }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      {link ? (
        <Link to={link} className={classes.link} data-active={active || undefined}>
          <Icon style={{ width: rem(25), height: rem(25) }} stroke={1.5} />
        </Link>
      ) : (
        <UnstyledButton
          onClick={onClick}
          className={classes.link}
          data-active={active || undefined}
        >
          <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
        </UnstyledButton>
      )}
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconLayoutDashboard, label: 'Dashboard', link: '/' },
  { icon: IconDeviceComputerCamera, label: 'Streams', link: '/streams' },
  { icon: IconDeviceDesktopAnalytics, label: 'Analytics', link: '/' },
  { icon: IconCalendarStats, label: 'Releases', link: '/' },
  { icon: IconUser, label: 'Account', link: '/' },
  { icon: IconFingerprint, label: 'Security', link: '/' },
  { icon: IconSettings, label: 'Settings', link: '/' },
];

export default function Aside() {
  const [active, setActive] = useState(0);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>

      <Stack justify="center" gap={0}>
        <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
        <NavbarLink icon={IconLogout} label="Logout" />
      </Stack>
    </nav>
  );
}

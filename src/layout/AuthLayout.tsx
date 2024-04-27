import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';
import { Aside, NavbarHeader } from '@/components';
import AuthProvider from '@/components/Providers/AuthContext';

export default function AuthLayout(props: React.PropsWithChildren) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const { children } = props;

  return (
    <AuthProvider>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 65,
          breakpoint: 'sm',
          collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
        }}
        padding="md"
      >
        <AppShell.Header
          style={{
            border: 'none',
          }}
        >
          <NavbarHeader
            mobileOpened={mobileOpened}
            toggleMobile={toggleMobile}
            desktopOpened={desktopOpened}
            toggleDesktop={toggleDesktop}
          />
        </AppShell.Header>
        <AppShell.Navbar>
          <Aside />
        </AppShell.Navbar>
        <AppShell.Main>{children}</AppShell.Main>
      </AppShell>
    </AuthProvider>
  );
}

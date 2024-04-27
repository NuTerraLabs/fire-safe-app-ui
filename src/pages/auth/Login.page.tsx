import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Flex,
  Button,
  Group,
  Box,
} from '@mantine/core';
import classes from './AuthenticationTitle.module.css';

export default function LoginPage() {
  return (
    <Container>
      <Flex h="100vh" justify="center" align="center">
        <Box>
          <Title ta="center" className={classes.title}>
            Welcome back!
          </Title>
          <Text c="dimmed" size="sm" ta="center" mt={5}>
            Do not have an account yet?{' '}
            <Anchor size="sm" component="button">
              Create account
            </Anchor>
          </Text>

          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput label="Email" placeholder="you@mantine.dev" required />
            <PasswordInput label="Password" placeholder="Your password" required mt="md" />
            <Group justify="space-between" mt="lg">
              <Checkbox label="Remember me" />
              <Anchor component="button" size="sm">
                Forgot password?
              </Anchor>
            </Group>
            <Button fullWidth mt="xl">
              Sign in
            </Button>
          </Paper>
        </Box>
      </Flex>
    </Container>
  );
}

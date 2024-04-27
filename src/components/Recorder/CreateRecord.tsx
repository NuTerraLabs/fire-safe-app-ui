import { TextInput, Button, Group, Box } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';

import { z } from 'zod';

const CreateSchema = z.object({
  name: z
    .string({
      required_error: 'is required',
    })
    .min(1, { message: 'can be empty' }),
  username: z
    .string({
      required_error: 'is required',
    })
    .min(1, { message: 'can be empty' }),
  password: z
    .string({
      required_error: 'is required',
    })
    .min(1, { message: 'can be empty' }),
  rtsp: z.string({ required_error: 'is required' }).url(),
  isActive: z.boolean().default(true),
});

function CreateRecord(props: any) {
  const { setRecorders } = props;
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: 'blida_camera',
      username: 'Hichem',
      password: '123',
      location: 'blida',
      rtsp: 'rtsp://admin:BXBCAL@174.3.156.111:554/H.265',
    },

    validate: zodResolver(CreateSchema),
  });

  const onSubmit = async (values: any) => {
    const res = await fetch('http://localhost:8010/cameras', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(values),
    });
    const { success, data } = await res.json();
    if (success) {
      setRecorders((recorders: any[]) => [...recorders, data]);
      alert('created');
    } else {
      alert('Failed to create');
    }
  };
  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit(onSubmit)}>
        <TextInput withAsterisk label="name" {...form.getInputProps('name')} />
        <TextInput withAsterisk label="username" {...form.getInputProps('username')} />

        <TextInput withAsterisk label="password" {...form.getInputProps('password')} />
        <TextInput withAsterisk label="location" {...form.getInputProps('location')} />
        <TextInput withAsterisk label="rtsp" {...form.getInputProps('rtsp')} />
        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}

export default CreateRecord;

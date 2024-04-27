import { Button, Select, Textarea, TextInput } from '@mantine/core';
import UseCreateStreamHook from './hooks/UseCreateStreemHook';

export default function CreateStream() {
  const { formHock, cameraGroup, handelSubmit } = UseCreateStreamHook();
  return (
    <form onSubmit={handelSubmit}>
      <TextInput {...formHock.getInputProps('name')} required mb={10} label="Camera Name" />
      <TextInput {...formHock.getInputProps('rtsp')} required mb={10} label="Camera Url" />
      <TextInput {...formHock.getInputProps('location')} mb={10} label="Location" />

      <Select
        {...formHock.getInputProps('group')}
        label="Group"
        data={cameraGroup}
        value={formHock.getInputProps('group').value}
        allowDeselect={false}
        defaultValue="1"
        searchable
        clearable
        checkIconPosition="right"
        nothingFoundMessage="Nothing found..."
      />
      <Textarea {...formHock.getInputProps('description')} mb={10} label="Description" />
      <Button size="sm" w="100%" type="submit">
        Create
      </Button>
    </form>
  );
}

import { ComboboxItem } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { useState } from 'react';
import { CreateStreamSchema } from '@/validation/stream.validation';
//UseCreateStreamHook
export default function UseCreateStreamHook() {
  const formHock = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      group: '',
      rtsp: '',
      description: '',
      location: '',
    },

    validate: zodResolver(CreateStreamSchema),
  });
  const [groupSelected, setGroupSelected] = useState<ComboboxItem | null>(null);

  const cameraGroup = [
    {
      value: '1',
      label: 'all',
    },
    {
      value: '2',
      label: 'blida',
    },
    {
      value: '3',
      label: 'algeria',
    },
  ];
  type FormTypes = typeof formHock.values;
  const handelSelectGroup = (_value: any, option: any) => setGroupSelected(option);
  const handelSubmit = formHock.onSubmit((values: FormTypes) => {
    console.log(values);
  });

  return {
    formHock,
    groupSelected,
    setGroupSelected,
    cameraGroup,
    handelSubmit,
    handelSelectGroup,
  };
}

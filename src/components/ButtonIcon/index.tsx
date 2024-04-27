import { ActionIcon, ActionIconProps } from '@mantine/core';
import { IconHome2 } from '@tabler/icons-react';

interface IntButtonIcon extends ActionIconProps {
  icon: typeof IconHome2;
}
export default function ButtonIcon(props: IntButtonIcon) {
  const { icon: Icon, ...rest } = props;

  return (
    <ActionIcon p={0} m={0} {...rest}>
      <Icon style={{ width: '70%', height: '70%' }} stroke={1.5} />
    </ActionIcon>
  );
}

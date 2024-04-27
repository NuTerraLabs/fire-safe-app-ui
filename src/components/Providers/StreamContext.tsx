import React, { createContext } from 'react';

export const streamContext = createContext(null);

interface IntStreamProvider extends React.PropsWithChildren {
  initialValues: any;
}
export default function StreamProvider(props: IntStreamProvider) {
  const { children, initialValues } = props;

  const values = {
    ...initialValues,
  };

  const { Provider } = streamContext;
  return <Provider value={values}>{children}</Provider>;
}

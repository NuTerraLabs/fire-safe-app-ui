import React, { createContext } from 'react';

export const authContext = createContext(null);

interface IntAuthProvider extends React.PropsWithChildren {
  initialValues?: any;
}
export default function AuthProvider(props: IntAuthProvider) {
  const { children, initialValues } = props;

  const values = {
    ...initialValues,
  };

  const { Provider } = authContext;
  return <Provider value={values}>{children}</Provider>;
}

import { useState } from 'react';
import CreateRecord from '@/components/Recorder/CreateRecord';
import VideoCard from '@/components/Recorder/videoCard';
// eslint-disable-next-line import/order
import { Button, Container, Grid } from '@mantine/core';

function RecorderPage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [recorders, setRecorders] = useState<any[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [errors, setErrors] = useState<any[]>([]);

  const getAllRecorders = async () => {
    const response = await fetch('http://localhost:8010/cameras', {
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const { success, data, errors }: any = await response.json();

    if (success) {
      await setRecorders(data);
      setIsError(false);
      setErrors([]);
    } else {
      setIsError(true);
      setErrors(errors);
    }
    setIsLoading(false);
  };
  const login = async () => {
    const raw = JSON.stringify({
      email: 'lk@gmail.com',
      password: '123',
    });
    const response = await fetch('http://localhost:8010/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: raw,
      credentials: 'include',
    });

    const result = await response.json();
    console.log(result);

    // if (success) {
    //   console.log(data);

    //   alert('Success');
    // } else {
    //   setIsError(true);
    //   setErrors(errors);
    // }
  };
  // useEffect(() => {
  //   if (isLoading) {
  //     getAllRecorders();
  //   }
  // }, [getAllRecorders, isLoading]);
  return (
    <Container>
      <Button onClick={login}>Login</Button>
      <Button onClick={getAllRecorders}>looading</Button>
      {isError && errors.map((e, index: number) => <div key={index}>{e.message}</div>)}

      <Grid>
        {recorders.length ? (
          recorders.map((recorder: any, index: number) => (
            <Grid.Col key={index} span={12}>
              <VideoCard recorder={recorder} />
            </Grid.Col>
          ))
        ) : (
          <></>
        )}
      </Grid>
      <CreateRecord setRecorders={setRecorders} />
    </Container>
  );
}

export default RecorderPage;

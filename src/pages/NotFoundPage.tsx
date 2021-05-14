import { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Layout = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  h1 {
    font-weight: 500;
    font-size: 8rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const NotFoundPage: React.FC = () => {
  const history = useHistory();
  const [seconds, setSeconds] = useState(6);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (seconds <= 0) {
      history.push("/");
    }
  }, [seconds, history]);

  return (
    <Layout>
      <h1>Oops !</h1>
      <p>
        Something went wrong, we can't seem to find the page you are looking for
        ...
      </p>
      <p>You'll be redirected to Homepage in {seconds} seconds</p>
    </Layout>
  );
};

export default NotFoundPage;

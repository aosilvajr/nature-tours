import styled from 'styled-components';

export const Container = styled.section`
  .hero {
    height: 100vh;
  }

  .large-wave {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 15rem;
    border-bottom: 0;
    position: absolute;
  }

  .main-message {
    width: 100%;
    color: #fafafa;
    max-width: 60rem;
    text-transform: uppercase;
    transform: translateY(15vh);

    h1 {
      margin: 1rem 0;
      font-size: 4rem;
    }

    p {
      text-transform: lowercase;
    }

    .btn {
      color: #fafafa;
      margin-top: 2rem;
      border-radius: 2rem;
      padding: 1rem 2.5rem;
      display: inline-block;
      background-color: #eb648c;
      transition: background-color 350ms;

      :hover {
        background-color: #ce578b;
      }
    }
  }

  @media screen and (min-width: 350px) {
    .hero {
      height: 90vh;
    }

    .large-wave {
      left: 0;
      bottom: 0;
      width: 100%;
      height: 5rem;
      border-bottom: 0;
      position: absolute;
    }

    .main-message {
      transform: translateY(90%);
    }
  }

  @media screen and (min-width: 700px) {
    .hero {
      height: 100vh;
    }

    .large-wave {
      left: 0;
      bottom: 0;
      width: 100%;
      height: 7rem;
      border-bottom: 0;
      position: absolute;
    }

    .main-message {
      transform: translateY(130%);
    }
  }
`;

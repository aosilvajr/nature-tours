import styled from 'styled-components';

export const Container = styled.section`
  margin: 5rem 0;

  .title-heading {
    text-align: center;
    margin-bottom: 7rem;
    color: rgba(0,0,0, 0.7);
    text-transform: uppercase;

    h3 {
      font-size: 1.4rem;
    }

    h1 {
      font-size: 2rem;
      margin: .5rem 0 1rem;
    }

    p {
      text-transform: lowercase;
    }
  }

  .btn {
    color: #fafafa;
    font-size: 1.2rem;
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

  .adventure-grid {
    display: grid;
    grid-gap: 2.5rem;
    margin-bottom: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));

    .adventure-grid-item {
      color: rgba(0, 0, 0, 0.7);
    }
  }
`;

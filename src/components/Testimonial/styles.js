import styled from 'styled-components';

export const Container = styled.section`
  .wave-large-reversed {
    top: 0;
    left: 0;
    width: 100%;
    height: 10rem;
    border-bottom: 0;
    position: absolute;
  }

  .testimonial{
    top: 60%;
    left: 50%;
    width: 100%;
    color: #fff;
    position: absolute;
    text-align: center;
    transform: translate(-50%, -50%);

    .testimonial-text-box {
      padding: 0 1.5rem;
      margin-bottom: 2rem;
    }

    .testimonial-customer {
      img {
        width: 15rem;
        height: 15rem;
        border-radius: 100%;
        border: 3px solid #eb648c;
      }
    }
  }
`;

import styled from 'styled-components';

import camping from '../../images/camping.jpg';
import hiking from '../../images/hiking.jpg';
import stars from '../../images/stars.jpg';

export const Container = styled.section`
  .experience-outdoors {
    padding: 0;
  }

  .title-heading {
    text-align: center;
    margin-bottom: 10rem;
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

  .activities-grid {
    color: #fff;
    display: grid;
    grid-gap: 2.5rem;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));

    .start-gazing {
      background: url(${stars}) center no-repeat;
    }

    .hiking {
      background: url(${hiking}) center no-repeat;
    }

    .camping {
      background: url(${camping}) center no-repeat;
    }

    .activities-grid-item {
      z-index: 1;
      height: 40rem;
      padding: 5rem;
      display: flex;
      cursor: pointer;
      position: relative;
      border-radius: 10px;
      flex-direction: column;
      justify-content: center;

      h1 {
        margin: 2rem 0;
        font-size: 1.7rem;
        text-transform: uppercase;
      }

      ::before {
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        z-index: -1;
        height: 100%;
        position: absolute;
        border-radius: 10px;
        background-image: linear-gradient(135deg, rgba(49,24,131,0.9) 0%, rgba(72,56,149,0.8) 100%);
      }
    }
  }
`;

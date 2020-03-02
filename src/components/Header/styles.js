import styled from 'styled-components';

export const Container = styled.header`
  z-index: 2;
  width: 100%;
  height: 5rem;
  position: absolute;

  nav {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, .2);

    .nav-brand {
      width: 2rem;
    }

    .menu-icon {
      color: #fafafa;
      cursor: pointer;
      font-size: 3.5rem;
    }

    .nav-list {
      top: 0;
      z-index: 1;
      width: 26rem;
      height: 100vh;
      right: -26rem;
      display: flex;
      position: fixed;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      background-color: #d7d4ed;
      transition: all 400ms ease-in-out;

      .close {
        top: 1rem;
        left: 1.5rem;
        position: absolute;
      }

      .nav-item {
        margin: 1.5rem 0;
      }

      .nav-link {
        font-size: 1.5rem;
        text-transform: uppercase;
        color: rgba(0, 0, 0, .7)
      }
    }

    .active {
      right: 0;
    }
  }

  @media screen and (min-width: 700px) {
    nav {
      .nav-brand {
        width: 3.5rem;
      }

      .nav-list {
        top: initial;
        right: initial;
        width: initial;
        height: initial;
        position: initial;
        flex-direction: row;
        background-color: transparent;

        .nav-item {
          margin: 0 2.5rem;
        }

        .nav-link, .current {
          color: #fafafa;
          position: relative;
          font-size: 1.3rem;
        }

        /* Ambos vão ter o mesmo efeito */
        .nav-link::before,
        .current::before {
          content: '';
          left: 0;
          width: 100%;
          height: 2px;
          bottom: -0.5rem;
          position: absolute;
          transform: scaleX(0);
          transform-origin: left;
          background-color: #eb648c;
          transition: transform 650ms;
        }

        /* Ativa o efeito */
        .current::before {
          transform: scaleX(1);
        }

        .nav-link:hover::before {
          transform: scaleX(1);
        }
      }

      .menu-icon {
        display: none;
      }
    }
  }
`;

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
`;

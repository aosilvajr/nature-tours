import React, { useEffect } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';

import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from './styles';

export default function Header() {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
`);

  useEffect(() => {
    const selectElement = (s) => document.querySelector(s);

    selectElement('.open').addEventListener('click', () => {
      selectElement('.nav-list').classList.add('active');
    });

    selectElement('.close').addEventListener('click', () => {
      selectElement('.nav-list').classList.remove('active');
    });
  }, []);

  return (
    <Container>
      <div className="container">
        <nav>
          <div className="nav-brand">
            <a href="/">
              <Img fluid={logo.childImageSharp.fluid} />
            </a>
          </div>

          <div className="menu-icon open">
            <MdMenu size={24} color="#FFF" />
          </div>

          <ul className="nav-list">
            <div className="menu-icon close">
              <MdClose size={24} color="#eb648c" />
            </div>

            <li className="nav-item">
              <a href="/" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">Destinos</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">Preços</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">Bookings</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">Sobre</a>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
}

import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import Booking from '../components/Booking';
import Layout from '../components/Layout';
import Outdoors from '../components/Outdoors';
import Testimonial from '../components/Testimonial';
import smallLarge from '../images/wave-large.png';
import GlobalStyle from '../styles/global';
import { Container } from './styles';

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "header-bg.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const backgroundFluidImageStack = [
    data.desktop.childImageSharp.fluid,
    'linear-gradient(135deg, rgba(49, 24, 131, 0.9) 0%, rgba(72, 56, 149, 0.8) 100%)',
  ].reverse();

  return (
    <>
      <Layout>
        <Container>
          <BackgroundImage
            className="hero"
            fluid={backgroundFluidImageStack}
          >
            <div className="container">
              <div className="main-message">
                <h3>The Great Outdoor</h3>
                <h1>Adventure</h1>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia, modi numquam! Cum aliquam quo dolore, esse commodi
                  perspiciatis, expedita facere itaque assumenda ut unde nam
                  quam hic corporis provident ipsum.
                </p>

                <div className="cta">
                  <a href="/" className="btn">Book Now</a>
                </div>
              </div>
            </div>

            <img
              className="large-wave"
              src={smallLarge}
              alt="Large Wave"
            />
          </BackgroundImage>
        </Container>

        <Outdoors />
        <Testimonial />
        <Booking />
      </Layout>

      <GlobalStyle />
    </>
  );
}

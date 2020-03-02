import React from 'react';
import { MdFormatQuote } from 'react-icons/md';

import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import profile from '../../images/profile.jpg';
import waveLargeReversed from '../../images/wave-large-reversed.png';
import { Container } from './styles';

export default function Testimonial() {
  const data = useStaticQuery(graphql`
  query {
    testimonials: file(relativePath: { eq: "testimonials-bg.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`);

  const backgroundFluidImageStack = [
    data.testimonials.childImageSharp.fluid,
    'linear-gradient(135deg, rgba(49, 24, 131, 0.9) 0%, rgba(72, 56, 149, 0.8) 100%)',
  ].reverse();

  return (
    <Container>
      <BackgroundImage
        style={{ height: '100vh', backgroundAttachment: 'fixed' }}
        fluid={backgroundFluidImageStack}
      >
        <div className="container">
          <img
            className="wave-large-reversed"
            src={waveLargeReversed}
            alt="Wave Large Reversed"
          />

          <div className="testimonial">
            <div className="testimonial-text-box">
              <MdFormatQuote size={90} color="#eb648c" />
              <p>
                Desenvolvedor FullStack web e mobile especialista nas ferramentas de
                desenvolvimento mais modernas atualmente React JS, Node JS e Gatsby JS.
              </p>
            </div>

            <div className="testimonial-customer">
              <img src={profile} alt="profile-pic" />
              <h1>Ailton Jr.</h1>
            </div>
          </div>
        </div>
      </BackgroundImage>
    </Container>
  );
}

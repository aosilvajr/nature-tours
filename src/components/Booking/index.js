import React from 'react';

import { Container } from './styles';

export default function Booking() {
  return (
    <Container>
      <div className="container">
        <div className="title-heading">
          <h3>Let the</h3>
          <h1>Adventure begin</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="adventure-grid">
          <div className="adventure-grid-item">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Distinctio exercitationem quam deserunt, laboriosam eaque,
              inventore nihil dolorum natus perspiciatis, odit tempora.
              Sed explicabo dolores vitae eveniet? Impedit ea magni hic.
            </p>
          </div>

          <div className="adventure-grid-item">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Distinctio exercitationem quam deserunt, laboriosam eaque,
              inventore nihil dolorum natus perspiciatis, odit tempora.
              Sed explicabo dolores vitae eveniet? Impedit ea magni hic.
            </p>
          </div>
        </div>

        <a className="btn" href="/">Book your adventure</a>
      </div>
    </Container>
  );
}

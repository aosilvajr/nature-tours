import React from 'react';
import { MdStar, MdExplore, MdWhatshot } from 'react-icons/md';

import { Container } from './styles';

export default function Outdoors() {
  return (
    <Container>
      <div className="container">
        <div className="title-heading">
          <h3>Experience</h3>
          <h1>The  thrilling outdoors</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit modi, quia voluptates alias excepturi accusamus
            consequuntur assumenda fugit adipisci porro illum qui,
            voluptatum consequatur! Recusandae, numquam. Fuga sequi itaque incidunt!
          </p>
        </div>

        <div className="activities-grid">
          <div className="activities-grid-item start-gazing">
            <MdStar size={35} color="#eb648c" />
            <h1>Star Gazing</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit modi, quia voluptates alias excepturi accusamus
              consequuntur assumenda fugit adipisci porro illum qui,
              voluptatum consequatur! Recusandae, numquam. Fuga sequi itaque incidunt!
            </p>
          </div>

          <div className="activities-grid-item hiking">
            <MdExplore size={35} color="#eb648c" />
            <h1>Hiking</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit modi, quia voluptates alias excepturi accusamus
              consequuntur assumenda fugit adipisci porro illum qui,
              voluptatum consequatur! Recusandae, numquam. Fuga sequi itaque incidunt!
            </p>
          </div>

          <div className="activities-grid-item camping">
            <MdWhatshot size={35} color="#eb648c" />
            <h1>Camping</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit modi, quia voluptates alias excepturi accusamus
              consequuntur assumenda fugit adipisci porro illum qui,
              voluptatum consequatur! Recusandae, numquam. Fuga sequi itaque incidunt!
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

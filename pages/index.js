/******************************************************************************
 ***
 * WEB422 – Assignment 5
 *
 * I declare that this assignment is my own work in accordance with Seneca's
 * Academic Integrity Policy:
 *
 * https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
 *
 * Name: __Manas Gandotra______ Student ID: ___146439237_______ Date: ___7/25/2025
 *
 ******************************************************************************
 **/

import { Card } from 'react-bootstrap';

export default function Home() {
  return (
    <Card className="bg-light border-0">
      <Card.Body>
        <h1 className="mb-4">Welcome to the Metropolitan Museum of Art</h1>
      </Card.Body>

      <Card.Img
        variant="top"
        src="https://upload.wikimedia.org/wikipedia/commons/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg"
        alt="Metropolitan Museum of Art"
        style={{ maxWidth: '100%', height: 'auto' }}
      />

      <Card.Body>
        <p>
          The Metropolitan Museum of Art of New York City, colloquially "the
          Met", is the largest art museum in the Americas and the fourth-largest
          in the world. Its permanent collection contains over two million
          works, divided among 17 curatorial departments. The main building at
          1000 Fifth Avenue, along the Museum Mile on the eastern edge of
          Central Park on Manhattan's Upper East Side, is by area one of the
          world's largest art museums.
        </p>
        <p>
          Learn more on{' '}
          <a
            href="https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art"
            target="_blank"
            rel="noreferrer"
          >
            Wikipedia
          </a>
          .
        </p>
      </Card.Body>
    </Card>
  );
}

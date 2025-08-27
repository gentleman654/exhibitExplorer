import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useAtom } from 'jotai';
import { favouritesAtom } from '../store';
import { useState } from 'react';

export default function ArtworkCardDetail(props) {
  const {
    objectID,
    primaryImage,
    title,
    objectDate,
    classification,
    medium,
    artistDisplayName,
    artistDisplayBio,
    creditLine,
    dimensions,
  } = props;

  const [favouritesList, setFavouritesList] = useAtom(favouritesAtom);
  const [showAdded, setShowAdded] = useState(favouritesList.includes(objectID));

  function favouritesClicked() {
    if (showAdded) {
      setFavouritesList((current) => current.filter((fav) => fav !== objectID));
      setShowAdded(false);
    } else {
      setFavouritesList((current) => [...current, objectID]);
      setShowAdded(true);
    }
  }

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col lg={8}>
          <Card>
            {primaryImage && (
              <Card.Img
                variant="top"
                src={primaryImage}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  maxHeight: '600px',
                }}
              />
            )}
            <Card.Body>
              <Card.Title>{title || 'N/A'}</Card.Title>
              <Card.Text>
                <strong>Date:</strong> {objectDate || 'N/A'}
              </Card.Text>
              <Card.Text>
                <strong>Classification:</strong> {classification || 'N/A'}
              </Card.Text>
              <Card.Text>
                <strong>Medium:</strong> {medium || 'N/A'}
              </Card.Text>
              <Card.Text>
                <strong>Artist:</strong> {artistDisplayName || 'N/A'}
              </Card.Text>
              <Card.Text>
                <strong>Bio:</strong> {artistDisplayBio || 'N/A'}
              </Card.Text>
              <Card.Text>
                <strong>Credit:</strong> {creditLine || 'N/A'}
              </Card.Text>
              <Card.Text>
                <strong>Dimensions:</strong> {dimensions || 'N/A'}
              </Card.Text>

              {/*  New Favourite Button */}
              <Button
                variant={showAdded ? 'primary' : 'outline-primary'}
                onClick={favouritesClicked}
              >
                {showAdded ? '+ Favourite (added)' : '+ Favourite'}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

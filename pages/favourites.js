import { useAtom } from 'jotai';
import { favouritesAtom } from '../store';
import { Row, Col, Card } from 'react-bootstrap';
import ArtworkCard from '../components/ArtworkCard';

export default function Favourites() {
  const [favouritesList] = useAtom(favouritesAtom);

  if (!favouritesList || favouritesList.length === 0) {
    return (
      <Card>
        <Card.Body>
          <h4>Nothing Here</h4>
          <p>Try adding some new artwork to the list.</p>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Row className="gy-4">
      {favouritesList.map((objectID) => (
        <Col lg={3} key={objectID}>
          <ArtworkCard objectID={objectID} />
        </Col>
      ))}
    </Row>
  );
}

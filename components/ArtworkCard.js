import useSWR from 'swr';
import { Card } from 'react-bootstrap';
import Link from 'next/link';

export default function ArtworkCard({ objectID }) {
  const { data, error } = useSWR(
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
  );

  if (error) return null;
  if (!data) return null;

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Img
        variant="top"
        src={
          data.primaryImageSmall ||
          'https://via.placeholder.com/375x375.png?text=No+Image'
        }
      />
      <Card.Body>
        <Card.Title>{data.title || 'N/A'}</Card.Title>
        <Link href={`/artwork/${objectID}`} passHref legacyBehavior>
          <Card.Link>View Details</Card.Link>
        </Link>
      </Card.Body>
    </Card>
  );
}

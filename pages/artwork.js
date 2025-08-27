import validObjectIDList from '../public/data/validObjectIDList.json';

import useSWR from 'swr';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ArtworkCard from '@/components/ArtworkCard';
import Error from 'next/error';

const PER_PAGE = 12;

export default function Artwork() {
  const router = useRouter();
  const [artworkList, setArtworkList] = useState([]);
  const [page, setPage] = useState(1);

  const searchQuery = router.query.q;

  // Call useSWR regardless (safe)
  const { data, error } = useSWR(
    searchQuery
      ? `https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=${searchQuery}`
      : null
  );

  // Always define useEffect , never conditionally
  useEffect(() => {
    if (data) {
      //  Filter only valid IDs (correct direction)
      let filteredResults =
        data.objectIDs?.filter((id) =>
          validObjectIDList.objectIDs.includes(id)
        ) || [];

      let results = [];
      for (let i = 0; i < filteredResults.length; i += PER_PAGE) {
        const chunk = filteredResults.slice(i, i + PER_PAGE);
        results.push(chunk);
      }
      setArtworkList(results);
      setPage(1);
    } else {
      setArtworkList([]);
    }
  }, [data]);

  //  Handle render logic AFTER hooks
  if (!searchQuery) return <div>Loading query...</div>;
  if (!data) return <div>Loading artwork data...</div>;

  if (error) return <Error statusCode={404} />;

  return (
    <>
      {artworkList?.length > 0 ? (
        <>
          <Row className="gy-4">
            {artworkList[page - 1]?.map((objectID) => (
              <Col lg={3} key={objectID}>
                <ArtworkCard objectID={objectID} />
              </Col>
            ))}
          </Row>

          <div className="text-center mt-4">
            <button
              className="btn btn-outline-primary me-2"
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page <= 1}
            >
              Previous
            </button>
            <span> Page {page} </span>
            <button
              className="btn btn-outline-primary ms-2"
              onClick={() => setPage((p) => p + 1)}
              disabled={page >= artworkList.length}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <div>Nothing Here</div>
      )}
    </>
  );
}

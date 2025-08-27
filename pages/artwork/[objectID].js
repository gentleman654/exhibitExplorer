import { useRouter } from 'next/router';
import useSWR from 'swr';
import Error from 'next/error';
import ArtworkCardDetail from '../../components/ArtworkCardDetail';
export default function ObjectDetail() {
  const router = useRouter();
  const { objectID } = router.query;

  const { data, error } = useSWR(
    objectID
      ? `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
      : null
  );

  if (error) return <Error statusCode={404} />;
  if (!data) return <div>Loading...</div>;

  return <ArtworkCardDetail {...data} />;
}

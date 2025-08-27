import { useAtom } from 'jotai';
import { searchHistoryAtom } from '../store';
import { useRouter } from 'next/router';
import { Card, ListGroup, Button } from 'react-bootstrap';

export default function History() {
  const [searchHistory, setSearchHistory] = useAtom(searchHistoryAtom);
  const router = useRouter();

  //  Parse history items
  const parsedHistory = searchHistory.map((h) => {
    const params = new URLSearchParams(h);
    return Object.fromEntries(params.entries());
  });

  //  Handle click (re-run search)
  function historyClicked(e, index) {
    router.push(`/artwork?${searchHistory[index]}`);
  }

  //  Handle remove
  function removeHistoryClicked(e, index) {
    e.stopPropagation();
    setSearchHistory((current) => {
      const updated = [...current];
      updated.splice(index, 1);
      return updated;
    });
  }

  if (parsedHistory.length === 0) {
    return (
      <Card>
        <Card.Body>
          <h4>Nothing Here</h4>
          <p>Try searching for some artwork.</p>
        </Card.Body>
      </Card>
    );
  }

  return (
    <ListGroup>
      {parsedHistory.map((historyItem, index) => (
        <ListGroup.Item
          key={index}
          onClick={(e) => historyClicked(e, index)}
          style={{ cursor: 'pointer' }}
        >
          {Object.keys(historyItem).map((key) => (
            <span key={key}>
              {key}: <strong>{historyItem[key]}</strong>&nbsp;
            </span>
          ))}
          <Button
            className="float-end"
            variant="danger"
            size="sm"
            onClick={(e) => removeHistoryClicked(e, index)}
          >
            &times;
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { Form, Button } from 'react-bootstrap';
import { useAtom } from 'jotai';
import { searchHistoryAtom } from '../store';

export default function AdvancedSearch() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const [searchHistory, setSearchHistory] = useAtom(searchHistoryAtom);

  const submitForm = (data) => {
    let queryString = `title=true&q=${data.search}`;

    switch (data.searchBy) {
      case 'tags':
        queryString = `tags=true&q=${data.search}`;
        break;
      case 'artistOrCulture':
        queryString = `artistOrCulture=true&q=${data.search}`;
        break;
    }

    //  Add to search history
    setSearchHistory((current) => [...current, queryString]);

    router.push(`/artwork?${queryString}`);
  };

  return (
    <>
      <h1>Advanced Search</h1>
      <Form onSubmit={handleSubmit(submitForm)}>
        <Form.Group className="mb-3">
          <Form.Label>Search Query</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter search term"
            {...register('search')}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Search By</Form.Label>
          <Form.Select {...register('searchBy')}>
            <option value="title">Title</option>
            <option value="tags">Tags</option>
            <option value="artistOrCulture">Artist or Culture</option>
          </Form.Select>
        </Form.Group>

        <Button type="submit">Search</Button>
      </Form>
    </>
  );
}

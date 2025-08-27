import { useAtom } from 'jotai';
import { searchHistoryAtom } from '../store';

import Link from 'next/link';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function MainNav() {
  const [, setSearchHistory] = useAtom(searchHistoryAtom);

  const [searchField, setSearchField] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    let query = `/artwork?title=true&q=${searchField}`;
    setSearchHistory((current) => [...current, `title=true&q=${searchField}`]);

    router.push(query);
    setIsExpanded(false);
  }

  return (
    <>
      <Navbar
        className="fixed-top bg-dark"
        variant="dark"
        expand="lg"
        expanded={isExpanded}
      >
        <Navbar.Brand className="text-white">Manas Gandotra</Navbar.Brand>
        <Navbar.Toggle onClick={() => setIsExpanded(!isExpanded)} />

        <Navbar.Collapse>
          <Nav className="me-auto">
            <Link href="/" passHref legacyBehavior>
              <Nav.Link
                onClick={() => setIsExpanded(false)}
                active={router.pathname === '/'}
              >
                Home
              </Nav.Link>
            </Link>
            <Link href="/search" passHref legacyBehavior>
              <Nav.Link
                onClick={() => setIsExpanded(false)}
                active={router.pathname === '/search'}
              >
                Advanced Search
              </Nav.Link>
            </Link>

            {/*  New Dropdown */}
            <Nav>
              <NavDropdown
                title="User Name"
                id="basic-nav-dropdown"
                active={
                  router.pathname === '/favourites' ||
                  router.pathname === '/history'
                }
              >
                <Link href="/favourites" passHref legacyBehavior>
                  <NavDropdown.Item onClick={() => setIsExpanded(false)}>
                    Favourites
                  </NavDropdown.Item>
                </Link>
                <Link href="/history" passHref legacyBehavior>
                  <NavDropdown.Item onClick={() => setIsExpanded(false)}>
                    Search History
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
            </Nav>
          </Nav>

          <Form className="d-flex" onSubmit={handleSubmit}>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              onChange={(e) => setSearchField(e.target.value)}
            />
            <Button
              style={{ backgroundColor: '#20c997', border: 'none' }}
              type="submit"
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <br />
      <br />
    </>
  );
}

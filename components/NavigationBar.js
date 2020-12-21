import Link from "next/link";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavigationBar() {
  return (
    <>
      <div id="nav-container">
        <Navbar bg="dark" expand="lg">
          <Link href="/" passHref>
            <Navbar.Brand href="/">
              <FontAwesomeIcon icon="home" /> Home
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle />

          <Navbar.Collapse>
            <Nav>
              <NavDropdown title="Signs" id="signs-drop">
                <Link href="/signs" passHref>
                  <NavDropdown.Item>All Signs</NavDropdown.Item>
                </Link>
                <Link href="/signs/split_letter_monogram" passHref>
                  <NavDropdown.Item>Split letter monogram</NavDropdown.Item>
                </Link>
                <Link href="/signs/parent_and_child" passHref>
                  <NavDropdown.Item>Parent & Child</NavDropdown.Item>
                </Link>
                <Link href="/signs/welcome" passHref>
                  <NavDropdown.Item>Welcome</NavDropdown.Item>
                </Link>
                <Link href="/signs/man_cave" passHref>
                  <NavDropdown.Item>Man Cave</NavDropdown.Item>
                </Link>
              </NavDropdown>

              <NavDropdown title="Wine" id="wine-drop">
                <Link href="/wine" passHref>
                  <NavDropdown.Item>Wine Acessories</NavDropdown.Item>
                </Link>
                <Link href="/wine/wine_holder" passHref>
                  <NavDropdown.Item>Wine Holders</NavDropdown.Item>
                </Link>
                <Link href="/wine/cheese_board" passHref>
                  <NavDropdown.Item>Cheese Boards</NavDropdown.Item>
                </Link>
              </NavDropdown>

              <NavDropdown title="Miscellaneous Crafts" id="misc-drop">
                <Link href="/misc" passHref>
                  <NavDropdown.Item>Miscellaneous</NavDropdown.Item>
                </Link>
                <Link href="/misc/cell_phone_holder" passHref>
                  <NavDropdown.Item>Cell Phone holders</NavDropdown.Item>
                </Link>
              </NavDropdown>

              <NavDropdown title="Christmas Ornaments" id="ornaments-drop">
                <Link href="/ornaments" passHref>
                  <NavDropdown.Item>All Ornaments</NavDropdown.Item>
                </Link>
                <Link href="/ornaments/2020_covid" passHref>
                  <NavDropdown.Item>2020 Covid</NavDropdown.Item>
                </Link>
                <Link href="/ornaments/2020_personalized" passHref>
                  <NavDropdown.Item>2020 Personalized</NavDropdown.Item>
                </Link>
                <Link href="/ornaments/joy" passHref>
                  <NavDropdown.Item>Joy</NavDropdown.Item>
                </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}

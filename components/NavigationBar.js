import Link from "next/link";
import { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Turn as Hamburger } from "hamburger-react";

export default function NavigationBar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div id="nav-container">
        <Navbar bg="dark" expand="lg">
          <Link href="/" passHref>
            <Navbar.Brand href="/">
              <FontAwesomeIcon icon="home" /> Home
            </Navbar.Brand>
          </Link>

          <Link href="/catalog" passHref>
            <Nav.Link>Catalog</Nav.Link>
          </Link>

          <Link href="/contact" passHref>
            <Nav.Link>Contact</Nav.Link>
          </Link>

          <Navbar.Toggle>
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              direction="right"
              color="white"
            />
          </Navbar.Toggle>

          <Navbar.Collapse>
            <Nav>
              <NavDropdown title="Signs" id="signs-drop">
                <Link href="/catalog/signs" passHref>
                  <NavDropdown.Item>All Signs</NavDropdown.Item>
                </Link>
                <Link href="/catalog/signs/monogram_shadow_box" passHref>
                  <NavDropdown.Item>Monogram Shadow Box</NavDropdown.Item>
                </Link>
                <Link href="/catalog/signs/split_letter_monogram" passHref>
                  <NavDropdown.Item>Split letter monogram</NavDropdown.Item>
                </Link>
                <Link href="/catalog/signs/parent_and_child" passHref>
                  <NavDropdown.Item>Parent & Child</NavDropdown.Item>
                </Link>
                <Link href="/catalog/signs/welcome" passHref>
                  <NavDropdown.Item>Welcome</NavDropdown.Item>
                </Link>
                <Link href="/catalog/signs/man_cave" passHref>
                  <NavDropdown.Item>Man Cave</NavDropdown.Item>
                </Link>
              </NavDropdown>

              <NavDropdown title="Wine" id="wine-drop">
                <Link href="/catalog/wine" passHref>
                  <NavDropdown.Item>Wine Acessories</NavDropdown.Item>
                </Link>
                <Link href="/catalog/wine/wine_bottle_holder" passHref>
                  <NavDropdown.Item>Wine Bottle holder</NavDropdown.Item>
                </Link>
                <Link href="/catalog/wine/cheese_board" passHref>
                  <NavDropdown.Item>Cheese Boards</NavDropdown.Item>
                </Link>
              </NavDropdown>

              <NavDropdown title="Miscellaneous Crafts" id="misc-drop">
                <Link href="/catalog/misc" passHref>
                  <NavDropdown.Item>Miscellaneous</NavDropdown.Item>
                </Link>
                <Link href="/catalog/misc/cell_phone_holder" passHref>
                  <NavDropdown.Item>Cell Phone holders</NavDropdown.Item>
                </Link>
                <Link href="/catalog/misc/air_plant_holder" passHref>
                  <NavDropdown.Item>Air Plant holder</NavDropdown.Item>
                </Link>
                <Link href="/catalog/misc/essential_oils_holder_5ml" passHref>
                  <NavDropdown.Item>
                    Essential Oils holder - 5ml
                  </NavDropdown.Item>
                </Link>
                <Link href="/catalog/misc/essential_oils_holder_15ml" passHref>
                  <NavDropdown.Item>
                    Essential Oils holder - 15ml
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>

              <NavDropdown title="Holidays" id="christmas-drop">
                <Link href="/catalog/christmas" passHref>
                  <NavDropdown.Item>All Holidays</NavDropdown.Item>
                </Link>
                <Link
                  href="/catalog/christmas/personalized_name_ornament"
                  passHref
                >
                  <NavDropdown.Item>
                    Personalized Name ornament
                  </NavDropdown.Item>
                </Link>
                <Link
                  href="/catalog/christmas/f_flake"
                  passHref
                >
                  <NavDropdown.Item>
                    F*** Flake
                  </NavDropdown.Item>
                </Link>

                <Link href="/catalog/christmas/2020_covid_ornament" passHref>
                  <NavDropdown.Item>2020 Covid ornament</NavDropdown.Item>
                </Link>
                <Link href="/catalog/christmas/custom_state_ornament" passHref>
                  <NavDropdown.Item>Custom state ornament</NavDropdown.Item>
                </Link>
                <Link
                  href="/catalog/christmas/diy_christmas_craft_kit"
                  passHref
                >
                  <NavDropdown.Item>DIY Christmas craft kit</NavDropdown.Item>
                </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}

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
              <FontAwesomeIcon icon="home" /> Catalog
            </Navbar.Brand>
          </Link>

          <Link href="/contact" passHref>
            <Nav.Link>
              <b>Contact</b>
            </Nav.Link>
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
                <Link href="/signs" passHref>
                  <NavDropdown.Item>Sign collection</NavDropdown.Item>
                </Link>
                <Link href="/signs/monogram_shadow_box" passHref>
                  <NavDropdown.Item>Monogram Shadow Box</NavDropdown.Item>
                </Link>
                <Link href="/signs/split_letter_monogram" passHref>
                  <NavDropdown.Item>Split letter monogram</NavDropdown.Item>
                </Link>
                <Link href="/signs/dual_name_sign" passHref>
                  <NavDropdown.Item>Dual Name Sign</NavDropdown.Item>
                </Link>
                <Link href="/signs/welcome_sign" passHref>
                  <NavDropdown.Item>Welcome Sign</NavDropdown.Item>
                </Link>
                <Link href="/signs/man_cave" passHref>
                  <NavDropdown.Item>Man Cave</NavDropdown.Item>
                </Link>
              </NavDropdown>

              <NavDropdown title="Wine" id="wine-drop">
                <Link href="/wine" passHref>
                  <NavDropdown.Item>Wine Acessories</NavDropdown.Item>
                </Link>
                <Link href="/wine/wine_bottle_holder" passHref>
                  <NavDropdown.Item>Wine Bottle holder</NavDropdown.Item>
                </Link>
                <Link href="/wine/cheese_board" passHref>
                  <NavDropdown.Item>Cheese Boards</NavDropdown.Item>
                </Link>
                <Link href="/wine/wine_cheese_combo" passHref>
                  <NavDropdown.Item>Wine & Cheese Combo</NavDropdown.Item>
                </Link>
              </NavDropdown>

              <NavDropdown title="Miscellaneous Crafts" id="misc-drop">
                <Link href="/misc" passHref>
                  <NavDropdown.Item>Miscellaneous</NavDropdown.Item>
                </Link>
                <Link href="/misc/cell_phone_holder" passHref>
                  <NavDropdown.Item>Cell Phone holders</NavDropdown.Item>
                </Link>
                <Link href="/misc/air_plant_holder" passHref>
                  <NavDropdown.Item>Air Plant holder</NavDropdown.Item>
                </Link>
                <Link href="/misc/essential_oils_holder_5ml" passHref>
                  <NavDropdown.Item>
                    Essential Oils holder - 5ml
                  </NavDropdown.Item>
                </Link>
                <Link href="/misc/essential_oils_holder_15ml" passHref>
                  <NavDropdown.Item>
                    Essential Oils holder - 15ml
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>

              <NavDropdown title="Valentines" id="valentines-drop">
                <Link href="/holidays/valentines" passHref>
                  <NavDropdown.Item>All Valentines items</NavDropdown.Item>
                </Link>
                <Link href="/holidays/valentines/mini_bottle_heart_stand" passHref>
                  <NavDropdown.Item>Mini Bottle Heart Stand</NavDropdown.Item>
                </Link>
              </NavDropdown>

              <NavDropdown title="Christmas" id="christmas-drop">
                <Link href="/holidays/christmas" passHref>
                  <NavDropdown.Item>All Christmas items</NavDropdown.Item>
                </Link>

                <Link
                  href="/holidays/christmas/personalized_name_ornament"
                  passHref
                >
                  <NavDropdown.Item>
                    Personalized Name ornament
                  </NavDropdown.Item>
                </Link>

                <Link
                  href="/holidays/christmas/personalized_name_ornament_single_layer"
                  passHref
                >
                  <NavDropdown.Item>
                    Personalized Name ornament single layer
                  </NavDropdown.Item>
                </Link>

                <Link href="/holidays/christmas/2020_covid_ornament" passHref>
                  <NavDropdown.Item>2020 Covid ornament</NavDropdown.Item>
                </Link>
                <Link href="/holidays/christmas/custom_state_ornament" passHref>
                  <NavDropdown.Item>Custom state ornament</NavDropdown.Item>
                </Link>
                <Link
                  href="/holidays/christmas/diy_christmas_craft_kit"
                  passHref
                >
                  <NavDropdown.Item>DIY Christmas craft kit</NavDropdown.Item>
                </Link>

                <Link href="/holidays/christmas/stain_glass_ornament" passHref>
                  <NavDropdown.Item>Stain glass ornament</NavDropdown.Item>
                </Link>
              </NavDropdown>

              <Link href="/custom_cornhole_board" passHref>
                <Nav.Link>Custom Cornhole Boards</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}

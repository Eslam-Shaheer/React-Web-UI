import { useForm } from "react-hook-form";
import Link from "./Link";
import styles from "./Nav.module.css";
import { Navbar, Nav } from "react-bootstrap";

export default function NavComponent() {
  const isAuthinticated = false;

  const userType = "admin";

  const checkIsAuthinticated = () => {
    return isAuthinticated == true;
  };

  const handleAuthHref = (isAuth) => {
    return isAuth == false ? "Sign in" : "Profile";
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/link">Link</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>

          {/* {isAuthinticated == true ? (
            <Nav.Link href="/profile">Profile</Nav.Link>
          ) : (
            <Nav.Link href="/login">Sign In</Nav.Link>
          )} */}

          {/* {isAuthinticated == false && (
            <Nav.Link href="/login">Sign In</Nav.Link>
          )} */}

          {/* {checkIsAuthinticated() ? (
            <Nav.Link href="/login">Profile</Nav.Link>
          ) : (
            <Nav.Link href="/login">Sign In</Nav.Link>
          )} */}

          {/* <Nav.Link href="/login">{handleAuthHref(isAuthinticated)}</Nav.Link> */}

          {/* {isAuthinticated ? (
            <Nav.Link href="/login">Profile</Nav.Link>
          ) : userType == "admin" ? (
            <Nav.Link href="/login">Dashboard</Nav.Link>
          ) : null} */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

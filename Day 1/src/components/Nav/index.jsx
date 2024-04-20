import Link from "./Link";
import "./Nav.css";

function Nav() {
  const className = "red";
  const styles = { color: "red", backgroundColor: "#000" };

  return (
    <>
      <Link title="Home" to="/home" />
      <Link title="About" to="/about" />
      <Link title="Contact" to="/contact" />
      <Link title="Profile" to="/profile" />
    </>
  );
}

export default Nav;

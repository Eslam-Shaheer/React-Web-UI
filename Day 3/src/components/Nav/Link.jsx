import Form from "react-bootstrap/Form";
import profilePic from "../../assets/tappy2.png";
import styles from "./Nav.module.css";

function Link({ title, to }) {
  return (
    <a className={styles.bgColor} href={to}>
      {title}
    </a>
    // <>
    //   <img style={{ width: 100 }} src={profilePic} alt="" />
    //   <Form.Label htmlFor="inputPassword5">Password</Form.Label>
    //   <Form.Control
    //     type="password"
    //     id="inputPassword5"
    //     aria-describedby="passwordHelpBlock"
    //   />
    //   <Form.Text id="passwordHelpBlock" muted>
    //     Your password must be 8-20 characters long, contain letters and numbers,
    //     and must not contain spaces, special characters, or emoji.
    //   </Form.Text>
    // </>
  );
}
export default Link;

import Form from "react-bootstrap/Form";
import profilePic from "../../assets/tappy2.png";
function Link(props) {
  console.log(props);

  return (
    // <a className="btn btn-primary" href={props.to}>
    //   {props.title}
    // </a>
    <>
      <img style={{ width: 100 }} src={profilePic} alt="" />
      <Form.Label htmlFor="inputPassword5">Password</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <Form.Text id="passwordHelpBlock" muted>
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </Form.Text>
    </>
  );
}
export default Link;

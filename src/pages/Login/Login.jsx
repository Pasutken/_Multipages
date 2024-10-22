import { useRef, useState } from "react";

import Form from "react-bootstrap/Form";

import { verifyUser } from "../../data/user";

import "./Login.css";

function Login({ setToken, setRole }) {
  const userRef = useRef();
  const passRef = useRef();
  const [isChecked, setIsChecked] = useState(false); // state สำหรับ checkbox

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // เปลี่ยนสถานะ checkbox
  };

  const handleLoginClick = () => {
    const user = userRef.current.value.trim();
    const pass = passRef.current.value.trim();
    userRef.current.value = "";
    passRef.current.value = "";

    if (!isChecked) {
      // ตรวจสอบว่า checkbox ถูกติ๊กหรือไม่
      alert("รบกวนติ๊กถูกก่อนเข้าชมนะครับ");
      userRef.current.focus();
      return; // ออกจากฟังก์ชันถ้าไม่ติ๊ก checkbox
    }

    const userInfo = verifyUser(user, pass);
    if (userInfo === null) {
      alert("Invalid username or password");
      userRef.current.focus();
    } else {
      setToken(userInfo.token);
      setRole(userInfo.role);
    }
  };

  return (
    <div className="login-container-wrapper">
      <h1 className="login-title" style={{ textAlign: "center" }}>
        Login
      </h1>
      <div className="login-container">
        <Form.Label htmlFor="username">Username</Form.Label>
        <Form.Control
          type="text"
          id="username"
          style={{ textAlign: "left" }}
          ref={userRef}
        />
        <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Control
          type="password"
          id="password"
          style={{ textAlign: "left" }}
          ref={passRef}
        />
        <Form.Group className="mt-3">
          <Form.Check
            type="checkbox"
            id="terms"
            label="พร้อมที่จะเข้าชมเว็ปไซต์ของผมแล้วหรือยังครับ"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </Form.Group>
        <button className="btn btn-success mt-3" onClick={handleLoginClick}>
          Login
        </button>
        <button
          className="btn btn-danger mt-3"
          style={{ marginLeft: "10px" }}
          onClick={() => {
            userRef.current.value = "";
            passRef.current.value = "";
            setIsChecked(false); // รีเซ็ตสถานะ checkbox
            userRef.current.focus();
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default Login;

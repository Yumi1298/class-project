import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const RegisterComponent = () => {
  const navigate = useNavigate();
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [role, setRole] = useState("");

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeRole = (e) => {
    setRole(e.target.value);
  };

  const handleRegister = () => {
    AuthService.register(username, email, password, role)
      .then(() => {
        window.alert("註冊成功。您現在將被導向到登入頁面");
        navigate("/login");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div style={{ padding: "3rem" }} className="col-md-12">
      <div>
        <div>
          <label htmlFor="username">用戶名稱:</label>
          <input
            onChange={handleChangeUsername}
            type="text"
            className="form-control"
            name="username"
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="email">電子信箱：</label>
          <input
            onChange={handleChangeEmail}
            type="text"
            className="form-control"
            name="email"
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="password">密碼：</label>
          <input
            onChange={handleChangePassword}
            type="password"
            className="form-control"
            name="password"
            placeholder="長度至少超過6個英文或數字"
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="password">身份：</label>
          {/* <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="role"
              value="student"
              onChange={handleChangeRole}
              checked
            />
            <label class="form-check-label" for="role">
              student
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="role"
              value="instructor"
              onChange={handleChangeRole}
            />
            <label class="form-check-label" for="role">
              instructor
            </label>
          </div> */}
          <input
            type="text"
            onChange={handleChangeRole}
            className="form-control"
            placeholder="只能填入student或是instructor這兩個選項其一"
            name="role"
          />
        </div>
        <br />
        <button onClick={handleRegister} className="btn btn-primary">
          <span>註冊會員</span>
        </button>
      </div>
    </div>
  );
};

export default RegisterComponent;

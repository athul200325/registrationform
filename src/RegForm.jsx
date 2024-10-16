import React, { useState } from "react";
import './RegForm.css'
import TextField from "@mui/material/TextField";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Radio,
  RadioGroup,
} from "@mui/material";

const RegForm = () => {
  const [nameV, setnameV] = useState('');
  const [genderV, setgenderV] = useState('');
  const [mailV, setmailV] = useState('');
  const [phnoV, setphnoV] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [pswrd, setPswrd] = useState('');
  const [dob, setDob] = useState('');

  const reSET = () => {
    setmailV('');
    setnameV('');
    setgenderV('');
    setphnoV('');
    setPswrd('');
    setDob('');
  };

  const handlechange = (e) => {
    e.preventDefault();
  
    reSET();
  };

  const emValidate = (mail) => {
    const emPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setIsEmailValid(emPattern.test(mail));
  };

  const ifValues = () => {
    if (nameV && genderV && mailV && phnoV) {
      alert(`Welcome ${nameV}`);
      return true;
    } else {
      alert("Please fill the fields first");
      return false;
    }
  };

  return (
    <>
      <div className="formbackground"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        
          padding: "20px",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <div
        className="form"
           style={{
            width: "450px",
            padding: "30px",
            
            borderRadius: "15px",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px",
              color: "black",
              fontWeight: "bold",
            }}
          >
            Register
          </h2>
          <form onSubmit={handlechange}>
            <div style={{ marginBottom: "15px" }}>
              <TextField
                onChange={(e) => setnameV(e.target.value)}
                fullWidth
                value={nameV}
                variant="outlined"
                label="Full Name"
                id="name"
                style={{ marginBottom: "15px" }}
                inputProps={{ style: { fontFamily: "'Poppins', sans-serif" } }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <TextField
                fullWidth
                variant="outlined"
                value={mailV}
                label="Email Address"
                id="email"
                type="email"
                style={{ marginBottom: "15px" }}
                onChange={(e) => {
                  setmailV(e.target.value);
                  emValidate(e.target.value);
                }}
                error={!isEmailValid && mailV !== ''}
                helperText={
                  !isEmailValid && mailV !== ''
                    ? '* Enter a valid Email'
                    : ''
                }
            
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <TextField
                fullWidth
                variant="outlined"
                value={phnoV}
                label="Phone Number"
                id="phone"
                type="tel"
                style={{ marginBottom: "15px" }}
                onChange={(e) => setphnoV(e.target.value)}
             
              />
            </div>
            {/*  */}
            <div style={{ marginBottom: "15px" }}>
              <label style={{ fontWeight: "bold" }}>Gender</label>
              <RadioGroup
                row
                aria-label="gender"
                value={genderV}
                name="gender"
                style={{ marginTop: "10px" }}
                onChange={(e) => setgenderV(e.target.value)}
              >
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </div>
            <div style={{ marginBottom: "15px" }}>
              <TextField
                fullWidth
                variant="outlined"
                value={dob}
                label="Date of Birth"
                id="dob"
                type="date"
                InputLabelProps={{ shrink: true }}
                onChange={(e) => setDob(e.target.value)}
                style={{ marginBottom: "15px" }}
                inputProps={{ style: { fontFamily: "'Poppins', sans-serif" } }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <TextField
                fullWidth
                variant="outlined"
                value={pswrd}
                label="Password"
                id="password"
                type="password"
                onChange={(e) => setPswrd(e.target.value)}
                style={{ marginBottom: "15px" }}
                inputProps={{ style: { fontFamily: "'Poppins', sans-serif" } }}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <FormControlLabel
                control={<Checkbox name="terms" color="" />}
                label={
                  <span style={{ fontFamily: "'Poppins', sans-serif" }}>
                    I agree to the{" "}
                    <a href="/term" style={{ color: "" }}>
                      terms and conditions
                    </a>
                  </span>
                }
              />
            </div>
            
            <Button
              type="submit"
              variant="contained"
              color=""
              fullWidth
              style={{ padding: "10px", backgroundColor:'rgb(252, 175, 10)', fontFamily: "'Poppins', sans-serif" }}
              onClick={(e) => {
                if (ifValues()) {
                  handlechange(e);
                }
              }}
              disabled={!isEmailValid}
            >
              Register
            </Button>
          </form>
        
        </div>
      </div>
    </>
  );
};

export default RegForm;

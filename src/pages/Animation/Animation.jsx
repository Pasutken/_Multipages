import React, { useState, useEffect } from "react";

import "./Animation.css";

const fieldWidth = 800;
const fieldHeight = 400;
const ballDiameter = 100;
const maxLeft = fieldWidth - ballDiameter;
const maxTop = fieldHeight - ballDiameter;
const vy = 10;
const vs = 6;

function BallControl() {
  const [running, setRunning] = useState(true);
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const [goRight, setGoRight] = useState(true);
  const [goDown, setGoDown] = useState(true);
  const [rotation, setRotation] = useState(0);
  const [ballStyle, setBallStyle] = useState({
    backgroundImage: `url(/images/basketball.png)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  });
  const [selectedBall, setSelectedBall] = useState("Basketball");

  useEffect(() => {
    if (running) {
      const interval = setInterval(() => {
        calculateMovement();
      }, 25);
      return () => clearInterval(interval);
    }
  }, [running, left, top, rotation]);

  const calculateMovement = () => {
    let newLeft = left;
    let newTop = top;
    let newGoRight = goRight;
    let newGoDown = goDown;
    let random = Math.floor(Math.random() * 10) + (2 % 360); // Random rotation

    // ตรวจสอบการเคลื่อนไหวแนวซ้ายขวา
    if (newGoRight) {
      newLeft += vs;
      if (newLeft > maxLeft) {
        newLeft = maxLeft;
        newGoRight = false; // เปลี่ยนทิศทางเมื่อชนขอบขวา
      }
    } else {
      newLeft -= vs;
      if (newLeft < 0) {
        newLeft = 0;
        newGoRight = true; // เปลี่ยนทิศทางเมื่อชนขอบซ้าย
      }
    }

    // ตรวจสอบการเคลื่อนไหวแนวขึ้นลง
    if (newGoDown) {
      newTop += vy;
      if (newTop > maxTop) {
        newTop = maxTop;
        newGoDown = false; // เปลี่ยนทิศทางเมื่อชนขอบล่าง
      }
    } else {
      newTop -= vy;
      if (newTop < 0) {
        newTop = 0;
        newGoDown = true; // เปลี่ยนทิศทางเมื่อชนขอบบน
      }
    }

    // ตั้งค่าตำแหน่งใหม่ของลูกบอล
    setLeft(newLeft);
    setTop(newTop);
    setGoRight(newGoRight);
    setGoDown(newGoDown);
    setRotation(rotation + random); // ปรับการหมุนแบบสุ่ม
  };

  const handleRunClick = () => {
    setRunning(!running);
  };

  const changeBall = (type) => {
    console.log(`Changing ball to: ${type}`);
    setSelectedBall(type); // Set the selected ball type
    switch (type) {
      case "None":
        setBallStyle({ background: "none", backgroundColor: "red" });
        break;
      case "Basketball":
        setBallStyle({
          backgroundImage: `url(/images/basketball.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        });
        break;
      case "Football":
        setBallStyle({
          backgroundImage: `url(/images/football.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        });
        break;
      case "Volleyball":
        setBallStyle({
          backgroundImage: `url(/images/volleyball.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        });
        break;
      case "Human":
        setBallStyle({
          backgroundImage: `url(/images/human.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        });
        break;
      case "Cartoon":
        setBallStyle({
          backgroundImage: `url(/images/cartoon.png)`,
          backgroundColor: "white",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        });
        break;
      case "Logo":
        setBallStyle({
          backgroundImage: `url(/images/logo.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="animation-container">
      <div id="container">
        <div id="field" style={{ width: fieldWidth, height: fieldHeight }}>
          <div
            id="ball"
            style={{
              ...ballStyle,
              left,
              top,
              transform: `rotate(${rotation}deg)`,
            }}
          />
        </div>
        <div className="button-container">
          <button
            className={
              (running ? "bi bi-pause " : "bi bi-play ") +
              "btn " +
              (running ? "btn-danger" : "btn-success")
            }
            onClick={handleRunClick}
          >
            &nbsp;{running ? "PAUSE" : "START"}{" "}
          </button>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <button
            className={`btn ${
              selectedBall === "None"
                ? "btn-secondary"
                : "btn-outline-secondary"
            }`}
            onClick={() => changeBall("None")}
          >
            None
          </button>
          <button
            className={`btn ${
              selectedBall === "Basketball"
                ? "btn-primary"
                : "btn-outline-primary"
            }`}
            onClick={() => changeBall("Basketball")}
          >
            Basketball
          </button>
          <button
            className={`btn ${
              selectedBall === "Football"
                ? "btn-primary"
                : "btn-outline-primary"
            }`}
            onClick={() => changeBall("Football")}
          >
            Football
          </button>
          <button
            className={`btn ${
              selectedBall === "Volleyball"
                ? "btn-primary"
                : "btn-outline-primary"
            }`}
            onClick={() => changeBall("Volleyball")}
          >
            Volleyball
          </button>
          <button
            className={`btn ${
              selectedBall === "Human" ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => changeBall("Human")}
          >
            Human
          </button>
          <button
            className={`btn ${
              selectedBall === "Cartoon" ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => changeBall("Cartoon")}
          >
            Cartoon
          </button>
          <button
            className={`btn ${
              selectedBall === "Logo" ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => changeBall("Logo")}
          >
            Logo
          </button>
        </div>
      </div>
    </div>
  );
}

export default BallControl;

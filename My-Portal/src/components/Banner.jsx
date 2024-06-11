/* eslint-disable react/no-unescaped-entities */
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import headerImg from "../assets/img/header-img.svg";
import { useState, useEffect } from "react";
// import spiderLogo from "../assets/img/spider-logo.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const period = 2000;
  const toRotate = ["Web Developer", "web Designer", "UI/UX Designer"];
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  });

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevData) => prevData / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi I'am wedecoded `}
                    <span className="wrap">{text} </span>{" "}
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident deserunt laudantium possimus ratione cum adipisci
                    rem perferendis molestias fugiat. Nobis dolorem quasi quos
                    dolor perspiciatis a inventore. Autem, iste tempore!
                  </p>
                  <button onClick={() => console.log("connect")}>
                    Let's connect
                    <i
                      className="bi bi-arrow-right-circle"
                      style={{ fontSize: "25px" }}
                    />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={5}>
            <img src={headerImg} alt="Header Img"></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

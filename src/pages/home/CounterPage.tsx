import { Col, Row } from "antd";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CounterPage = () => {
  const [counterState, setCounterState] = useState(false);
  return (    
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    <ScrollTrigger
      onEnter={() => setCounterState(true)}
      onExit={() => setCounterState(false)}
    >
      <Row
        justify="center"
        align="middle"
        style={{
          textAlign: "center",
          backgroundColor: "#EFF4FC",
          padding: "50px",
        }}
      >
        <Col xs={24} sm={6}>
          <h2 style={{ color: "#2F2EA6", fontSize: "50px" }}>
            {counterState && (
              <CountUp start={10} end={265} duration={2.75}></CountUp>
            )}
            k +
          </h2>
          <h4
            style={{
              padding: "10px 0",
            }}
          >
            Daily job posted
          </h4>
          <p
            style={{
              fontSize: "14px",
              padding: "0 10px",
            }}
          >
            We always provide people a complete solution upon focused of any
            business
          </p>
        </Col>
        <Col xs={24} sm={6}>
          <h2 style={{ color: "#2F2EA6", fontSize: "50px" }}>
            {counterState && (
              <CountUp start={7} end={177} duration={2.75}></CountUp>
            )}
            k +
          </h2>
          <h4
            style={{
              padding: "10px 0",
            }}
          >
            Skilled People
          </h4>
          <p
            style={{
              fontSize: "14px",
              padding: "0 10px",
            }}
          >
            We always provide people a complete solution upon focused of any
            business
          </p>
        </Col>
        <Col xs={24} sm={6}>
          <h2 style={{ color: "#2F2EA6", fontSize: "50px" }}>
            {counterState && (
              <CountUp start={12} end={286} duration={2.75}></CountUp>
            )}
            k +
          </h2>
          <h4
            style={{
              padding: "10px 0",
            }}
          >
            Recruiters
          </h4>
          <p
            style={{
              fontSize: "14px",
              padding: "0 10px",
            }}
          >
            We always provide people a complete solution upon focused of any
            business
          </p>
        </Col>
        <Col xs={24} sm={6}>
          <h2 style={{ color: "#2F2EA6", fontSize: "50px" }}>
            {counterState && (
              <CountUp start={6} end={280} duration={2.75}></CountUp>
            )}
            k +
          </h2>
          <h4
            style={{
              padding: "10px 0",
            }}
          >
            Happy Clients
          </h4>
          <p
            style={{
              fontSize: "14px",
              padding: "0 10px",
            }}
          >
            We always provide people a complete solution upon focused of any
            business
          </p>
        </Col>
      </Row>
    </ScrollTrigger>
  );
};

export default CounterPage;

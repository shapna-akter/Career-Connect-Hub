import { Col, Row } from "antd";
import company1 from '../../assets/company/b1.jpg';
import company2 from '../../assets/company/b2.jpg';
import company3 from '../../assets/company/b3.jpg';
import company4 from '../../assets/company/b4.jpg';
import company5 from '../../assets/company/b5.jpg';
import company6 from '../../assets/company/b6.jpg';

const TopCompany = () => {
  return (
    <div
      style={{
        padding: "20px",
        margin: "50px 0",
        textAlign: "center",
      }}
    >
      <div
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        style={{ textAlign: "center", marginBottom: "50px" }}
      >
        <h1
          style={{
            color: "#2F2EA6",
          }}
        >
          Top Companies Hiring at CareerConnect Now
        </h1>
        <p style={{ color: "#4C4C4C", fontSize: "14px", margin: "10px 0" }}>
          Hear what our clients have to say about their experience with our
          services.
        </p>
      </div>
      <Row
        justify="space-evenly"
        align="middle"
        data-aos="flip-up"
        data-aos-duration="1000"
      >
        <Col xs={24} sm={4}>
          <img
            style={{
              width: "50%",
            }}
            src={company1}
            alt="Image"
          />
        </Col>
        <Col xs={24} sm={4}>
          <img
            style={{
              width: "50%",
            }}
            src={company2}
            alt="Image"
          />
        </Col>
        <Col xs={24} sm={4}>
          <img
            style={{
              width: "50%",
            }}
            src={company3}
            alt="Image"
          />
        </Col>
        <Col xs={24} sm={4}>
          <img
            style={{
              width: "50%",
            }}
            src={company4}
            alt="Image"
          />
        </Col>
        <Col xs={24} sm={4}>
          <img
            style={{
              width: "50%",
            }}
            src={company5}
            alt="Image"
          />
        </Col>
        <Col xs={24} sm={4}>
          <img
            style={{
              width: "50%",
            }}
            src={company6}
            alt="Image"
          />
        </Col>
      </Row>
    </div>
  );
};

export default TopCompany;

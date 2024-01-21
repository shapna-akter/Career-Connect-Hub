import { Col, Row } from "antd";
import resume from "../../assets/f1.jpg";
import scoring from "../../assets/f2.jpg";
import help from "../../assets/f3.png";

const HowWorks = () => {
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
          How it works?
        </h1>
        <p style={{ color: "#4C4C4C", fontSize: "14px", margin: "10px 0" }}>
          Hear what our clients have to say about their experience with our
          services.
        </p>
      </div>
      <Row
        justify="space-evenly"
        align="middle"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Col xs={24} sm={6}>
          <img
            style={{
              width: "50%",
            }}
            src={resume}
            alt="Image"
          />
          <p
            style={{ fontSize: "18px", fontWeight: "bold", padding: "10px 0" }}
          >
            Free Resume Assessment
          </p>
          <p style={{ color: "#4C4C4C" }}>
            Employers on average spend 31 seconds scanning resumes to identify
            potential matches.
          </p>
        </Col>
        <Col xs={24} sm={6}>
          <img
            style={{
              width: "50%",
            }}
            src={scoring}
            alt="Image"
          />
          <p
            style={{ fontSize: "18px", fontWeight: "bold", padding: "10px 0" }}
          >
            Job Fit Scoring
          </p>
          <p style={{ color: "#4C4C4C" }}>
            Our new fit meter shows you which jobs are most relevant to your
            skills and interests.
          </p>
        </Col>
        <Col xs={24} sm={6}>
          <img
            style={{
              width: "50%",
            }}
            src={help}
            alt="Image"
          />
          <p
            style={{ fontSize: "18px", fontWeight: "bold", padding: "10px 0" }}
          >
            Help Every Step of the Way
          </p>
          <p style={{ color: "#4C4C4C" }}>
            Our career advice section is full of information to help you
            identify the right fit.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default HowWorks;

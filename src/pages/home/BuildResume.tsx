import { Button, Col, Row } from "antd";
import { Link } from "react-router-dom";
import resumeImg from "../../assets/resume.jpg";

const BuildResume = () => {
  return (
    <Row
      justify="space-between"
      align="middle"
      style={{
        padding: "20px",
        marginBottom: "50px",
      }}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <Col xs={24} sm={12}>
        <img
          style={{
            width: "100%",
          }}
          src={resumeImg}
          alt="Banner Image"
        />
      </Col>
      <Col xs={24} sm={8}>
        <h1
          style={{
            fontSize: "40px",
            color: "#2F2EA6",
          }}
        >
          Build a good <br /> resume
        </h1>
        <p
          style={{
            fontSize: "14px",
            padding: "30px 0",
          }}
        >
          An efficient resume should promote your abilities and include tangible
          accomplishments that are relevant to the job you apply for. You should
          also prepare a cover letter that is concise and elaborates on how you
          can put your skills to use in the organization.
        </p>
        <Link to="/edit-resume">
          <Button
            style={{
              display: "flex",
              alignItems: "center",
              padding: "1.5rem 2rem",
              borderRadius: "0.5rem",
              border: "none",
              background: "#1967d2",
              color: "white",
              fontSize: "1rem",
              letterSpacing: "2px",
            }}
          >
            Discover More
          </Button>
        </Link>
      </Col>
    </Row>
  );
};

export default BuildResume;

import { Button, Col, Flex, Row } from "antd";
import { Link } from "react-router-dom";
import interviewImg from "../../assets/interview.jpg";
import { SmileOutlined, ToolOutlined } from "@ant-design/icons";

const PerformInterview = () => {
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
      <Col xs={24} sm={8}>
        <h1
          style={{
            fontSize: "40px",
            color: "#2F2EA6",
          }}
        >
          Perform during your <br /> interview
        </h1>
        <div
          style={{
            margin: "30px 0",
          }}
        >
          <Flex
            gap="20px"
            style={{
              marginBottom: "30px",
            }}
          >
            <SmileOutlined
              style={{
                backgroundColor: "#FFEDF4",
                color: "#FF80CD",
                borderRadius: "50%",
                padding: "12px",
                cursor: "pointer",
                fontSize: "32px",
              }}
            />
            <div>
              <h4>Awesome design</h4>
              <p style={{ padding: "10px 0" }}>
                Duis aute irure dolor reprehen derit in volu velit.
              </p>
            </div>
          </Flex>
          <Flex gap="20px">
            <ToolOutlined
              style={{
                backgroundColor: "#D3F8F8",
                color: "#00d084",
                borderRadius: "50%",
                padding: "12px",
                cursor: "pointer",
                fontSize: "32px",
              }}
            />
            <div>
              <h4>Easy Customize</h4>
              <p style={{ padding: "10px 0" }}>
                Duis aute irure dolor reprehen derit in volu velit.
              </p>
            </div>
          </Flex>
        </div>
        <Link to="/find-job">
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
      <Col xs={24} sm={12}>
        <img
          style={{
            width: "100%",
          }}
          src={interviewImg}
          alt="Banner Image"
        />
      </Col>
    </Row>
  );
};

export default PerformInterview;

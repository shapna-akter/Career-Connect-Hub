import { Button, Col, Row } from "antd";
import searchJobImg from "../../assets/searchJob.jpg";
import { Link } from "react-router-dom";
import { CheckOutlined } from "@ant-design/icons";

const SearchJobs = () => {
  return (
      <Row
        justify="space-between"
        align="middle"
        style={{
          padding: "20px",
          margin: "50px 0",
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
            Search for <br /> jobs
          </h1>
          <p
            style={{
              fontSize: "14px",
              padding: "30px 0",
            }}
          >
            To start searching for jobs, you can attend job fairs online or in
            person, use job boards and career websites or reach out directly to
            recruiters in a targeted company to broaden your network.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              paddingBottom: "30px",
            }}
          >
            <p>
              {" "}
              <CheckOutlined /> Bring to the table win-win survival
            </p>
            <p>
              {" "}
              <CheckOutlined /> Capitalize on low hanging fruit to identify
            </p>
            <p>
              {" "}
              <CheckOutlined /> But I must explain to you how all this
            </p>
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
            src={searchJobImg}
            alt="Banner Image"
          />
        </Col>
      </Row>
  );
};

export default SearchJobs;

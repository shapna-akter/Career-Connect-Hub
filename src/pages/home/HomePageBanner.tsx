import { Button, Col, Row } from "antd";
import { useState } from "react";
import GlobalModal from "../../components/shared/GlobalModal";
import HomePageModal from "./homePageModal";
import homeImage from '../../assets/home.png';
import homeBG from '../../assets/homeBg.jpg';

const HomePageBanner = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Row
        justify="center"
        align="middle"
        style={{
          padding: "20px",
          color: "white",
          backgroundColor: "#123770",
          backgroundImage: `url(${homeBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Col xs={24} sm={12} data-aos="zoom-in-right" data-aos-duration="1000">
          <p>CareerConnect Hub FOR EMPLOYERS</p>
          <h1
            style={{
              fontSize: "40px",
              padding: "30px 0",
            }}
          >
            Find Your Perfect Job Match
          </h1>
          <p
            style={{
              fontSize: "18px",
              paddingBottom: "30px",
            }}
          >
            No matter the skills, experience, or qualifications you’re looking
            for, you’ll find the right people on CareerConnect Hub’s matching
            and hiring platform.
          </p>
          <Button
            onClick={() => setOpen(true)}
            size="large"
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
            Post a Job
          </Button>
        </Col>
        <Col xs={24} sm={12} data-aos="zoom-in-left" data-aos-duration="1000">
          <img
            style={{
              width: "100%",
            }}
            src={homeImage}
            alt="Banner Image"
          />
        </Col>
        <GlobalModal
          open={open}
          setOpen={setOpen}
          width={600}
          title={"Let's create your account"}
        >
          <div className="">
            <HomePageModal></HomePageModal>
          </div>
        </GlobalModal>
      </Row>
    </>
  );
};

export default HomePageBanner;

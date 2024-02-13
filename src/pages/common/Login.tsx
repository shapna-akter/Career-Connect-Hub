/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Flex, Row, message } from "antd";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import FormInput from "../../components/Form/FormInput";
import { useUserLoginMutation } from "../../redux/api/authApi";
import { storeUserInfo } from "../../services/auth.service";
import "./login.css";
import login from "../../assets/login.jpg";

type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [userLogin] = useUserLoginMutation();
  const navigate = useNavigate();

  const [scale, setScale] = useState(1);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const loginData = {
        email: data.email,
        password: data.password,
      };
      console.log(loginData);
      const res = await userLogin(loginData);
      console.log(res);

      //@ts-ignore
      if (res?.data?.data?.accessToken) {
        message.success("User logged in successfully!");
        //@ts-ignore
        if (res?.data?.data?.role === "admin") {
          console.log(res);
          navigate("/dashboard/company-chart");
        } //@ts-ignore
        else if (res?.data?.data?.role === "recruiter") {
          navigate("/dashboard/job/create");
        } else {
          navigate("/find-job");
        }
      } else {
        return message.error("Wrong credential!");
      }
      //@ts-ignore
      storeUserInfo({ accessToken: res?.data?.data?.accessToken });
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <>
      <Row
        justify="space-evenly"
        align="middle"
        style={{
          marginTop: "50px",
        }}
      >
        <Col sm={22} md={14} lg={8}>
          <img src={login} alt="" style={{ width: "100%" }} />
        </Col>
        <Col
          sm={22}
          md={14}
          lg={8}
          style={{
            padding: "50px",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
            width: "100%",
          }}
        >
          <h2
            style={{
              margin: "12px 0px",
              color: "#2F2EA6",
            }}
          >
            Ready to take the next step?
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#666",
              marginBottom: "1rem",
            }}
          >
            Create an account or sign in.
          </p>
          <div>
            <Form submitHandler={onSubmit}>
              <div style={{ width: "100%" }}>
                <h3
                  style={{
                    color: "gray",
                    fontSize: "14px",
                    marginBottom: "3px",
                  }}
                >
                  Email
                </h3>
                <FormInput name="email" type="email" size="large" />
              </div>
              <div
                style={{
                  margin: "15px 0px",
                  width: "100%",
                }}
              >
                <h3
                  style={{
                    color: "gray",
                    fontSize: "14px",
                    marginBottom: "10px",
                  }}
                >
                  Password
                </h3>
                <FormInput name="password" type="password" size="large" />
              </div>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#00A6E5",
                  fontSize: "1.2rem",
                  width: "100%",
                  transition: "transform 0.3s ease-in-out",
                  transform: `scale(${scale})`,
                }}
                onMouseEnter={() => setScale(1.03)}
                onMouseLeave={() => setScale(1)}
              >
                Login
              </Button>
            </Form>
          </div>
          <div
            style={{
              marginTop: "1rem",
              fontSize: "18px",
            }}
          >
            <p>
              Don't have an account!{" "}
              <Link to={"/register"}>
                <span>Register</span>
              </Link>
            </p>
          </div>
        </Col>
      </Row>
      <div
        style={{
          textAlign: "center",
          padding: "50px",
        }}
      >
        <h2>All User Login Info.</h2>
        <Flex wrap="wrap" justify="center" gap="20px">
          <div style={{ marginTop: "1rem" }}>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#666",
                margin: ".5rem 0",
                fontWeight: "bold",
              }}
            >
              Admin
            </p>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#666",
                margin: ".2rem 0",
              }}
            >
              Email: admin@careerconnect.com
            </p>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#666",
              }}
            >
              password: admin124
            </p>
          </div>
          <div style={{ marginTop: "1.2rem" }}>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#666",
                margin: ".5rem 0",
                fontWeight: "bold",
              }}
            >
              Applicant
            </p>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#666",
                margin: ".2rem 0",
              }}
            >
              Email: applicant@gmail.com
            </p>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#666",
              }}
            >
              password: applicant98765
            </p>
          </div>
          <div style={{ marginTop: "1.2rem" }}>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#666",
                margin: ".5rem 0",
                fontWeight: "bold",
              }}
            >
              Company
            </p>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#666",
                margin: ".2rem 0",
              }}
            >
              Email: contact@abccompany.com
            </p>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#666",
              }}
            >
              password: 0987Api
            </p>
          </div>
        </Flex>
      </div>
    </>
  );
};

export default LoginPage;

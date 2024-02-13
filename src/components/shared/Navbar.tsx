/* eslint-disable @typescript-eslint/no-explicit-any */
import logo from "../../assets/logo-blue1.png";

import {
  CloseOutlined,
  LogoutOutlined,
  MenuOutlined,
  QuestionCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Divider,
  Drawer,
  Dropdown,
  Menu,
  MenuProps,
  Space,
} from "antd";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUserInfo, removeUserInfo } from "../../services/auth.service";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
  const { role, accessToken } = getUserInfo() as any;
  console.log(accessToken);

  const handleLogout = (accessToken: string) => {
    removeUserInfo(accessToken);
    return navigate("/login");
  };

  const items: MenuProps["items"] = [];

  if (role === "applicant") {
    items.push(
      {
        key: "1",
        label: <Link to={`/user-profile`}>MyProfile</Link>,
      },
      {
        key: "2",
        label: <Link to={`/edit-resume`}>Edit Resume</Link>,
      },
      {
        key: "3",
        label: <Link to={`/my-application`}>My Application</Link>,
      }
    );
  }

  return (
    <div>
      <div
        style={{
          height: "4rem",
          padding: "0rem 1rem",
        }}
        className="menuIcon"
      >
        <MenuOutlined
          style={{ color: "#2F2EA6", fontSize: "30px" }}
          onClick={() => {
            setOpenMenu(true);
          }}
        />
      </div>
      <div
        className="headerMenu"
        style={{
          backgroundColor: "white",
          height: "4rem",
          padding: "0rem 1rem",
          width: "100%",
        }}
      >
        <Link to="/">
          {" "}
          <img
            src={logo}
            alt="Logo"
            width={200}
            style={{ marginRight: "10px", height: "80px" }}
          />
        </Link>
        <NavMenu />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            to="/career-services"
            style={{
              color: "#2F2EA6",
              fontSize: "0.9rem",
              fontWeight: "bold",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "7rem",
            }}
          >
            <p>Help Center</p>
            <QuestionCircleOutlined
              style={{
                fontWeight: "bolder",
                fontSize: "1.2rem",
                marginLeft: "0.4rem",
              }}
            />
          </Link>
          <Divider
            type="vertical"
            style={{
              backgroundColor: "#949494",
              height: "2rem",
              margin: "0 1.5rem",
            }}
          />

          <Link
            to="/find-job"
            style={{
              color: "#2F2EA6",
              fontSize: "0.9rem",
              fontWeight: "bold",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "7rem",
            }}
          >
            Find jobs
          </Link>
          <Divider
            type="vertical"
            style={{
              backgroundColor: "#949494",
              height: "2rem",
              margin: "0 1.5rem",
            }}
          />
          {role ? (
            <Button
              onClick={() => handleLogout("accessToken")}
              size="large"
              type="primary"
              style={{
                fontSize: "1rem",
                fontWeight: "bold",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Log out
            </Button>
          ) : (
            <Link
              to={"/login"}
              style={{
                cursor: "pointer",
              }}
            >
              <button
                style={{
                  backgroundColor: "#2557a7",
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  padding: "0.6rem 1rem",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Login
              </button>
            </Link>
          )}
        </div>
        {role === "applicant" && (
          <>
            <Divider
              type="vertical"
              style={{
                backgroundColor: "#949494",
                height: "2rem",
                margin: "0 1.5rem",
              }}
            />
            <Space size={16} wrap>
              <Dropdown menu={{ items }}>
                <Space wrap size={16}>
                  <Avatar
                    style={{ backgroundColor: "#87d068" }}
                    icon={<UserOutlined />}
                  />
                </Space>
              </Dropdown>
            </Space>
          </>
        )}
      </div>
      <Drawer
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        closable={false}
        style={{
          backgroundColor: "rgba(47, 46, 166, 0.9)",
          padding: "1rem",
          textAlign: "center",
        }}
      >
        <Button
          type="text"
          icon={<CloseOutlined style={{ color: "#fff", fontSize: "1.5rem" }} />}
          onClick={() => setOpenMenu(false)}
          style={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
        />

        <NavMenu isInline />
        <Divider style={{ margin: "1rem 0", background: "#fff" }} />

        {role ? (
          <Button
            onClick={() => handleLogout("accessToken")}
            size="large"
            type="primary"
            danger
            icon={<LogoutOutlined />}
            style={{
              width: "100%",
              marginTop: "1rem",
            }}
          >
            Log out
          </Button>
        ) : (
          <Link to={"/login"} style={{ cursor: "pointer" }}>
            <Button
              size="large"
              type="primary"
              style={{
                width: "100%",
                backgroundColor: "#2557a7",
                border: "none",
                marginTop: "1rem",
              }}
            >
              Login
            </Button>
          </Link>
        )}
      </Drawer>
      ;
    </div>
  );
};

const NavMenu = ({ isInline = false }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Menu
        style={{
          color: "#2F2EA6",
          fontSize: "0.9rem",
          fontWeight: "bold",
        }}
        mode={isInline ? "inline" : "horizontal"}
        className="custom-menu"
        items={[
          {
            label: (
              <Link to="/" rel="noopener noreferrer">
                Home
              </Link>
            ),
            key: "home",
          },
          {
            label: (
              <Link to="/contact" rel="noopener noreferrer">
                Contact
              </Link>
            ),
            key: "contact",
          },
          {
            label: (
              <Link to="/blog" rel="noopener noreferrer">
                Blog
              </Link>
            ),
            key: "blog",
          },
        ]}
      ></Menu>
    </div>
  );
};

export default NavBar;

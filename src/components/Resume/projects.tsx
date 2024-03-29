/* eslint-disable @typescript-eslint/no-explicit-any */

import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Flex, Row, message } from "antd";
import { useState } from "react";
import {
  useDeleteProjectMutation,
  useProjectsQuery,
} from "../../redux/api/projectApi";
import { getUserInfo } from "../../services/auth.service";
import ProjectModal from "../ResumeModal/ProjectModal";
import UpdateProjectModal from "../ResumeModal/UpdateProjectModal";
import GlobalModal from "../shared/GlobalModal";

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const query: Record<string, any> = {};
  const { data } = useProjectsQuery({ ...query });
  const projectData = data?.data;
  const [deleteProject] = useDeleteProjectMutation();

  const { email } = getUserInfo() as any;

  const deleteHandler = async (id: string) => {
    message.loading("Deleting.....");
    try {
      const res = await deleteProject(id);
      if (res) {
        message.success("Education deleted successfully");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  const handleEditClick = (id: string) => {
    setSelectedId(id);
    setEditModalOpen(true);
  };

  const filteredByEmail = projectData?.filter(
    (item: any) => item.userEmail === email
  );

  return (
    <>
      <Row
        style={{
          borderBottom: "1px solid black",
          padding: "10px 0",
        }}
      >
        <Col xs={24} sm={8}>
          <p>PROJECT</p>
        </Col>
        <Col xs={24} sm={16}>
          <Col>
            {filteredByEmail?.map((project: any) => (
              <Flex
                wrap="wrap"
                gap="middle"
                justify="space-between"
                align="start"
                key={project._id}
              >
                <div style={{ padding: "5px 0" }}>
                  <h4>{project?.title}</h4>
                  <p>{project?.projectLink}</p>
                  <p>
                    {project?.startYear} - {project?.endYear}
                  </p>
                </div>
                <Flex wrap="wrap" gap="middle" justify="end" align="center">
                  <Button onClick={() => handleEditClick(project._id)}>
                    <EditOutlined />
                  </Button>
                  <Button onClick={() => deleteHandler(project?._id)}>
                    <DeleteOutlined />
                  </Button>
                </Flex>
              </Flex>
            ))}
          </Col>
          <div>
            <Button type="link" onClick={() => setOpen(true)}>
              <PlusOutlined />
              Add Project
            </Button>
          </div>
          <GlobalModal open={open} setOpen={setOpen} width={650} title={""}>
            <ProjectModal />
          </GlobalModal>
          <GlobalModal
            open={editModalOpen}
            setOpen={() => {
              setEditModalOpen(false);
              setSelectedId(null);
            }}
            width={650}
            title={""}
          >
            {/* Pass the selected ID */}
            <UpdateProjectModal id={selectedId} />
          </GlobalModal>
        </Col>
      </Row>
    </>
  );
};

export default Projects;

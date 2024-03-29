/* eslint-disable @typescript-eslint/no-explicit-any */

import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Flex, Row, message } from "antd";
import { useState } from "react";
import {
  useDeleteTrainingMutation,
  useTrainingsQuery,
} from "../../redux/api/trainingApi";
import { getUserInfo } from "../../services/auth.service";
import { ITraining } from "../../types";
import TrainingModal from "../ResumeModal/TrainingModal";
import UpdateTrainingModal from "../ResumeModal/UpdateTrainingModal";
import GlobalModal from "../shared/GlobalModal";

const Training = () => {
  const [open, setOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const query: Record<string, any> = {};
  const { data } = useTrainingsQuery({ ...query });
  const trainingData = data?.data;
  const [deleteTraining] = useDeleteTrainingMutation();

  const { email } = getUserInfo() as any;

  const deleteHandler = async (id: string) => {
    message.loading("Deleting.....");
    try {
      const res = await deleteTraining(id);
      if (res) {
        message.success("Work Experience deleted successfully");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  const handleEditClick = (id: string) => {
    setSelectedId(id);
    setEditModalOpen(true);
  };

  const filteredByEmail = trainingData?.filter(
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
          <p>TRAININGS/ COURSES</p>
        </Col>
        <Col xs={24} sm={16}>
          <Col>
            {filteredByEmail?.map((training: ITraining) => (
              <Flex
                wrap="wrap"
                gap="middle"
                justify="space-between"
                align="start"
                key={training._id}
              >
                <div style={{ padding: "5px 0" }}>
                  <h4>{training?.title}</h4>
                  <p>
                    {training?.startDate} - {training?.endDate}
                  </p>
                </div>
                <Flex wrap="wrap" gap="middle" justify="end" align="center">
                  <Button onClick={() => handleEditClick(training._id)}>
                    <EditOutlined />
                  </Button>
                  <Button onClick={() => deleteHandler(training?._id)}>
                    <DeleteOutlined />
                  </Button>
                </Flex>
              </Flex>
            ))}
          </Col>
          <div>
            <Button type="link" onClick={() => setOpen(true)}>
              <PlusOutlined />
              Add training/ course
            </Button>
          </div>
          <GlobalModal open={open} setOpen={setOpen} width={650} title={""}>
            <TrainingModal />
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
            <UpdateTrainingModal id={selectedId} />
          </GlobalModal>
        </Col>
      </Row>
    </>
  );
};

export default Training;

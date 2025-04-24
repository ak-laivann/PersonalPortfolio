import { Tabs, Card, Row, Col } from "antd";
import { RocketTwoTone, CodeTwoTone } from "@ant-design/icons";
import { experience } from "../props";

const CustomSpan = ({ children }: { children: string }) => (
  <span style={{ fontSize: "25px", color: "white", fontFamily: "Rajdhani" }}>
    {children}
  </span>
);

export const Experience = ({ values }: { values: experience[] }) => {
  const items = [
    {
      key: "Mechanical Engineering",
      label: (
        <span>
          <RocketTwoTone
            style={{ marginRight: 8, fontSize: "20px" }}
            twoToneColor={"blue"}
          />
          <CustomSpan children="Mechanical Engineering" />
        </span>
      ),
    },
    {
      key: "Information Technology",
      label: (
        <span>
          <CodeTwoTone
            style={{ marginRight: 8, fontSize: "20px" }}
            twoToneColor={"red"}
          />
          <CustomSpan children="Information Technology" />
        </span>
      ),
    },
  ];

  return (
    <Tabs
      centered
      items={items.map((item) => ({
        key: item.key,
        label: item.label,
        children: (
          <div>
            <Row gutter={[8, 24]}>
              {values
                .filter((exp) => exp.domain === item.key)
                .map((exp, index) => (
                  <Col span={8}>
                    <Card
                      key={index}
                      title={exp.companyName}
                      style={{
                        marginBottom: "16px",
                        borderRadius: "8px",
                        backgroundColor: "#f0f2f5",
                      }}
                    >
                      <p>
                        <strong>Designation:</strong> {exp.designation}
                      </p>
                      <p>
                        <strong>Type:</strong> {exp.type}
                      </p>
                      <p>
                        <strong>Responsibilities:</strong>{" "}
                        {exp.responsibilities}
                      </p>
                      <p>
                        <strong>Duration:</strong> {exp.start} - {exp.end} (
                        {exp.experienceInMonths} months)
                      </p>
                    </Card>
                  </Col>
                ))}
            </Row>
          </div>
        ),
      }))}
    />
  );
};

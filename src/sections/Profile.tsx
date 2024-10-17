import { Typography } from "antd";

export const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-image" />
      <div className="animatethisfont">Hi, I am Anantha Krishnan G! &nbsp;</div>
      <Typography.Paragraph className="paragraphStyle">
        I am a highly motivated Engineering aspirant with demonstrated ability
        to learn and apply in new technical areas, work collaboratively in a
        team environment, good communication and make original contributions to
        engineering sciences. A passionate engineer with a unique blend of
        expertise in software development and mechanical engineering.
      </Typography.Paragraph>
      <Typography.Paragraph className="paragraphStyle">
        With over 2 years of experience across various industries, my journey
        spans working with technologies like ReactJS, NodeJS, MongoDB, AWS, GCP,
        Azure as well as mechanical concepts like lean engineering, hydraulics
        and pneumatics, industrial safety, etc.
      </Typography.Paragraph>
      <Typography.Paragraph className="paragraphStyle">
        Throughout my career, I’ve been focused on growing my skill set,
        exploring the intersections between technology and the physical world.
        Whether working on automation, software, or mechanical projects, I
        always strive to bring a fresh perspective and a dedication to
        excellence
      </Typography.Paragraph>
    </div>
  );
};

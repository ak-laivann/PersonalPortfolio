import React, { useState } from "react";
import {
  UserOutlined,
  CustomerServiceTwoTone,
  ReconciliationTwoTone,
  ScheduleTwoTone,
  CodeTwoTone,
  ApiTwoTone,
} from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import { AntdIconProps } from "@ant-design/icons/lib/components/AntdIcon";

type MenuItem = Required<MenuProps>["items"][number];

const CustomIcon = (props: {
  icon: React.ForwardRefExoticComponent<
    Omit<AntdIconProps, "ref"> & React.RefAttributes<HTMLSpanElement>
  >;
  color?: string;
}) => {
  return (
    <props.icon
      style={{ fontSize: "25px", color: props.color }}
      twoToneColor={props.color}
    />
  );
};

const items: MenuItem[] = [
  {
    label: "Profile",
    key: "profile",
    icon: <CustomIcon icon={UserOutlined} color="#d1e0e0" />,
  },
  {
    label: "Experience",
    key: "experience",
    icon: <CustomIcon icon={ApiTwoTone} color="#fcba03" />,
  },
  {
    label: "Projects",
    key: "projects",
    icon: <CustomIcon icon={CodeTwoTone} color="#fc4903" />,
  },
  {
    label: "Skills",
    key: "skills",
    icon: <CustomIcon icon={ScheduleTwoTone} color="#7bfc03" />,
  },
  {
    label: "Certifications",
    key: "certifications",
    icon: <CustomIcon icon={ReconciliationTwoTone} color="#fc03ad" />,
  },
  {
    label: "Contact",
    key: "contact",
    icon: <CustomIcon icon={CustomerServiceTwoTone} color="#f50" />,
  },
];

export const Navbar = () => {
  const [current, setCurrent] = useState("profile");

  return (
    <Menu
      className="sticky-navbar"
      onClick={(e) => {
        setCurrent(e.key);
      }}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      style={{
        background: "transparent",
        border: "none",
        opacity: 0.8,
        fontSize: "25px",
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
        color: "#d1e0e0",
      }}
    />
  );
};

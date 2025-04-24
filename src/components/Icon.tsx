import { AntdIconProps } from "@ant-design/icons/lib/components/AntdIcon";

export const CustomIcon = (props: {
  icon: React.ForwardRefExoticComponent<
    Omit<AntdIconProps, "ref"> & React.RefAttributes<HTMLSpanElement>
  >;
  color?: string;
  fontSize?: string;
}) => {
  return (
    <props.icon
      style={{ fontSize: props.fontSize ?? "25px", color: props.color }}
      twoToneColor={props.color}
    />
  );
};

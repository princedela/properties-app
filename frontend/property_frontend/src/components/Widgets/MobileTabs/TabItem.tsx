import { MouseEventHandler } from "react";

type TabItemProps = {
  Icon: any;
  text: string;
  classes?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
};
export default function TabItem({
  Icon,
  onClick = () => {},
  text = "",
  classes = "",
}: TabItemProps) {
  return (
    <div className={`tab-item ${classes}`} onClick={onClick}>
      <Icon className="icon" />
      {/* <span className="text">{text} </span> */}
    </div>
  );
}

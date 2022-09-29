import { PropsWithChildren } from "react";
import "./SideBar.css";

export interface SideBarProps extends PropsWithChildren {}
const SideBar: React.FC<SideBarProps> = ({ children }) => {
  return <aside>{children}</aside>;
};
export default SideBar;

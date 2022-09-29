import { PropsWithChildren } from "react";
import "./MainContent.css";

export interface MainContentProps {}
const MainContent: React.FC<MainContentProps & PropsWithChildren> = ({
  children,
}) => {
  return <main>{children}</main>;
};
export default MainContent;

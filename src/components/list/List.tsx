import { PropsWithChildren, useState } from "react";
import "./List.css";

export interface ListProps extends PropsWithChildren {}
const List: React.FC<ListProps> = ({ children }) => {
  return <ul>{children}</ul>;
};
export default List;

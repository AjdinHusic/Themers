import { useState } from "react";
import Slider from "../components/inputs/slider/Slider";
import List from "../components/list/List";

export interface ListPageProps {}
const ListPage: React.FC<ListPageProps> = ({}) => {
  const [borderSize, setBorderSize] = useState(1);

  const style = `
    ul {
        border: ${borderSize}px solid gray;
        border-radius: 4px;
        padding: 6px;
        width: fit-content;
        min-width: 200px;
        max-width: 200px;
        list-style-type: none;
    }

    ul li {
        margin: 6px;
    }
  `;

  return (
    <>
      <style>{style}</style>
      <div className="card">
        <List>
          <li>item 1</li>
          <li>item 2</li>
        </List>
      </div>
      <div className="card">
        <pre>
          <code>{style}</code>
        </pre>
      </div>
      <div className="card">
        <Slider
          min={1}
          max={6}
          value={borderSize}
          onChange={(val) => setBorderSize(val)}
        />
      </div>
    </>
  );
};
export default ListPage;

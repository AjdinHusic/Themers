import { Outlet, ReactLocation, Router } from "@tanstack/react-location";
import { useState } from "react";
import MainContent from "./components/layout/MainContent";
import List from "./components/list/List";
import SideBar from "./components/SideBar";
import ListPage from "./pages/ListPage";

const location = new ReactLocation();

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router
      location={location}
      routes={[
        { path: "/", element: "Home on the range" },
        { path: "/button", element: <button>test</button> },
        { path: "/list", element: <ListPage /> },
      ]}
    >
      <SideBar>
        <List>
          <li>layout</li>
          <li>list</li>
          <li>button</li>
          <li>card</li>
        </List>
      </SideBar>
      <MainContent>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
        </div>
        <h1>Themers</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <Outlet />
      </MainContent>
    </Router>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { Button, ConfigProvider, Flex } from "antd";
import Login from "./components/login/login";
import "./customTheme.less";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/signup/signup";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#7E33E0",
          borderRadius: 2,
        },
      }}
    >
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ConfigProvider>
  );
}

export default App;

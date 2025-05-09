import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

const { Header, Content, Footer, Sider } = Layout;

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Exchange from "./components/Exchange";
import CryptoDetails from "./components/Cryptodetail";
import "./App.css";
import Currency from "./components/Currency";
import Extraline from "./components/Extraline";
import News from "./components/News";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
            <Route path="/" element={<Extraline />} />
              <Route path="/home" element={<Home />} />
              <Route path="/exchanges" element={<Exchange />} />
              <Route path="/currency" element={<Currency />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
              
            </Routes>
          </div>
        </Layout>
      
        <Footer
          style={{
            textAlign: 'center',
            
          }}
        >
          <br />
        <br />
          <div  >
            <Link style={{ color: "black" , margin:'10px',fontWeight:'600'}}  to="/home">
              Home
            </Link>
            
            <Link style={{ color: "black" ,margin:'10px',fontWeight:'600'}} to="/exchanges">
              Exchanges
            </Link>
            <Link style={{ color: "black",margin:'10px',fontWeight:'600' }} to="/news">
              News
            </Link>
          </div>
        </Footer>
      </div>
    </div>
  );
};

export default App;
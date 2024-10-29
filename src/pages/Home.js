// src/Home.js
import React from 'react';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <div>
      <Helmet>
        <meta name="msvalidate.01" content="C9FD1D91330EE896AC7D11D096292318" />
        <title>Your Home Page Title1</title>
        {/* 其他头部标签可以在这里添加 */}
      </Helmet>
      <h1>Welcome to the Home Page1</h1>
      {/* 主页内容 */}
    </div>
  );
}

export default Home;


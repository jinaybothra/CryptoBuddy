import React from 'react';
import { Spin } from 'antd';

const Loading = () => (
  <div className="loader" >
    <Spin />
    <Spin />
    <Spin /> 
  </div>
);

export default Loading;
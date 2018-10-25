import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

//必须要写这一句
ReactDOM.render(
  //App是一个组件
  <App />,
  //第二个参数必须是一个dom元素
  document.getElementById('root')
);

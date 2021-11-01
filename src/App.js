import React from "react";
import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';

const appStyles = {
  display: 'grid',
  gridTemplateRows: 'min-content auto min-content'
};

export default function App() {
  return (
    <div style={appStyles}>
      <Header />
      <Main />
    </div>
  );
}


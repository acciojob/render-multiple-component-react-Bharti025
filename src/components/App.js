import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
   const projects = [
    {
      name: "AI Healthcare Assistant",
      description: "An AI-powered assistant to help doctors with diagnosis and treatment recommendations."
    },
    {
      name: "Smart Farming App",
      description: "A mobile app that uses IoT and machine learning to optimize agricultural productivity."
    }
  ];

  return (
    <div id="main" className="ns-wrapper">
      {projects.map((project,index)=>(
        <div>
      <h1 data-ns-test="project-name">{project.name}</h1>
      <h6 data-ns-test="project-description">{project.description}</h6>
      </div>
      ))}
    </div>
  )
}


export default App;

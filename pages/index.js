import React from 'react'
import App from '../src/App';

function isRunningOnServerSide() {
  return typeof(window) === "undefined";
};

function isRunningOnClientSide() {
  return typeof(window) !== "undefined";
};

const Home = () => (
  <div>
    test
  </div>
)

export default Home

// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );  test
import React from "react";
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>jjjj</h1>
        <h2>2222</h2>
        <h2>这里是测试react应用的demo</h2>
        <h4>{this.props.date.toLocaleString()}</h4>
      </div>
    );
  }
}

export default App;

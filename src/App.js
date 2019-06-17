// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <li>
//           Edit <code>src/App.js</code> and save to reload.
//         </li>
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
    const i = 1;
    const myInlineStyle = {
      fontSize: 20,
      color: "#f00"
    };
    const arr = ["<h5>菜鸟教程<h5>", "<h5>学的不仅是技术，更是梦想！</h5>"];
    return (
      <div>
        <h1>react 元素</h1>
        <h4>本地时间：{this.props.date.toLocaleString()}</h4>
        <ol>
          <li>
            自定义属性使用：<span data-attr="someValue">这里使用了自定义属性data-attr</span>
          </li>
          <li>表达式使用：{1 + 1}</li>
          <li>
            三元运算符使用：<span>{i === 1 ? "i===1" : "i!==1"}</span>
          </li>
          <li>
            react推荐使用内联样式：
            <p style={myInlineStyle}>这里使用了内联样式-引入变量</p>
            <p style={{fontSize:20,color:'0f0'}}>这里使用了内联样式-直接定义【要用两个花括号】</p>
          </li>
          <li>
            这里是注释的使用：注释必须包含在“花括号{}”中，而且只能用/**/，不能用两个斜线//
            {/*这里是注释*/}
          </li>
          <li>
            在jsx中插入数组：
            {arr}
          </li>
        </ol>
      </div>
    );
  }
}

export default App;

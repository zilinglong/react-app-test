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
import propTypes from "prop-types";
import axios from "axios";
class Name extends React.Component {
  render() {
    return <p>这里显示的是Name:{this.props.name}</p>;
  }
}
class NickName extends React.Component {
  render() {
    return <p>这里显示的是昵称：{this.props.nickname}</p>;
  }
}
class Url extends React.Component {
  render() {
    return <p>这里显示的是URL：{this.props.url}</p>;
  }
}
class FormattedDate extends React.Component {
  render() {
    return <p>{this.props.date.toLocaleString()}</p>;
  }
}
class Link extends React.Component {
  render() {
    return <a href={this.props.link}>{this.props.link}</a>;
  }
}
class Website extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "菜鸟教程",
      link: "http://www.runoob.com"
    };
  }
  render() {
    return (
      <div>
        <Name name={this.state.name} />
        <Link link={this.state.link} />
      </div>
    );
  }
}
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div>
        <p>现在时间是：{this.state.date.toLocaleString()}</p>
        调用格式化组件：<FormattedDate date={this.state.date} />
      </div>
    );
  }
}
class Toggle extends React.Component {
  constructor() {
    super();
    this.state = {
      isToggleOn: true
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          点击改变按钮的状态:{this.state.isToggleOn ? "ON" : "OFF"}
        </button>
      </div>
    );
  }
}
class Popper extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "hello world"
    };
  }
  preventPop(name, e) {
    e.preventDefault();
    console.log("name:", name);
  }
  render() {
    return (
      <div>
        <p>hello</p>
        <div>
          <a
            href="http://www.baidu.com"
            onClick={this.preventPop.bind(this, this.state.name)}
          >
            点击链接1：一种使用方式(this.preventPop.bind(this, this.state.name))
          </a>
        </div>
        <div>
          <a
            href="http://www.baidu.com"
            onClick={e => this.preventPop(this.state.name, e)}
          >
            点击链接2：另一种使用方式(e =>this.preventPop(this.state.name, e))
          </a>
        </div>
      </div>
    );
  }
}
const title = "菜鸟教程";
// const title = 123;
class MyTitle extends React.Component {
  render() {
    return <p>{this.props.title}</p>;
  }
}
MyTitle.propTypes = {
  title: propTypes.string
};
class User extends React.Component {
  render() {
    return <h5>欢迎回来</h5>;
  }
}
class Guest extends React.Component {
  render() {
    return <h5>请先注册</h5>;
  }
}
class Greeting extends React.Component {
  render() {
    let isLogined = this.props.isLogined;
    if (isLogined) {
      return <User />;
    } else {
      return <Guest />;
    }
  }
}
class ControlLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogined: true
    };
    // this.handleLogin = this.handleLogin.bind(this);
    // this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogin() {
    this.setState({
      isLogined: true
    });
  }
  handleLogout() {
    this.setState({
      isLogined: false
    });
  }
  render() {
    const isLogined = this.state.isLogined;
    /*
      if (isLogined) {
      // return <button onClick={this.handleLogout.bind(this)}>退出</button>;
      return <button onClick={() => this.handleLogout()}>退出</button>;
    } else {
      // return <button onClick={this.handleLogin.bind(this)}>登录</button>;
      return <button onClick={() => this.handleLogin()}>登录</button>;
    }
      */
    return (
      <div>
        {isLogined ? (
          <button onClick={() => this.handleLogout()}>退出</button>
        ) : (
          <button onClick={() => this.handleLogin()}>登录</button>
        )}
      </div>
    );
  }
}
class MailBox extends React.Component {
  render() {
    return (
      <div>
        <p>hello!</p>
        {this.props.mailList.length > 0 && (
          <p>您有{this.props.mailList.length}条消息未读</p>
        )}
      </div>
    );
  }
}
class Warn extends React.Component {
  render() {
    return this.props.show ? "展示warn内容" : null;
  }
}
class Page extends React.Component {
  constructor() {
    super();
    this.state = {
      showWarning: true
    };
    this.switchWarningState = this.switchWarningState.bind(this);
  }
  switchWarningState() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }
  render() {
    return (
      <div>
        <Warn show={this.state.showWarning} />
        <p>当前展示warning与否：{this.state.showWarning ? "展示" : "不展示"}</p>
        <button onClick={this.switchWarningState}>改变warning的展示状态</button>
      </div>
    );
  }
}
class List extends React.Component {
  render() {
    const list = [1, 2, 3, 4, 5, 6];
    // const itemShow = list.map((item, idx) => <li key={idx}>{item}</li>);
    // return (
    //   <div>
    //     <ul>{itemShow}</ul>
    //   </div>
    // );
    return <ul>{list.map((item, idx) => <li key={idx}>{item}</li>)}</ul>;
  }
}
class Blog extends React.Component {
  render() {
    const siderbar = (
      <ol>
        {this.props.posts.map((item, idx) => <li key={idx}>{item.title}</li>)}
      </ol>
    );
    const content = (
      <ul>
        {this.props.posts.map((item, idx) => (
          <li key={idx}>
            <h5>{item.title}</h5>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    );
    return (
      <div>
        {siderbar}
        <br />
        {content}
      </div>
    );
  }
}
class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      clickCount: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // this.setState(function(state) {
    //   return {
    //     clickCount: state.clickCount + 1
    //   }
    // });
    // 上下两种使用方式均可
    this.setState(prevState => ({
      clickCount: prevState.clickCount + 1
    }));
  }
  render() {
    return (
      <div>
        <p>当期clickCount的值是：{this.state.clickCount}</p>
        <button onClick={this.handleClick}>点击，clickCount的值+1</button>
      </div>
    );
  }
}
class Hello extends React.Component {
  constructor() {
    super();
    this.state = {
      opacity: 1
    };
  }
  componentDidMount() {
    this.timerID = setInterval(
      function() {
        let opacity = this.state.opacity;
        opacity -= 0.05;
        if (opacity < 0.1) {
          opacity = 1;
        }
        this.setState({
          opacity: opacity
        });
      }.bind(this),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
      <div>
        当前透明度为:{this.state.opacity}
        <span style={{ opacity: this.state.opacity }}>
          hello {this.props.name}
        </span>
      </div>
    );
  }
}
class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      data: 0
    };
    this.increase = this.increase.bind(this);
  }
  increase() {
    this.setState({
      data: this.state.data + 1
    });
  }
  render() {
    return (
      <div>
        当前值是：{this.state.data}
        <button onClick={this.increase}>点击+1</button>
        <Content myNumber={this.state.data} />
      </div>
    );
  }
}
class Content extends React.Component {
  // componentWillMount() {
  //   console.log("Component will mount");
  // }
  // componentDidMount() {
  //   console.log("component did mount");
  // }
  // componentWillReceiveProps(newProps) {
  //   console.log("comp will receive props");
  // }
  // shouldComponentUpdate(newProps, newState) {
  //   return true;
  // }
  // componentWillUpdate(nextProps, nextState) {
  //   console.log("com will update");
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   console.log("com did update");
  // }
  // componentWillUnmount() {
  //   console.log("com will unmount");
  // }
  render() {
    return (
      <div>
        <h5>{this.props.myNumber}</h5>
      </div>
    );
  }
}
class UserGist extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      lastGistUrl: ""
    };
  }
  componentDidMount() {
    this.serverRequest = axios.get(this.props.url).then(res => {
      let result = res.data[0];
      this.setState({
        userName: result.owner.login,
        lastGistUrl: result.url
      });
    });
  }
  componentWillUnmount() {
    this.serverRequest.abort();
  }
  render() {
    return (
      <div>
        {this.state.userName}的地址是:
        <a href={this.state.lastGistUrl}>{this.state.lastGistUrl}</a>
      </div>
    );
  }
}
class Ref extends React.Component {
  handleClick() {
    this.refs.myInput.focus();
  }
  render() {
    return (
      <div>
        <input type="text" ref="myInput" />
        <button onClick={this.handleClick.bind(this)}>点我input框获取焦点</button>
      </div>
    );
  }
}
class ContentChild extends React.Component {
  render() {
    return (
      <div>
        <input type="text" value={this.props.childData} onChange={this.props.updateStateProp} />
        子组件中的值为：{this.props.childData}
      </div>
    );
  }
}
class HelloMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "hello,菜鸟教程"
    };
  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }
  render() {
    let value = this.state.value;
    return (
      <div>
        <input
          type="text"
          value={value}
          onChange={this.handleChange.bind(this)}
        />
        <p>当前input中的值是：{value}</p>
        <ContentChild childData={value} updateStateProp={this.handleChange.bind(this)}></ContentChild>
      </div>
    );
  }
}
class App extends React.Component {
  render() {
    const i = 1;
    const myInlineStyle = {
      fontSize: 20,
      color: "#f00"
    };
    const arr = ["<h5>菜鸟教程<h5>", "<h5>学的不仅是技术，更是梦想！</h5>"];
    const posts = [
      { id: 1, title: "Hello World", content: "Welcome to learning React!" },
      {
        id: 2,
        title: "Installation",
        content: "You can install React from npm."
      }
    ];
    return (
      <div>
        <h1>react 元素渲染</h1>
        <h4>本地时间：{this.props.date.toLocaleString()}</h4>
        <h1>react jsx</h1>
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
            <p style={{ fontSize: 20, color: "0f0" }}>
              这里使用了内联样式-直接定义【要用两个花括号】
            </p>
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
        <h1>react 组件</h1>
        <ol>
          <li>
            <Name name={"菜鸟教程"} />
          </li>
          <li>
            <NickName nickname={"runoob"} />
          </li>
          <li>
            <Url url={"http://www.runoob.com"} />
          </li>
        </ol>
        <h1>react state</h1>
        <ol>
          <li>
            <Clock />
          </li>
        </ol>
        <h1>React props</h1>
        <ol>
          <li>
            <Website />
          </li>
          <li>
            <MyTitle title={title} />
          </li>
        </ol>
        <h1>React 事件处理</h1>
        <ol>
          <li>
            <Toggle />
          </li>
          <li>
            <Popper />
          </li>
        </ol>
        <h1>条件渲染</h1>
        <ol>
          <li>
            直接显示登录状态：
            <Greeting isLogined={false} />
          </li>
          <li>
            通过改变状态进行控制：
            <ControlLogin />
          </li>
          <li>
            与运算符
            <MailBox mailList={[1, 2]} />
          </li>
          <li>
            阻止组件渲染
            <Page />
          </li>
        </ol>
        <h1>React 列表与keys</h1>
        <ol>
          <li>
            <List />
          </li>
          <li>
            <Blog posts={posts} />
          </li>
        </ol>
        <h1>React 组件API</h1>
        <ol>
          <li>
            <Counter />
          </li>
        </ol>
        <h1>React 组件生命周期</h1>
        <ol>
          <li>
            <Hello name={"world"} />
          </li>
          <li>
            <Button />
          </li>
        </ol>
        <h1>React AJAX</h1>
        <ol>
          <li>
            <UserGist url="https://api.github.com/users/octocat/gists" />
          </li>
        </ol>
        <h1>React Ref</h1>
        <ol>
          <li>
            <Ref />
          </li>
        </ol>
        <h1>React 表单与事件</h1>
        <ol>
          <li>
            <HelloMessage />
          </li>
        </ol>
      </div>
    );
  }
}

export default App;

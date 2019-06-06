import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.bar = this.bar.bind(this);
  }
  bar() {
    return 123;
  }
  componentDidMount() {}
  render() {
    return <div className="barContainer">{() => this.bar()}</div>;
  }
}

export default App;

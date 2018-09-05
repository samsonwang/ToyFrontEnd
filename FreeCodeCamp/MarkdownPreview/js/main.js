// -*- mode: js-jsx -*-

'use strict';

class TitleBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header>{this.props.title}</header>
      </div>
    );
  }
}

class Previewer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TitleBar title="Preview"/>
        <div id="preview">
          <p>{this.props.content}</p>
        </div>
      </div>
    );
  }
}

class Editor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TitleBar title="Editor"/>
        <textarea
          id="editor"
          onChange={this.props.handleChange}>
        </textarea>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "hello app!"
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      inputText: event.target.value
    });
  }

  render() {
    return (
      <div>
        <Editor handleChange={this.handleChange}/>
        <Previewer content={this.state.inputText}/>
      </div>
    );
  }
}

window.onload = function initApp() {
  console.log("init app ...");
  const reactElement = React.createElement(App);
  const reactDomContainer = document.querySelector('#app');

  ReactDOM.render(<App />, reactDomContainer);
}

// -*- mode: js-jsx -*-

'use strict';
console.log("Markdown previewer, initializing");

class TitleBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>header</div>;
  }

}

class Previewer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>previewer</div>;
  }

}

class Editor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>editor</div>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "hello app!"
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.text}</p>
        <Previewer />
        <Editor />
      </div>
    );
  }
}

function initApp() {
  const reactElement = React.createElement(App);
  const reactDomContainer = document.querySelector('#app');

  ReactDOM.render(<App />, reactDomContainer);
}

window.onload = () => {
  initApp();
};

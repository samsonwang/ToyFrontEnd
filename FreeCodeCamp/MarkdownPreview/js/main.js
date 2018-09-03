
'use strict';
console.log("Markdown previewer, initializing");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "hello app!"
    }
  }

  render() {
    return <p>{this.state.text}</p>
  }
}

function initApp() {
  const reactElement = React.createElement(App);
  const reactDomContainer = document.querySelector('#app');

  ReactDOM.render(reactElement, reactDomContainer);
}

window.onload = () => {
  initApp();
};

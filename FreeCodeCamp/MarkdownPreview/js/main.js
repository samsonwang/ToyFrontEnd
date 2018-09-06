// -*- mode: js-jsx -*-

'use strict';


// ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
  breaks: true,
});

// INSERTS target="_blank" INTO HREF TAGS (required for codepen links)
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + '</a>';
}

class TitleBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="titlebar">
        <i className="fa fa-free-code-camp logo"></i>
        <header className="title">{this.props.title}</header>
        {this.props.resizeState == 0 ?
          <i className="fa fa-arrows-alt size"
               onClick={this.props.resize}></i> :
            <i className="fa fa-compress size"
               onClick={this.props.resize}></i>}
      </div>
    );
  }
}


// Previewer
class Previewer extends React.Component {
  constructor(props) {
    super(props);
    this.resize = this.resize.bind(this);
  }

  getHtml() {
    // transform md to html
    const markdown = this.props.content;
    const html = marked(markdown, {renderer: renderer});
    // console.log("Preview: " + markdown + " => " + html);
    return {__html: html};
  }

  resize() {
    this.props.handleResize(2);
    console.log("previewer resize clicked");
  }

  getClassName() {
    switch (this.props.resizeState) {
    case 0:
      return "previewer-component";
      break;
    case 1:
      return "previewer-component hide";
      break;
    case 2:
      return "previewer-component maximized";
      break;
    default:
      return "previewer-component";
      break;
    }
  }

  render() {
    return (
      <div className={this.getClassName()}>
        <TitleBar
          title="Preview"
          resize={this.resize}
          resizeState={this.props.resizeState}
          />
        <div
          id="preview"
          dangerouslySetInnerHTML={this.getHtml()}
          >
        </div>
      </div>
    );
  }
}


// Editor
class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.resize = this.resize.bind(this);
  }

  resize() {
    this.props.handleResize(1);
    console.log("editor resize clicked");
  }

  getClassName() {
    switch (this.props.resizeState) {
    case 0:
      return "editor-component";
      break;
    case 1:
      return "editor-component maximized";
      break;
    case 2:
      return "editor-component hide";
      break;
    default:
      return "editor-component";
      break;
    }
  }

  render() {
    return (
      <div className={this.getClassName()}>
        <TitleBar
          title="Editor"
          resize={this.resize}
          resizeState={this.props.resizeState}
          />
        <textarea
          id="editor"
          onChange={this.props.handleChange}
          defaultValue={defaultText}
          >
        </textarea>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: defaultText,
      resizedComponent: 0 // 1 for editor, 2 for previewer
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  handleChange(event) {
    this.setState({
      inputText: event.target.value
    });
  }

  handleResize(id) {
//    console.log("App handle resize " + id + ", " + this.state.resizedComponent);

    if (id == this.state.resizedComponent) {
      this.setState({resizedComponent: 0});
    }
    else {
      this.setState({resizedComponent: id});
    }
  }

  render() {
    return (
      <div>
        <Editor
          handleChange={this.handleChange}
          resizeState={this.state.resizedComponent}
          handleResize={this.handleResize}
          resizedComponent={this.state.resizedComponent}
          />
        <Previewer
          content={this.state.inputText}
          resizeState={this.state.resizedComponent}
          handleResize={this.handleResize}
          resizedComponent={this.state.resizedComponent}
          />
      </div>
    );
  }
}

const defaultText =
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`

window.onload = function initApp() {
  console.log("init app ...");
  const reactElement = React.createElement(App);
  const reactDomContainer = document.querySelector('#app');

  ReactDOM.render(<App />, reactDomContainer);
}

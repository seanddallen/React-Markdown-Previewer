import React, { Component } from 'react';
import marked from 'marked';
import hljs from 'highlight.js';
import './App.css';

const initialMarkdown = `
### Headers

# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

### List

- list item one
- list item two
- list item three

### Links

[FreeCodeCamp](https://learn.freecodecamp.org)

[Google](https://www.google.com "World's Most Popular Search Engine")

### Text Decorations

*italic*

**bold**

***bold and italic***

### Images

![alt text](https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80 'I love trees!')

### Blockquote

> The journey of 1000 miles begins with one step

### Code

\`npm install create-react-app -g\`

\`\`\`
function addTwoNumbers(a, b) {
  return a + b
}
const name = 'Sean'
const age = 34
const number = Math.random() * 10
\`\`\`
`

var renderer = new marked.Renderer()

renderer.link = function(href, title, text) {
  return `<a href=${href} target="_blank">${text}</a>`
}

marked.setOptions({
  renderer,
  highlight: function(code) {
    return hljs.highlightAuto(code).value
  },
  breaks: true
})



class App extends React.Component {
  
  state = {
    markdown: initialMarkdown
  }
  
  handleChange = e => this.setState({ markdown: e.target.value })
  
  render() {
    return (
      <div>
        <h1>Markdown Previewer</h1>
        <div className='container'>
          <div className='left'>
            <textarea id='editor' value={this.state.markdown} onChange={this.handleChange}/>
          </div>
          <div className='right'>
            <div id='preview' dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;

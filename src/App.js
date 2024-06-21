import React from "react"
import './App.css';
import { marked }  from "marked";
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: `# Header (H1 size)
## Sub header (H2 size)

[This is a link](https://www.example.com)

Here is some inline code: \`<div></div>\`

\`\`\`
// This is a code block
function sayHello() {
  console.log("Hello, world!");
}
\`\`\`

- This is a list item

> This is a blockquote

![Example Image](https://via.placeholder.com/150)

**This is bolded text**
`
      
    };
    this.handleChange = this.handleChange.bind(this);

    marked.setOptions({
      gfm: true,
      breaks: true,
    });
  }
  

  handleChange(event){
    this.setState({
      input: event.target.value,
    })
  }

  render(){
    const { input } = this.state;
    const  markedOutput  = marked.parse(input);
    return(
      <div className="App">
        <div className="editor-container">   
          
            <header className="header">EDITOR</header>
            <textarea className="form-control" rows={10} id="editor" value={input} placeholder="Enter your input" onChange={this.handleChange} />
          
        </div>
        <div className="preview-container">
          <header className="header">PREVIEWER</header>
          <div  id="preview" dangerouslySetInnerHTML={{ __html: markedOutput }}></div>
        </div>
      </div>
    )
  }
}

export default App;

var react = require("react");

var App = React.createClass({
  render(){
    return <h1>hello</h1>
  }
});

React.render(<App/>, document.getElementbyId('app'));
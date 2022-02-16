const React = require('react')

class Show extends React.Component {
  render () {
   const fruit = this.props.fruit
    return (
      <div>
      <h1> Show Page </h1>
      <a href="/fruits">Go back to Home Page</a>
      <p>The {fruit.name} is {fruit.color}</p>
      <p>{fruit.readyToEat? 'Its is ready to eat' : 'It is not ready to eat... Cant touch this' }</p>
      </div>
      );
     }
   }
  module.exports  = Show;

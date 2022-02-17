const React = require('react')

class Show extends React.Component {
  render () {
   const vegetables = this.props.vegetables
    return (
      <div>
      <h1> Show Page </h1>
      <a href="/vegetables">Go back to Home Page</a>
      <p>The {vegetables.name} is {vegetables.color}</p>
      <p>{vegetables.readyToEat? 'It is ready to eat' : 'It is not ready to eat... Cant touch this' }</p>
      </div>
      );
     }
   }
  module.exports  = Show;
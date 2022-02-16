const React = require('react');

class New extends React.Component {
    render(){
        return(
        <div>
            <h1>Hi, this is the New Page.</h1>
            { /* This is how you make a comment. */}
            <form action="/fruits" method="POST">
                Name Here: <input name="name" type="text"/><br/>
                Enter Color: <input name="color" type="text"/><br/>
                Ready to Eat? <input name="readyToEat" type="checkbox"/><br/>
                <input type="submit" value="Create A Fruit"/>
            </form>
        </div>
        )
    }
}

module.exports = New;
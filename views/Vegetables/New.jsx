const React = require('react');

class New extends React.Component {
    render(){
        return(
        <div>
            <h1>Hi, this is the New Page.</h1>
            { /* This is how you make a comment. */}
            <nav>
            <a href="/vegetables/new">Back to Vegetables Index Page</a>
            </nav>
            <form action="/vegetables" method="POST">
                Name Here: <input name="name" type="text"/><br/>
                Enter Color: <input name="color" type="text"/><br/>
                Ready to Eat? <input name="readyToEat" type="checkbox"/><br/>
                <input type="submit" value="Create A Vegetable"/>
            </form>
        </div>
        )
    }
}

module.exports = New;
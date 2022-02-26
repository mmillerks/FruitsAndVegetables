const React = require('react')
const Default = require('../layout/Default.jsx')

class Index extends React.Component {
    render() {
        const fruits = this.props.fruits      
        const fruitList = fruits.map((fruit, i) => {
            return (
                <li key={`${i}`}>
                    <a href={`/fruits/${fruit._id}`}>{fruit.name} is this the color of {fruits.color} </a> 
                    <form action={`/fruits/${fruit._id}?_method=DELETE`} method="POST">
                        <input type="submit" value={`DELETE ${fruit.name.toUpperCase()}`} />
                    </form>
                </li>  
            )
        })

        return (
            <Default title ="Index Page">
                <div>
                    <h1>This is the Index Page of My Beautiful Collection of Fruit.</h1>
                    <nav>
                        <a href="/fruits/new">Go to the New Page</a>
                    </nav>
                    <ul>
                        {fruitList}
                    </ul>
                </div>
            </Default>
        )
    }

}

module.exports = Index; 
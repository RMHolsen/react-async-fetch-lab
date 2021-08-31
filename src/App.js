// create your App component here
import React from 'react'

class App extends React.Component {
    state = {
        spacePop: []
    }

    // constructor() {
    //     super();
    //     state = {
    //         spacePop: []
    //     }
    // }

    render() {
        return(
            <div>
                <h1>People in Space</h1>
                <p>{this.state.spacePop}</p>
            </div>
        )
    } // i am too headachy to format this correctly but that probably is not very nice formatting 

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then((data) => {
            this.setState({spacePop: data.people})
        })
    }

}

export default App 
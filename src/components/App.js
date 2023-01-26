import React from "react";
import './app.css'

class App extends React.Component {
    render() {
        return (
            <div className="container">

                <img  src={this.props.value.img} />


                <h4 className="title">{this.props.value.name}</h4>

            </div>
        )
    }
}
export default App
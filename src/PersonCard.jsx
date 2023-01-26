import React, {Component} from "react";

class PersonCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            edad: this.props.edad
        }
    }
    
    render() {
        const {nombre, apellido, cabello} = this.props
        const edad = this.state.edad


        return (
            <div>
                <h1>{nombre}, {apellido}</h1>
                <p>Age: {edad}</p>
                <p>Hair color: {cabello}</p>
                <button onClick={() => this.setState({ edad: edad + 1})}>Birthday Button for {nombre} {apellido}</button>
            </div>
        )
    }   
}
export default PersonCard


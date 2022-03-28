import React from "react";

class Titre extends React.Component {

    render() {
        return (
            <h3>{this.props.texteTitre}</h3>
        );
    }
}

export default (Titre);
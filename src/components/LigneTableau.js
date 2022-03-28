import React from "react";

class LigneTableau extends React.Component {

    render() {
        return (
            <tr>
                <td>{this.props.livre.id}</td>
                <td>{this.props.livre.titre}</td>
            </tr>
        );
    }
}

export default (LigneTableau);
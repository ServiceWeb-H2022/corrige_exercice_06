import React from "react";
import LigneTableau from "./LigneTableau";

class Tableau extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            livres : [],
        }
    }

    render() {
        const lignesTableau = this.props.livres.map(livre => (<LigneTableau livre={livre} key={livre.id}/>));

        return (
            <table className="BooksTable">
                <thead>
                <tr>
                    <th>id</th>
                    <th>Titre</th>
                </tr>
                </thead>
                <tbody>
                    {lignesTableau}
                </tbody>
            </table>
        );
    }
}

export default (Tableau);
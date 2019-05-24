import React from 'react';
import { Link } from 'react-router-dom';

class CharacterCard extends React.Component {
  componentWillMount() {
    this.props.resetFilters();
  }

  render() {
    const { potterList } = this.props;
    const potterid = this.props.match.params.id;

    const potte = potterList[potterid];
    console.log(potterList)


    return(
      <React.Fragment>

          <div className="card">
            <h2 className="potterName">{potte.name}</h2>
            <img src={potte.image} alt={potte.name} />

            <p>Hola</p>
          </div>
          <Link to="/">Volver</Link>

      </React.Fragment>
    )
  }
}

export default CharacterCard;

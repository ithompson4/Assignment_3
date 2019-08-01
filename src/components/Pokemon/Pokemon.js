import React, { Component } from 'react';
import axios from 'axios';
import './Pokemon.css';

// Import Components
import Button from '../../components/Button/Button';

export default class Pokemon extends Component {
  state = {
    pokemonIndex: '',
    imgUrl: '',
    name: '',
    description: '',
    stats: {
      hp: '',
      attack: '',
      defense: '',
      specialAttack: '',
      specialDefense: '',
      speed: ''
    }
  };

  async componentDidMount() {
    const { pokemonIndex } = this.props.match.params;

    // Get Pokemon
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
    const result = await axios.get(pokemonUrl);
    const name = result.data.name;
    const imgUrl = result.data.sprites.front_default;
    let { hp, attack, defense, specialAttack, specialDefense, speed } = '';

    result.data.stats.map(stat => {
      if (stat.stat.name === 'hp') {
          hp = stat['base_stat'];
      }
      else if (stat.stat.name === 'attack') {
        attack = stat['base_stat'];
      }
      else if (stat.stat.name === 'defense') {
        defense = stat['base_stat'];
      }
      else if (stat.stat.name === 'special-attack') {
        specialAttack = stat['base_stat'];
      }
      else if (stat.stat.name === 'special-defense') {
        specialDefense = stat['base_stat'];
      }
      else if (stat.stat.name === 'speed') {
        speed = stat['base_stat'];
      }
      return result;
    });

    // Pokemon info
    this.setState({
      imgUrl,
      pokemonIndex,
      name,
      stats: {
        hp,
        attack,
        defense,
        speed,
        specialAttack,
        specialDefense
      }
    });
  }

  goBack() {
    this.props.history.goBack()
  }

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-md-3">
                <img
                  className="card-img-top"
                  src={this.state.imgUrl}
                  alt="Pokemon_Image"
                />
              </div>
              <div className="col-md-9">
                <h2>
                  {this.state.name
                    .toLowerCase()
                    .split(' ')
                    .map(n => n.charAt(0).toUpperCase() + n.substring(1))
                    .join(' ')}
                </h2>
                <div className="row align-items-center">
                  <div className="col-12 col-md-3">
                    HP
                  </div>
                  <div className="col-12 col-md-9">
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        style={{
                          width: `${this.state.stats.hp}%`
                        }}
                      >
                        {this.state.stats.hp}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-12 col-md-3">
                    Attack
                  </div>
                  <div className="col-12 col-md-9">
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        style={{
                          width: `${this.state.stats.attack}%`
                        }}
                      >
                        {this.state.stats.attack}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-12 col-md-3">
                    Defense
                  </div>
                  <div className="col-12 col-md-9">
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        style={{
                          width: `${this.state.stats.defense}%`
                        }}
                      >
                        {this.state.stats.defense}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-12 col-md-3">
                    Special Attack
                  </div>
                  <div className="col-12 col-md-9">
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        style={{
                          width: `${this.state.stats.specialAttack}%`
                        }}
                        aria-valuenow={this.state.stats.specialAttack}
                      >
                        {this.state.stats.specialAttack}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-12 col-md-3">
                    Special Defence
                  </div>
                  <div className="col-12 col-md-9">
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        style={{
                          width: `${this.state.stats.specialDefense}%`
                        }}
                        aria-valuenow={this.state.stats.specialDefense}
                      >
                        {this.state.stats.specialDefense}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-12 col-md-3">
                    Speed
                  </div>
                  <div className="col-12 col-md-9">
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        style={{
                          width: `${this.state.stats.speed}%`
                        }}
                      >
                        {this.state.stats.speed}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                  <Button 
                    buttonStyle="primary" 
                    onClick={() => this.props.history.goBack()}
                  >
                    Go Back
                  </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

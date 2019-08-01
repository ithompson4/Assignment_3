import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PokemonCard.css';
import styled from 'styled-components';

import spinner from '../Dashboard/spinner.gif';

const PokSprite = styled.img`
  width: 80px;
  height: 80px;
  display: none;
`;

export default class PokemonCard extends Component {
  state = {
    name: '',
    imgUrl: '',
    pokemonIndex: '',
    imgLoading: true,
    manyRequests: false
  };

  componentDidMount() {
    const { name, url } = this.props;
    const pokemonIndex = url.split('/')[url.split('/').length - 2];
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;
    this.setState({ name, imgUrl, pokemonIndex });
  }

  render() {
    return (
      <div className="col-md-2 mb-5">
        <Link className="cardLink" to={`pokemon/${this.state.pokemonIndex}`}>
          <div className="card">
            {this.state.imgLoading ? (
              <img
                className="card-img-top mx-auto d-block mt-2"
                src={spinner}
                alt="PokemonCard"
                style={{ width: '80px', height: '80px' }}
              />
            ) : null}
            <PokSprite
              className="card-img-top mx-auto mt-2"
              src={this.state.imgUrl}
              onLoad={() => this.setState({ imgLoading: false })}
              onError={() => this.setState({ manyRequests: true })}
              style={
                this.state.manyRequests
                  ? { display: 'none' }
                  : this.state.imgLoading
                  ? null
                  : { display: 'block' }
              }
            />
            {this.state.manyRequests ? (
              <h5 className="mx-auto">
                <span className="badge badge-danger mt-2">
                  Too Many Requests
                </span>
              </h5>
            ) : null}
            <div className="card-body mx-auto">
              <h5 className="card-title">
                {this.state.name
                  .toLowerCase()
                  .split(' ')
                  .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                  .join(' ')}
              </h5>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
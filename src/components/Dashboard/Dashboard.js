import React from 'react';

// Import Components
import PokemonList from '../PokemonList/PokemonList';

const Dashboard = () => {
    return (
      <div className="row">
        <div className="col">
          <PokemonList />
        </div>
      </div>
    );
}

export default Dashboard;
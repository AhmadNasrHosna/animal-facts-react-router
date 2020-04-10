import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to Fun Animal Facts</h2>
        <p>
          Animals are multicellular eukaryotic organisms that form the
          biological kingdom Animalia. With few exceptions, animals consume
          organic material, breathe oxygen, are able to move, can reproduce
          sexually, and grow from a hollow sphere of cells, the blastula, during
          embryonic development.{" "}
          <a href="https://en.wikipedia.org/wiki/Animal">Wikipedia</a>
        </p>

        <p>
          Read some facts about <NavLink to="/cats">cats</NavLink>.
        </p>
        <p>
          Read some facts about <NavLink to="/dogs">dogs</NavLink>.
        </p>
      </div>
    );
  }
}

export default Home;

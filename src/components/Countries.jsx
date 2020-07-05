import React from 'react'
import { Link } from "react-router-dom";

class Countries extends React.Component {
  state = { countries: [] }

  getCountries = async () => {
    const response = await fetch("http://localhost:3000/countries")
    const countries = await response.json()
    this.setState({ countries: countries })
  }

  // renderCountries = () => {
  //   return this.state.countries.map((country, index) => {
  //     return (
  //       <div key={index}>
  //         <h3>{country.name}</h3>
  //         <p>{country.description}</p>
  //         <p><b>{country.airline}</b></p>
  //         <p>{country.year}</p>
  //         <hr/>
  //       </div>
  //     )
  //   })
  // }

  renderCountries = () => {
    return this.state.countries.map((country, index) => {
      return (
        <div key={index} className="country">
          <h3>{country.name}</h3>
          <h4>Description: </h4><p>{country.description}</p>
          <h4>Airline: </h4><p>{country.airline}</p>
          <h4>Year: </h4><p>{country.year}</p>
          <hr />
        </div>
      );
    });
  };

  componentDidMount() {
    this.getCountries()
  }

  render() {
    return (
      <div>
        {this.renderCountries()}
      </div>
    )
  }
}

export default Countries
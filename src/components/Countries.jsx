import React from 'react'
import { Link } from "react-router-dom";

class Countries extends React.Component {
  state = { countries: [] }

  getCountries = async () => {
    const response = await fetch("http://localhost:3000/countries")
    const countries = await response.json()
    this.setState({ countries: countries })
  }


  deleteCountry = async (id) => {
    await fetch(`http://localhost:3000/countries/${id}`, {
      method: "DELETE"
    })
    this.getCountries()
  }

  renderCountries = () => {
    return this.state.countries.map((country, index) => {
      return (
        <div key={index} className="country">
          <h3>{country.name}</h3>
          <h4>Description: </h4><p>{country.description}</p>
          <h4>Airline: </h4><p>{country.airline}</p>
          <h4>Year: </h4><p>{country.year}</p>
          <div className="edit-delete-container">
            <Link to={`/countries/${country.id}/edit`}>Edit</Link>
            <span onClick={() => this.deleteCountry(country.id)}>Delete</span>
          </div>
          <hr />
        </div>
      );
    });
  };

  async componentDidMount() {
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
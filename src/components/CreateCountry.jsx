import React from "react";

class CreateCountry extends React.Component {

onInputChange = (event) => {
  console.log("on inut change")
  this.setState({
    [event.target.id]: event.target.value
  })
}

  
onFormSubmit = async (event) => {

  event.preventDefault()
//   const body = {
//     country: this.state
// }

  await fetch("http://localhost:3000/countries", {
    method: "POST",
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify(this.state)
  })
  this.props.history.push("/countries")
}


render() {
  return (
    <div className="container">
      <h1>Add a country</h1>
      <form onSubmit={this.onFormSubmit}>
        <label htmlFor="name">Name</label>
        <input 
        type="text" 
        name="name" 
        id="name"
        onChange={this.onInputChange} 
        />
        <label htmlFor="description">Description</label>
        <textarea 
        name="description" 
        id="description"
        onChange={this.onInputChange}
        ></textarea>
        <label htmlFor="airline">Airline</label>
        <input type="text" 
        name="airline" 
        id="airline"
        onChange={this.onInputChange}
        />
        <label htmlFor="year">Year</label>
        <input type="text" 
        name="year" 
        id="year" 
        onChange={this.onInputChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
}

export default CreateCountry;






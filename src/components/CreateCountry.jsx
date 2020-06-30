import React from "react";

class CreateCountry extends React.Component {
  render() {
    return (
      <div className="container">
        <form>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />
          <label htmlFor="url">Url</label>
          <input type="text" name="url" id="url" />
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description"></textarea>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CreateCountry;





// onInputChange = (event) => {
//     this.setState({
//       [event.target.id]: event.target.value
//     })
//   }
  
//   onFormSubmit = async (event) => {
//     event.preventDefault()
//     await fetch("http://localhost:3000/create", {
//       method: "POST",
//       headers: {
//         'Content-Type': "application/json"
//       },
//       body: JSON.stringify(this.state)
//     })
//     this.props.history.push("/countries")
//   }
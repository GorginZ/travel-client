import React from "react";

class EditCountry extends React.Component {
  state = { name: "", url: "", description: "", loading: true, id: this.props.match.params.id };
  onInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  };

  onFormSubmit = async (event) => {
    event.preventDefault();
    const { id, name, url, description } = this.state
    await fetch(`http://localhost:3000/Countries/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, url, description }),
    });
    this.props.history.push("/countries");
  };

  async componentDidMount() {
    const { id } = this.state
    const response = await fetch(`http://localhost:3000/countries/${id}`);
    const { name, url, description } = await response.json();
    this.setState({ name, url, description, loading: false });
  }

  render() {
    const { name, url, description, loading } = this.state;
    return (
      !loading && (
        <div className="container">
          <h1>Edit a country post</h1>
          <form onSubmit={this.onFormSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="title"
              onChange={this.onInputChange}
              value={name}
            />
            <label htmlFor="url">Url</label>
            <input
              type="text"
              name="url"
              id="url"
              onChange={this.onInputChange}
              value={url}
            />
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              onChange={this.onInputChange}
              value={description}
            ></textarea>
            <input type="submit" value="Submit" />
          </form>
        </div>
      )
    );
  }
}

export default EditCountry;
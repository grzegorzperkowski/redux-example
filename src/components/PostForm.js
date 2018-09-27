import React, { Component } from "react";

export default class PostForm extends Component {
  state = {
    title: "",
    body: ""
  };

  onChange = e => {
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const post = { title: this.state.title, body: this.body };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log("ERROR", error));
  };

  render() {
    return (
      <div>
        <h1> Add post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title</label>
            <br />
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <br />
          <div>
            <label>Body</label>
            <br />
            <textarea
              type="text"
              name="body"
              value={this.state.body}
              onChange={this.onChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

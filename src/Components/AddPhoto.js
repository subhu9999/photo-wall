import React, { Component } from "react";



class AddPhoto extends Component {
  handleSubmit = (event) => {
    event.preventDefault();

    const description = event.target.elements.description.value;
    const link = event.target.elements.link.value;

    if (description && link) {
      this.props.startAddingPost({
        id: Number(new Date()),
        description: description,
        imageLink: link,
      });

      this.props.onHistory.push("/");
      // console.log({id: "24332", description: description,imageLink: link});
    }
  };

  render() {
    return (
      <div>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="image url" name="link" />
            <input type="text" placeholder="description" name="description" />

            <button>Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddPhoto;

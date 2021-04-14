import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      charsLeft: this.props.maxChars
    };
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value
    })
    this.updateCharsLeft()
  }

  updateCharsLeft = () => {
    this.setState(previousState => {
      return {
        charsLeft: this.props.maxChars - previousState.message.length
      } 
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={e => this.handleChange(e)} value={this.state.message} />
        <p>Remaining characters: {this.state.charsLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;

import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div className="paragraph-wrapper">
        { this.props.city && this.props.country && <p> You are at { this.props.city },{ this.props.country }</p>}
        { this.props.temperature && <p>Temperature is { this.props.temperature }.</p> }
        { this.props.humidity && <p>Humidity is { this.props.humidity }.</p> }
        { this.props.description && <p> { this.props.description }</p> }
        { this.props.error && <p>{ this.props.error}</p>}
        <span>{"@ 2018 Coded and designed by Celine Lee"}</span>
      </div>
    )
  }
};

export default Weather;

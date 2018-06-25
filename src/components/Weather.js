import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <React.Fragment>
      <div className="paragraph-wrapper">
        { this.props.city && this.props.country && <p id="paragraph-top-p"> You are at { this.props.city },{ this.props.country }</p>}
        { this.props.temperature && <p>Temperature is { this.props.temperature }.</p> }
        { this.props.humidity && <p>Humidity is { this.props.humidity }.</p> }
        { this.props.description && <p id="paragraph-bottom-p"> { this.props.description }</p> }
        { this.props.error && <p>{ this.props.error}</p>}
      </div>
      <div className="copyright">{<p>@ 2018 Designed and coded by Celine Lee</p>}</div>
      </React.Fragment>
    )
  }
};

export default Weather;

import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";


const API_KEY = "46ce87e22c6e45f01d48d2cdc57e55b9";

// we import it
//import React package from react that installed in package.json
class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&mode=json&appid=${API_KEY}&units=metric`);
    //compile into Json format.
    // readable format
    const data = await api_call.json();
    if (city && country ) {
      console.log(data);
      this.setState({
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        humnidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        city: undefined,
        country: undefined,
        temperature: undefined,
        humnidity: undefined,
        description: undefined,
        error: "please enter the value."
      });
    }
    }

  render() {
    //render method returns jxs
    // rendered it out
    return (
      <div>
        <div className="wrapper">
                <Titles />
                <Form getWeather={this.getWeather} />
                <Weather
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humnidity}
                  description={this.state.description}
                  error={this.state.error}
                />
        </div>
      </div>
    );

    //this is babel.
  }
};
//React.component is in node module.

export default App;
// React purpose :
// to have multiple layouts that contains ui components
// and to put all the layouts in one file

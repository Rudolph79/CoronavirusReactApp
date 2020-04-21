import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from "./components";
import styles from './App.css';
import style from './App.module.css';
import { fetchData } from "./api";
// import Logo from './components/Logo/Logo';
import coronaImage from './images/image.png';

class App extends Component {
  state = {
    data: {},
    country: ''
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleChangeCountry = async (country) => {
    // fetch the data
    const fetchedData = await fetchData(country);
    // console.log(fetchedData);
    // set the state
    this.setState({ data: fetchedData, country: country })
  }

  render() {
    const { data, country } = this.state;
    return (
      <div className={style.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleChangeCountry={this.handleChangeCountry} />
        <Chart data={data} country={country} />
      </div>
    )
  };
}

export default App;

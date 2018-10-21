import React, { Component } from 'react';

import '../../node_modules/bootstrap/scss/bootstrap.scss';
import '../scss/master.scss';

import Header from "./Header";
import Footer from "./Footer";
import TopicGroup from "./TopicGroup";
import Search from "./Search";
import LoadingSpinner from './LoadingSpinner'
import NoResults from "./NoResults";

class App extends Component {

  state = {
    data: null,
    filterTerm: '',
    loading: true,
    error: false
  };

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/kieranmv95/Front-End-Wizard/master/src/public/data.json')
      .then(res => {
        if(!res.ok) { throw Error }
        return res.json()
      })
      .then(data => this.setState({
        data: data.data,
        loading: false
      }))
      .catch(err => {
        this.setState({
          loading: false,
          error: true
        })
      });
  }

  filterList = () => {
    const { filterTerm, data } = this.state;
    let filteredArray = [];

    if(filterTerm.length > 0) {
      data.forEach(element => {
        let object = {};

        object.name = element.name;
        object.keywords = element.keywords;
        object.links = element.links.filter(el => {
          return  el.title.toLowerCase().includes(filterTerm.toLowerCase()) ||
                  el.description.toLowerCase().includes(filterTerm.toLowerCase());
        });

        if (object.links.length > 0) {
          filteredArray.push(object)
        }
      });

      console.log(filteredArray);
    } else {
      filteredArray = data;
    }
    return filteredArray;
  };

  updateFilter = filterTerm => this.setState({ filterTerm });

  render() {
    const { filterTerm, loading, error } = this.state;
    const filteredArray = this.filterList();

    return (
      <div>
        <Header />
        <Search updateFilter={this.updateFilter} filterTerm={filterTerm} />

        {loading && <LoadingSpinner />}
        {error && <div>Error fetching data...</div>}

        <div className="container mt-5">
          {!loading && !error && filteredArray.length > 0 && filteredArray.map(group => (
            <TopicGroup key={group.name} data={group} />
          ))}
          {!loading && !error && filteredArray.length === 0 &&
            <NoResults searchTerm={filterTerm} />
          }
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

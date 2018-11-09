import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLinks } from '../actions/links';

import '../../node_modules/bootstrap/scss/bootstrap.scss';
import '../scss/master.scss';

import Header from "./Header";
import Footer from "./Footer";
import TopicGroup from "./TopicGroup";
import Search from "./Search";
import LoadingSpinner from './LoadingSpinner'
import NoResults from "./NoResults";
import SearchCategories from './SearchCategories';

class App extends Component {

  state = {
    filterTerm: '',
    filterSections: []
  };

  filterList = () => {
    const { filterTerm, filterSections } = this.state;
    const { links: { data } } = this.props;

    let sectionFilteredArray = [];
    let filteredArray = [];

    if(filterSections.length > 0) {
      data.forEach(element => {
        let object = {};
        object.name = element.name;
        object.keywords = element.keywords;
        object.links = element.links;

        if(filterSections.indexOf(object.name.toLowerCase()) > -1) {
          sectionFilteredArray.push(object);
        }
      });
    } else {
      sectionFilteredArray = data;
    }

    if(filterTerm.length > 0) {
      sectionFilteredArray.forEach(element => {
        let object = {};

        object.name = element.name;
        object.keywords = element.keywords;
        object.links = element.links.filter(el => {
          return  el.title.toLowerCase().includes(filterTerm.toLowerCase()) ||
                  el.description.toLowerCase().includes(filterTerm.toLowerCase());
        });

        if (object.links.length > 0) filteredArray.push(object);
      });
    } else {
      return filteredArray = sectionFilteredArray;
    }
    return filteredArray;
  };

  updateFilter = filterTerm => this.setState({ filterTerm });

  updateSections = ( filterSection ) => {
     const sectionsCopy = this.state.filterSections;

     const index = sectionsCopy.indexOf(filterSection.toLowerCase());

     if(index !== -1) {
       sectionsCopy.splice(index, 1);
     } else {
       sectionsCopy.push(filterSection.toLowerCase());
     }

     this.setState({ filterSections: sectionsCopy });
  };

  render() {
    const { filterTerm, filterSections } = this.state;
    const { links: { data, error, loading} } = this.props;
    const filteredArray = this.filterList();

    return (
      <div>
        <Header />
        <div>
          <section className="search mt-5">
            <div className="container">
              <Search updateFilter={this.updateFilter} filterTerm={filterTerm} />
              {!loading && !error && <SearchCategories data={data} updateSections={this.updateSections} filteredSections={filterSections} />}
            </div>
          </section>
        </div>

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

const mapDispatchToProps = dispatch => ({
  getLinks: dispatch(getLinks())
});

export default connect(state => ({
  links: state.links
}), mapDispatchToProps)(App);

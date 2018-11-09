import React from 'react';

const Search = ({ filterTerm, updateFilter }) => (
  <div className="row">
    <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
      <div className="form-group">
        <label htmlFor="search" className="text-light">Search</label>
        <input
          placeholder="Search in name or description"
          id="search"
          name="search"
          className="form-control"
          type="text"
          value={filterTerm}
          onChange={event => updateFilter(event.target.value)}
          autoComplete="off"
        />
      </div>
    </div>
  </div>
);

export default Search;

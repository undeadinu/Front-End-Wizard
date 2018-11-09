import React from 'react';

const isActive = (filteredSections, name) => {
  let activeClass = '';
  if(filteredSections.length > 0) {
    if(filteredSections.indexOf(name.toLowerCase()) > -1) {
      activeClass = 'search-category--active';
    }
  }
  return activeClass;
};

const SearchCategories = ({ data, updateSections, filteredSections }) => (
  <div className={"search-categories"}>
    {data.map(section => (
      <button
        className={`search-category ${isActive(filteredSections, section.name)}`}
        key={section.name}
        onClick={() => updateSections(section.name)}
      >
        {section.name}
      </button>
    ))}
  </div>
);

export default SearchCategories;
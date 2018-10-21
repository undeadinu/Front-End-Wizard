import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const NoResults = ({ searchTerm }) => (
  <div className="no-results mb-5">
    <FontAwesomeIcon icon={faExclamationTriangle} className="no-results-icon"/>
    <p>Oops, no results found for:</p>
    <p>{ searchTerm }</p>
  </div>
);

export default NoResults;


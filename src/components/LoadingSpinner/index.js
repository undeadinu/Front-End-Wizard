import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const LoadingSpinner = () => (
    <div className="mt-5 mb-5">
        <div className="loading-spinner-text">
            Loading
        </div>
        <FontAwesomeIcon spin icon={faSpinner} className="loading-spinner-icon" />
    </div>
);

export default LoadingSpinner;

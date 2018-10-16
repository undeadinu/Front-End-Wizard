import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBook,
  faGlobe,
  faCode,
  faCogs
} from '@fortawesome/free-solid-svg-icons';

const TopicLink = ({data: { url, title, description, type} }) => {

  let articleType;

  switch(type) {
    case "article":
      articleType = <FontAwesomeIcon icon={faBook} className={'article-block__icon'} />;
      break;
    case "website":
      articleType = <FontAwesomeIcon icon={faGlobe} className={'article-block__icon'} />;
      break;
    case "code":
      articleType = <FontAwesomeIcon icon={faCode} className={'article-block__icon'} />;
      break;
    case "webapp":
      articleType = <FontAwesomeIcon icon={faCogs} className={'article-block__icon'} />;
      break;
    default:
      console.log(`${articleType} not found`);
  }

  return (
    <li className="col-12 col-md-6 col-md-4 mb-2">
      <a rel="noopener noreferrer" target="_blank" href={url} className="article-block">
        { articleType }
        <div className="article-block__text">
          <p className="article-block__text-title">{title}</p>
          <p className="article-block__text-description">{description}</p>
        </div>
      </a>
    </li>
  );
};

export default TopicLink;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBook,
  faGlobe,
  faCode,
  faCogs,
  faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons';

const articleType = (type) => {
  let icon;

  if(type === "article") icon = faBook;
  if(type === "website") icon = faGlobe;
  if(type === "code") icon = faCode;
  if(type === "webapp") icon = faCogs;
  if(!icon) icon = faExclamationTriangle;

  return icon;
};

const TopicLink = ({data: { url, title, description, type} }) => {

  return (
    <li className="col-12 col-md-6 col-md-4 mb-2">
      <a rel="noopener noreferrer" target="_blank" href={url} className="article-block">
        <FontAwesomeIcon icon={articleType(type)} className={'article-block__icon'} />
        <div className="article-block__text">
          <p className="article-block__text-title">{title}</p>
          <p className="article-block__text-description">{description}</p>
        </div>
      </a>
    </li>
  );
};

export default TopicLink;

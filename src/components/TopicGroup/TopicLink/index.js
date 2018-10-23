import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import {
  faBook,
  faGlobe,
  faCode,
  faCogs,
  faExclamationTriangle,
  faStar,
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

const TopicLink = ({data: { url, title, description, type, date } }) => {

  let newHtml;
  let isNew = false;

  if(date) {
    const postDate = moment(new Date(date));
    const currentDate = moment(new Date());

    const difference = currentDate.diff(postDate, 'days');

    if(difference < 5) {
      isNew = true;
      newHtml = <div className="article-block__new"><FontAwesomeIcon icon={faStar} className="article-block__new-icon"/> New!</div>;
    }
  }

  return (
    <li className="col-12 col-md-6 col-md-4 mb-2">
      <a rel="noopener noreferrer" target="_blank" href={url} className="article-block">
        { isNew && newHtml }
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

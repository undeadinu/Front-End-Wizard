import React from 'react';
import TopicLink from "./TopicLink";

const TopicGroup = ({ data }) => (
  <div>
    <h2 className="h4">{ data.name }</h2>
    <hr/>
    <ul className="list-unstyled row">
      { data.links.map(link => (
        <TopicLink key={link.url} data={link}/>
      ))}
    </ul>
  </div>
);

export default TopicGroup;

import React from 'react';

const contributorsList = [
  {
    name: 'chiragbhansali',
    url: 'https://github.com/chiragbhansali'
  },
  {
    name: 'VirtualDOMinic',
    url: 'https://github.com/VirtualDOMinic'
  },
  {
    name: 'FinleyCorrigan',
    url: 'https://github.com/FinleyCorrigan'
  },
  {
    name: 'dhrn',
    url: 'https://github.com/dhrn'
  },
  {
    name: 'spmedia',
    url: 'https://github.com/spmedia'
  },
  {
    name: 'xyclos',
    url: 'https://github.com/xyclos'
  },
  {
    name: 'mrcpj1998',
    url: 'https://github.com/mrcpj1998'
  },
  {
    name: 'mikekok',
    url: 'https://github.com/mikekok'
  },
  {
    name: 'mdawsondev',
    url: 'https://github.com/mdawsondev'
  },
  {
    name: 'RyKilleen',
    url: 'https://github.com/RyKilleen'
  },
  {
    name: 'jevenson',
    url: 'https://github.com/jevenson'
  },
  {
    name: 'RianWebster',
    url: 'https://github.com/RianWebster'
  },
  {
    name: 'DoodlePain',
    url: 'https://github.com/DoodlePain'
  },
  {
    name: '20lives',
    url: 'https://github.com/20lives'
  }
];

const Contributors = () => (
  <div className="mt-4">
    <p className="text-light mb-2">Special thanks to all the contributors of this project:</p>
    <ul className="list-unstyled">
      {contributorsList.map(contributor => (
        <li key={contributor.url}><a href={contributor.url} className="text-light">{contributor.name}</a></li>
      ))}
    </ul>
  </div>
);

export default Contributors;

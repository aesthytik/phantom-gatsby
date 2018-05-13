import React from 'react';
import Link from 'gatsby-link';
import ModelItem from './ModelItem';

const ModelAll = ({models}) => (
  <section className="tiles">
    {models.map (model => <ModelItem key={model.node.id} item={model} />)}

  </section>
);

export default ModelAll;

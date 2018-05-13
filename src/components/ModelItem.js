import React from 'react';
import Link from 'gatsby-link';

const ModelItem = ({item}) => (
  <article>

    <div className="sketchfab-embed-wrapper ">
      <iframe width="360" height="270" src={item.node.url} />

    </div>

    <a href={`/${item.node.slug}/`}>
      <h2 style={{marginBottom: 145}}>{item.node.title}</h2>
      <div className="content">
        <p>
          by{item.node.creator}
        </p>
      </div>
    </a>

  </article>
);

export default ModelItem;

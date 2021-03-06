import React from 'react';
import Link from 'gatsby-link';

import Menu from '../components/Menu';

const PostTemplate = ({data}) => (
  <div id="wrapper">
    {/* <Menu /> */}
    <div id="main">
      <div className="inner">
        <h1>{data.contentfulModel.title}</h1>
        <span className="image main">
          <div
            className="sketchfab-embed-wrapper image"
            style={{width: '100%'}}
          >
            <iframe
              width="100%"
              height="600"
              src={`${data.contentfulModel.url}?autostart=1`}
            />

          </div>
        </span>
        <p>
          {data.contentfulModel.slug}
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel venenatis mauris vehicula hendrerit.
        </p>
        <p>
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.
        </p>
      </div>
    </div>

  </div>
);
export default PostTemplate;

export const ModelQuery = graphql`
  query ModelPage($id: String!) {
    # Select the post which equals this id.
    contentfulModel(id: { eq: $id }) {
      id
      slug
      title
     url
    }
  }
  `;

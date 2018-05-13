import React from 'react';
import Link from 'gatsby-link';
import gql from 'graphql-tag';
import Query from 'react-apollo';

import Menu from '../components/Menu';
import ModelItem from '../components/ModelItem';
import ModelAll from '../components/ModelAll';

class Index extends React.Component {
  render () {
    const {data} = this.props;
    const {edges: models} = data.allContentfulModel;
    return (
      <div id="wrapper">
        {/* <Menu /> */}
        <div id="main">
          <div className="inner">
            <header>
              <h1>
                We are <Link to="/">TveroX</Link><br />
                Download free 3-D models.<br />
                Embed, Share, Spread !
                {' '}
                {' '}
              </h1>

            </header>
            <ModelAll models={models} />
          </div>
        </div>
      </div>
    );
  }
}
export default Index;

export const query = graphql`
  query ModelQuery {
    allContentfulModel{
    edges{
      node{
        url
        slug
        creator
        title
      }
    }
  }
  }
`;

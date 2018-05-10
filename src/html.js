import React from 'react';

let stylesStr;
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require (`!raw-loader!../public/styles.css`); // eslint-disable-line
  } catch (e) {
    console.log (e); // eslint-disable-line
  }
}

module.exports = class HTML extends React.Component {
  render () {
    let css;
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{__html: stylesStr}}
        />
      );
    }
    return (
      <html lang="en" {...this.props.htmlAttributes}>
        <head>
          <title>Phantom by HTML5 UP</title>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link rel="stylesheet" href="/css/main.css" />
          {/* <link rel="stylesheet" href="/staticassets/css/ie9.css" />
          <link rel="stylesheet" href="/static/css/ie8.css" /> */}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key="body"
            id="___gatsby"
            dangerouslySetInnerHTML={{__html: this.props.body}}
          />
          {this.props.postBodyComponents}
          <script src="/js/ie/html5shiv.js" />
          <script src="/js/jquery.min.js" />
          <script src="/js/skel.min.js" />
          <script src="/js/util.js" />
          <script src="/js/ie/respond.min.js" />
          <script src="/js/main.js" />

        </body>
      </html>
    );
  }
};

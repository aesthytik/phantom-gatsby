import React from 'react';
import Link from 'gatsby-link';
import Menu from '../components/Menu';
import ModelItem from '../components/ModelItem';

const Index = () => (
  <div id="wrapper">
    <Menu />
    <div id="main">
      <div className="inner">
        <header>
          <h1>
            We are Tvero<br />
            A place for 3-Models and inspiration{' '}
          </h1>

        </header>
        <div className="sketchfab-embed-wrapper">
          <iframe
            src="https://sketchfab.com/models/4282a27e548641159f0048cf6020c9fc/embed"
            frameBorder="0"
          />
          {' '}
          <p>
            {' '}
            <a
              href="https://sketchfab.com/models/4282a27e548641159f0048cf6020c9fc?utm_medium=embed&utm_source=website&utm_campain=share-popup"
              target="_blank"
            >
              Lollipop Girl
            </a>
            {' '}
            by
            {' '}
            <a
              href="https://sketchfab.com/grell?utm_medium=embed&utm_source=website&utm_campain=share-popup"
              target="_blank"
            >
              Grell
            </a>
            {' '}
            on
            {' '}
            <a
              href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campain=share-popup"
              target="_blank"
            >
              Sketchfab
            </a>
            {' '}
          </p>
          {' '}
        </div>
        <section className="tiles">
          <ModelItem />
          <article className="style2">
            <span className="image">
              <img src="images/pic02.jpg" alt="" />
            </span>
            <a href="generic.html">
              <h2>Lorem</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.
                </p>
              </div>
            </a>
          </article>
          <article className="style3">
            <span className="image">
              <img src="images/pic03.jpg" alt="" />
            </span>
            <a href="generic.html">
              <h2>Feugiat</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.
                </p>
              </div>
            </a>
          </article>
          <article className="style4">
            <span className="image">
              <img src="images/pic04.jpg" alt="" />
            </span>
            <a href="generic.html">
              <h2>Tempus</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.
                </p>
              </div>
            </a>
          </article>
          <article className="style5">
            <span className="image">
              <img src="images/pic05.jpg" alt="" />
            </span>
            <a href="generic.html">
              <h2>Aliquam</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.
                </p>
              </div>
            </a>
          </article>
          <article className="style6">
            <span className="image">
              <img src="images/pic06.jpg" alt="" />
            </span>
            <a href="generic.html">
              <h2>Veroeros</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.
                </p>
              </div>
            </a>
          </article>
          <article className="style2">
            <span className="image">
              <img src="images/pic07.jpg" alt="" />
            </span>
            <a href="generic.html">
              <h2>Ipsum</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.
                </p>
              </div>
            </a>
          </article>
          <article className="style3">
            <span className="image">
              <img src="images/pic08.jpg" alt="" />
            </span>
            <a href="generic.html">
              <h2>Dolor</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.
                </p>
              </div>
            </a>
          </article>
          <article className="style1">
            <span className="image">
              <img src="images/pic09.jpg" alt="" />
            </span>
            <a href="generic.html">
              <h2>Nullam</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.
                </p>
              </div>
            </a>
          </article>
          <article className="style5">
            <span className="image">
              <img src="images/pic10.jpg" alt="" />
            </span>
            <a href="generic.html">
              <h2>Ultricies</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.
                </p>
              </div>
            </a>
          </article>
          <article className="style6">
            <span className="image">
              <img src="images/pic11.jpg" alt="" />
            </span>
            <a href="generic.html">
              <h2>Dictum</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.
                </p>
              </div>
            </a>
          </article>
          <article className="style4">
            <span className="image">
              <img src="images/pic12.jpg" alt="" />
            </span>
            <a href="generic.html">
              <h2>Pretium</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.
                </p>
              </div>
            </a>
          </article>
        </section>
      </div>
    </div>

  </div>
);
export default Index;

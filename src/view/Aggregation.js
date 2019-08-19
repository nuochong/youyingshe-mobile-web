import React, { Component } from 'react';
import '../assets/css/Aggregation.scss';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ArticleList from '../components/ArticleList';
import Logo from '../components/Logo';
import Collection from '../components/Collection';

class Aggregation extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentWillMount() {
  }
  render() {
    return (
      <div>
        <Header />
        <section>
          <Collection />
          <hr />
          <ArticleList />
        </section>
        <hr />
        <Logo />
        <Footer />
      </div>
    );
  }
}

export default Aggregation;

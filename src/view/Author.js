import React, { Component } from 'react';
import '../assets/css/view/Author.scss';
import Footer from '../components/Footer';
import UserInfo from '../components/UserInfo';
import Header from '../components/Header';
import ArticleList from '../components/ArticleList';

class Author extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentWillMount() {}
  render() {
    return (
      <div>
        <Header />
        <section>
          <UserInfo />
          <hr />
          <ArticleList />
        </section>
        <hr />
        <Footer />
      </div>
    );
  }
}

export default Author;

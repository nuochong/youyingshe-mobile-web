import React, { Component } from 'react';
import '../assets/css/Author.scss';
import Footer from '../components/Footer';
import UserInfo from '../components/UserInfo';
import Header from '../components/Header';
import ArticleList from '../components/ArticleList';
import Logo from '../components/Logo';

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
        <Logo />
        <Footer />
      </div>
    );
  }
}

export default Author;

import React, { Component } from 'react';
import '../assets/css/view/Article.scss';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Recommend from '../components/Recommend';
import Comment from '../components/Comment';
import ArticleBody from '../components/ArticleBody';
import Logo from '../components/Logo';
import ArticleDirectory from '../components/ArticleDirectory';

class Article extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentWillMount() {}
  render() {
    return (
      <div>
        <Header />
        <ArticleDirectory />
        <ArticleBody />
        <hr />
        <Comment />
        <hr />
        <Recommend />
        <hr />
        <Logo />
        <Footer />
      </div>
    );
  }
}

export default Article;

import React, { Component } from 'react';
import '../assets/css/Home.css';
import '../assets/css/Home.scss';
import Footer from './Footer';
import UserInfo from './UserInfo';
import Header from './Header';
import ArticleList from './ArticleList';
import Recommend from './Recommend';
import Comment from './Comment';
import Hot from './Hot';
import Download from './Download';
import ArticleBody from './ArticleBody';
import Logo from './Logo';
import { Tabs, WhiteSpace } from 'antd-mobile';
class Home extends Component {
  constructor() {
    super();
    //react定义数据
    this.state = {
      name: '张三',
      userinfo: {
        username: 'itying'
      },
      tabs: [{ title: '最新发布' }, { title: '最新评论' }, { title: '热门' }]
    };
  }
  render() {
    return (
      <div>
        <Header />
        <section>
          <UserInfo />
          <hr />
          <Hot />
          <hr />
          <ArticleList />
        </section>
        <hr />
        <ArticleBody />
        <hr />
        <Comment />

        <hr />
        <Recommend />
        <hr />
        <Logo />
        <Footer />
        <hr />
        <Download />
      </div>
    );
  }
}

export default Home;

import React, { Component } from 'react';
import '../assets/css/Home.css';
import '../assets/css/Home.scss';
import Footer from './Footer';
import UserInfo from './UserInfo';
import Header from './Header';
import ArticleList from './ArticleList';
import { Tabs, WhiteSpace } from 'antd-mobile';
class Home extends Component {
  constructor() {
    super();
    //react定义数据
    this.state = {
      name: '张三',
      age: '30',
      userinfo: {
        username: 'itying'
      },
      tabs: [{ title: '最新发布' }, { title: '最新评论' }, { title: '热门' }]
    };
  }
  render() {
    return (
      <div>
        {/* <h2>react组件里面的所有节点要被根节点包含</h2>
        <p>姓名:{this.state.name}</p>
        <p>年龄:{this.state.age}</p>
        <p>对象:{this.state.userinfo.username}</p> */}

        <Header />
        <section>
          <UserInfo />
          <hr />
          <ArticleList />
        </section>
        <hr />
        <section>
          <div class="article-content">
            <h1 class="article-title">吐血整理写给新手的水彩颜料选购指南（干货）</h1>
            <div class="article-message">
              <a href="/u/079cd14cdae6" class="info">
                <img
                  src="https://upload.jianshu.io/users/upload_avatars/4646413/7374b10ccc30.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180/format/webp"
                  class="user-avatar"
                />
                <div class="user-content">
                  <div class="user-nickname">琢磨自留地</div>
                  <span class="label badge-item">简书作者</span>
                </div>
              </a>
              <div class="article-meta">
                <i class="iconfont iconjewel" />
                <span>5.409</span>
                <span>2018-08-05 10:42</span>
                <button class="app-open">
                  <i class="iconfont iconcontextphone" />
                  <span>打开App</span>
                </button>
              </div>
            </div>
            <div class="article-content">&nbsp;</div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Home;

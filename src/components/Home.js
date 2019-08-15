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
        <Footer />
      </div>
    );
  }
}

export default Home;

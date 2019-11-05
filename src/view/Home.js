import React, { Component } from 'react';
import '../assets/css/view/Home.css';
import '../assets/css/view/Home.scss';
import Header from '../components/Header';
import ArticleList from '../components/ArticleList';
import Hot from '../components/Hot';
import Download from '../components/Download';

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
  componentWillMount() {
    console.log('uuuuuuuuuuuu');
    this.api.getTest({}).then(res => {
      console.log('返回成功', res);
      // if (res.code === 200) {
      //   this.setState({ data: res.data });
      // }
    });
  }
  activeChildFun = () => {
    this.refs.download.childFun();
  };
  render() {
    return (
      <div>
        <Header />
        <Hot />
        <hr />
        <ArticleList />
        <hr />
        <Download msg="我是父组件的值" ref="download" />
        <button onClick={this.activeChildFun}>激活子组件的方法</button>
      </div>
    );
  }
}

export default Home;

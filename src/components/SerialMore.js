import React, { Component } from 'react';
import '../assets/css/components/SerialMore.scss';
import { Link } from 'react-router-dom';
export class ArticleBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //isShowStyle: false
    };
  }
  showStyle = () => {
    // this.setState({
    //   isShowStyle: !this.state.isShowStyle
    // });
    // console.log('this.state.isShowStyle :', this.state.isShowStyle);
  };
  render() {
    return (
      <div>
        <div class="recommend-novels-list">
          <div class="top-title">
            <span>更多精彩连载</span>
          </div>
          <div class="novels-group">
            <a href="javascript:;" class="novel">
              <img
                src="https://upload.jianshu.io/book/image/29ff3d7e-7995-4719-a1ab-1f04d51deabb?imageMogr2/auto-orient/strip|imageView2/1/w/200/h/266"
                alt=""
                class="cover"
              />
              <div class="name">《佛说观无量寿佛经》逐句译</div>
              <div class="views-count">4362阅读</div>
            </a>
            <a href="javascript:;" class="novel">
              <img
                src="https://upload.jianshu.io/book/image/5604ce0a-50d6-4184-a3d4-01626ee92775.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/200/h/266"
                alt=""
                class="cover"
              />
              <div class="name">草心集</div>
              <div class="views-count">826117阅读</div>
            </a>
            <a href="javascript:;" class="novel">
              <img src="//cdn2.jianshu.io/asimov/src/assets/image/book/serial_story_default_cover.070dd89f.png" alt="" class="cover" />
              <div class="name">复盘助成长</div>
              <div class="views-count">86349阅读</div>
            </a>
            <a href="javascript:;" class="novel">
              <img
                src="https://upload.jianshu.io/book/image/7f36477c-bf66-48ae-902c-f2e5557af513?imageMogr2/auto-orient/strip|imageView2/1/w/200/h/266"
                alt=""
                class="cover"
              />
              <div class="name">🎧有声简书精读•好评如潮</div>
              <div class="views-count">243656阅读</div>
            </a>
            <a href="javascript:;" class="novel">
              <img
                src="https://upload.jianshu.io/book/image/d50d0c5f-0566-434b-a504-8cece7a02845?imageMogr2/auto-orient/strip|imageView2/1/w/200/h/266"
                alt=""
                class="cover"
              />
              <div class="name">《逐字逐句学古文》</div>
              <div class="views-count">1107阅读</div>
            </a>
            <a href="javascript:;" class="novel">
              <img
                src="https://upload.jianshu.io/book/image/37bc3556-ff52-4d3c-b692-0f3baa6932a6?imageMogr2/auto-orient/strip|imageView2/1/w/200/h/266"
                alt=""
                class="cover"
              />
              <div class="name">《往事知多少三部曲》</div>
              <div class="views-count">60193阅读</div>
            </a>
            <a href="javascript:;" class="novel">
              <img
                src="https://upload.jianshu.io/book/image/600299f0-7041-495e-83cf-624c34281623?imageMogr2/auto-orient/strip|imageView2/1/w/200/h/266"
                alt=""
                class="cover"
              />
              <div class="name">简书笑谈</div>
              <div class="views-count">447246阅读</div>
            </a>
            <a href="javascript:;" class="novel">
              <img src="//cdn2.jianshu.io/asimov/src/assets/image/book/serial_story_default_cover.070dd89f.png" alt="" class="cover" />
              <div class="name">随笔</div>
              <div class="views-count">318898阅读</div>
            </a>
          </div>
          <Link to={`/classify/`} class="recommend-novels-list-load-more">
            {/* <a href="javascript:;" class="recommend-novels-list-load-more"> */}
            查看全部分类
            <i class="iconfont ic-link"></i>
            {/* </a> */}
          </Link>
        </div>
      </div>
    );
  }
}

export default ArticleBody;

import React, { Component } from 'react';
import '../assets/css/Classify.scss';
import ClassifyList from '../components/ClassifyList';

class Article extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentWillMount() {}
  render() {
    return (
      <div>
        <div class="books-category">
          <div class="board">
            <span class="title">
              <div class="icon-sprite leixingxiaoshuo"></div>
              <span class="text">类型小说</span>
            </span>
            <input id="类型小说" type="checkbox" class="show-btn" />
            <label for="类型小说">
              <span class="show-text">展开全部(34)</span>
              <span class="hide-text">收起</span>
              <i class="iconfont ic-show iconbottom"></i>
            </label>
            <ClassifyList />
          </div>

          <div class="board">
            <span class="title">
              <div class="icon-sprite liupai"></div>
              <span class="text">流派</span>
            </span>
            <input id="流派" type="checkbox" class="show-btn" />
            <label for="流派">
              <span class="show-text">展开全部(34)</span>
              <span class="hide-text">收起</span>
              <i class="iconfont ic-show iconbottom"></i>
            </label>
            <ClassifyList />
          </div>
          <div class="board">
            <span class="title">
              <div class="icon-sprite shenghuoshiyong"></div>
              <span class="text">生活实用</span>
            </span>
            <input id="生活实用" type="checkbox" class="show-btn" />
            <label for="生活实用">
              <span class="show-text">展开全部(34)</span>
              <span class="hide-text">收起</span>
              <i class="iconfont ic-show iconbottom"></i>
            </label>
            <ClassifyList />
          </div>
        </div>
      </div>
    );
  }
}

export default Article;

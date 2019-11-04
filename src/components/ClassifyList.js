import React, { Component } from 'react';
import '../assets/css/ClassifyList.scss';
import { Link } from 'react-router-dom';
export class Hot extends Component {
  render() {
    return (
      <ul class="books-category-list limit-height">
        <li>
          <a href="javascript:;" class="category">
            青春
          </a>
        </li>
        <li>
          <a href="javascript:;" class="category">
            儿童文学
          </a>
        </li>
        <li>
          <a href="javascript:;" class="category">
            童话
          </a>
        </li>
        <li>
          <a href="javascript:;" class="category">
            悬疑
          </a>
        </li>
        <li>
          <a href="javascript:;" class="category">
            推理
          </a>
        </li>
        <li>
          <a href="javascript:;" class="category">
            犯罪
          </a>
        </li>
        <li>
          <a href="javascript:;" class="category">
            惊悚
          </a>
        </li>
        <li>
          <a href="javascript:;" class="category">
            恐怖
          </a>
        </li>
        <li>
          <a href="javascript:;" class="category">
            校园
          </a>
        </li>
        <li>
          <a href="javascript:;" class="category">
            纯爱
          </a>
        </li>
        <li>
          <a href="javascript:;" class="category">
            情感
          </a>
        </li>
        <li>
          <a href="javascript:;" class="category">
            言情
          </a>
        </li>
        <li>
          <a href="javascript:;" class="category">
            家庭
          </a>
        </li>
        <li>
          <a href="javascript:;" class="category">
            都市
          </a>
        </li>
      </ul>
    );
  }
}

export default Hot;

import React, { Component } from 'react';
import '../assets/css/ClassifyList.scss';
import { Link } from 'react-router-dom';
export class Hot extends Component {
  render() {
    return (
      <ul class="books-category-list limit-height">
        <li>
          <a href="/mobile/books/?category_id=48" class="category">
            青春
          </a>
        </li>
        <li>
          <a href="/mobile/books/?category_id=262" class="category">
            儿童文学
          </a>
        </li>
        <li>
          <a href="/mobile/books/?category_id=52" class="category">
            童话
          </a>
        </li>
        <li>
          <a href="/mobile/books/?category_id=33" class="category">
            悬疑
          </a>
        </li>
        <li>
          <a href="/mobile/books/?category_id=34" class="category">
            推理
          </a>
        </li>
        <li>
          <a href="/mobile/books/?category_id=35" class="category">
            犯罪
          </a>
        </li>
        <li>
          <a href="/mobile/books/?category_id=36" class="category">
            惊悚
          </a>
        </li>
        <li>
          <a href="/mobile/books/?category_id=37" class="category">
            恐怖
          </a>
        </li>
        <li>
          <a href="/mobile/books/?category_id=220" class="category">
            校园
          </a>
        </li>
        <li>
          <a href="/mobile/books/?category_id=221" class="category">
            纯爱
          </a>
        </li>
        <li>
          <a href="/mobile/books/?category_id=99" class="category">
            情感
          </a>
        </li>
        <li>
          <a href="/mobile/books/?category_id=210" class="category">
            言情
          </a>
        </li>
        <li>
          <a href="/mobile/books/?category_id=50" class="category">
            家庭
          </a>
        </li>
        <li>
          <a href="/mobile/books/?category_id=56" class="category">
            都市
          </a>
        </li>
      </ul>
    );
  }
}

export default Hot;

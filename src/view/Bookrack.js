import React, { Component } from 'react';
import '../assets/css/view/Bookrack.scss';
import Header from '../components/Header';

class Article extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentWillMount() {}
  render() {
    return (
      <div>
        {/* <Header /> */}
        <div id="books">
          <p class="total">共为您找到462部该标签下的连载作品</p>
          <div id="book-waterfall" class="clearfix">
            <div class="book-wrap">
              <div class="book">
                <span class="paid-badge">付费</span>
                <div
                  class="banner"
                  style={{'background-image': 'url("https://upload.jianshu.io/book/image/d6c850c6-13f5-408a-ba3c-fb3b4ef631c3?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/400/format/webp")'}}
                ></div>
                <div class="info">
                  <p class="title">焰火与花儿的味道</p>
                  <div class="user-panel">
                    <span>
                      <img
                        src="https://upload.jianshu.io/users/upload_avatars/11250261/996eb0a9-4d31-44ef-ba93-10dfc8fc9ad2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32/format/webp"
                        class="avatar"
                      />
                      <span class="nickname oneline">水波银</span>
                    </span>
                    <span class="readit">2.6k阅读</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="book-wrap">
              <div class="book">
                <span class="paid-badge">付费</span>
                <div
                  class="banner"
                  style={{'background-image': 'url("https://upload.jianshu.io/book/image/741d215c-5eb3-4202-a7c0-2448c74aa494?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/400/format/webp")'}}
                ></div>
                <div class="info">
                  <p class="title">青春玄幻|我的左眼 第一季</p>
                  <div class="user-panel">
                    <span>
                      <img
                        src="https://upload.jianshu.io/users/upload_avatars/9415528/a0135072-6014-4e7b-8b83-0a98d5c12d08.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32/format/webp"
                        class="avatar"
                      />
                      <span class="nickname oneline">木禾_520</span>
                    </span>
                    <span class="readit">14.2k阅读</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="book-wrap">
              <div class="book">
                <span class="paid-badge">付费</span>
                <div
                  class="banner"
                  style={{'background-image': 'url("https://upload.jianshu.io/book/image/5e07eaee-f965-4dd4-aa27-920bba76b8b9?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/400/format/webp")'}}
                ></div>
                <div class="info">
                  <p class="title">连载小说 | 走出半生风华</p>
                  <div class="user-panel">
                    <span>
                      <img
                        src="https://upload.jianshu.io/users/upload_avatars/7621751/72c4429f-b0f2-40a3-b3f8-58dfcc7cd20b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32/format/webp"
                        class="avatar"
                      />
                      <span class="nickname oneline">梵燕平</span>
                    </span>
                    <span class="readit">0阅读</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="book-wrap">
              <div class="book">
                <span class="paid-badge">付费</span>
                <div
                  class="banner"
                  style={{'background-image': 'url("https://upload.jianshu.io/book/image/bb7a8a81-65eb-465e-ab78-06e713fdc8b5?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/400/format/webp")'}}
                ></div>
                <div class="info">
                  <p class="title">我和初恋结婚了</p>
                  <div class="user-panel">
                    <span>
                      <img
                        src="https://upload.jianshu.io/users/upload_avatars/13129101/864f3678-c881-4f51-b86b-f38786395625.png?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32/format/webp"
                        class="avatar"
                      />
                      <span class="nickname oneline">一路听天下</span>
                    </span>
                    <span class="readit">2.9k阅读</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="book-wrap">
              <div class="book">
                <span class="paid-badge">付费</span>
                <div
                  class="banner"
                  style={{'background-image': 'url("https://upload.jianshu.io/book/image/faa85ca6-048e-44fa-a011-89781ab25330?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/400/format/webp")'}}
                ></div>
                <div class="info">
                  <p class="title">长篇小说《恒境Ⅰ：梦醒》</p>
                  <div class="user-panel">
                    <span>
                      <img
                        src="https://upload.jianshu.io/users/upload_avatars/9788102/96c3a301-da8e-4b80-b06d-6c0c6cd5b297.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32/format/webp"
                        class="avatar"
                      />
                      <span class="nickname oneline">Jasmoon</span>
                    </span>
                    <span class="readit">6.4k阅读</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="book-wrap">
              <div class="book">
                <span class="paid-badge">付费</span>
                <div
                  class="banner"
                  style={{'background-image': 'url("https://upload.jianshu.io/book/image/e604c3b8-f837-4847-bcad-389be73b41a4?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/400/format/webp")'}}
                ></div>
                <div class="info">
                  <p class="title">我的租借女友生涯（已完结）</p>
                  <div class="user-panel">
                    <span>
                      <img
                        src="https://upload.jianshu.io/users/upload_avatars/4226612/2a3ae0ab-19ff-49b3-b0e9-4c1f5f77edb4.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32/format/webp"
                        class="avatar"
                      />
                      <span class="nickname oneline">黄咚咚</span>
                    </span>
                    <span class="readit">83.7k阅读</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="book-wrap">
              <div class="book">
                <span class="paid-badge">付费</span>
                <div
                  class="banner"
                  style={{'background-image': 'url("https://upload.jianshu.io/book/image/e9d59cbf-651d-4def-b7b2-922823813c92?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/400/format/webp")'}}
                ></div>
                <div class="info">
                  <p class="title">《烟花未眠》</p>
                  <div class="user-panel">
                    <span>
                      <img
                        src="https://upload.jianshu.io/users/upload_avatars/14453065/f7689d25-057b-40ae-a0e7-249f84d89b6a?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32/format/webp"
                        class="avatar"
                      />
                      <span class="nickname oneline">麦豆声音工作室</span>
                    </span>
                    <span class="readit">1.6k阅读</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="book-wrap">
              <div class="book">
                <span class="paid-badge">付费</span>
                <div
                  class="banner"
                  style={{'background-image': 'url("https://upload.jianshu.io/book/image/91bfa7ae-5436-4515-b306-fdcbf036a1d5?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/400/format/webp")'}}
                ></div>
                <div class="info">
                  <p class="title">少年如雪</p>
                  <div class="user-panel">
                    <span>
                      <img
                        src="https://upload.jianshu.io/users/upload_avatars/9998609/ff8c5e66-4748-41b7-b202-63a21f95bf68.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32/format/webp"
                        class="avatar"
                      />
                      <span class="nickname oneline">张白路</span>
                    </span>
                    <span class="readit">27.1k阅读</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="book-wrap">
              <div class="book">
                <span class="paid-badge">付费</span>
                <div
                  class="banner"
                  style={{'background-image': 'url("https://upload.jianshu.io/book/image/c0cb8d87-5e05-45d7-a85e-6cf69ea3dc1b?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/400/format/webp")'}}
                ></div>
                <div class="info">
                  <p class="title">《时光回去， 只愿不曾遇到你》</p>
                  <div class="user-panel">
                    <span>
                      <img
                        src="https://upload.jianshu.io/users/upload_avatars/14453065/f7689d25-057b-40ae-a0e7-249f84d89b6a?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32/format/webp"
                        class="avatar"
                      />
                      <span class="nickname oneline">麦豆声音工作室</span>
                    </span>
                    <span class="readit">879阅读</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="book-wrap">
              <div class="book">
                <span class="paid-badge">付费</span>
                <div
                  class="banner"
                  style={{'background-image': 'url("https://upload.jianshu.io/book/image/15318755-9c9f-4c35-8553-8b0fa1d91c2e?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/400/format/webp")'}}
                ></div>
                <div class="info">
                  <p class="title">我和坏小子有个约定</p>
                  <div class="user-panel">
                    <span>
                      <img
                        src="https://upload.jianshu.io/users/upload_avatars/2225917/4aa83a49-e872-4831-b327-58fb61cac60c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32/format/webp"
                        class="avatar"
                      />
                      <span class="nickname oneline">今小那</span>
                    </span>
                    <span class="readit">4.1k阅读</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="book-wrap">
              <div class="book">
                <span class="paid-badge">付费</span>
                <div
                  class="banner"
                  style={{'background-image': 'url("https://upload.jianshu.io/book/image/826ac6d7-105f-41d7-913f-7faa0879b1a4?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/400/format/webp")'}}
                ></div>
                <div class="info">
                  <p class="title">那年梨花开又落</p>
                  <div class="user-panel">
                    <span>
                      <img
                        src="https://upload.jianshu.io/users/upload_avatars/3901504/a55bed06-9083-45ab-b883-2ad669f908e0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32/format/webp"
                        class="avatar"
                      />
                      <span class="nickname oneline">安落汐</span>
                    </span>
                    <span class="readit">46k阅读</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="book-wrap">
              <div class="book">
                <span class="paid-badge">付费</span>
                <div
                  class="banner"
                  style={{'background-image': 'url("https://upload.jianshu.io/book/image/53fcd6dd-49d1-411b-be3a-26ddb7b0e0d0?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/400/format/webp")'}}
                ></div>
                <div class="info">
                  <p class="title">烟花未眠（已完结）</p>
                  <div class="user-panel">
                    <span>
                      <img
                        src="https://upload.jianshu.io/users/upload_avatars/3362463/ac364aca-b6d0-4494-b12c-3f1b9c9179c6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32/format/webp"
                        class="avatar"
                      />
                      <span class="nickname oneline">枫拾贰</span>
                    </span>
                    <span class="readit">62k阅读</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="scroller-1aZec_0">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;

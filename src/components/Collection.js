import React, { Component } from 'react';
import '../assets/css/components/Collection.scss';
export class Collection extends Component {
  render() {
    return (
      <div>
        <section class="collection-container">
          <div class="collection-info">
            <img src={process.env.PUBLIC_URL + '/img/461792731394569594.jpg'} alt="avatar" class="avatar" />
            <div class="summary">
              <div class="name">婚姻育儿</div>
              <div class="desc">
                <a href="javascript:;">简书</a>
                编，18.7万篇文章，95.3万人关注
              </div>
              <div class="intro">
                婚姻是细水长流，育儿是自我修行。婚姻育儿专题投稿须知：1、文章内容与婚姻育儿无关拒收。2、排版整齐，
                <i class="iconfont ic-show" />
              </div>
              <button class="follow-btn collection-follow-button follow">
                <i class="iconfont ic-follow" />
                关注
              </button>
            </div>
            <div class="user-follow-tip">
              <div class="wording">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABkCAMAAAA18wfQAAAAllBMVEUAAADufGXufGbufGb/loz/gWvufGXvfGXufGftfGXvfGbzg2zufGbufGbufGbvfmjufGbvfWfvfWf0h3PxhG7ufGXvfGbufGfvfGbvfWfvgGnxgGjvfGbufWbvfWbufGbue2Xte2bue2bwfWfygGvte2X////uhXH63tn51c7xm4rwlIPzqpv40Mnxn4/tfWj1uK3vjXp6yXGWAAAAJXRSTlMAs/utAwi9nIz0fhawmGovp2NWEg7jcVpLPjYeoYNvRNvXeHQm8kh5bgAAAZNJREFUaN7t1NtugkAQgOFZXCkHRUBOgse21J7R93+5liWxJs1IZcYG4/5XXH0JszsLeENv4KcS+EvEdyG/K0c1PObBhsffou6Og53ciXl+Adit/31Q8MOZkix+OBeqGTssx4qaD/kPT6gCdhjulTUqQDVoRs6RqyyxAFXQTJylUKimzcwzy1Iu3/lFwN6kXpIHHmuaevmR7Fih5Dkwv37DZhK4WwrVeMVNOw3MT2fikMV7G9LRQQ6Atamn6GblmOmg2eWUpOD0YggXKMof4VeFZ/mDc/Itr/jL+1x2yZy0uJ5RdstYnn71y+45gLcqKWWoKzckeC0xOCxphRg8J8I+Bm+I8BqDbSJsY7BREtOwhm8H3j63t+sEP7X3oeGewi/t7Xp1jzV8xXD12t6+Xwui4euFq7f29r1aEA3/tEWqEJZ83T41fLtw9Y607e2CaFjDGtbw/8I20TUwOCbCMQabRNjE4CURTjDYpQ3ZdgHLIcEOoEmTMmEJeJHZ3Y3gVNKxu83XkdCSm5ixcd5exGbSnNsXqEK7aimLUqcAAAAASUVORK5CYII="
                  alt="guide"
                />
                <p>
                  可在简书App中
                  <br />
                  第一时间收到TA的文章更新
                </p>
                <div class="close">×</div>
              </div>
              <div class="option">
                <button class="btn">打开App</button>
                <button class="btn btn-green">App下载</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Collection;

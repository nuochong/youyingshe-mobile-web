import React, { Component } from 'react';
import '../assets/css/components/ArticleBody.scss';
import { Link } from 'react-router-dom';
export class ArticleBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowStyle: false
    };
  }
  showStyle = () => {
    this.setState({
      isShowStyle: !this.state.isShowStyle
    });
    console.log('this.state.isShowStyle :', this.state.isShowStyle);
  };

  render() {
    return (
      <div>
        <section class="article-body-container">
          <div class="article-body collapse-free-content">
            <h1 class="article-title">吐血整理写给新手的水彩颜料选购指南（干货）</h1>
            <div class="article-message">
              <Link to={`/author/`} class="info">
                {/* <a href="javascript:;" class="info"> */}
                <img src={process.env.PUBLIC_URL + '/img/7374b10ccc30.webp'} class="user-avatar" />
                <div class="user-content">
                  <div class="user-content-wrap">
                    <div class="user-nickname">琢磨自留地</div>
                    <span class="label badge-item">简书作者</span>
                  </div>
                </div>
                {/* </a> */}
              </Link>
              <div class="article-meta">
                <i class="iconfont iconjewel" />
                <span>5.409</span>
                <span>2018-08-05 10:42</span>
              </div>
              {/* 连载文章meta */}
              <div class="meta">
                <span>2018-02-02 07:24</span>
                <button class="app-open">
                  <i class="iconfont ic-openinapp iconcontextphone"></i>
                  <span>打开应用</span>
                </button>
                <div class="reader-mode-public reader-mode-iFw96_0">
                  <div class="light-mode-1sdus_0" onClick={this.showStyle}>
                    <em class="day-a1Tt__0" className={['', this.state.isShowStyle ? 'day-a1Tt__0' : 'night-2BQDF_0'].join('')}></em>
                    <span>白天</span>
                  </div>
                  <div class="font-size-2KUVN_0">
                    <i class="iconfont ic-mode-fontsize iconziti1"></i>
                    <span>普通</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="article-content">
              <div class="image-package">
                <div class="image-container">
                  <div class="image-container-fill" />
                  <div class="image-view">
                    <img src={process.env.PUBLIC_URL + '/img/12676667-c84a3febcb3b2c2a.webp'} />
                  </div>
                </div>
                <div class="image-caption">第一组花瓣，完全在试色当中</div>
              </div>
              <p>
                以上就是本次不靠谱科普的全部内容。<b>祝大家活学活用，见招拆招，装好科学逼，约好文化炮。</b>咱们下期节目再见！
              </p>
              <h1>新加入的标题</h1>
              <h2>新加入的标题</h2>
              <h3>新加入的标题</h3>
              <h4>新加入的标题</h4>
              <h5>新加入的标题</h5>
              <h6>新加入的标题</h6>
              <p>
                在原始数据下载比对这个步骤中，其可以调用预编译好的 Bowtie2, Kallisto 和 salmon 的工具。首先可以利用
                <code>downloadPublicSeries(c("GSE74251"))</code>
                下载GEO中的数据信息，然后使用<code>read.csv("ReferenceFiles/GSE74251.csv")</code> 读取文件中的数据信息，接下来就可以使用{' '}
                <code>rawAlignment</code> 这个命令来进行序列比对了。
              </p>
              <blockquote>
                <p>于是我就把 ChIPseeker::upsetplo t重新给实现了，利用了 ggimage + ggplotify，代码长度变成原来的1/3，而且不会出现上面的这些问题。</p>
              </blockquote>
              <pre class="hljs R">
                <code class="undefined">library(BiocManager)</code>
              </pre>
              <p>
                其它具体的更新信息，可以参考
                <a href="https://links.jianshu.com/go?to=https%3A%2F%2Fwww.bioconductor.org%2Fnews%2Fbioc_3_10_release%2F" target="_blank">
                  官方说明
                </a>
                。
              </p>
            </div>
            <div class="article-copyright">© 著作权归作者所有,转载或内容合作请联系作者</div>
          </div>

          <div class="collapse-tips">
            <button class="close-collapse-btn">
              <i class="iconfont iconmore" />
            </button>
            <button class="open-app-btn">打开应用，阅读文章</button>
          </div>

          {/* 剩余内容 */}
          <div id="note-content-divide">
            <div class="line"></div>
            <p class="content">还有 79% 的精彩内容</p>
          </div>

          {/* 上/下一章 */}
          <div class="book-chapter">
            <a href="javascript:;" class="chapter-item prev-chapter half chapter-with-next">
              <div class="text">
                <p>
                  <i class="iconfont ic-back"></i>
                  上一章
                </p>
                <span>青春玄幻|我的左眼61</span>
              </div>
            </a>
            <a href="javascript:;" class="chapter-item next-chapter half">
              <div class="text">
                <p>
                  下一章
                  <i class="iconfont ic-link"></i>
                </p>
                <span>青春玄幻|我的左眼2</span>
              </div>
            </a>
          </div>

          <div class="book-chapter">
            <a href="javascript:;" class="chapter-item prev-chapter none chapter-with-next">
              <div class="text">
                <p>
                  <i class="iconfont ic-back"></i>
                  上一章
                </p>
                <span>青春玄幻|我的左眼61</span>
              </div>
            </a>
            <a href="javascript:;" class="chapter-item next-chapter all">
              <div class="text">
                <p>
                  下一章
                  <i class="iconfont ic-link"></i>
                </p>
                <span>青春玄幻|我的左眼2</span>
              </div>
            </a>
          </div>

          {/* 购买 */}
          <div id="buy-book-panel">
            <div class="support-author">
              <button class="btn btn-paid reward-button buy-book">
                拿下整部￥12.90
                <div class="el-dialog__wrapper">
                  <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog buy-confirm-modal-1biVE_0 buy-confirm-modal-extra">
                    <div class="el-dialog__header">
                      <span class="el-dialog__title"></span>
                    </div>
                  </div>
                </div>
              </button>

              <button class="btn btn-paid reward-button buy-note">
                仅购买本篇￥0.90
                <div class="el-dialog__wrapper">
                  <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog buy-confirm-modal-1biVE_0 buy-confirm-modal-extra">
                    <div class="el-dialog__header">
                      <span class="el-dialog__title"></span>
                    </div>
                  </div>
                </div>
              </button>
              <div class="supporter">
                <div></div>
                <ul class="support-list"></ul>
              </div>
            </div>
          </div>

          <div class="article-praise-container">
            <div class="article-line-hint">
              <div class="line" />
              <p class="content">
                <span>点赞赚钻</span>
                <span class="special">最高日赚数百元</span>
              </p>
            </div>
            <div class="article-praise">
              <i class="iconfont iconlike" />
              <span class="graceful-words">
                赞 <span class="numbers">(0)</span>
              </span>
            </div>
          </div>

          <div class="article-reward">
            <div class="reward-description">
              <a href="javascript:;" class="author-avatar">
                <img src={process.env.PUBLIC_URL + '/img/7374b10ccc30.webp'} />
              </a>
              <div class="author-info">
                <div class="author-nickname">琢磨自留地</div>
                <div class="author-desc">小礼物走一走，来简书关注我</div>
              </div>
              <Link to={`/admire/`}>
                <button class="new-reward-button">赞赏</button>
              </Link>
            </div>

            <div class="support-users">
              <ul>
                <li>
                  <img src="https://upload.jianshu.io/users/upload_avatars/5560827/2b0b6273-b47c-4b89-869a-2b18ed677c9f?imageMogr2/auto-orient/strip|imageView2/1/w/20/h/20/format/webp" />
                </li>
                <li>
                  <img src="//cdn2.jianshu.io/assets/default_avatar/11-4d7c6ca89f439111aff57b23be1c73ba.jpg" />
                </li>
                <li>
                  <img src="https://upload.jianshu.io/users/upload_avatars/5641326/27e6a3de-8bbf-45eb-9f88-b40aded20e06.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/20/h/20/format/webp" />
                </li>
                <li>
                  <img src="//cdn2.jianshu.io/assets/default_avatar/4-3397163ecdb3855a0a4139c34a695885.jpg" />
                </li>
                <li>
                  <img src="https://upload.jianshu.io/users/upload_avatars/9052522/8220e777-bf16-4c54-96da-29cfb3ab3279?imageMogr2/auto-orient/strip|imageView2/1/w/20/h/20/format/webp" />
                </li>
                <li>
                  <div class="iconfont ic-reward-more more iconmoreread"></div>
                </li>
              </ul>
              <div class="reward-text">
                <span class="reward-num">36</span> 人已赞赏
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ArticleBody;

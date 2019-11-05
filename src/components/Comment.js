import React, { Component } from 'react';
import '../assets/css/components/Comment.scss';
export class Comment extends Component {
  render() {
    return (
      <div>
        <section class="article-comment">
          <div class="top-title">
            暂无评论
            <button class="write-comment">
              <i class="iconfont iconwrite" />
              写评论
            </button>
          </div>
          {/* <div class="no-content">
            <img src="//cdn2.jianshu.io/asimov/src/assets/image/note/icon_comment_no.1b12627d.png" />
            <div>
              智慧如你，不想
              <button class="reply-btn">发表一点想法</button>
              咩~
            </div>
          </div> */}
          {/* <div class="comment-wrapper">
            <textarea id="comment" placeholder="写下你的评论..." />
            <div id="backdrop-g1y" class="backdrop show" />
            <div class="drawer comment-reply-drawer">
              <div class="control">
                <button class="cancel">取消</button>
                <button class="submit">确认</button>
              </div>
            </div>
          </div> */}

          <div class="comments-wrap">
            <div class="comment-item">
              <a href="javascript:;" class="user-avatar">
                <span>
                  <img src={process.env.PUBLIC_URL + '/img/f9075afb-775a-433d-9c32-835b8d9893e2.webp'} />
                </span>
              </a>
              <div class="main">
                <div class="comment-user">
                  <div class="nickname-wrap">
                    <a href="javascript:;" class="nickname oneline">
                      青藤阁任春芳
                    </a>
                    <img src={process.env.PUBLIC_URL + '/img/5203a3bf-1c0f-41db-a6f0-31ddb4a929cb.jpg'} width="20" height="20" />
                  </div>
                </div>
                <div class="comment-content">👍👍👍🌹🌹</div>
                <div class="comment-extra">
                  <span class="floor">6楼</span>
                  08.12 09:57
                  <div class="social-wrap">
                    <button class="reply-btn">
                      <i class="iconfont ic-pinglunhuifu" />
                    </button>
                    <button>
                      <i class="iconfont ic-icon_comment_like" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="comment-item ">
              <a href="javascript:;" class="user-avatar">
                <span>
                  <img src={process.env.PUBLIC_URL + '/img/c68e17ff-8f3a-4b48-9f37-062fd25faa70.webp'} />
                </span>
              </a>
              <div class="main">
                <div class="comment-user">
                  <div class="nickname-wrap">
                    <a href="javascript:;" class="nickname oneline">
                      青青竹青
                    </a>
                    <img src={process.env.PUBLIC_URL + '/img/b67c298d-f020-4f89-aac6-0710bc0709ec.jpg'} width="20" height="20" />
                  </div>
                </div>
                <div class="comment-content">你的画，我都看过来了，我觉得这幅最好！</div>
                <div class="comment-extra">
                  <span class="floor">5楼</span>
                  08.06 18:23
                  <div class="social-wrap">
                    <button class="reply-btn">
                      <i class="iconfont ic-pinglunhuifu" />
                    </button>
                    <button>
                      <i class="iconfont ic-icon_comment_like" />
                    </button>
                  </div>
                </div>
                <div class="sub-comment-list">
                  <div class="sub-comment-item">
                    <a href="javascript:;" class="user-avatar">
                      <span>
                        <img src={process.env.PUBLIC_URL + '/img/93da3a3a-e7d3-4fa4-8314-9c1ca05cc021.webp'} />
                      </span>
                    </a>
                    <div class="sub-comment-wrap">
                      <a href="javascript:;" class="nickname oneline">
                        清欢余余
                      </a>
                      <div class="sub-comment-text">
                        <a href="javascript:;" class="maleskine-author" target="_blank">
                          @青青竹青
                        </a>{' '}
                        哈哈，谢谢夸奖，说明我在进步嘛，努力还是有收获哒。。😀
                      </div>
                      <div class="sub-comment-extra">
                        08.07 07:46
                        <button class="reply-btn">回复</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="comment-open-app-btn-wrap">
              <button class="comment-open-app-btn">打开App，查看全部评论</button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Comment;

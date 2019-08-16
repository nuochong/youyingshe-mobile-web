import React, { Component } from 'react';
import '../assets/css/Comment.scss';
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
          <div class="no-content">
            <img src="//cdn2.jianshu.io/asimov/src/assets/image/note/icon_comment_no.1b12627d.png" />
            <div>
              智慧如你，不想
              <button class="reply-btn">发表一点想法</button>
              咩~
            </div>
          </div>
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
        </section>
      </div>
    );
  }
}

export default Comment;

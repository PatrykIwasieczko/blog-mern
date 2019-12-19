import React, { Component } from "react";
import moment from "moment";
import "moment/locale/pl";

class Comments extends Component {
    render() {
        return (
            <div className="container comments">
                {this.props.comments
                    ? this.props.comments
                          .sort((a, b) => a.date - b.date)
                          .reverse()
                          .map((comment, index) => (
                              <div key={index} className="comment">
                                  <h4>{comment.user}</h4>
                                  <p>{moment(comment.date).fromNow()}</p>
                                  <p>{comment.body}</p>
                              </div>
                          ))
                    : null}
            </div>
        );
    }
}

export default Comments;

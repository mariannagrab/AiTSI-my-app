import React from 'react';
import "./Comment.css";

function Comment(props) {

  var date = new Date(props.time);
  return (<article>
    <div className="comment">
      <div className="icon">
        <i className="fa-solid fa-circle-user"></i>
      </div>
      <div className="userName">
        <p><label>{props.name}</label> </p>
      </div>
      <div className="date">
      {date.toDateString()}
      </div>
      <article>
      <div className="commTitle">
        <p><label>{props.title}</label> </p>
      </div>
      <div className="commText">
        <p>{props.commtext} </p>
      </div>
      </article>
    </div>
  </article>);
}


export default Comment;
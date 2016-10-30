// ReactDOM.render(
//   <h1>Hello World by way of something!!</h1>,
//   document.getElementById('main-1')
// );
//
//
// var HelloWorld = React.createClass({
//   render: function(){
//     return (
//       <p>Hello Again World,
//       <span className='label label-primary'>
//       {this.props.name}
//       </span>
//       </p>
//     );
//   }
// });
//
// ReactDOM.render(
//   <HelloWorld name="Daniel"/>,
//     document.getElementById('main')
// )

var Comment = React.createClass({
  render: function() {
    return (
      <div className="panel panel-default comment">
        <div className="panel-heading">
          {this.props.author}
        </div>
        <div className="panel-body">
          {this.props.children}
        </div>
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        <Comment author="Ted">My first comment</Comment>
        <Comment author="Shawn">My gazillioneth comment</Comment>
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
      commentForm
      </div>
    );
  }
});

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
      <h2>Comments</h2>
      <CommentList />
      <h2>Add a Comment</h2>
      <CommentForm />
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);

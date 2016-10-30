ReactDOM.render(
  <h1>Hello World by way of something!!</h1>,
  document.getElementById('main-1')
);


var HelloWorld = React.createClass({
  render: function(){
    return (
      <p>Hello Again World,
      <span className='label label-primary'>
      {this.props.name}
      </span>
      </p>
    );
  }
});

ReactDOM.render(
  <HelloWorld name="Daniel"/>,
    document.getElementById('main')
)

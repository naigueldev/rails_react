class Micropost extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      clicked: false
    }
  }

  _touchedMe(){
    // alert("ouch");
    var newState = {};
    newState["clicked"] = true;
    this.setState(newState);
  }

  render () {
    // debugger;
    let open = <a className="clicker" onClick={this._touchedMe.bind(this)}>Show</a>;

    if (this.state.clicked) {
      open = <div>
        <p>
          <strong>Message: </strong>
          {this.props.micropost.message}
        </p>
        <p>
          <strong>E-mail: </strong>
          {this.props.micropost.email}
        </p>
      </div>;
    }
    return (
      <div>
        {open}
      </div>
    )
  }
}

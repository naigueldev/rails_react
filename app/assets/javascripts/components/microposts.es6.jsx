class Microposts extends React.Component {
  render () {
    return (

      <div className="panel panel-default">
        <div className="panel-heading">Panel heading</div>
        <table className="table">
          <thead>
            <tr>
              <th>Message</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody className="tbody_microposts">
            {this.props.microposts.map(function(x){
              return (
                <tr>
                  <td key={x.id}><a href={"/microposts/" + x.id}>{x.message}</a></td>
                  <td>{x.email}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

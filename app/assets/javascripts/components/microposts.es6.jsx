class Microposts extends React.Component {
  render () {
    return (

      <div class="panel panel-default">
        <div class="panel-heading">Panel heading</div>
        <div class="panel-body">
          <p>...</p>
        </div>

        <table class="table">
          ...
        </table>
      </div>


      <table>
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
    )
  }
}

var React = require('react');
import { Panel, Button} from 'react-bootstrap';


class Foother extends React.Component {

  render(){
    return (
      <div className="container" width="100%">
        <table width="100%">
          <tbody>
            <tr>
              <td>
                <div className="row">
                  <p><a href="#">Home</a></p>
                </div>
              </td>
              <td>
                <div className="row">
                  <p><a href="#">Link1</a></p>
                </div>
              </td>
              <td>
                <div className="row">
                  <p><a href="#">Link2</a></p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="row">
                  <p><a href="#">About</a></p>
                </div>
              </td>
              <td>
                <div className="row">
                  <p><a href="#">Link3</a></p>
                </div>
              </td>
              <td>
                <div className="row">
                  <p><a href="#">Link4</a></p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
			</div>
    );
  }
}

module.exports = Foother;

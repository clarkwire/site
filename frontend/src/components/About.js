import React, { Component } from 'react';
// import NavLink from 'react-bootstrap/NavLink';
import './About.css';

class About extends Component {
  render() {
    return (
      <About>
        <div className="media">
            <img className="align-self-start mr-3" src="..." alt="Generic placeholder"/>
                <div className="media-body">
                <h5 class="mt-0">Top-aligned media</h5>
                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                    <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
         </div>
                </div>
      </About>
    )
  }
}
export default About;
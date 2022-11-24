import React, {Component} from 'react';
import AboutText from "./AboutText";

class AboutUs extends Component {

    constructor(props) {
        super(props);
        this.state = {work: true}
    }

    hideText = () => {
        this.setState({work: !this.state.work})
    }


    render() {
        return (
            <div>
                <button onClick={this.hideText}>hide</button>
                {
                    this.state.work === true
                    ?
                    <AboutText/>
                    :
                    ""
                }
            </div>
        );
    }
}

export default AboutUs;
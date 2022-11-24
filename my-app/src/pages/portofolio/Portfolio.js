import React, {Component} from 'react';
import PortWorks from "./PortWorks";

class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.state={work:[]}
    }

    getWorks=()=>{
        this.setState({work:["Work1","Work2","Work3"]})
    }

    render() {
        return (
            <div>
                <h1>work list</h1>
                <button onClick={this.getWorks}>get works!</button>
                <PortWorks workList={this.state.work}/>
                
            </div>
        );
    }
}

export default Portfolio;
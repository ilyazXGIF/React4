import React, {Component} from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state={input:""}
    }

    changeInput=(event)=>{
        this.setState({input: event.target.value})

    }
    submit=()=>{
        console.log(this.state.input)
        this.setState({input: ''})
    }
    clear=()=>{
        this.setState({input: ''})
    }

    render() {
        return (
            <div>
                <input
                value={this.state.input}
                type='text'
                placeholder='введите текст'
                onChange={this.changeInput}
                />
                <button onClick={this.submit}>add</button>
                <button onClick={()=>this.setState({input:""})}>clear</button>
                
            </div>
        );
    }
}

export default Contact;
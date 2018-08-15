import React, { Component } from "react";
import { connect } from 'react-redux';
import { guessWord } from "./actions/index";

export class UnconnectedInput extends Component {
    constructor(props) {
        super(props);
        this.inputBox = React.createRef();
    }
    render() {
        const content = this.props.success ?
            null :
            (
                <form className="form-inline">
          <input ref={this.inputBox} type="text" placeholder="enter guess" id="word-guess" data-test="input-box" className="mb-2 mx-sm-3"/>
          <button onClick={()=>this.props.guessWord('')}type="submit" data-test="submit-button" className="btn btn-primary mb-2">Submit</button>
         </form>
            )

        return (
            <div data-test="component-input" >
            {content}
        </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        success: state.success
    };
};

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);

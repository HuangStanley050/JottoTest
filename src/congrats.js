import React from "react";

export default (props) => {


    if (props.success) {
        return (
            <div data-test="component-congrats">
            <span data-test="congrats-message">
            Congrats! You won.
            </span>
            
            </div>
        );

    }
    else {
        return (<div data-test="component-congrats"/>);
    }

};

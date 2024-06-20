import React from "react";

export class ComponentWillUnmount extends React.Component {
    componentWillUnmount() {
        console.log('ComponentWillUnmount unmount');
    }
    render() {
        return (
            <div>
                <p>hello unmount</p>
            </div>
        )
    }
}
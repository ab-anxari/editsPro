import React, {Component} from 'react';

class message extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            message: 'Welcome Visitor',
            btn: 'Subscribe'
        }

    }

    changeMessage()
    {
        let a = this.state.message;
        if(a === 'Welcome Visitor...')
        {
            this.setState({
                     message: 'Thanks for Subscribing...!',
                     btn: 'Unsubscribe'
                });
        }

        else
        {
            this.setState({
                message: 'Welcome Visitor...',
                btn: 'Subscribe'
           });
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button className='btn' onClick = {() => this.changeMessage()}>{this.state.btn}</button>
            </div>
        )
    }
}

export default message;
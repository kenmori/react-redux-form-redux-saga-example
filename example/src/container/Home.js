import React, { Component } from 'react';
import MyForm from '../component/MyForm/index';
import {connect} from 'react-redux';
export class Home extends Component {
    render(){
        return (
            <div className='mlabo'>
            <MyForm />
        </div>
    )
    }
}

export default connect({
})(Home);

import React, { Component } from 'react';
import Header from '../Header/Header';

export default class  extends Component {
    render() {
        return (
            <div>
                <Header url={'profile'} subHeading={'scalable Education'} button={'My Profile'} title={'Catalog'}/>
            </div>
        );
    }
}
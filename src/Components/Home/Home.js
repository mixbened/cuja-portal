import React, { Component } from 'react';
import Header from '../Header/Header';
import './Home.css';
import axios from 'axios';

export default class extends Component {
    constructor(){
        super();
    };

    hitEndpoint(){
        axios.post('/test', {'info': 'this is content'}).then(res => {
            console.log('Response please!', res.data)
        }).catch(err => {
            console.log('Not too successfull boy', err)
        })
    }

    render() {
        return (
            <div>
                <Header url={'catalog'} subHeading={'scalable Education'} button={'Modules'} title={'Cuja'}/>
                <section>
                    <h5>Get it going</h5>
                    <p>This is the Cuja Portal. The Engine behind your digital Education. You have a ton of Resources for the subject you are looking for. Or you can attend at an Online Course. Moreover these Modules hold the Content for our Courses, Workshops and Bootcamp, so feel free to visit them! </p>
                    This is how it works:
                    <ol>
                        <li>Pick a Qualification you want to receive or a skill that you'd like to earn.</li>
                        <li>Then pick the time flexibility you can afford for your Education.</li>
                        <li>You will receive a recommendation what Module you should pick.</li>
                        <li>You can access your Material and Resources under <i>My Profile</i></li>
                        <li>Discuss your Questions and Problems in the Forum</li>
                    </ol>
                    <button onClick={() => this.hitEndpoint()}>Let's Gooo!</button>
                </section>
            </div>
        );
    }
}
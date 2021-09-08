import React, { Component } from 'react'
import { FaTwitter, FaCircle } from "react-icons/fa";
import { BsFillCaretRightFill } from "react-icons/bs";


import "./TwitterFeed.css";
export default class TwitterFeed extends Component {
    constructor(props) {
        super(props);
        console.log("TwitterFeed cityname:", props.cityName);
    }

    render() {
        return (
            <div className="twitter_feed--main">
                <div className="twitter_feed--header">
                    <FaTwitter className="twitter_feed--logo" />
                    <h3>Twitter Feed </h3>
                    <span className="twitter_feed--city"> #{this.props.cityName}</span>
                </div>

                <div className="twitter_feed--news">
                    <div className="twitter_feed--item">
                        <FaCircle className="grey-circle" />
                        <p>Don't forget your sunscreen tomorrow! </p>
                    </div>
                    <div className="twitter_feed--item">
                        <FaCircle className="grey-circle" />
                        <p>Amazing weather in {this.props.cityName}!</p>
                    </div>
                </div>

                <div className="next-div">
                    <h4 className="next-text">NEXT</h4>
                    <BsFillCaretRightFill className="next-arrow" />
                </div>
            </div>
        )

    }
}

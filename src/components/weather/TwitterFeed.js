import React, { Component } from 'react'
import { FaTwitter, FaCircle } from "react-icons/fa";
import { BsSearch, BsFillCaretRightFill } from "react-icons/bs";
export default class TwitterFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: props.cityName,
        };

        console.log("TwitterFeed cityname:", props.cityName);
    }

    render() {
        return (
            <div className="left-part">
                <div className="twitter-feed">
                    <FaTwitter className="twitter-logo" />
                    <h3>Twitter Feed </h3>
                    <span className="cityhashtag">#{this.state.cityName}</span>
                </div>

                <div className="twitter-news">
                    <div className="twitter-feed-words">
                        <FaCircle className="grey-circle" />
                        <p>Don't forget your sunscreen tomorrow! </p>
                    </div>
                    <div className="twitter-feed-words">
                        <FaCircle className="grey-circle" />{" "}
                        <p>Amazing weather in {this.state.cityName}!</p>
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

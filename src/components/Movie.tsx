import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
// import history from '../history';
// import logo from '../logo.svg';

import {  RouteComponentProps } from 'react-router-dom';
import { images } from '../App';

import './movie.css';


export class Movie extends React.Component<RouteComponentProps<any>, {}> {
    public state = {
        index: 1,
        movieIndex: 0
    }
    public onChangeIndex = (index: number) => {
        setTimeout(() =>
            this.setState({ index }, () => {
                if (index !== 1) {
                    this.setState({ movieIndex: this.state.movieIndex === images.length - 1 ? 0 : this.state.movieIndex + 1, index: 1 })
                }
            }), 400)
    }

    public render() {
        const swipe = [
            <div className='no' key={0}>NO</div>,


            <div key={1} className="movie"> <img src={images[this.state.movieIndex]} />  </div>

            , <div className='yes' key={2}> YES</div>];
        console.log(this.state);
        return (
            <div className="App">

                <SwipeableViews axis='x' enableMouseEvents={true} index={this.state.index} onChangeIndex={this.onChangeIndex} hysteresis={0.6} >
                    {swipe}
                </SwipeableViews>

            </div>

        );
    }
}

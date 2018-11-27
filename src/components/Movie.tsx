import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import history from '../history';
import { RouteComponentProps } from 'react-router-dom';
import { images } from '../App';

import './movie.css';


export class Movie extends React.Component<RouteComponentProps<any>, {}> {
    public state = {
        index: 1,
        movieIndex: 0,
        verticalIndex: 1
    }
    public onChangeIndex = (index: number) => {
        setTimeout(() =>
            this.setState({ index }, () => {
                if (index !== 1) {
                    this.setState({ movieIndex: this.state.movieIndex === images.length - 1 ? 0 : this.state.movieIndex + 1, index: 1 })
                }
            }), 400)
    }

    public onClick = () => {
        history.push('/')
    }

    public render() {
        const swipeImage =


            <div key={2} className="movie">
                <div className="happy" />
                <img src={images[this.state.movieIndex]} />
                <div className="sad" />
            </div>

        const swipe = [
            <div className='yes' key={0}> YES</div>,
            swipeImage,
            <div className='no' key={1}>NO</div>,
        ]
        return (
            <div className="App">
                <div className="header" onClick={this.onClick}> Back</div>
                <SwipeableViews className="swipe-container" axis='x' enableMouseEvents={true} index={this.state.index} onChangeIndex={this.onChangeIndex} hysteresis={0.6} >
                    {swipe}
                </SwipeableViews>

            </div>

        );
    }
}

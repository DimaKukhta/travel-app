import React, { Component } from 'react';
import { months } from '../../types/types';
import { addZeroes } from '../../utils/addZeroes';


interface TClockProps {
  timezone: number,
}

export default class Clock extends Component<TClockProps> {
  timerID?: number;
  
  state = {
    time: new Date(),
  }

  tick = () => {
    this.setState({
      time: new Date(),
    })
  }

  componentDidMount() {
    this.timerID = window.setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    window.clearInterval(this.timerID)
  }

  render(){
    const { time } = this.state;
    const { timezone } = this.props;

    time.setSeconds(time.getUTCSeconds() + timezone);
    //date
    const year = time.getUTCFullYear();
    const month = addZeroes(months[time.getUTCMonth()]);
    const day = addZeroes(time.getUTCDate());
    //time
    const hours = addZeroes(time.getUTCHours());
    const minutes = addZeroes(time.getUTCMinutes());
    const seconds = addZeroes(time.getUTCSeconds());

    const currentDateInCapital = `${year} ${month}, ${day}`;
    const currentTimeInCapital = `${hours}:${minutes}:${seconds}`;

    return (
      <div className='widget-clock'>
        <div className='widget-date'>{currentDateInCapital}</div>
        <div className='widget-time'>{currentTimeInCapital}</div>
      </div>
    )
  } 
}
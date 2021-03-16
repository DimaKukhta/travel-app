import React, { Component } from 'react';
// import { months, daysOfWeek } from '../../../types/types';
import { addZeroes } from '../../../utils/addZeroes';
import { translateWidget } from '../../../translateData/translate';



interface TClockProps {
  timezone: number,
  lang: string,
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
    const { timezone, lang } = this.props;

    time.setSeconds(time.getUTCSeconds() + timezone);
    //date
    const year = time.getUTCFullYear();
    const month = addZeroes(translateWidget.clock.months[lang][time.getUTCMonth()]);
    console.log(month)
    const day = addZeroes(time.getUTCDate());
    const dayOfWeek = translateWidget.clock.daysOfWeek[lang][time.getUTCDay()];
    //time
    const hours = addZeroes(time.getUTCHours());
    const minutes = addZeroes(time.getUTCMinutes());
    const seconds = addZeroes(time.getUTCSeconds());

    const currentDateInCapital = `${year} | ${day}, ${month} | ${dayOfWeek}`;
    const currentTimeInCapital = `${hours}:${minutes}:${seconds}`;

    return (
      <div className='widget-clock'>
        <div className='widget-date'>{currentDateInCapital}</div>
        <div className='widget-time'>{currentTimeInCapital}</div>
      </div>
    )
  } 
}
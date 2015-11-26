import React, { Component, PropTypes } from 'react';
import './Event.scss';
import ClassNames from 'classnames';

import EventInfo from '../EventInfo';

class Event extends Component {

  constructor(props){
    super(props);
    this.state = {infoHidden : true};
    //this.displayInfo = this.displayInfo.bind(this);
  }

  displayInfo  = () => {
    this.setState({infoHidden : !this.state.infoHidden});
  }

  render() {
    const MONTHS = ['Janvier', 'Février', 'Mars', 'Avril', 'Mais', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
    var content = null;
    var liClassName = ClassNames({ 
      'timeline__year--big' : this.props.info === undefined,
      'timeline__year' : this.props.info !== undefined
    });
    var btnClassName = ClassNames({
      'timeline__btn' : true,
      'timeline__btn--selected' : !this.state.infoHidden
    });
    var briefClassName = ClassNames({
      'timeline__brief' : true,
      'timeline__brief--hidden' : !this.state.infoHidden
    });
    var dateToPrint = this.props.date.getFullYear();

    if(this.props.info !== undefined){
      dateToPrint = `${this.props.date.getDate()} ${MONTHS[this.props.date.getMonth()]}`
      content = <EventInfo title={this.props.info.title} content={this.props.info.content} hidden={this.state.infoHidden} />
    }

    return (
      <li className={liClassName}>
        <time className="timeline__time" dateTime="this.props.date"><span>{dateToPrint}</span></time>
        <button className={btnClassName} onClick={this.displayInfo}></button>
        <span className={briefClassName}>{this.props.info && this.props.info.brief || ''}</span>
        {content}
      </li>
    );
  }

}

export default Event;


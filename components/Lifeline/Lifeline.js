import React, { Component, PropTypes } from 'react';

import './Lifeline.scss';

import Event from '../Event';

class Lifeline extends Component {

	render() {
		var events = [];
	    var lastYear = null;
	    var i = 0;
	    this.props.events.forEach(function(event) {
	      	var date = new Date(event.date);
	       	// New Year
	        if (date.getFullYear() !== lastYear) {
	            events.push(<Event date={date} key={i++} />);
	        }
	        // The current event :
	        events.push(<Event date={date} info={event.info} key={i++}/>);
	        //events.push(<ProductRow product={event} key={event.name} />);
	        lastYear = date.getFullYear();
	    }.bind(this));

    	return (
    		<ul className="timeline">
    			{events}
  			</ul>
  		);
	}

}

export default Lifeline;

/*

    <li>
      <time className="timeline__time--big" datetime="2008-02-14 20:00"><span>2008</span></time>
      <button className="timeline__btn--big"></button>
    </li>
    <li>
      <time className="timeline__time" datetime="2008-02-14 20:00"><span>20 juin</span></time>
      <button className="timeline__btn"></button>
      <article className="timeline__article">
	<header><h3>Hello</h3></header>
	<p className="timeline__article-content">
	  Bla bla bla
	</p>
      </article>
    </li>

    <li>
      <time className="timeline__time" datetime="2008-02-14 20:00"><span>29 Juillet</span></time>
      <button className="timeline__btn"></button>
      <article className="timeline__article">
	<header><h3>Hello</h3></header>
	<p className="timeline__article-content">
	  Bla bla bla
	</p>
      </article>
    </li>

*/
import React, { Component, PropTypes } from 'react';
import './EventInfo.scss';

class EventInfo extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      	<article className={this.props.hidden ? 'hidden timeline__article' : 'timeline__article'}>
        	<header><h3>{this.props.title}</h3></header>
          	<p className="timeline__article-content">
            	{this.props.content}
          	</p>
        </article>
    );
  }

}

export default EventInfo;
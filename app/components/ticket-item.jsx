import React, { Component, PropTypes } from 'react';

// Formattage de la date
const dateConfig = {
  weekday: 'short',
  year:'numeric',
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
};

export default class TicketItem extends Component {
  constructor() {
    super(...arguments)
  }

  render() {
    const { ticket } = this.props;

    const departureTime = new Date(ticket.segment[0].departureTime).toLocaleDateString('en-US', dateConfig);
    const arrivalTime = new Date(ticket.segment[ticket.segment.length - 1].arrivalTime).toLocaleDateString('en-US', dateConfig);

    // On récupère le nombre d'escale dans le vol
    let stops;
    if (ticket.segment.length === 2) {
      stops = '1 stops';
    } else if(ticket.segment.length - 1 > 1){
      stops = `${ticket.segment.length - 1} stops`;
    }

    return (
        <div className="ticket">
          <span className="ticket-company">{ticket.company}</span>
          <span className="ticket-location">
            <strong>{ticket.segment[0].origin}</strong>{' '}
            <small>{departureTime}</small>
          </span>
          <span className="ticket-separator"></span>

          <span className="ticket-location">
             <strong>{ticket.segment[ticket.segment.length - 1].destination}</strong>{' '}
            <small>{arrivalTime}</small>
          </span>
          <span className="ticket-connection">
            {stops}
          </span>
          <span className="ticket-points">
            <button>{ticket.points} points</button>
          </span>
        </div>
    )


  }
}

TicketItem.propTypes = {
  ticket: PropTypes.shape({
    id: PropTypes.string,
    company: PropTypes.string,
    points: PropTypes.number,
    duration: PropTypes.number,
    segment: PropTypes.array
  }),
};
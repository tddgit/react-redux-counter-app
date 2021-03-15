import React from 'react';
import EventItem from './event-item';
import classes from './event-list.module.css';

const EventList = (props) => {
    // eslint-disable-next-line react/prop-types
    const { items } = props;

    return (
        <ul className={classes.list}>
            {/* eslint-disable-next-line lodash/prefer-lodash-method,react/prop-types */}
            {items.map((event) => (
                <EventItem
                    key={event.id}
                    id={event.id}
                    title={event.title}
                    address={event.address}
                    date={event.date}
                    location={event.location}
                    image={event.image}
                />
            ))}
        </ul>
    );
};

export default EventList;

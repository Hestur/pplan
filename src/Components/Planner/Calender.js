import BigCalendar from "react-big-calendar";
import React, { Component } from 'react'
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import moment from 'moment';
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";


const DragAndDropCalendar = withDragAndDrop(BigCalendar);
const localizer = BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          start: new Date(),
          end: new Date(),
          title: "Some title",
          id: 1,
          allDay: false
        }
      ]
    };
    this.onEventDrop = this.onEventDrop.bind(this);
    this.onEventResize = this.onEventResize.bind(this);
  }

  onEventResize({ event, start, end }) {
    const { events } = this.state;
    const nextEvents = events.map(existingEvent => {
      return existingEvent.id === event.id
        ? { ...existingEvent, start, end }
        : existingEvent;
    });

    this.setState({
      events: nextEvents
    });
  }

  onEventDrop({ event, start, end }) {
    const { events } = this.state;
    const idx = events.indexOf(event);
    const updatedEvent = { ...event, start, end };
    const nextEvents = [...events];
    nextEvents.splice(idx, 1, updatedEvent);
    this.setState({
      events: nextEvents
    });
  }

  onSlotChange(slotInfo) {
    var startDate = moment(slotInfo.start.toLocaleString()).format("YYYY-MM-DD HH:mm:ss");
    var endDate = moment(slotInfo.end.toLocaleString()).format("YYYY-MM-DD HH:mm:ss");
    console.log('startTime', startDate); //shows the start time chosen
    console.log('endTime', endDate); //shows the end time chosen
}

onEventClick(event) {
  console.log(event) //Shows the event details provided while booking
}

  render() {
    const { events } = this.state;
    return (
      <div>
        <DragAndDropCalendar
          selectable
          onSelectEvent={event => this.onEventClick(event)}
          onSelectSlot={slotInfo => this.onSlotChange(slotInfo)}
          style={{ height: "100vh" }}
          localizer={localizer}
          culture="en-GB"
          events={events}
          defaultDate={new Date()}
          defaultView="month"
          startAccessor="start"
          endAccessor="end"
          titleAccessor="title"
          onEventResize={this.onEventResize}
          onEventDrop={this.onEventDrop}
          resizable={true}
        />
      </div>
    );
  }
}

export default Calendar;

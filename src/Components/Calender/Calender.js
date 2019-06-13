import BigCalendar from "react-big-calendar";
import React, { Component } from 'react'
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from 'axios';

const localizer = BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }
  convertDate = (date) => {
    return moment.utc(date).toDate()
  }


  componentDidMount() {


    axios.get('http://localhost:4000/Plan')
      .then(response => {
        console.log(response.data);
        let plan = response.data;
        
        for (let i = 0; i < plan.length; i++) {
          
          plan[i].start = this.convertDate(plan[i].start)
          plan[i].end = this.convertDate(plan[i].end)
          
        }

        this.setState({
          events:plan
        })
  
      })
      .catch(function (error) {
        console.log(error);
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
        <BigCalendar
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
          resizable={true}
        />
      </div>
    );
  }
}

export default Calendar;

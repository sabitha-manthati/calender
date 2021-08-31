
import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import bootstrapPlugin from '@fullcalendar/bootstrap'
import listPlugin from '@fullcalendar/list'

import interactionPlugin from '@fullcalendar/interaction'
;
// a plugin!


export default class DemoApp extends React.Component {

 

  render() {

    return (
      <FullCalendar
        plugins={[dayGridPlugin, bootstrapPlugin, timeGridPlugin, listPlugin,interactionPlugin  ]}
        initialView="dayGridMonth"
        themeSystem='bootstrap'
        weekNumbers='true'
        //weekends='false'
        dayMaxEvents=' true'// allow "more" link when too many events
        //events2='https://fullcalendar.io/demo-events.json'
        aspectRatio='2'
        expandRows='true'
        nowIndicator='true'
        height='auto'
        eventShortHeight='40'
        slotEventOverlap='false'
        allDaySlot='true'
        //hiddenDays='[0,4]'
        dayHeaders='true'
        slotDuration='2:00'
        scrollTime='06:00:00'
        timeZone='local'
        navLinks='true'
        selectable='true'
        droppable='true'
        editable='true'
        copy= 'true'
        eventStartEditable='true'
        dragScroll='true'
        eventAllow={function(dropInfo, draggedEvent) {
          if (draggedEvent.id === '111') {
            return dropInfo.start < new Date(2021, 8, 21); // a boolean
          }
          else {
            return true;
          }
        }
      }
        eventOverlap={function(stillEvent, movingEvent) {
          return stillEvent.allDay && movingEvent.allDay;
        }
      }
        dateClick={
          function (info) {
            alert('clicked ' + info.dateStr);//nw

          }
        }

        unselectAuto='true'//nw
        //selectMirror='true'
        //nw

        //listDayFormat='false'
        //listDaySideFormat='true'
        views={{
          timeGridFourDay: {
            type: 'timeGrid',
            duration: { days: 4 },
            buttonText: '4 day'
          }
        }
        }
        visibleRange={{
          start: '2021-08-7',
          end: '2021-08-10'
        }}



        headerToolbar={
          {
            left: "prev,next, myCustomButton",
            center: "title",
            right: "timeGridDay,timeGridWeek,dayGridMonth,list"
          }

        }
        events={
          [
            { id:'111',title: 'meeting', date: '2021-08-06' },
            { id:'111',title: 'some event', date: '2021-08-06' },
            
            { id:'111',title: 'conference', date: '2021-08-06' },
            { title: 'event 2', date: '2021-08-07' },
            { title: 'event 3', date: '2021-08-18' },
            {
              title: 'Birthday Party',
              start: '2021-08-13T07:00:00',
              backgroundColor: 'green',
              borderColor: 'green'
            },
            { title: 'some event', date: '2021-08-15' },
            { title: 'bday', date: '2021-08-20', display: 'background' },
            { title: 'conference', date: '2021-08-25', display: 'background' },
            { title: '10:30am to 12:30pm', date: '2021-08-25',  },
            { title: 'meeting with grp', date: '2021-08-28',  },
            { title: 'some event', date: '2021-08-12',  }

          ]}
          

        titleFormat={{

          year: 'numeric',
          day: 'numeric',
          month: 'long'

        }
        }
        footerToolbar={
          {

            right: 'prev,next'
          }
        }

        customButtons={{
          myCustomButton: {
            text: 'custom!',
            click: function () {
              alert('clicked the custom button!');
            }
          }
        }
        }
        windowResize={function (arg) {
          alert('The calendar has adjusted to a window resize. Current view: ' + arg.view.type);
        }
        }
         /*customButtons={
         {
           addEventButton:
           {
             text:'add event...',
             click:function()
             {
              var dateStr = prompt('Enter a date in YYYY-MM-DD format');
              var date = new Date(dateStr + 'T00:00:00')
              if (!isNaN(date.valueOf())) { // valid?
                calendar.addEvent({
                  title: 'dynamic event',
                  start: date,
                  allDay: true
                });
                alert('Great. Now, update your database...');
              }
              else{
                alert('invalid event')
              }

              

             }
           }
         }
       } */
      

       
      />
    )
  }
}
import React, { Component } from "react";
import './Info.css';

export default class Info extends Component {
  render() {
    return (
        <main className="info container">
        <h1>About Our Website</h1>

        <h3>Description</h3>

        <p className="text-justify">
          The users of this application can make use of a scheduling system
          which enables them to plan out their days systematically. The app asks
          users a set of tasks scheduled for their day and plans out a calendar.
          Due to COVID restrictions, the system also provides alternative tasks
          for the users to pursue if certain tasks are deemed unsafe for the
          current environment. Finally, the website allows users to export the
          calendar in the form of an .ics file to be used with other calendar
          apps.
        </p>

        <h3>How to Use</h3>
        <ol>
          <li>
            The intro page contains a slider that asks users the intended hours
            to be planned for a day.
          </li>
          <li>
            Users are directed to a page where they can add preferred tasks for
            a certain day
          </li>
          <li>
            By clicking the add to calendar button, the relevant tasks are added
            to a list
          </li>
          <li>
            From the list, users can drag and drop tasks in time-slots and build
            their schedule.
          </li>
        </ol>
      </main>
      
    );
  }
}

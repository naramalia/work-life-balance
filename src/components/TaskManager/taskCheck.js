import React, { Component } from 'react';

export default class TaskCheck extends Component {
     
    render () {
        return (
            // <h2>TASK CHECK</h2>
             <div className="daily-tasks-wrapper">
                <div className="daily-tasks_header">
                
                    <div className="daily-tasks_date">
                    date
                    </div>
                    <div className="daily-tasks_time">
                    time
                    </div>
                    <div className="daily-tasks_timer">
                    timer
                    </div>
                </div>

                <div className="daily-tasks_task-wrapper">
                    <div className="daily-tasks_timetable">
                        <div className="daily-tasks_timetable-table">
                            timetable
                            <div className="daily-tasks_timetable-slot">
                                placeholder 
                            </div>
                            <div className="daily-tasks_task">
                                task (time, task, duration, notes, status)
                            </div>
                        </div>

                        <div className="daily-tasks_timetable-actions">
                            {/* function - actions(complete, reschedule, delete) */}
                        </div>
                    
                    </div>

                    <div className="daily-tasks_shortlist">
                    shortlist
                    {/* function - task, time needed, priority */}
                    </div>

                    {/* <div className="daily-tasks_task-add">
                        form - add to timetable or add to shortlist, require a login for this function
                    </div> */}
                </div>
                
                
            </div>
        )
    }
}
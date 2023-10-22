import React, { useEffect, useState } from 'react';
import './largeWidget.css';
import axios from 'axios';

export default function LargeWidget() {
  const [appointments, setAppointments] = useState([]);
  

  const Button = ({ isPending, isOtherValue }) => {
    if (isPending) {
      return (
        <button className="widgetLgBtn Pending">Pending</button>
      );
    } else if (!isPending && isOtherValue) {
      return (
        <button className="widgetLgBtn Approved">Approved</button>
      );
    } else if (!isPending && !isOtherValue) {
      return (
        <button className="widgetLgBtn Declined">Declined</button>
      );
    } else {
      return null; // Handle other cases as needed
    }
  };

  useEffect(() => {
    axios.get('http://localhost:5000/api/appointments')
      .then(response => {
        setAppointments(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Appointment</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Name</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Status</th>
        </tr>

        {appointments.map(appointment => (
          <tr className="widgetLgTr" key={appointment.AppointmentID}>
            <td className="widgetLgUser">
              <span className="widgetLgName" style={{ marginTop: "10px" }}>
                {`${appointment.FirstName} ${appointment.LastName}`}
              </span>
            </td>
            <td className="widgetLgDate">{appointment.AppointmentDate}</td>
            <td className="widgetLgStatus" style={{ marginRight: '30px' }}>
              <Button isPending={appointment.isPending} isOtherValue={appointment.isOtherValue} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

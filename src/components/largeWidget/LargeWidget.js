import React from 'react'
import './largeWidget.css'

//import images ==========>
import profile from '../../images/profile.jpg' 

export default function LargeWidget() {

  const Button = ({type}) =>{
    return <button className={'widgetLgBtn ' + type}>{type}</button>
  }
  return (
    <div className='widgetLg'>
    <h3 className='widgetLgTitle'>Latest Appointment</h3> 
    <table className='widgetLgTable'>
      <tr className='widgetLgTr'>
        <th className='widgetLgTh'>Name</th>
        <th className='widgetLgTh'>Date</th>
        <th className='widgetLgTh'>Amount</th>
        <th className='widgetLgTh'>Status</th>
      </tr>

      <tr className='widgetLgTr'>
        <td className='widgetLgUser'>
        
        <span className='widgetLgName' style={{marginTop:"10px"}}> Jedyne Ziah C. De Guzman</span>
        </td>

        <td className='widgetLgDate'>September 29 2023</td>
        <td className='widgetLgAmount'>$5.00</td>
        <td className='widgetLgStatus'><Button type="Approved"> </Button></td>
      </tr>

      <tr className='widgetLgTr'>
        <td className='widgetLgUser'>
        
        <span className='widgetLgName'style={{marginTop:"10px"}}> Jedyne Ziah C. De Guzman</span>
        </td>

        <td className='widgetLgDate'>September 29 2023</td>
        <td className='widgetLgAmount'>$5.00</td>
        <td className='widgetLgStatus'><Button type="Declined"> </Button></td>
      </tr>

      <tr className='widgetLgTr'>
        <td className='widgetLgUser'>
        
        <span className='widgetLgName'style={{marginTop:"10px"}}> Jedyne Ziah C. De Guzman</span>
        </td>

        <td className='widgetLgDate'>September 29 2023</td>
        <td className='widgetLgAmount'>$5.00</td>
        <td className='widgetLgStatus'><Button type="Pending"> </Button></td>
      </tr>

      <tr className='widgetLgTr'>
        <td className='widgetLgUser'>
        
        <span className='widgetLgName' style={{marginTop:"10px"}}>  Jedyne Ziah C. De Guzman</span>
        </td>

        <td className='widgetLgDate'>September 29 2023</td>
        <td className='widgetLgAmount'>$5.00</td>
        <td className='widgetLgStatus'><Button type="Approved"> </Button></td>
      </tr>
    </table>
    </div>
  )
}

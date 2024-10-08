import React from 'react';
import "./WidgetLg.css"
import {transAction} from "./../../datas"

export default function WidgetLg(props) {

    const Button = ({type}) => {
        return <button className={'WidgetLgButton ' + type}>{type}</button>
    }
    
    return (
        <div className="WidgetLg">
            <h3 className="WidgetLgTitle">Lastest TransActions</h3>
            <table className="WidgetLgTable">
                <tr className="WidgetLgTr">
                    <th className="WidgetLgTh">Customer</th>
                    <th className="WidgetLgTh">Date</th>
                    <th className="WidgetLgTh">Amount</th>
                    <th className="WidgetLgTh">Status</th>
                </tr>
                
                {transAction.map(transAction => (
                    <tr key={transAction.id} className="WidgetLgTr">
                    <td className="WidgetLgUser">
                        <img src={transAction.img} className='WidgetLgImg' />
                        <span className='WidgetLgName'>{transAction.customer}</span>
                    </td>
                    <td className="WidgetLgDate">{transAction.date}</td>
                    <td className="WidgetLgAmount">{transAction.amount}</td>
                    <td className="WidgetLgStatus">
                        <Button type={transAction.status} />
                    </td>
                </tr>
                ))}
                
                

            </table>
        </div>
    );
}


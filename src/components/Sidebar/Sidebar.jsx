import React, { useState } from 'react'
import { BiSolidDashboard } from 'react-icons/bi'
import { MdAccountBalanceWallet, MdContacts } from 'react-icons/md'
import { FaDollarSign } from 'react-icons/fa'
import { HiDocumentReport } from 'react-icons/hi'
import { BsFillPersonFill } from 'react-icons/bs'
import './Sidebar.css'

const Sidebar = () => {
    const [selected, setSelected] = useState('Dashboard')
    const arr = [
                [<BiSolidDashboard />, 'Dashboard'], 
                [<MdAccountBalanceWallet />, 'Accounts'],
                [<FaDollarSign />, 'Payrolls'],
                [<HiDocumentReport />, 'Reports'],
                [<BsFillPersonFill />, 'Advisor'],
                [<MdContacts />, 'Contacts']
            ]

    const handleClick = (item) => {
        if (item[1] !== selected) {
            setSelected(item[1])
        }
    }

    return (
        <div className='sidebar'>
            <div className='sidebar__bars_container'>
                    {arr.map((item, index) => {
                        return (
                            <div key={index} className={selected === item[1] ? 'sidebar__selectedOption sidebar__option' : 'sidebar__option'} onClick={() => handleClick(item)}>
                                <div className='sidebar__heading_container'>
                                    {item[0]}
                                    {item[1]}
                                </div>
                            </div>
                        )
                    })}
                
            </div>
        </div>
    )
}

export default Sidebar
import React from 'react';
import './dashboard.css'
function Dashboard() {

    return (
        <div className='dashboard-sam'>
            <div className='navdash'>
                <ul className='menu'>
                    <h1 className='fontstyle text-center' style={{fontSize: '46px', lineHeight: '62px', color:'#ffffff'}}>EBHOOM</h1>
                    <li className='list active text-center'>
                        <a href="/water" style={{textDecoration: 'none', color: '#ffffff'}}>
                            <span className='title'>Dashboard</span>
                        </a>
                    </li>
                  
                        <>
                            <li className='list active text-center'>
                                <a href="/live-emmision" style={{textDecoration: 'none', color: '#ffffff'}}> 
                                    <span className='title'>Live Emmission Video</span>
                                </a>
                            </li>
                            <li className='list active text-center'>
                                <a href="/manage-user" style={{textDecoration: 'none', color: '#ffffff'}}>
                                    <span className='title'>Manage Users</span>
                                </a>
                            </li>
                            <li className='list active text-center'>
                                <a href="/view-notification" style={{textDecoration: 'none', color: '#ffffff'}}>
                                    <span className='title'>Notification</span>
                                </a>
                            </li>
                            <li className='list active text-center'>
                                <a href="/chat" style={{textDecoration: 'none', color: '#ffffff'}}>
                                    <span className='title'>Chat</span>
                                </a>
                            </li>
                            <li className='list active text-center'>
                                <a href="/live-station" style={{textDecoration: 'none', color: '#ffffff'}}>
                                    <span className='title'>Live Station</span>
                                </a>
                            </li>
                          
                            <li className='list active text-center'>
                                <a href="/subscribe" style={{textDecoration: 'none', color: '#ffffff'}}>
                                    <span className='title'>Subscribe</span>
                                </a>
                            </li>
                        </>
                    
                    <li className='list active text-center'>
                        <a href="/account" style={{textDecoration: 'none', color: '#ffffff'}}>
                            <span className='title'>Account</span>
                        </a>
                    </li>
                    
                        <>
                            <li className='list active text-center'>
                                <a href="/view-report" style={{textDecoration: 'none', color: '#ffffff'}}>
                                    <span className='title'>Report</span>
                                </a>
                            </li>
                            <li className='list active text-center'>
                                <a href="/live-station" style={{textDecoration: 'none', color: '#ffffff'}}>
                                    <span className='title'>Live Station</span>
                                </a>
                            </li>
                            <li className='list active text-center'>
                                <a href="/chat" style={{textDecoration: 'none', color: '#ffffff'}}>
                                    <span className='title'>Chat</span>
                                </a>
                            </li>
                            <li className='list active text-center'>
                                <a href="/transactions" style={{textDecoration: 'none', color: '#ffffff'}}>
                                    <span className='title'>Payment</span>
                                </a>
                            </li>
                        </>
                    
                    <li className='list active text-center'>
                        <a href="/support-analyser" style={{textDecoration: 'none', color: '#ffffff'}}>
                            <span className='title'>Supported Analyser</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Dashboard;
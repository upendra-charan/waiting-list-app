import React from "react";
import { useNavigate } from "react-router-dom";

const WaitListPage = ({ priorityList, generalList }) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="waitlist-container">
                <h2 style={{ color: '#352384' }}>Waitlist</h2>
                <div className="waitlist-layout">
                    <div className="waitlist">
                        <h3 style={{ color: '#333347' }}>Priority Waitlist</h3>
                        <ul>
                            {priorityList.map((user, index) => (
                                <li key={index}>
                                    {user.name} - Position {index + 1} - Valid Code - Estimated wait: {index + 1} days
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="waitlist">
                        <h3 style={{ color: '#333347' }}>General Waitlist</h3>
                        <ul>
                            {generalList.map((user, index) => (
                                <li key={index}>
                                    {user.name} - Position {index + 1 + priorityList.length} - In-Valid Code - Estimated wait: {index + 1 + priorityList.length} days
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={() => navigate("/")} className="go-button">Go Back</button>
            </div>
        </>
    );
};

export default WaitListPage;

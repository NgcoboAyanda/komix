import React from 'react';
import './NotFound.css';

import icon404 from './../404.svg'

const NotFound = ({searchedTerm})=>{

    return (
        <div className="not-found">
            <div>
                <div className="not-found-content">
                    <div>
                        <div className="not-found-content-heading">
                            <p>
                                There are no results for "{searchedTerm}"
                            </p>
                        </div>
                        <div className="not-found-content-suggestions">
                            <div className="not-found-content-suggestions-title">
                                <p>
                                    Suggestions:    
                                </p> 
                            </div>
                            <ul className="not-found-content-suggestions-list">
                                <li className="not-found-content-suggestions-list-item">
                                    <span className="bullet">&#8226;</span>
                                    Make sure the name of the comic you are looking for starts with *insert term here*.
                                </li>
                                <li className="not-found-content-suggestions-list-item">
                                    <span className="bullet">&#8226;</span>
                                    Try using a hyphen instead of a space. (e.g spider-man instead of spiderman and iron-man instead of iron man)
                                </li>
                                <li className="not-found-content-suggestions-list-item">
                                    <span className="bullet">&#8226;</span>
                                    Make sure that all words are spelt correctly
                                </li>
                                <li className="not-found-content-suggestions-list-item">
                                    <span className="bullet">&#8226;</span>
                                    Try different keywords.
                                </li>
                                <li className="not-found-content-suggestions-list-item">
                                    <span className="bullet">&#8226;</span>
                                    Try fewer keywords
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="not-found-illustration">
                    <img src={icon404} alt="" srcset="" />
                </div>
            </div>
        </div>
    )
}

export default NotFound;
import React, { Component } from 'react'

export default class Main extends Component {
    render() {
        return (
            <div className='main-section'>
                <div className='list'>
                    <ul className='lists'>
                        <li>ROCK</li>
                        <li>PAPER</li>
                        <li>SCISSORS</li>
                    </ul>
                </div>
                <div className='count'>
                    <div className='point'>
                        <h5>Score</h5>
                        <p>1</p>
                    </div>
                </div>
            </div>
        )
    }
}

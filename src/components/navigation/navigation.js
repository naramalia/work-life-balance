import React, { Component } from 'react';

export default class Navigation extends Component {
    render () {

        return (
            <div className='nav_wrapper'>

                <div className='nav-tile nav-tile_left'>
                    <div className='nav-tile_title'>
                        work
                    </div>
                </div>

                <div className='nav-tile nav-tile_ctr'>
                    <div className='nav-tile_title'>
                       LIFE
                    </div>
                </div>

                <div className='nav-tile nav-tile_right'>
                    <div className='nav-tile_title'>
                        balance
                    </div>
                </div>

            </div>
        )
    }
}
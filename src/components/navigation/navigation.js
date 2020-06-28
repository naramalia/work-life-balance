import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
    constructor () {
        super();
    }
    
    handleOnClick () {

    }
    
    render () {
        return (
           <div className='nav_wrapper'>
                
                <div className='nav-tile nav-tile_left'>
                    <Link to="/tasks">work</Link>
                </div>

                <div className='nav-tile nav-tile_ctr'>
                    <Link to="/center">LIFE</Link>
                </div>

                <div className='nav-tile nav-tile_right'>
                    <Link to="/emotions">balance</Link>
                </div>

            </div>
        );
    }
}

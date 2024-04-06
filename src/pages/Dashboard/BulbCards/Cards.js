import React from 'react'
import './Cards.css'
import { BiSolidUser, BiSolidData } from 'react-icons/bi'
import { GiProgression } from 'react-icons/gi'
import {AiFillFileText} from 'react-icons/ai'

function Cards() {
    return (
        <>
            <div className="card">
                <div className="bulb-container">
                    {/* -----First Bulb------ */}
                    <div className="bulb-one">
                        <div className='fir-blb'>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                <BiSolidUser className='ic-one' />
                            </div>
                            <p className='det-blb big'>User </p>
                            <p className='det-blb'>67.32%</p>
                        </div>
                    </div>
                    {/* -----Second Bulb-------- */}
                    <div className="bulb-two">
                        <div className='fir-blb'>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                <GiProgression className='ic-one' />
                            </div>
                            <p className='det-blb big'>Progress </p>
                            <p className='det-blb'>35.12%</p>
                        </div>
                    </div>
                    {/* -------Third Bulb--------- */}
                    <div className="bulb-one" style={{    backgroundImage: 'linear-gradient(114deg, #bb40ff, #ff00c2)'}}>
                        <div className='fir-blb'>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                <AiFillFileText className='ic-one' />
                            </div>
                            <p className='det-blb big'>File </p>
                            <p className='det-blb'>94%</p>
                        </div>

                    </div>
                    {/* ----------Fourth Bulb------ */}
                    <div className="bulb-two" style={{    backgroundImage: 'linear-gradient(114deg, rgb(244 255 64), rgb(255 120 0))'}}>
                        <div className='fir-blb'>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                <BiSolidData className='ic-one' />
                            </div>
                            <p className='det-blb big'>DataBase </p>
                            <p className='det-blb'>52%</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards



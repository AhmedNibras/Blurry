import React from 'react'
import mingo from './mingo.jpg'

export default function Review() {
  return (
    <div className="review">
      <td className="ReviewUser">
            <img
              src={mingo}
              alt=""
              className="reviewImg"
            />
            <span className="ReviewName">DummyName</span>
            
          </td>
    </div>
  )
}



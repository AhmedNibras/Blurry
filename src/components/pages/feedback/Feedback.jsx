import React, {useState} from 'react'
import { Card,CardSubtitle, CardText,CardBody,CardImg } from "reactstrap";
// import Rate from "components/Rate";
import mingo from './mingo.jpg'

import "./Feedback.css";
export default function Feedback() {
    // { firstName, lastName, profilePic, stars, comment, timestamp}
    // const [rating, setRating] = useState(0);
    // const [rating2, setRating2] = useState(0);
  return (
    <Card>
      <CardBody>
        <div className="reviews-top">
          <div className="user-details">
            <CardImg
              className="avatar"
              src={mingo}
              alt="user avatar" />

            <CardText>
            <small className="text-muted text-bold">
              {"3 mins ago"}
            </small>
          </CardText>


            {/* Star Rating */}
            <div className="row">
                <div className="col text-center">
                    <h2>Rate me</h2>
                    <p>Rating component</p>
                    <Rate rating={rating} onRating={(rate) => setRating(rate)} />
                    <p>Rating - {rating}</p>
                    <Rate rating={rating2} onRating={(rate) => setRating2(rate)} />
                    <p>Rating - {rating2}</p>
                </div>
            </div>



            {/* Review Body */}
            <div className="reviews-body">
            <CardText>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut reiciendis delectus dignissimos, nisi pariatur fuga officiis itaque fugiat! Quibusdam accusantium quae beatae vel.Quas possimus reprehenderit sequi quia nesciunt sunt!"}
            </CardText>
            </div>

            
            </div>
        </div>
        </CardBody>
    </Card>
  )
}


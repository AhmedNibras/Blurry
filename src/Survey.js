import React, {useState} from 'react'
import './Survey.css'

function Survey() {
  return (
    <div className="survey"> 
        <h1 id="title">
            Survey
        </h1>

    <form id="survey-form">
        <div className="form-group">
            
            <label htmlFor="name">What skill do have?</label>
            
            <input type="text" className="form-control" id="name" placeholder="Enter name" />
        </div> 
        <div className="form-group">
        
            <label>Does your skill involves?</label>
        
            <label for="recommend-1"><input type="radio" name="recommend" id="recommend-1" value="1"/>Technology</label>
            <label for="recommend-1"><input type="radio" name="recommend" id="recommend-2" value="1"/>Science</label>
            <label for="recommend-1"><input type="radio" name="recommend" id="recommend-3" value="1"/>Books</label>
            <label for="recommend-1"><input type="radio" name="recommend" id="recommend-4" value="1"/>People(managerial stuff)</label> 
        </div>
        <div className="form-group">
            <label>What interests you more then your skills</label>
            <label for="recommend-1"><input type="radio" name="recommend" id="recommend-1" value="1"/>Technology</label>
            <label for="recommend-1"><input type="radio" name="recommend" id="recommend-2" value="1"/>Science</label>
            <label for="recommend-1"><input type="radio" name="recommend" id="recommend-3" value="1"/>Books</label>
            <input type="text" className="form-control" id="name" placeholder="other (optional)" />
        </div>
        <div className="form-group">
            <label>Does your skill involves?</label>
            <label for="recommend-1"><input type="radio" name="recommend" id="recommend-1" value="1"/>Technology</label>
            <label for="recommend-1"><input type="radio" name="recommend" id="recommend-2" value="1"/>Science</label>
            <label for="recommend-1"><input type="radio" name="recommend" id="recommend-3" value="1"/>Books</label>
           <label for="recommend-1"><input type="radio" name="recommend" id="recommend-4" value="1"/>People(managerial stuff)</label> 
        </div>
        
    </form>
    <div className="Button">
        <button type="submit" className="btn btn-primary">Cancel</button>
        <button type="submit" className="btn btn-secondary">Submit</button>
    </div>
    </div>
  )
}

export default Survey
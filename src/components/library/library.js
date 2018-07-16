import React, { Component } from 'react';

import Icon from '../icon';


// import { LibraryCourse } from './libraryCourse';



export default class Library extends Component {

    render() {

        return (

            <div className="library">

				<h1 className="library__title">Course Title</h1>

				<LibraryCourse />
                <LibraryCourse />
                <LibraryCourse />

			</div>

        )

    }

}



export class LibraryCourse extends Component {

    render() {

        return (

            <div className="library-course">

                <label className="library-course__title">Problem Solving</label>
                { Icon('fas fa-check', 'library-course__icon') }
                
                <div className="library-course-description">

                    <label>Course Description</label>

                    <p>Lorem ipsum dolor sit amet, consectetur adipscing elit...</p>

               </div>

            </div>

        )

    }

}
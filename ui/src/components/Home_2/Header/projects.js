import React from 'react';
import avatar from './images/avatar-1.png';
import base_img from './images/p1.png';
class ExperiencePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <div className='row mt-4'></div>
                <div className='row mt-4'>
                    <h1 className='d-none d-md-block text-center'>Projects</h1>
                    <h5 className='d-md-none d-block text-center'>Projects</h5>
                </div>
                <div style={{width:'80%'}} className='row mt-3 mx-auto projects'>
                    <div id="carouselExampleDark" class="mx-auto carousel carousel-dark slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            {this.props.projects.map((project, ind) => (
                                <div className={ind === 0 ? "carousel-item active" : "carousel-item"} >
                                    <img src={project.posterImage} class="d-block w-100 img-thumbnail" alt="..." />
                                    <div class="carousel-caption mt-3">
                                        <h4>{project.title}</h4>
                                        <p className='d-none d-md-block'>{project.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon d-none d-md-block" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span class="carousel-control-next-icon d-none d-md-block" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                        
                    </div>
                </div>
            </div>
        );
    }
}
export default ExperiencePage;
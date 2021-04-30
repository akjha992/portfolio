import React from 'react';
class ExperiencePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <div className='row mt-5'></div>
                <div className='row mt-5'>
                    <h1 className='d-none d-md-block text-center'>Projects</h1>
                    <h2 className='d-md-none d-block text-center'>Projects</h2>
                </div>
                <div className='row mt-4 mx-auto projects'>
                    <div className='col-md-8 mx-auto'>
                        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                {this.props.projects.map((project, ind) => (
                                    <div className={ind === 0 ? "carousel-item active" : "carousel-item"} >
                                        <img src={project.posterImage} class="shadow-sm  d-block w-100 img-thumbnail" alt="..." />
                                        <div class="carousel-caption mt-3">
                                            <h6>{project.title}</h6>
                                            <p className='d-none d-md-block'>{project.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ExperiencePage;
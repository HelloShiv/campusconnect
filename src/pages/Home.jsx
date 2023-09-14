import React from "react";
import { Button, Radio, Space, Divider } from 'antd';
import "../styles/home.css";
import lostAndFoundImage from "../images/lostandfound.jpg";

function Home() {
    return (
        <div className="container-xxl bg-white p-0">
           <div class="container-xxl position-relative p-0">
  <div class="container-xxl bg-primary hero-header">
    <div class="container px-lg-5">
      <div class="row g-5 align-items-center">
        <div class="col-lg-6 text-center text-lg-start">
          <h1 class="text-white mb-4 animated slideInDown">A Platform to help students to connect campus</h1>
          <p class="text-white pb-3 animated slideInDown">"Are you tired of looking for stuff on campus? Do you want a simple place to buy and sell study things or other important items? Well, CampusConnect is here to help make your time at university easier and more connected!"</p>
          <a href="" class="btn btn-secondary py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft">Sign Up</a>
          <a href="" class="btn btn-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">Contact Us</a>
        </div>
        <div class="col-lg-6">
          <div class="container py-5 px-lg-5">
            <div class="row g-5 align-items-center">
              <div class="col-lg-12">
                <img class="img-fluid wow zoomIn" data-wow-delay="0.5s" src="img/about.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

            <div className="container-xxl py-5">
                <div className="container py-5 px-lg-5">
                    <div className="row g-4">
                        <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="feature-item bg-light rounded text-center p-4">
                                <i className="fa fa-3x fa-mail-bulk text-primary mb-4"></i>
                                <h5 className="mb-3">Efficiency</h5>
                                <p className="m-0">Quickly report lost items or find listings with our user-friendly platform.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="feature-item bg-light rounded text-center p-4">
                                <i className="fa fa-3x fa-search text-primary mb-4"></i>
                                <h5 className="mb-3">Trust</h5>
                                <p className="m-0">Connect with fellow students, enhancing the sense of community and trust on campus.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="feature-item bg-light rounded text-center p-4">
                                <i className="fa fa-3x fa-laptop-code text-primary mb-4"></i>
                                <h5 className="mb-3">Affordability</h5>
                                <p className="m-0">Discover budget-friendly deals on study materials, electronics, and more.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="working">
                <div className="works">
                    <ul>
                        <li>
                            <h2>Lost & Found</h2>
                            <p>Report lost items with details and a photo let fellow students assist their recovery</p>
                        </li>
                        <li>
                            <h2>Marketplace</h2>
                            <p>Explore listings or create your own for buying and selling  connect directly with other students.</p>
                        </li>
                        <li>
                            <h2> Safety Measures</h2>
                            <p>Rest easy knowing that CampusConnect prioritises safety with user verification</p>
                        </li>

                        <li>
                            <h2> Data Safety</h2>
                            <p>Compulosry login for accesing the website </p>
                        </li>
                    </ul>
                </div>
                <div className="image">
                <img class="img-fluid wow zoomIn" data-wow-delay="0.5s" src="logo1.png" />
                </div>
            </section>

            <div className="container-xxl py-5">
                <div className="container py-5 px-lg-5">
                    <div className="wow fadeInUp" data-wow-delay="0.1s">
                        <p className="section-title text-secondary justify-content-center"><span></span>Our Team<span></span></p>
                        <h1 className="text-center mb-5">Our Team Members</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item bg-light rounded">
                                <div className="text-center border-bottom p-4">
                                    <img className="img-fluid rounded-circle mb-4" src="shivp.jpg" alt="" />
                                    <h5>Shiv Prasad</h5>
                                    <span>Team lead</span>
                                </div>
                                <div className="d-flex justify-content-center p-4">
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item bg-light rounded">
                                <div className="text-center border-bottom p-4">
                                    <img className="img-fluid rounded-circle mb-4" src="arpit.jpg" alt="" />
                                    <h5>Arpit Singhal</h5>
                                    <span>Web Designer</span>
                                </div>
                                <div className="d-flex justify-content-center p-4">
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item bg-light rounded">
                                <div className="text-center border-bottom p-4">
                                    <img className="img-fluid rounded-circle mb-4" src="gaurav.jpg" alt="" />
                                    <h5>Gaurav Gupta</h5>
                                    <span>web Developer</span>
                                </div>
                                <div className="d-flex justify-content-center p-4">
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" className="btn btn-lg btn-secondary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
        </div>
    );
}

export default Home;

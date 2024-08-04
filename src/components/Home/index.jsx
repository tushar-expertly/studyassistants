import React from "react";
import Layout from "../layout";
// import Slider from "../slider/slider";
import startupPng from "../../Assets/startup.jpg";
// import OurExperts from '../OurExperts'
// import Testimonials from '../Testimonials'
import { Link } from "react-router-dom";

function Home() {
  return (
    <Layout>
      <section id="hero" className="bg-gray-100 py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Welcome to Studyassistants
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Your partner in lifelong learning. We're dedicated to providing
              accessible, high-quality online training that empowers individuals
              to thrive in a rapidly evolving world
            </p>
            <Link
              to={"/training"}
              className="bg-blue-600 text-white px-6 py-2 rounded-full"
            >
              Get Started
            </Link>
          </div>
          <div className="md:w-1/2">
            <br />
            <img
              src={startupPng}
              alt="Hero"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Home;

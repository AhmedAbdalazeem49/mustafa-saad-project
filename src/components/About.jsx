import React from "react";
const About = () => {
  return (
    <section className="flex justify-start items-center w-full bg-gray-900">
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4 ">About Us</h2>
        <p className="mb-4 ">
          Our company has been at the forefront of innovation, offering
          top-notch services to clients across various industries. We believe in
          delivering quality and value, ensuring that every project we undertake
          meets the highest standards.
        </p>
        <p>
          With a team of dedicated professionals, we strive to exceed
          expectations and build long-lasting relationships with our clients.
          Our commitment to excellence drives us to continuously improve and
          adapt to the ever-changing market demands.
        </p>
      </div>
      <div>
        <img
          src="/src/assets/about-section-img.jpg"
          alt="About Us"
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
};

export default About;

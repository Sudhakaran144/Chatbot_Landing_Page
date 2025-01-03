import React from "react";
import user from '../assets/image-daniel.jpg';

const testimonials = [
  {
    name: "Jeanette Harmon",
    company: "Jackson Hardware",
    testimonial:
      "Our chatbot has transformed customer service. Sales increased by 20% in just 3 months.",
    imgSrc: user,
  },
  {
    name: "Kira Whittle",
    company: "Jackson Hardware",
    testimonial:
      "We’ve cut response times in half thanks to the AI’s 24/7 support.",
    imgSrc: user,
  },
  {
    name: "Jack Abrams",
    company: "Jackson Hardware",
    testimonial:
      "Our chatbot has transformed customer service. Sales increased by 20% in just 3 months.",
    imgSrc: user,
  },
];

const Testimonials = () => {
  return (
    <div className="w-full h-auto bg-white flex flex-col gap-20 py-16">
      <div className="w-full h-auto flex flex-col gap-4 text-center">
        <h1 className="font-bold text-5xl text-color">Satisfying Experiences with Our AI Chatbot</h1>
        <p className="text-lg font-medium text-gray-500">
          Trusted by hardware stores everywhere
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-mainColor shadow-lg rounded-lg p-6 text-center max-w-sm transition-transform transform hover:scale-105"
          >
            <img
              src={testimonial.imgSrc}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-bold text-gray-800">{testimonial.name}</h3>
            <p className="text-xs text-gray-500">{testimonial.company}</p>
            <p className="text-gray-700 mt-4">{testimonial.testimonial}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

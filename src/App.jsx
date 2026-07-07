import React from "react";
import "./index.css";
import Card2 from "./components/Card2";
import adobe from "./assets/logos/adobe.png";
import amazon from "./assets/logos/Amazon_icon.png";
import apple from "./assets/logos/apple.png";
import google from "./assets/logos/google.png";
import meta from "./assets/logos/meta.png";
import netflix from "./assets/logos/netflix.png";
import nvidia from "./assets/logos/nvdia.jpg";
import openai from "./assets/logos/openai.png";
import uber from "./assets/logos/uber.png";
import Microsoft from "./assets/logos/microsoft_logo.svg.webp";

const App = () => {
  const jobOpenings = [
    {
      brandLogo: google,
      name: "Google",
      datePosted: "2 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$55/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo: Microsoft,
      name: "Microsoft",
      datePosted: "5 days ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo: amazon,
      name: "Amazon",
      datePosted: "1 week ago",
      post: "Software Development Engineer",
      tag1: "Full Time",
      tag2: "Entry Level",
      pay: "$58/hr",
      location: "Chennai, India",
    },
    {
      brandLogo: meta,
      name: "Meta",
      datePosted: "3 days ago",
      post: "Full Stack Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$80/hr",
      location: "Menlo Park, USA",
    },
    {
      brandLogo: apple,
      name: "Apple",
      datePosted: "2 weeks ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$72/hr",
      location: "Cupertino, USA",
    },
    {
      brandLogo: netflix,
      name: "Netflix",
      datePosted: "4 days ago",
      post: "Backend Engineer",
      tag1: "Remote",
      tag2: "Senior Level",
      pay: "$90/hr",
      location: "Los Gatos, USA",
    },
    {
      brandLogo: adobe,
      name: "Adobe",
      datePosted: "10 days ago",
      post: "UI Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$65/hr",
      location: "Noida, India",
    },
    {
      brandLogo: nvidia,
      name: "NVIDIA",
      datePosted: "3 weeks ago",
      post: "AI Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hr",
      location: "Pune, India",
    },
    {
      brandLogo: uber,
      name: "Uber",
      datePosted: "6 days ago",
      post: "Backend Developer",
      tag1: "Contract",
      tag2: "Mid Level",
      pay: "$68/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: openai,
      name: "OpenAI",
      datePosted: "5 weeks ago",
      post: "AI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$120/hr",
      location: "San Francisco, USA",
    },
  ];
  return (
    <div className="parent">
      {jobOpenings.map(function (elem, idx) {
        return (
          <Card2
            brandLogo={elem.brandLogo}
            name={elem.name}
            datePosted={elem.datePosted}
            post={elem.post}
            tag1={elem.tag1}
            tag2={elem.tag2}
            pay={elem.pay}
            location={elem.location}
          />
        );
      })}
    </div>
  );
};

export default App;

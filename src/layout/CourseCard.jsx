import React from "react";

const CourseCard = (props) => {
  return (
    <div className="flex flex-col bg-white items-center justify-between border-2 md:border-none md:w-1/4 p-5 cursor-pointer
     rounded-lg hover:shadow-lg transition-all">
      <div className="w-3/4">
        <img src={props.img} alt="" />
      </div>
      <div>
        <h3 className="font-semibold text-lg text-center my-5">{props.title}</h3>
        <p className="text-center md:text-start ">{props.paragraph}</p>
      </div>
    </div>
  )
};

export default CourseCard;
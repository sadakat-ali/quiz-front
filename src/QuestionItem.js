import React from "react";
import PropTypes from "prop-types";

function QuestionItem(props) {
  const getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
    };
  };

  return (
    <div style={getStyle()}>
      <p>Q. {props.questions.question}</p>
      <p>
        <input type="radio" name={props.questions.question} />{" "}
        {props.questions.choice0}
        <br />
        <input type="radio" name={props.questions.question} />{" "}
        {props.questions.choice1}
        <br />
        <input type="radio" name={props.questions.question} />{" "}
        {props.questions.choice2}
        <br />
        <input type="radio" name={props.questions.question} />{" "}
        {props.questions.choice3}
        <br />
        <br />
        <a href={"/edit/" + props.questions._id}> Edit </a>
        <a href="#"> Next </a>
        <a href="#"> Previous </a>
        {/* <button style={btnStyle}>Next</button> {"   "} <button style={btnStyle}>Previous</button> */}
      </p>
    </div>
  );
}

// PropTypes
// QuestionItem.propTypes = {
//   question: PropTypes.object.isRequired,
// };

// const btnStyle = {
//   background: "#ff0000",
//   color: "#fff",
//   padding: "5px 9px",
//   cursor: "pointer",
// };

export default QuestionItem;

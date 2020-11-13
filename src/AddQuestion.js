import React from "react";
import axios from "axios";
function AddQuestion(props) {
  const [state, setState] = React.useState({
    question: "",
    choice: ["", "", "", ""],
    correct: "",
  });

  const Addquestion = () => {
    axios
      .post("http://localhost:3000/quiz-api/create-question", state)
      .then((json) => {
        alert("Data Save Successfully");
      });
  };

  const options = state.choice.map((choice, index) => (
    <p key={index}>
      <label>{"Choice " + index}</label>
      <input
        type="text"
        name="choice"
        value={choice}
        placeholder={"Enter Choice " + index}
        onChange={(e) => {
          handleChoice(index, e);
        }}
      />
    </p>
  ));

  const handleChange = (e) => {
    e.preventDefault();

    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleChoice = (index, e) => {
    state.choice.splice(index, 1, e.target.value);
  };
  return (
    <form onSubmit={React.onSubmit} style={{}}>
      <label>Question : </label>
      <input
        type="text"
        name="question"
        placeholder="Enter Question"
        value={state.question}
        onChange={handleChange}
      />
      <br />
      <div>{options}</div>
      <label>Correct Answer : </label>
      <input
        type="text"
        name="correctAnswer"
        placeholder="Enter Correct Answer"
        value={state.correct}
        onChange={handleChange}
      />
      <br />
      <button type="button" onClick={Addquestion} className="btn btn-success">
        Submit
      </button>
    </form>
  );
}

export default AddQuestion;

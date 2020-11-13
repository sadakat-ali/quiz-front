import React, { useState } from "react";
import axios from "axios";

function EditQuestion(props) {
  let id = props.match.params.id;

  const [state, setState] = useState({
    question: "",
    choice: ["", "", "", ""],
    correct: "",
  });

  const options = state.choices.map((choice, index) => (
    <p key={index}>
      <label>{"Choice " + index + " :"}</label>
      <input
        type="text"
        name="choice"
        value={choice}
        placeholder={"Enter Choice " + index}
        onChange={(e) => {
          handleChange(index, e);
        }}
      />
    </p>
  ));

  React.useEffect(() => {
    axios
      .get("http://localhost:3000/quiz-api/read-questions/" + id)
      .then((response) => {
        setState({
          ...state,
          question: response.data.question,
          choice: response.data.choice,
          correct: response.data.correct,
        });
      })
      .catch(function(error) {
        console.log("======error : " + error);
      });
  }, []);

  const updateField = (e) => {
    e.preventDefault();

    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleChange = (index, e) => {
    state.choices.splice(index, 1, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/quiz-api/update-question/" + id, state)
      .then((res) => console.log("Data update successfully.."));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Question :</label>
      <input
        type="text"
        name="question"
        placeholder="Enter Question"
        value={state.question}
        onChange={updateField}
      />
      <br />
      <div>{options}</div>
      <label>Correct Answer :</label>
      <input
        type="text"
        name="correctAnswer"
        placeholder="Enter Correct Answer"
        value={state.correct}
        onChange={updateField}
      />
      <br />
      <button>Update</button>
    </form>
  );
}

export default EditQuestion;

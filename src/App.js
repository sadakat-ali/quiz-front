import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Questions from "./QuestionItem";
import AddQuestion from "./AddQuestion";
import EditQuestion from "./EditQuestion";
import axios from "axios";
// import "./App.css";

function App(props) {
  const [state, setState] = useState({
    questions: [],
  });

  React.useEffect(async () => {
    axios
      .get("http://localhost:3000/quiz-api/read-questions/")
      .then((response) => {
        setState({ questions: response.data });
      })
      .catch((e) => {
        console.log(e);
      });
  });

  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/">
              <div>
                <a href="/add"> Add </a>
                <Questions questions={state.questions} />
              </div>
            </Route>

            <Route exact path="/add">
              <AddQuestion />
            </Route>

            <Route exact path="/edit/:id" component={EditQuestion}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

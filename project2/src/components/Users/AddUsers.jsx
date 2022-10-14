import { React, useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./AddUsers.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUsers = ({ onAdd }) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Empty Fields!",
        msg: "Please fill both username and age",
      });
      return;
    } else if (+enteredAge <= 0) {
      setError({ title: "Invalid Age!", msg: "Please enter a valid age" });

      return;
    }

    onAdd(enteredUsername, enteredAge);

    setEnteredUsername("");
    setEnteredAge("");

    // console.log("Submited!", enteredUsername, enteredAge);
  };

  const changeUsernameHandler = (e) => {
    setEnteredUsername(e.target.value);
    // console.log('username Updated to', e.target.value)
  };

  const changeAgeHandler = (e) => {
    setEnteredAge(e.target.value);
    // console.log('age Updated to', e.target.value)
  };

  const errorRemover = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          onConfirm={errorRemover}
          title={error.title}
          msg={error.msg}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            tyoe="text"
            value={enteredUsername}
            onChange={changeUsernameHandler}
          />

          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={changeAgeHandler}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUsers;

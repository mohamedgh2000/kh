import React from "react";
import { useForm } from "react-hook-form";
import Qcminput from "./Qcminput";
import axios from "axios";
const Qcm = ({ question, choices }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const selectedChoices = Object.keys(data).filter((key) => data[key]);

    const isCorrect = selectedChoices.every((choice) => choices[choice]);

    if (isCorrect) {
      console.log("Correct answer! Return token.");
    } else {
      console.log("Incorrect answer!");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>{question}</h2>
      <ul>
        {choices.map((choice, index) => (
          <li key={choice.id}>
            <Card className={styles.input}>
              <Circlenum index={index} />
              <input
                type="checkbox"
                {...register("chooseCb")}
                value={choice[index]}
              />
              {choice[index]}
            </Card>
          </li>
        ))}
      </ul>
      <button type="submit">Submit</button>
    </form>
  );
};

// Example usage

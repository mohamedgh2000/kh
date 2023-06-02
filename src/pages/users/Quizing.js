import react from "react";
import Qcm from "Qcm";
import { useState } from "react";

const Quizing = () => {
    const question = "Quel élément suivant n'est pas considéré comme un risque sur le lieu de travail?";
    const choices = [
      { id: 1, label: 'Exposition aux produits chimiques', correct: false },
      { id: 2, label: 'Incendie', correct: false },
      { id: 3, label: 'Sol glissant', correct: false },
      { id: 4, label: 'Éclairage adéquat', correct: true },
    ];
    const [questionData, setQuestionData] = useState(null);
    useEffect(() => {
        axios.get('http://localhost:3000/qcm')
          .then((response) => {
            setQuestionData(response.data);
          })
          .catch((error) => {
            console.log('Error fetching question:', error);
          });
      }, []);

const choixMap = {};

Object.keys(data).forEach((key) => {
if (key.startsWith("Choix")) {
    const choiceKey = data[key];
    const chooseCbKey = key.replace("Choix", "chooseCb-");
    const chooseCbValue = data[chooseCbKey];

    choixMap[choiceKey] = chooseCbValue;
}
});
    return (
      <div>
        <h1>My Form</h1>
        <Qcm question={questionData.question} choices={choixMap} />
      </div>
    );
  };

  export default Quizing 
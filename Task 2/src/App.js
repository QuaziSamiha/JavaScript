import "./styles.css";
import { useState, useRef, memo, useCallback, useMemo } from "react";
import { useEffect } from "react";
import { zipSort, getStyle, binarySearch } from "./misc";

const Person = memo(function ({
  index,
  name,
  score,
  onScoreIncrease,
  onDelete,
  style
}) {
  const renderedRef = useRef();
  const [internalScore, setInternalScore] = useState(score);

  useEffect(() => {
    renderedRef.current.style.transition = "none";
    renderedRef.current.style.opacity = 1;
    setTimeout(() => {
      renderedRef.current.style.transition = "opacity .75s linear";
      renderedRef.current.style.opacity = 0;
    }, 500);
  });

  return (
    <div style={style}>
      {name}: {internalScore}{" "}
      <span ref={renderedRef} style={{ opacity: 0 }}>
        (rendered)
      </span>
      <div>
        <button onClick={() => onScoreIncrease(index)}>+1</button>
        <button onClick={() => onDelete(index)}>Delete</button>
      </div>
    </div>
  );
});

export default function App() {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(null);
  const addPersonInputRef = useRef(null);
  const [sortBy, setSortBy] = useState("asc");
  const [people, setPeople] = useState([
    { name: "Alex" },
    { name: "Glen" },
    { name: "John" },
    { name: "Robby" }
  ]);
  const [scores, setScores] = useState(
    Array(people.length)
      .fill(0)
      .map((_, i) => i)
  );

  const addPerson = () => {

    // feat: re-sort the list after adding the new person.
    const index = binarySearch(name, sortBy, people);
    const newPeople = people.slice();
    const newScore = scores.slice();

    newPeople.splice(index, 0, { name });
    newScore.splice(index, 0, 0);
    setPeople(newPeople);
    setScores(newScore);

    addPersonInputRef.current.value = "";
  };
  
  const deletePerson = useCallback((index) => {
    setPeople((prev) => [
      ...prev.slice(0, index),
      ...prev.slice(index + 1, Infinity)
    ]);
    setScores((prev) => [
      ...prev.slice(0, index),
      ...prev.slice(index + 1, Infinity)
    ]);
  }, []);
  const increaseScoreByIndex = useCallback(
    (index) => {
      const newScores = [...scores];
      newScores[index] += 1;
      setScores(newScores);
    },
    [scores]
  );
  const toggleSorting = () => {
    if (sortBy === "asc") setSortBy("desc");
    else setSortBy("asc");
  };

  useEffect(() => {
    const [sortedPeople, sortedScores] = zipSort(people, scores, sortBy);
    setPeople(sortedPeople);
    setScores(sortedScores);
  }, [sortBy]);

  const currentContainerWidth =
    containerWidth ?? (containerRef.current?.clientWidth || 0);

  const isSmallContainer = currentContainerWidth < 450;
  const style = useMemo(() => getStyle(currentContainerWidth), [
    isSmallContainer
  ]);

  return (
    <div ref={containerRef}>
      <code>Container Width: {currentContainerWidth}</code>
      <div style={style}>
        <input placeholder="Type name" ref={addPersonInputRef} />
        <button style={{ marginLeft: "10px" }} onClick={addPerson}>
          Add person
        </button>
      </div>

      <div style={style}>
        <strong>People count: {people.length}</strong>
        <button onClick={toggleSorting}>Sorting: {sortBy}</button>
      </div>

      {people.map((el, index) => {
        const key = `key_${index}`;
        return (
          <Person
            key={key}
            index={index}
            name={el.name}
            score={scores[index]}
            style={style}
            onDelete={deletePerson}
            onScoreIncrease={increaseScoreByIndex}
          />
        );
      })}
    </div>
  );
}

// DETAILED EXPLANATION

// Bug 1: Sorting doesn't work. When clicking on the "Sort" button, names are sorted correctly, but scores are not. Implement sorting for scores.

// Bug 2: Add name doesn't work. If I type a new person's name and click "Add person", it's added to the list with empty name.

// Bug 3: Delete button deletes the name, but scores are messed up afterwards.

// Bug 4: Layout is kinda responsive, it's wider when it's > 450px, and narrow when < 450px. But it doesn't change on window resize, until something is rendered on the page

// Bug 5: Person component is memoized, but every time anything is changed on the page, it's rerendered (though it should not, unless its props have changed)

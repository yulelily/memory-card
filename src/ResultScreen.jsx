/* eslint-disable react/prop-types */

export default function ResultScreen({correct}) {
  return (
    <>
      <div className="resultCard" >
        <p>Final Score: {correct} correct</p>
      </div>
    </>
  );
}
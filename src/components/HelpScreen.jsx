export default function HelpScreen() {

  function hideHelp() {
    const helpScreen = document.querySelector(".helpScreen");
    helpScreen.style.display = "none";
  }

  return (
    <div className="helpScreen" >
      <div className="helpCard" >
        <h3>Pokemon Memory</h3>
        <p>A memory card game based on Pokemon Diamond and Pearl. Select a difficulty to start a new game. Select cards that have not been previously selected to increase score.</p>
        <button className="hideHelpScreen" onClick={() => hideHelp()} >&#x2715;</button>
      </div>
    </div>
  );
}
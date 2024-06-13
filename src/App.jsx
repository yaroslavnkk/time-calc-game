import Player from './components/Player.jsx';
import TimerChallenge from "./components/TimerChallenge.jsx";
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
          <TimerChallenge title="Easy" time="1" />
          <TimerChallenge title="Medium" time="5" />
          <TimerChallenge title="Pro" time="10" />
          <TimerChallenge title="Godlike" time="15" />
      </div>
    </>
  );
}

export default App;

import Layout from './components/Layout';
import DancingCat from './components/DancingCat';
import AnimationControls from './components/AnimationControls';
import { useAnimation } from './hooks/useAnimation';

function App() {
  const { isPlaying, toggle, move, moves, nextMove, speed, changeSpeed } = useAnimation(true);

  return (
    <Layout>
      <div className="stage-wrapper">
        <div className="notes" aria-hidden="true">
          <span className="notes__item">♪</span>
          <span className="notes__item">♫</span>
          <span className="notes__item">♬</span>
          <span className="notes__item">♩</span>
        </div>
        <DancingCat isPlaying={isPlaying} move={move} speed={speed} />
      </div>
      <AnimationControls
        isPlaying={isPlaying}
        onToggle={toggle}
        move={move}
        moves={moves}
        onNextMove={nextMove}
        speed={speed}
        onSpeedChange={changeSpeed}
      />
    </Layout>
  );
}

export default App;

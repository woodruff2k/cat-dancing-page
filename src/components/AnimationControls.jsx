const MOVE_LABELS = {
  wiggle: '🕺 좌우 흔들기',
  jump: '🦘 점프',
  spin: '🌀 회전',
  pulse: '💗 크기 변화',
};

export default function AnimationControls({
  isPlaying,
  onToggle,
  move,
  moves,
  onNextMove,
  speed,
  onSpeedChange,
}) {
  const handleSpeed = (event) => {
    try {
      onSpeedChange(event.target.value);
    } catch (err) {
      console.error('속도 변경 실패:', err);
    }
  };

  return (
    <section className="controls" aria-label="애니메이션 제어 패널">
      <button
        type="button"
        className={`controls__btn controls__btn--primary ${isPlaying ? 'is-playing' : ''}`}
        onClick={onToggle}
        aria-pressed={isPlaying}
      >
        {isPlaying ? '⏸ 정지' : '▶ 시작'}
      </button>

      <button
        type="button"
        className="controls__btn"
        onClick={onNextMove}
        aria-label="다음 동작으로 변경"
      >
        다음 동작 →
      </button>

      <div className="controls__current" role="status">
        현재 동작: <strong>{MOVE_LABELS[move] ?? move}</strong>
      </div>

      <label className="controls__speed">
        <span>속도: {speed.toFixed(1)}x</span>
        <input
          type="range"
          min="0.5"
          max="3"
          step="0.1"
          value={speed}
          onChange={handleSpeed}
          aria-label="애니메이션 속도 조절"
        />
      </label>

      <div className="controls__hint" aria-hidden="true">
        가능한 동작: {moves.map((m) => MOVE_LABELS[m]).join(' · ')}
      </div>
    </section>
  );
}

import catImage from '../assets/images/cat.svg';

const MOVE_LABELS = {
  wiggle: '좌우 흔들기',
  jump: '점프',
  spin: '회전',
  pulse: '크기 변화',
};

export default function DancingCat({ isPlaying, move, speed }) {
  const className = `dancing-cat ${isPlaying ? `dancing-cat--${move}` : 'dancing-cat--paused'}`;
  const style = { animationDuration: `${(1 / speed).toFixed(2)}s` };

  return (
    <div className="dancing-cat__stage" aria-live="polite">
      <div className="dancing-cat__shadow" aria-hidden="true" />
      <img
        src={catImage}
        alt={isPlaying ? `${MOVE_LABELS[move] ?? '댄스'} 중인 고양이` : '쉬고 있는 고양이'}
        className={className}
        style={style}
        draggable={false}
      />
    </div>
  );
}

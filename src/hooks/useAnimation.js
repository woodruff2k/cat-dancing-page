import { useCallback, useState } from 'react';

const DANCE_MOVES = ['wiggle', 'jump', 'spin', 'pulse'];

export function useAnimation(initial = true) {
  const [isPlaying, setIsPlaying] = useState(initial);
  const [moveIndex, setMoveIndex] = useState(0);
  const [speed, setSpeed] = useState(1);

  const toggle = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  const nextMove = useCallback(() => {
    setMoveIndex((prev) => (prev + 1) % DANCE_MOVES.length);
  }, []);

  const changeSpeed = useCallback((value) => {
    const num = Number(value);
    if (Number.isNaN(num) || num <= 0) {
      console.warn('useAnimation: invalid speed value', value);
      return;
    }
    setSpeed(num);
  }, []);

  return {
    isPlaying,
    toggle,
    move: DANCE_MOVES[moveIndex],
    moves: DANCE_MOVES,
    nextMove,
    speed,
    changeSpeed,
  };
}

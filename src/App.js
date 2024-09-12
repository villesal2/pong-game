import React, { useState, useEffect, useCallback, useRef } from 'react';

const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;
const BALL_SIZE = 20;
const GAME_WIDTH = 600;
const GAME_HEIGHT = 400;
const PADDLE_SPEED = 8;
const INITIAL_BALL_SPEED = 3;

function App() {
  const [ballPos, setBallPos] = useState({ x: GAME_WIDTH / 2 - BALL_SIZE / 2, y: GAME_HEIGHT / 2 - BALL_SIZE / 2 });
  const [ballVelocity, setBallVelocity] = useState({ x: INITIAL_BALL_SPEED, y: INITIAL_BALL_SPEED });
  const [paddle1Pos, setPaddle1Pos] = useState({ x: 0, y: GAME_HEIGHT / 2 - PADDLE_HEIGHT / 2 });
  const [paddle2Pos, setPaddle2Pos] = useState({ x: GAME_WIDTH - PADDLE_WIDTH, y: GAME_HEIGHT / 2 - PADDLE_HEIGHT / 2 });
  const [score, setScore] = useState({ player1: 0, player2: 0 });
  const [gameStarted, setGameStarted] = useState(false);

  const keysPressed = useRef({});
  const gameLoopRef = useRef(null);

  // ... [Rest of the Pong game code, including all the functions and useEffects]

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800">
      <div className="text-white mb-4 text-2xl font-bold">
        Player 1: {score.player1} | Player 2: {score.player2}
      </div>
      <div className="relative bg-black border-4 border-white" style={{ width: GAME_WIDTH, height: GAME_HEIGHT }}>
        <div className="absolute bg-blue-500" style={{ left: paddle1Pos.x, top: paddle1Pos.y, width: PADDLE_WIDTH, height: PADDLE_HEIGHT }}></div>
        <div className="absolute bg-red-500" style={{ left: paddle2Pos.x, top: paddle2Pos.y, width: PADDLE_WIDTH, height: PADDLE_HEIGHT }}></div>
        <div className="absolute bg-white rounded-full" style={{ left: ballPos.x, top: ballPos.y, width: BALL_SIZE, height: BALL_SIZE }}></div>
        {!gameStarted && (
          <button
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-4 py-2 rounded text-xl font-bold"
            onClick={startGame}
          >
            Start Game
          </button>
        )}
      </div>
      <div className="text-white mt-4 text-lg">
        Controls: Player 1 (W/S) | Player 2 (↑/↓)
      </div>
    </div>
  );
}

export default App;

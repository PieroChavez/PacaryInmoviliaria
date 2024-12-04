// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useRef } from 'react';
import './Game.css'; // Ensure you have a CSS file for your styles

const Game = () => {
  const heroRef = useRef(null);
  const [gameRunning, setGameRunning] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const [highestScore, setHighestScore] = useState('00:00');
  const [chronometer, setChronometer] = useState('00:00');
  const [isJumping, setIsJumping] = useState(false);
  const [positions, setPositions] = useState({
    obstacles: [],
    bushes: [],
    trees: [],
  });
  const [gameState, setGameState] = useState('start'); // start, win, gameOver

  useEffect(() => {
    // Initialize positions and other setup logic here
    const initialPositions = {
      obstacles: Array.from(document.querySelectorAll('.obstacle')).map(el => el.getBoundingClientRect().left),
      bushes: Array.from(document.querySelectorAll('.bush')).map(el => el.getBoundingClientRect().left),
      trees: Array.from(document.querySelectorAll('.tree')).map(el => el.getBoundingClientRect().left),
    };
    setPositions(initialPositions);

    const handleWheel = (e) => {
      const delta = e.deltaY;
      // Handle scroll logic here
    };

    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const startGame = () => {
    setGameRunning(true);
    setGameState('game');
    // Start timer and other game logic
  };

  const restartGame = () => {
    setGameRunning(false);
    setChronometer('00:00');
    setGameState('start');
    // Reset positions and other states
  };

  const handleJump = () => {
    if (isJumping) return;
    setIsJumping(true);
    // Handle jump logic here
    setTimeout(() => {
      setIsJumping(false);
    }, 500); // Duration of the jump
  };

  return (
    <div>
      {gameState === 'start' && (
        <div className="start screen">
          <div className="main-title row d-flex justify-content-center align-items-center">
            <div className="col-12">
              <h1>Scroll Game: Dark Run</h1>
              <p>A Horizontal Scrolling Journey Through the Darkness to Find Home. Scroll to Start.</p>
              <div className="mouse-scroll">
                <div className="mouse">
                  <div className="wheel"></div>
                </div>
                <div className="arrow-left"></div>
                <div className="arrow-right"></div>
              </div>
            </div>
          </div>
          <button onClick={startGame} className="btn btn-light">Start</button>
        </div>
      )}

      {gameState === 'win' && (
        <div className="win screen">
          <div className="main-title row d-flex justify-content-center align-items-center">
            <h1>Congratulations!</h1>
            <p>You arrived home alive.</p>
            <button onClick={restartGame} className="btn btn-light restartButton">Restart</button>
            <p>Time: <span className="chronometer">{chronometer}</span></p>
            <p>Best Time: <span className="highestScore">{highestScore}</span></p>
          </div>
        </div>
      )}

      {gameState === 'gameOver' && (
        <div className="game-over screen">
          <div className="main-title row d-flex justify-content-center align-items-center">
            <h1>Game Over</h1>
            <p>You re Dead.</p>
            <button onClick={restartGame} className="btn btn-light restartButton">Restart</button>
          </div>
        </div>
      )}

      <div id="gameContainer">
        <div id="left-wall" className="obstacle" style={{ left: '-100px', bottom: 0 }}></div>
        <div id="hero" ref={heroRef}></div>
        <img src="https://drive.google.com/thumbnail?id=16xQ76yQgLy6N1Z0ERHa8I4Wluq2OGreF&sz=w1000" className="object sign" alt="Sign" />
        <div className="trees">
          <img src="https://drive.google.com/thumbnail?id=1SSZ8Gl9nSo96RhvWDNlxsaYSWUFQu6h4&sz=w1000" className="object tree" alt="Tree" />
          <img src="https://drive.google.com/thumbnail?id=1LItLexgTPQ9Fno_TgPMJIZb0StcqxgD6&sz=w1000" className="object tree" alt="Tree" />
          <img src="https://drive.google.com/thumbnail?id=1iQRUmpRWMGjesukrLxJXxQvkAehk_k8P&sz=w1000" className="object tree" alt="Tree" />
          <div className="object tree silhouette" style={{ backgroundImage: 'url(https://drive.google.com/thumbnail?id=1o-QjWIBLe95xX303qKG6zE1NitfCrgUT&sz=w2000)' }}></div>
          <div className="object tree silhouette" style={{ backgroundImage: 'url(https://drive.google.com/thumbnail?id=1o-QjWIBLe95xX303qKG6zE1NitfCrgUT&sz=w2000)' }}></div>
          <div className="obstacle spider silhouette" style={{ backgroundImage: 'url(https://drive.google.com/thumbnail?id=1VTozcNB0JwK3K8PpFjzCkxOCwzOfDEU7&sz=w1000)' }}></div>
        </div>
        <div className="object house">
          <div className="chimney">
            <div className="smoke"></div>
            <div className="smoke"></div>
            <div className="smoke"></div>
            <div className="smoke"></div>
            <div className="smoke"></div>
            <div className="smoke"></div>
            <div className="smoke"></div>
          </div>
        </div>
        <div className="hammers">
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="obstacle hammer" style={{ left: `${1500 + i * 100}px` }}></div>
          ))}
        </div>
        <div className="saws">
          <div className="obstacle saw" style={{ left: '2600px' }}></div>
          <div className="obstacle saw" style={{ left: '5500px' }}></div>
        </div>
        <div className="bushes">
          {[3500, 5200, 6000, 6500, 6800].map((left, index) => (
            <div key={index} className="bush silhouette" style={{ left: `${left}px`, bottom: 0 }}></div>
          ))}
        </div>
        <div className="birds">
          {[700, 500, 100, 200].map((left, index) => (
            <div key={index} className="obstacle bird" style={{ left: `${left}px`, top: `${40 + index * 10}%` }}></div>
          ))}
        </div>
        <div id="finishLine" style={{ left: '10000px' }}></div>
        <div className="floor" style={{ left: 0, bottom: 0 }}></div>
        <div id="top" style={{ left: 0, bottom: 0 }}></div>
      </div>
      <div id="scores">
        <p>Time: <span id="chronometer">{chronometer}</span></p>
        <p className="bestTime">Best Time: <span id="highestScore">{highestScore}</span></p>
      </div>
    </div>
  );
};

export default Game;


//https://codepen.io/alexandrevacassin/pen/LYoOoEM

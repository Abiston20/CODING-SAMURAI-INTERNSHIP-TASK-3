// src/App.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const bounce = {
    scale: [1, 1.2, 0.9, 1],
    transition: { duration: 0.3 },
  };

  return (
    <div className="container">
      <h1>Counter App</h1>

      <AnimatePresence>
        <motion.div
          key={count}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="count"
        >
          {count}
        </motion.div>
      </AnimatePresence>

      <div className="buttons">
        <motion.button whileTap={bounce} onClick={() => setCount(count + 1)}>
          ➕ Increment
        </motion.button>
        <motion.button whileTap={bounce} onClick={() => setCount(count - 1)}>
          ➖ Decrement
        </motion.button>
        <motion.button whileTap={bounce} onClick={() => setCount(0)}>
          🔄 Reset
        </motion.button>
      </div>
    </div>
  );
}

export default App;

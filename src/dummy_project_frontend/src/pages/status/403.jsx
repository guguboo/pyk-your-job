import React from 'react';
import { LinearGradient } from 'react-text-gradients';

function Forbidden() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br text-center">
        <h1 className="text-8xl font-bold mb-4 bg-gradient-to-br bg-clip-text">
          403
        </h1>
        <p className="text-8xl font-bold text-white">Forbidden</p>
      </div>
    );
  }

export default Forbidden;

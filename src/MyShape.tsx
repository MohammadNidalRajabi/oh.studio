import React from 'react';

function MyShape() {
  return (
    <svg  width="40" height="40" viewBox="0 0 60 60">
      <rect x="5" y="5" width="50" height="50" rx="10" ry="10" fill="black" />
      <path d="M 15 15 L 30 30 L 15 45 Z M 45 15 L 30 30 L 45 45 Z" fill="white" />
    </svg>
  );
}

export default MyShape;
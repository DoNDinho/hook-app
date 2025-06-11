import { useEffect } from 'react';

export function Message() {
  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      const coords = { x, y };
      console.log(coords);
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <h2>Usuario ya existe</h2>
      <div>Message</div>
    </>
  );
}

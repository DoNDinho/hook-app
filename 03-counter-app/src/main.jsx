import './styles.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { CounterApp } from './CounterApp';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App
      title={'Hola mundo'}
      subTitle={'Este es el subtitulo'}
      name={'Diego'}
    />
    {/* <CounterApp value={100} /> */}
  </StrictMode>,
);

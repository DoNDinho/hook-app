import { CounterApp } from './01-useState/CounterApp';
import { CounterCustomhook } from './01-useState/CounterCustomHook';
import { SimpleForm } from './02-useEfect/SimpleForm';
import { SimpleFormHook } from './02-useEfect/SimpleFormHook';
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
import { FocusScreen } from './04-useRef/FocusScreen';

export function HooksApp() {
  return (
    <>
      {/* <CounterApp></CounterApp> */}
      {/* <CounterCustomhook></CounterCustomhook> */}
      <FocusScreen />
    </>
  );
}

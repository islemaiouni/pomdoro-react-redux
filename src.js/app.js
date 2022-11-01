import './App.css';
import MainTask from './components/MainTask';
import { useMemo} from 'react';
import { PomodoroProvider } from './context/PomodoroContext';

// eslint-disable-next-line no-unused-vars


const App = () => {

  // const themes you can add other themes in 



  return (
    <>
      <PomodoroProvider>
        <MainTask  />
      </PomodoroProvider>
    </>
  );
}

export default App;

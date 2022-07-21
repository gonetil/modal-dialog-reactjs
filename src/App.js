import logo from './logo.svg';
import './App.css';
import {openModal,openModalSettings} from './components/openModal';

function App() {
  function handleOpenModal() {
    openModal();
  }

  function handleOpenModalDeConfiguraciones() {
    openModalSettings();
  }
  return (
    <div className="App">
      <button onClick={handleOpenModal}>OpenModal</button>
      <button onClick={handleOpenModalDeConfiguraciones}>OpenModalDeConfiguraciones</button>
    </div>
  );
}

export default App;

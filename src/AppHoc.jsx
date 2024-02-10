import './App.css';
import LikeImageHoc from './components/LikeImageHoc';
import LikePostHoc from './components/LikePostHoc';


function App() {
  return (
    <div>
      <h3>Some Blog using HOC </h3>
      <div className='buttons'>
        <LikeImageHoc/>
        <LikePostHoc/>
      </div>

    </div>
  );
}

export default App;
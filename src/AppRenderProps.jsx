import './App.css';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div>
      <h3>Some Blog using Render Props</h3>

{/* solution for render props */}

      <div className='buttons'>
        <Wrapper render={(counter, handleIncerement)=>{
          return <LikeImage likeImageCounter={counter} handleLikeImageCount = {handleIncerement}/>}}/>

        <Wrapper render={(counter, handleIncerement)=>{
          return <LikePost LikePostCounter={counter} handlePostCount = {handleIncerement}/>}}/>
      </div>
    </div>
  );
}

export default App;
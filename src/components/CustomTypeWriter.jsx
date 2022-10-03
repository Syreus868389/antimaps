//importing typewriter-effect
import Typewriter from "typewriter-effect";
  
function App(props) {
  return (
    <div className="App">
      <Typewriter
  
       onInit={(typewriter)=> {
  
       typewriter
       .typeString(props.content_high)
       .pauseFor(1500)
       .typeString(props.content_low)
       .pauseFor(10000)
       .deleteAll()
       .pauseFor(2000)
       .start();
       }}
       options={{loop:true,
        cursor:" ",
        delay:45,}}
       />
    </div>
  );
}
  
export default App;
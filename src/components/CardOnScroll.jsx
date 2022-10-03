import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
function App(props){
    return(
    <AnimationOnScroll animateIn="animate__bounceIn">
    <div class= "text-2xl">{(props.content)}</div>
  </AnimationOnScroll>
  );
}

export default App;
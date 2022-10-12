import "animate.css/animate.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/custom.css'

import { AnimationOnScroll } from 'react-animation-on-scroll';
function App(props){
    return(
    <AnimationOnScroll animateIn="animate__bounceIn">
   <div>{props.content_high}<br/> {props.content_low}</div>
  </AnimationOnScroll>
  );
}

export default App;
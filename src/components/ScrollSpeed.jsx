import { Parallax } from 'react-scroll-parallax';

export function Scroller (props) {
    return(
        <div className='scrolling'>
        <Parallax speed = {props.speed} >
            {props.children}
        </Parallax>
        </div>
    )
}
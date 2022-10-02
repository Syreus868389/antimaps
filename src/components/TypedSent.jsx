import Typewriter from 'typewriter-effect';

function TypedSent(props) {
    return <Typewriter client:load
    options={{
  strings: [{props}],
  autoStart: true,
  loop: true,
    }}
/>
}

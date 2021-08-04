import React, { useRef } from "react";
import clamp from "lodash-es/clamp";
import { useSprings, animated } from "react-spring";
import { useGesture } from "react-use-gesture";
import "../../App.css";

const PicsumCard = ({ getUrlFromApi }) => {

  const urlDataFromFn = getUrlFromApi();
  
  const index = useRef(0)
  const [props, set] = useSprings(urlDataFromFn.length, i => ({ x: i * window.innerWidth, sc: 1, display: 'block' }))
  
  const bind = useGesture(({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
    if (down && distance > window.innerWidth / 2)
      cancel((index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, urlDataFromFn.length - 1)))
    set(i => {
      if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
      const x = (i - index.current) * window.innerWidth + (down ? xDelta : 0)
      const sc = down ? 1 - distance / window.innerWidth / 2 : 1
      return { x, sc, display: 'block' }
    })
  });

  return props.map(({ x, display, sc }, i) => (
    <animated.div {...bind()} key={i} style={{ display, transform: x.to(x => `translate3d(${x}px,0,0)`) }}>
      <animated.div style={{ transform: sc.to(s => `scale(${s})`), backgroundImage: `url(${urlDataFromFn[i]})` }} />
    </animated.div>
  ))
};

export default PicsumCard;

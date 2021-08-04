import React, { useState } from "react";
import { useSprings, animated } from "react-spring";
import { useGesture } from "react-use-gesture";
import "../../../assets/scss/4-layout/_movie.scss";

const MovieCard = ({ getImagesFromLib }) => {
  const images = getImagesFromLib();

  const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
  const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
  const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`
  
  const [gone] = useState(() => new Set()) 
  const [props, set] = useSprings(images.length, i => ({ ...to(i), from: from(i) }))
  const bind = useGesture(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2 
    const dir = xDir < 0 ? -1 : 1 
    if (!down && trigger) gone.add(index) 
    set(i => {
      if (index !== i) return 
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0 
      const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0) 
      const scale = down ? 1.1 : 1 
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
    })
    if (!down && gone.size === images.length) setTimeout(() => gone.clear() || set(i => to(i)), 600)
  })
  return props.map(({ x, y, rot, scale }, i) => (
    <animated.div 
      className="movie"
      key={i} 
      style={{ transform: to([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}
    >
      <animated.div {...bind(i)} style={{ transform: to([rot, scale], trans), backgroundImage: `url(${images[i]})` }} />
    </animated.div>
  ))
};

export default MovieCard;

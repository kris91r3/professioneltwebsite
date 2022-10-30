import "./style.css";
/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion";

// skoleprojekt animation
inView("#spil", ({ target }) => {
  animate(
    target.querySelectorAll("div"),
    { x: [-2000, 0] },
    { duration: 0.7, delay: stagger(1, { start: 0.2 }) }
  );

  return () => {
    animate(target, { x: [-2000, 0] }, { duration: 0.7 });
  };
});

inView("#webfeature", ({ target }) => {
  animate(
    target.querySelectorAll("div"),
    { x: [-2000, 0] },
    { duration: 0.7, delay: stagger(1, { start: 0.2 }) }
  );

  return () => {
    animate(target, { x: [-2000, 0] }, { duration: 0.7 });
  };
});

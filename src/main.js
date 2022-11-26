import "./style.css";
/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion";

// skoleprojekt animation
inView("#skoleprojekter", ({ target }) => {
  animate(
    target.querySelectorAll("div"),
    { x: [-2000, 0] },
    { duration: 0.7, delay: stagger(0.5, { start: 0.1 }) }
  );

  return () => {
    animate(target, { x: [-2000, 0] }, { duration: 0.7 });
  };
});

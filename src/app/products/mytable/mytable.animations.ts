import {animate, state, style, transition, trigger} from "@angular/animations";

export const HighlightTrigger = trigger("rowHighlight", [
  state("selected", style({
    backgroundColor: "lightgreen",
    fontSize: "20px"
  })),
  state("notselected", style({
    backgroundColor: "lightsalmon",
    fontSize: "12px"
  })),
  /* fallback state */
  state("*", style({
    border: "solid black 2px"
  })),
  /* void state is used to define transitions for when an element is added to or removed from the template */
  // state("void", style({
  //   opacity: 0
  // })),
  state("void", style({
    // transform: "translateX(-50%)",
    // transform: "scale(1.1, 1.1)",
    transform:  "rotate(20deg)"
  })),


  transition("selected => notselected", animate("1200ms")),
  transition("notselected => selected", animate("1400ms")),
  // transition("* => notselected", animate("200ms")),
  // transition("* => selected", animate("400ms")),
  // transition("void => *", animate("1500ms")),
  // transition("void => *", animate("2500ms ease-in")),
  transition("void => *", animate("400ms 200ms ease-in")),
  // transition("void => *", animate("2500ms ease-out")),
  // transition("void => *", animate("2500ms ease-in-out")),
  // transition("void => *", animate("2500ms cubic-bezier")),
  // transition("void => *", animate("0.5s")),
  transition("* => selected", animate("400ms 200ms ease-in",
    style({
      backgroundColor: "lightblue",
      fontSize: "25px"
    }))
  ),
  transition("* => selected",
    [animate("400ms 200ms ease-in",
      style({
        backgroundColor: "lightblue",
        fontSize: "25px"
      })),
      animate("250ms", style({
        backgroundColor: "lightcoral",
        fontSize: "30px"
      })),
      animate("200ms")]
  ),

  transition("void => *", animate("500ms"))

]);

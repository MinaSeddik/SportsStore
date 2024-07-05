import {Injectable} from "@angular/core";

export enum MODES {
  CREATE, EDIT
}

// @Injectable({
//   providedIn: 'root'
// })
export class SharedState {
  mode: MODES = MODES.EDIT;
  id: number;

  // constructor(public mode: MODES, public id?: number) { }
}

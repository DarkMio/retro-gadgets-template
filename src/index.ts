import { registerUpdate } from "./common/helper";

// add your components like so:
// type System = Gadget & WithWifi & WithLeds<5>
type System = Gadget & WithCPU;
declare const gdt: System;

log("Hello World!");

let iterator = 0;
registerUpdate(() => {
    iterator += 1;
    log(`Roughly spent ~${math.floor(iterator)}s`);
})
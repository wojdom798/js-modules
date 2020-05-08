import { add } from './add';
import { multiply } from './multiply';
import { pow } from './pow';

const myConsole = document.getElementById("my-console");
let x = 7;
let y = 8;

consoleClear();

function consoleAppend(string) {
  myConsole.value += string + "\n";
}

function consoleClear() {
  myConsole.value = "";
}

consoleAppend(`${x} + ${y} = ${add(x, y)}`);
consoleAppend(`${x} * ${y} = ${multiply(x, y)}`);
consoleAppend(`${x} ^ ${y} = ${pow(x, y)}`);

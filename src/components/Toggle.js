import React, { useState } from "react";

function Toggle() {
  //let is used because isOn will be changing the state

  //isOn is the current value, refer to <button> tag, the ternary operation determines if it will show "ON" or "OFF"

  //setIsOn is the CB function that gets used in the handleClick function below to

  //useState(false) is the starting value, here it is "false" which points to the ternary operation, thus showing "OFF" at page load time

  let [isOn, setIsOn] = useState(false);

  // handleClick is the function passed into the <button>  event handler of "onClick"

  // setIsOn is returned with the parameter of (!isOn), thus showing the opposite of the starting value of false, which is true. Now that is it true, it will show "ON" because of the ternary operation.
  //if setIsOn had the parameter of (IsOn), it would coninuously return the starting value of useState(false)

  //console.log(isOn) will show the changes happening in console or show that it will continuously output the same value if its "setIsOn(isOn)"

  function handleClick() {
    setIsOn(!isOn)
    //console.log(isOn)
  }

  //if isOn = truthy then red
  //if isOn = falsy then white
  const color = isOn ? "red" : "white"

  // the ternary operation is the text that will show on the button, if truthy = ON, if falsy = OFF

  //event handler onClick will = the handleClick function above to determine the value of isOn

  //style edits the background color of this specific button, depending on the isOn state
  return <button style={{ background: color }} onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;

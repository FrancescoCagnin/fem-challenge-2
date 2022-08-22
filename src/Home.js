import StarLogo from "./images/icon-star.svg";
import StarButton from "./StarButton";
import { useState } from "react";

export default function Home(props) {

    const items = [1, 2, 3, 4, 5]

    let buttonList = []

    items.map(item => {
        buttonList.push(<StarButton key={item} value={item}/>)
    });

    // TODO: Decide if the state of the buttons should be managed by the Home component 
    //       or by the individuals buttons in the StarButton component, and also if 
    //       it's worth to convert these function components into class components.
    // TODO: Learn more about useState() hook.

    return (
    <div className="max-w-md bg-neutral-very-dark-blue flex flex-col rounded-3xl p-8">
      <div className="p-4 max-w-max bg-neutral-dark-blue rounded-full grid place-items-center">
        <img src={StarLogo} alt="StarLogo" />
      </div>
      <h1 className="text-white font-overpass text-3xl pt-6 tracking-normal">
        How did we do?
      </h1>
      <p className="text-neutral-light-grey font-overpass text-default-p pr-3 py-2 my-3 mb-6">
        Please let us know how we did with your support request. All feedback is
        appreaciated to help us improve our offering!
      </p>
      <div className="flex gap-6 flex-grow justify-between items-center" >
        {buttonList}
      </div>

      <button className="font-overpass text-white text-md bg-primary-orange rounded-full py-3 mt-6 tracking-widest hover:bg-white hover:text-primary-orange">SUBMIT</button>
    </div>
  );
}

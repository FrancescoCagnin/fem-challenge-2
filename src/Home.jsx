import React, { useState } from 'react'
import StarLogo from "./images/icon-star.svg";
import PhoneLogo from "./images/illustration-thank-you.svg";
import StarButton from "./StarButton";

const Home = () => {

	const [lastSelected, setLastSelected] = useState(0);
	const [submitted, setSubmitted] = useState(false);

	const handleClick = (key) => {
		setLastSelected(key);
	}

	const items = [1, 2, 3, 4, 5]

	const buttonList = items.map(item => <StarButton key={item.toString()} value={item} onClick={() => handleClick(item)} isSelected={lastSelected}/>)


	if (submitted === false) {
		return (
		  <div className="sm:max-w-md max-w-sm mx-4 sm:m-0 bg-neutral-very-dark-blue flex flex-col rounded-3xl p-6">
		    <div className="p-4 max-w-max bg-neutral-dark-blue rounded-full grid place-items-center">
		      <img src={StarLogo} alt="StarLogo" />
		    </div>
		    <h1 className="text-white font-overpass font-bold text-3xl pt-6 tracking-normal">
		      How did we do?
		    </h1>
		    <p className="text-neutral-light-grey font-overpass sm:text-default-p text-sm pr-3 py-2 my-3 mb-6">
		      Please let us know how we did with your support request. All feedback is
		      appreaciated to help us improve our offering!
		    </p>
		    <div className="flex  flex-wrap gap-1 justify-around items-center" >
		      {buttonList}
		    </div>
		    <button onClick={() => {setSubmitted(true)}} className="font-overpass text-white text-md bg-primary-orange rounded-full py-3 mt-6 tracking-widest hover:bg-white hover:text-primary-orange">SUBMIT</button>
		  </div>
		  )
	} else {
          return (
            <div className="sm:max-w-md max-w-sm mx-4 sm:m-0 bg-neutral-very-dark-blue flex flex-col rounded-3xl items-center p-6">
              <div className="p-6 max-w-max grid place-items-center" >
                <img src={PhoneLogo} alt="Thank You!" />
              </div>

              <p className="max-w-fit mx-auto p-1 px-6 font-overpass text-default-p text-primary-orange bg-neutral-dark-blue rounded-full text-center">You selected {lastSelected} out of 5</p>
              <h1 className="p-3 pt-12 font-bold font-overpass text-white text-center text-2xl">Thank You!</h1>
              <p className="pb-4 font-overpass text-neutral-light-grey text-center">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
            </div>
          );
	}
}

export default Home;
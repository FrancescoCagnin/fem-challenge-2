import React from 'react'
import StarLogo from "./images/icon-star.svg";
import PhoneLogo from "./images/illustration-thank-you.svg";
import StarButton from "./StarButton";

class HomeClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonsState: [
                false, false, false, false, false
            ],

            lastSelected: 0,
            submitted: false,
        };
        
        this.onClick = this.handleClick.bind(this);
    }

    handleClick(key) {
        let copy = this.state.buttonsState.slice();

        copy = [
          false, false, false, false, false
        ];

        copy[key - 1] = true;

        for (let i = 0; i < copy.length; i++) {
          if (copy[i] === true) 
            this.setState({lastSelected: i + 1})
        }

        this.setState({
            buttonsState: copy,
        });

        console.log(key, this.state.buttonsState);
    }

    render() {

        this.items = [1, 2, 3, 4, 5]

        this.buttonList = []
    
        this.items.forEach(item => {
            this.buttonList.push(<StarButton key={item} value={item} onClick={() => this.handleClick(item)} isSelected={this.state.buttonsState[item - 1]}/>)
        });

        if (this.state.submitted === false) {
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
                    {this.buttonList}
                  </div>
                  <button onClick={() => {this.setState({submitted: true})}} className="font-overpass text-white text-md bg-primary-orange rounded-full py-3 mt-6 tracking-widest hover:bg-white hover:text-primary-orange">SUBMIT</button>
                </div>
                )
        } else {
          return (
            <div className="sm:max-w-md max-w-sm mx-4 sm:m-0 bg-neutral-very-dark-blue flex flex-col rounded-3xl items-center p-6">
              <div className="p-6 max-w-max grid place-items-center" >
                <img src={PhoneLogo} alt="Thank You!" />
              </div>

              <p className="max-w-fit mx-auto p-1 px-6 font-overpass text-default-p text-primary-orange bg-neutral-dark-blue rounded-full text-center">You selected {this.state.lastSelected} out of 5</p>
              <h1 className="p-3 pt-12 font-bold font-overpass text-white text-center text-2xl">Thank You!</h1>
              <p className="pb-4 font-overpass text-neutral-light-grey text-center">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
            </div>
          )
        }
    }
}

export default HomeClass

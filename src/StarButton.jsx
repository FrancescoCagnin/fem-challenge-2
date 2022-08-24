export default function StarButton(props) {

    const inheritedHandleClick = props.onClick;

    if (props.isSelected === false) {
        return (
        <button className="w-12 h-12 text-center font-overpass text-neutral-light-grey
         bg-neutral-dark-blue rounded-full grid items-center hover:bg-neutral-medium-grey hover:text-white cursor-pointer"
         onClick={inheritedHandleClick}>
          {props.value}
        </button>
        );
    } else {
        return (
            <button className="w-12 h-12 text-center font-overpass text-white
             bg-primary-orange rounded-full grid items-center "onClick={inheritedHandleClick}>
              {props.value}
            </button>
        );
    }

}

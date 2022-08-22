export default function StarButton(props) {

    return (
    <div className="w-12 h-12 text-center font-overpass text-neutral-light-grey
     bg-neutral-dark-blue rounded-full grid items-center hover:bg-neutral-medium-grey hover:text-white cursor-pointer">
      {props.value}
    </div>
    );
}

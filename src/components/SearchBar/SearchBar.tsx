import "./SearchBar.scss";
import search from "../../assets/icons/eva_search-fill.svg";
import { FormEventHandler } from "react";

type SearchBarProps = {
  searchEvents: string;
  handleInput: FormEventHandler<HTMLInputElement>;
};

const SearchBar = ({ handleInput, searchEvents }: SearchBarProps) => {
  return (
    <>
      <div className="search">
        <img src={search} className="search__image" />
        <input
          className="search__input"
          type="text"
          placeholder="Search by craft, material, discipline.."
          value={searchEvents}
          onInput={handleInput}
        />
      </div>
    </>
  );
};

export default SearchBar;

// const handleInput = (event: ChangeEvent) => {
//   console.log(event.currentTarget);
// };

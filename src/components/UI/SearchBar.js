import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");

    const titlesChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
        // console.log("handlecitynamechange:", e.target.value);
    };

    const submitHandler = (event) => {
        // debugger;
        console.log("handleSubmit for city name")
        event.preventDefault();
        console.log(enteredTitle);
        // setEnteredTitle("");

        props.onSaveTitleData({ cityName: enteredTitle });//pass value to parent object
    };

    return (
        <form className="search-form" onSubmit={submitHandler} action="#">
            <BsSearch />
            <input
                type="text"
                value={enteredTitle}
                onChange={titlesChangeHandler}
                placeholder="Search by city name"
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;

import React from "react";
import StartRating from "../StartRating";
import AddModal from "./AddModal";
import "./Header.css";

const Header = ({ setInput, setRate, Rate }) => {
  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder=" name to search"
          onChange={(e) => setInput(e.target.value)}
        />
        
        <StartRating rating={Rate} setRate={setRate} />
        <AddModal  AddNewModal={AddNewModal } />
      </div>
    </div>
  );
};

export default Header;
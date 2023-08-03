import React, { useContext, useEffect } from "react";
import { Search } from "@mui/icons-material";
import { Paper } from "@mui/material";
import useDebounce from "../../hooks/useDebounce";
import { SearchInputValueContext } from "../../context/SearchInputValue";
import { HandPickedIsClickedContext } from "../../context/HandPickedIsClickedContext";

const SearchInput = ({
  searchInputParentBg,
  searchInputBg,
  searchInputParentBorder,
  searchInputBorder,
  searchInputParentBoxShadow,
  placeholderValue,
  searchInputValue,
  searchInputParentWidth,
  searchInputWidth,
  searchInputType,
  searchInputPadding,
  searchInputHeight,
  searchInputParentHeight,
  setIsSearching,
}) => {
  const {inputValue, setInputValue} = useContext(SearchInputValueContext);
  const debouncedInputValue = useDebounce(inputValue, 300);
  const {setHandPickedisClicked} = useContext(HandPickedIsClickedContext)

   useEffect(() => {
    if (debouncedInputValue === "") {
      setIsSearching(false);
      setHandPickedisClicked(true)
    } else {
      setIsSearching(true);
      setHandPickedisClicked(false)
    }
  }, [debouncedInputValue]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Paper
      component="form"
      sx={{
        border: searchInputParentBorder,
        backgroundColor: searchInputParentBg,
        boxShadow: searchInputParentBoxShadow,
        display: "flex",
        alignItems: "center",
        width: searchInputParentWidth,
        height: searchInputParentHeight,
        position: "relative",
      }}
    >
      <Search sx={{ position: "absolute", top: "10px", left: "10px" }} />
      <input
        onKeyUp={(e) => handleChange(e)}
        style={{
          backgroundColor: searchInputBg,
          border: searchInputBorder,
          width: searchInputWidth,
          height: searchInputHeight,
          padding: searchInputPadding,
        }}
        placeholder={placeholderValue}
        value={searchInputValue}
        type="search"
      />
    </Paper>
  );
};

export default SearchInput;

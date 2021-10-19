import React, { useState } from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const history = useHistory();
  const [query, setQuery] = useState();
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${query.slice(0, 80)}`);
    setShowSearchBar(false);
  };
  const handleClick = () => {
    setShowSideBar(false);
    setShowSearchBar(false);
  };

  return (
    <>
      {showSearchBar && (
        <form onSubmit={handleSubmit} className="search-bar">
          <input
            placeholder="Search Movies and Tv Shows"
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            autoFocus
            className="mt-4"
          />
        </form>
      )}

      <div
        className="link menu"
        data-bs-toggle="tooltip"
        onClick={() => setShowSideBar((prev) => !prev)}
        data-bs-placement="right"
        title="Menu"
      >
        <span className="material-icons icon-md">double_arrow</span>
      </div>
      {showSideBar && (
        <>
          <div className="side-bar px-2">
            <div
              className="link mt-4"
              data-bs-toggle="tooltip"
              onClick={() => setShowSideBar((prev) => !prev)}
              data-bs-placement="right"
              title="Menu"
            >
              <span className="material-icons icon-md">highlight_off</span>
            </div>
            <div
              className="link"
              data-bs-toggle="tooltip"
              onClick={() => setShowSearchBar((prev) => !prev)}
              data-bs-placement="right"
              title="Search"
            >
              <span className="material-icons icon-md">search</span>
            </div>
            <NavLink
              onClick={handleClick}
              exact
              activeClassName="active"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="Trending"
              to="/trending"
            >
              <span className="material-icons icon-md">
                local_fire_department
              </span>
            </NavLink>

            <NavLink
              onClick={handleClick}
              exact
              activeClassName="active"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="Movies"
              to="/movie"
            >
              <span className="material-icons icon-md">theaters</span>
            </NavLink>
            <NavLink
              onClick={handleClick}
              exact
              activeClassName="active"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="Tv Shows"
              to="/tv"
            >
              <span className="material-icons icon-md">tv</span>
            </NavLink>
          </div>
        </>
      )}
    </>
  );
};

export default Sidebar;

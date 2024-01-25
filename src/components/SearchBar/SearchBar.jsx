import './SearchBar.css';
import SearchIcon from "@mui/icons-material/Search";
import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBarDropList from './SearchBarDropList';

import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';


export default function SearchBar({defaultText}) {

    const navigate = useNavigate();

    const [searchInput, setSearchInput] = useState(defaultText);
    const [open, setOpen] = React.useState(false);
    const prevOpen = React.useRef(open);

    const handleOnFocus = () => {
      console.log("I'm on focus..", prevOpen.current, open);
      if (!prevOpen.current) {
        handleToggle();
      }
    };

    const handleOnBlur = () => {
      console.log("I'm on blur..", prevOpen.current, open);
      if (prevOpen.current) {
        handleToggle();
      }
    };
  
    const handleKeyPress = (event) => {
      if (event.key === 'Enter' && searchInput.length > 0) {
        navigate(`/search/"${searchInput}"`, {state: {search: searchInput, isSearch: true}});
      }
    };

  
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    console.log("i'm toggling.. ", prevOpen);
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    console.log('colsing..');
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  // return focus to the button when we transitioned from !open -> open
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);



    return (
      <div className="search-bar-wrapper">
        <div ref={anchorRef} className="search-bar-container">
          <div className="search-icon-container">
            <SearchIcon />
          </div>
          <input
            type="search"
            name="widget-search"
            id="widget-search"
            className="search-bar"
            placeholder="Search"
            value={searchInput}
            onChange = {
              (e) => setSearchInput(e.target.value)
            }
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onKeyDown={handleKeyPress}
          />
        </div>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                  <SearchBarDropList searchInput={searchInput}/>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    );
}
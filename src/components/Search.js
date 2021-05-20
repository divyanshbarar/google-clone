import React, { useState } from 'react'
import "./Search.css"
import SearchIcon from '@material-ui/icons/Search';
import { Mic } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import { useStateValue } from "../StateProvider"
import { actionTypes } from '../reducer';



function Search({ hidebuttons = false }) {

    const [{ }, dispatch] = useStateValue();


    const [input, setInput] = useState('');
    const history = useHistory();

    const search = (e) => {
        e.preventDefault();

        //
        //console.log("you hit", input);


        //
        history.push('/search')


        //dispatch
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input,
        })
    }


    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <Mic />

            </div>
            { !hidebuttons ? (
                <div className="search__buttons">
                    <Button type="sumbit" onClick={search}  >Google Search</Button>
                    <Button  > I'm feeling UnLucky xD</Button>
                </div>
            ) : (
                <div className="search__buttons">
                    <Button className="search__buttonsHidden" type="sumbit" onClick={search}  >Google Search</Button>
                    <Button className="search__buttonsHidden" > I'm feeling UnLucky xD</Button>
                </div>
            )}

        </form>
    )
}

export default Search

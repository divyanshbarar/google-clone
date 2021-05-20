
import React from 'react'
import Search from '../components/Search'
import { useStateValue } from '../StateProvider'
import useGoogleSearch from '../useGoogleSearch';
import "./SearchPage.css"
import ImageIcon from '@material-ui/icons/Image';
import { Link } from "react-router-dom"
import DescriptionIcon from '@material-ui/icons/Description';
import SearchIcon from '@material-ui/icons/Search';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RoomIcon from '@material-ui/icons/Room';
import Google from "./google.png"


function SearchPage() {

    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);

    console.log(data);

    return (
        <div className="searchPage" >
            <div className="search__header">
                <Link to="/">
                    <img className="searchPage__logo" src={Google} alt="" />

                </Link>

                <div className="search__headerBody">

                    <Search hidebuttons={true} />
                    <div className="searchPage__options">
                        <div className="searchPage__optionsLeft">
                            <div className="searchPage__option">
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>
                            <div className="searchPage__option">
                                <DescriptionIcon />
                                <Link to="/all">News</Link>
                            </div>
                            <div className="searchPage__option">
                                <ImageIcon />
                                <Link to="/all">Images</Link>
                            </div>
                            <div className="searchPage__option">
                                <LocalOfferIcon />
                                <Link to="/all">Shopping</Link>
                            </div>
                            <div className="searchPage__option">
                                <RoomIcon />
                                <Link to="/all">Map</Link>
                            </div>
                            <div className="searchPage__option">
                                <MoreVertIcon />
                                <Link to="/all">More</Link>
                            </div>
                        </div>
                        <div className="searchPage__optionsRight">
                            <div className="searchPage__option">

                                <Link to="/all">Settings</Link>
                            </div>
                            <div className="searchPage__option">

                                <Link to="/all">Tool</Link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            {data && (
                <div className="searchPage__results">

                    <p className="searchPage__resultCount">
                        About {data?.searchInformation.totalResults} results
                        ({data?.searchInformation.searchTime} seconds) for {term}
                    </p>
                    {
                        data?.items.map(item => (
                            <div className="searchPage__result">
                                <a className="searchPage__resultTitle"
                                    href={item.link}>
                                    {item.title}
                                </a>
                                <br />
                                <a
                                    href={item.link}>
                                    {item.displayLink}
                                </a>
                                <p className="searchPage__resultSnippet">
                                    {item.snippet}
                                </p>
                            </div>
                        ))
                    }


                </div>
            )}


        </div>
    )
}

export default SearchPage

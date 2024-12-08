import React, { useState, useEffect } from "react";
import { auth } from "../fbConfig";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import videos from "../Components/videos";
import EmptyBookmark from "../assets/images/bookmark_empt.svg";
import FillBookmark from "../assets/images/bookmark_fill.svg";
import IconSearch from "../assets/images/search_icon.svg";

export default function Movies() {
  const [searchBar, setSearchBar] = useState("");
  const [bookmarkedVideos, setBookmarkedVideos] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
      if (authUser) {
        fetchBookmarks(authUser.uid);
      }
    });
    return unsubscribe;
  }, []);

  const fetchBookmarks = (userId) => {
    const bookmarks = JSON.parse(localStorage.getItem(`bookmarks_${userId}`)) || [];
    setBookmarkedVideos(bookmarks);
  };

  const toggleBookmark = (videoId) => {
    if (!user) {
      alert("Bookmark eklemek için giriş yapmalısınız.");
      return;
    }

    const bookmarksKey = `bookmarks_${user.uid}`;
    const bookmarks = JSON.parse(localStorage.getItem(bookmarksKey)) || [];

    const updatedBookmarks = bookmarks.includes(videoId)
      ? bookmarks.filter((id) => id !== videoId)
      : [...bookmarks, videoId];

    localStorage.setItem(bookmarksKey, JSON.stringify(updatedBookmarks));
    setBookmarkedVideos(updatedBookmarks);
  };

  const handleSearchChange = (event) => setSearchBar(event.target.value);

  const filteredMovies = videos.filter(
    (video) =>
      video.type === "Film" && video.title.toLowerCase().includes(searchBar.toLowerCase())
  );

  return (
    <div className="container">
      <Header />
      <div className="movieContainer">
        <div className="searchSection">
          <img src={IconSearch} alt="Search Icon" />
          <input
            type="text"
            placeholder="Film ara..."
            value={searchBar}
            onChange={handleSearchChange}
          />
        </div>
        {searchBar && (
          <div className="searchResults">
            {filteredMovies.length > 0 ? (
              <p>{filteredMovies.length} film bulundu</p>
            ) : (
              <p>Üzgünüm aradığınız film bulunamadı 😔</p>
            )}
          </div>
        )}
        <ul className="videoDetailList">
          {filteredMovies.map((video) => (
            <li key={video.id}>
              <Link to={`/video/${video.id}`}>
                <div className="screenInfos">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="screenInfosTexts">
                    <p>
                      {video.year} · {video.type} · {video.rating}
                    </p>
                    <h6>{video.title}</h6>
                  </div>
                  <div
                    className="bookmarkIcon"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleBookmark(video.id);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={
                        bookmarkedVideos.includes(video.id)
                          ? FillBookmark
                          : EmptyBookmark
                      }
                      alt="Bookmark Icon"
                    />
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

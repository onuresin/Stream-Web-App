import React, { useState, useEffect } from "react";
import { auth } from "../fbConfig.js";
import Header from "../Components/Header.jsx";
import { Link } from "react-router-dom";
import videos from "../Components/videos.js";
import IconSearch from "../assets/images/search_icon.svg";
import EmptyBookmark from "../assets/images/bookmark_empt.svg";
import FillBookmark from "../assets/images/bookmark_fill.svg";
import TrendSlider from "../Components/TrendSlider.jsx";

export default function Feed() {
  const [user, setUser] = useState(null);
  const [searchBar, setSearchBar] = useState("");
  const [bookmarkedVideos, setBookmarkedVideos] = useState([]);

  // Kullanıcı oturumunu takip et
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
      if (authUser) {
        fetchBookmarks(authUser.uid);
      }
    });
    return unsubscribe;
  }, []);

  // LocalStorage'dan bookmark'ları getir
  const fetchBookmarks = (userId) => {
    const bookmarks = JSON.parse(localStorage.getItem(`bookmarks_${userId}`)) || [];
    setBookmarkedVideos(bookmarks);
  };

  // Bookmark ekleme veya kaldırma
  const toggleBookmark = (videoId) => {
    if (!user) {
      alert("Bookmark eklemek için giriş yapmalısınız.");
      return;
    }

    const userId = user.uid;
    const bookmarksKey = `bookmarks_${userId}`;
    const bookmarks = JSON.parse(localStorage.getItem(bookmarksKey)) || [];

    if (bookmarks.includes(videoId)) {
      // Bookmark kaldır
      const updatedBookmarks = bookmarks.filter((id) => id !== videoId);
      localStorage.setItem(bookmarksKey, JSON.stringify(updatedBookmarks));
      setBookmarkedVideos(updatedBookmarks);
    } else {
      // Bookmark ekle
      const updatedBookmarks = [...bookmarks, videoId];
      localStorage.setItem(bookmarksKey, JSON.stringify(updatedBookmarks));
      setBookmarkedVideos(updatedBookmarks);
    }
  };

  const handleSearchChange = (event) => {
    setSearchBar(event.target.value);
  };

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchBar.toLowerCase())
  );

  return (
    <div className="container">
      <Header />
      <div className="feedContainer">
        <div className="searchSection">
          <img src={IconSearch} alt="Search Icon" />
          <input
            type="text"
            placeholder="Dizi ya da Film Ara..."
            value={searchBar}
            onChange={handleSearchChange}
          />
        </div>
        {searchBar && (
          <div className="searchResults">
            {filteredVideos.length > 0 ? (
              <p>{filteredVideos.length} video bulundu</p>
            ) : (
              <p>Aradığınız video bulunamadı</p>
            )}
          </div>
        )}
        {!searchBar && <TrendSlider bookmarkedVideos={bookmarkedVideos} toggleBookmark={toggleBookmark} />}
        <div className="recommended">
          {!searchBar &&
            <h5>Sana Özel</h5>}
              <ul className="videoDetailsList">
                {filteredVideos.map((video) => (
                  <li key={video.id}>
                  <Link to={`/video/${video.id}`}>
                    <div className="screenInfos">
                      <img src={video.thumbnail} alt={video.title} />
                      <div className="screenInfosTexts">
                        <p>
                          {video.year} ·
                          <img className="icons" src={video.show} />
                          {video.type} · {video.raiting}
                        </p>
                        <h6>{video.title}</h6>
                      </div>
                      <div
                        className="bookmarkIconDetail"
                        onClick={(e) => {
                          e.preventDefault(); // Link'in varsayılan davranışını durdur
                          e.stopPropagation(); // Olayın yukarıya iletilmesini durdur
                          toggleBookmark(video.id); // Bookmark işlevini çalıştır
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <img
                          src={
                            bookmarkedVideos.includes(video.id) ? FillBookmark : EmptyBookmark
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
    </div>
  );
}

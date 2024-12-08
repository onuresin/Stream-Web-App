import React, { useState, useEffect } from "react";
import { auth } from "../fbConfig";
import videos from "../Components/videos";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import EmptyBookmark from "../assets/images/bookmark_empt.svg";
import FillBookmark from "../assets/images/bookmark_fill.svg";

export default function Bookmarked() {
  const [user, setUser] = useState(null);
  const [bookmarkedVideoIds, setBookmarkedVideoIds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
      if (authUser) {
        fetchBookmarks(authUser.uid);
      } else {
        setBookmarkedVideoIds([]);
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  const fetchBookmarks = (userId) => {
    try {
      const bookmarks = JSON.parse(localStorage.getItem(`bookmarks_${userId}`)) || [];
      setBookmarkedVideoIds(bookmarks);
    } catch (error) {
      console.error("Bookmark verisi çözülemedi:", error);
    }
    setLoading(false);
  };

  const toggleBookmark = (videoId) => {
    if (!user) {
      alert("Bookmark eklemek için giriş yapmalısınız.");
      return;
    }

    const bookmarksKey = `bookmarks_${user.uid}`;
    const currentBookmarks = JSON.parse(localStorage.getItem(bookmarksKey)) || [];

    const updatedBookmarks = currentBookmarks.includes(videoId)
      ? currentBookmarks.filter((id) => id !== videoId) // Sil
      : [...currentBookmarks, videoId]; // Ekle

    localStorage.setItem(bookmarksKey, JSON.stringify(updatedBookmarks));
    setBookmarkedVideoIds(updatedBookmarks);
  };

  if (loading) {
    return <p>Yükleniyor...</p>;
  }

  if (!user) {
    return <p>Lütfen giriş yapın.</p>;
  }

  const bookmarkedVideos = videos.filter((video) =>
    bookmarkedVideoIds.includes(video.id)
  );

  return (
    <div className="bookMain">
      <Header />
      <div className="bookmarkedContainer">
        <h3>Kaydedilmiş Videolar</h3>
        {bookmarkedVideos.length > 0 ? (
          <ul className="videoList">
            {bookmarkedVideos.map((video) => (
              <li key={video.id}>
                <Link to={`/video/${video.id}`}>
                  <div className="videoDetails">
                    <img src={video.thumbnail} alt={video.title} />
                    <div className="details">
                      <h4>{video.title}</h4>
                      <p>
                        {video.year} · {video.type}
                      </p>
                      <div className="bookmarkedIcon"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleBookmark(video.id);
                        }}
                      >
                        <img src={bookmarkedVideoIds.includes(video.id) ? FillBookmark : EmptyBookmark }/>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="unBookMarked">Henüz bookmark'lanmış bir video bulunmuyor.</p>
        )}
      </div>
    </div>
  );
}

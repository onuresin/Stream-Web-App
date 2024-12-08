import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import videos from "../Components/videos";
import Header from "../Components/Header";
import Send from "../assets/images/send.png";
import { auth } from "../fbConfig"; // Firebase Authentication'ı içe aktar

export default function VideoDetail() {
  const { id } = useParams();
  const video = videos.find((video) => video.id === id);
  const [comments, setComments] = useState([]); // Yorumlar
  const [newComment, setNewComment] = useState(""); // Yeni yorum
  const [user, setUser] = useState(null); // Kullanıcı durumu

  // localStorage'dan yorumları yükle
  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem(`comments_${id}`)) || [];
    setComments(storedComments);

    // Kullanıcı durumu Firebase'den dinlenir
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser({
          uid: currentUser.uid,
          username: currentUser.displayName || currentUser.email.split("@")[0], // Kullanıcı adı veya e-posta'nın baş kısmı
          email: currentUser.email,
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [id]);

  // Yorum gönderme
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      alert("Lütfen yorum yapabilmek için giriş yapın.");
      return;
    }

    const newCommentData = {
      id: Date.now().toString(), // Benzersiz bir ID
      videoId: id,
      userId: user.uid,
      username: user.username, // Kullanıcı adı
      comment: newComment,
      timestamp: new Date().toLocaleString(),
    };

    const updatedComments = [newCommentData, ...comments];
    setComments(updatedComments); // Yorumları güncelle
    localStorage.setItem(`comments_${id}`, JSON.stringify(updatedComments)); // localStorage'a kaydet
    setNewComment(""); // Yorum alanını temizle
  };

  // Video bulunamadıysa
  if (!video) {
    return (
      <div>
        <h2>Aradığınız Video Bulunamadı!</h2>
      </div>
    );
  }

  return (
    <div className="detailContainer">
      <Header />
      <div className="videoPage">
        <h2>{video.title}</h2>
        <p>
          {video.type} / {video.year}
        </p>
        <div className="videoWindow">
          <iframe
            className="windowFrame"
            src={video.url}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        {/* Yorum Ekleme */}
        {user ? (
          <form className="sendComment" onSubmit={handleCommentSubmit}>
            <textarea
              placeholder="Yorumunuzu buraya yazın..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              required
            ></textarea>
            <button type="submit">
              <img src={Send} alt="Send" />
            </button>
          </form>
        ) : (
          <p>Yorum yapabilmek için lütfen giriş yapın.</p>
        )}

        {/* Yorumlar */}
        <div className="commentsSection">
          <h3>Yorumlar</h3>
          {comments.length > 0 ? (
            <ul>
              {comments.map((comment) => (
                <li key={comment.id}>
                  <strong>{comment.username}:</strong> {comment.comment}
                  <br />
                  <small>{comment.timestamp}</small>
                </li>
              ))}
            </ul>
          ) : (
            <p>Henüz yorum yapılmamış, hadi ilk yorumu sen yap!</p>
          )}
        </div>
      </div>
    </div>
  );
}

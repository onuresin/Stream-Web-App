// Register.jsx

import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { auth, storage } from '../fbConfig.js';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Logo from "../assets/images/logo.svg";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [profileImage, setProfileImage] = useState(null); 
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false); 
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Şifreler eşleşmiyor.");
            return;
        }

        try {
            setLoading(true);
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            if (profileImage) {
                const imageRef = ref(storage, `profileImages/${user.uid}`);
                await uploadBytes(imageRef, profileImage);
                const profileImageUrl = await getDownloadURL(imageRef);

                await updateProfile(user, {
                    photoURL: profileImageUrl, 
                });
            }

            navigate("/feed"); // Kayıt Başarılı olursa Feed'e

        } catch (error) {
            console.error("Kayıt hatası:", error.message);
            setError(`Kayıt sırasında bir hata oluştu: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="register-container">
            <div className="register-logo">
                <Link to='/'><img src={Logo} alt="Logo" /></Link>
            </div>
            <div className="register-inner">
                <h5>Kayıt Ol</h5>
                <div className="register-form">
                    <form autoComplete='off' className='registerRows' onSubmit={handleRegister}>
                        <input
                            type="text"
                            placeholder='E-Posta Adresi'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Şifre"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Şifre Tekrar"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setProfileImage(e.target.files[0])} 
                        />
                        <button type="submit" className='confirm' disabled={loading}>
                            {loading ? "Yükleniyor..." : "Kaydı Tamamla"}
                        </button>
                    </form>
                    {error && <p className="error-message">{error}</p>}
                </div>
                <div className="register-loginLink">
                    <h6>Hesabın var mı?</h6>
                    <Link to='/login'>Giriş Yap</Link>
                </div>
            </div>
        </div>
    );
}

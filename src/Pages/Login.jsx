import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../fbConfig";  // fbConfig dosyasından auth'yi içe aktarın
import Logo from "../assets/images/logo.svg";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            // Firebase ile oturum açma
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/"); // Başarılı giriş sonrası ana sayfaya yönlendir
        } catch (error) {
            // Hata mesajını ayarla
            setError("Giriş başarısız. Lütfen bilgilerinizi kontrol edin.");
        }
    };

    return (
        <div className="login-container">
            <div className="login-logo">
                <Link to='/'><img src={Logo} alt="Logo" /></Link>
            </div>
            <div className="login-inner">
                <h5>Giriş Yap</h5>
                <div className="login-form">
                    <form autoComplete='off' className='loginRows' onSubmit={handleLogin}>
                        <input
                            type="text"
                            placeholder="E-Posta Adresi"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Şifre"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit" className='confirm'>Hesabına Giriş Yap</button>
                    </form>
                    {error && <p className="error-message">{error}</p>}
                </div>
                <div className="login-signupLink">
                    <h6>Hesabın yok mu?</h6>
                    <Link to='/register'>Kayıt Ol</Link>
                </div>
            </div>
        </div>
    );
}

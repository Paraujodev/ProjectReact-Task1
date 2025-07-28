import { useState } from "react";
import "./style.scss"


function Register() {
    const [fullName, setFullName] = useState("");
    const [profession, setProfession] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [passwordError, setPasswordError] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setPasswordError("As senhas não coincidem.");
            return;
        }

        setPasswordError("");

        // Limpa todos os campos
        setFullName("");
        setProfession("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setAgreeTerms(false);

        console.log("Formulário enviado!");
    };

    return (
        <div className="container">
            <header>
                <h1 className="title">Crie sua Conta</h1>
                <h2 className="subtitle">Preencha seus dados</h2>
            </header>

            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome completo *</span>
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                </label>

                <label>
                    <span>Profissão</span>
                    <input
                        type="text"
                        value={profession}
                        onChange={(e) => setProfession(e.target.value)}
                    />
                </label>

                <label>
                    <span>E-mail *</span>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>

                <label>
                    <span>Senha *</span>
                    <div className="password-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <i
                            className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"} toggle-password-icon`}
                            onClick={() => setShowPassword(!showPassword)}
                        ></i>
                    </div>
                </label>

                <label>
                    <span>Confirmação de senha *</span>
                    <div className="password-wrapper">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <i
                            className={`fa-solid ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"} toggle-password-icon`}
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        ></i>
                    </div>
                </label>
                {passwordError && (
                    <p className="error-message">{passwordError}</p>
                )}

                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        checked={agreeTerms}
                        onChange={(e) => setAgreeTerms(e.target.checked)}
                        required
                    />
                    Eu concordo com os <a>Termos de Política de Privacidade</a> *
                </label>
                <button className="button-cadastro" type="submit">Cadastrar</button>
            </form>
            <button className="button-login" type="submit">Já tem uma conta? <b>Faça Login.</b>

            </button>
        </div>
    );
}

export default Register;
import "./style.css"


function Register() {
    return (
        <>
            <div className="container">
                <header>
                    <h1 className="title">Crie sua Conta</h1>
                    <h2 className="subtitle">Preencha seus dados</h2>
                </header>

                <form>
                    <label>
                        <span>Nome completo *</span>
                        <input type="text" required />
                    </label>

                    <label>
                        <span>Profissão</span>
                        <input type="text"  />
                    </label>

                    <label>
                        <span>E-mail *</span>
                        <input type="email" required />
                    </label>

                    <label>
                        <span>Senha *</span>
                        <input type="password" required />
                    </label>

                    <label>
                        <span>Confirmação de senha *</span>
                        <input type="password" required />
                    </label>

                    <label className="checkbox-label">
                        <input type="checkbox" required />
                        Eu concordo com os <a>Termos de Política de Privacidade</a> *
                    </label>
                    <button className="button-cadastro" type="submit">Cadastrar</button>
                </form>
                <button className="button-login" type="submit">Já tem uma conta? <b>Faça Login.</b>

                </button>
            </div>
        </>

    );
}

export default Register;


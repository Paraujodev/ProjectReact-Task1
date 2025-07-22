import "./style.css"

// components/register.jsx
function Register() {
    return (
        <>
            <div className="container">
                <header>
                    <h1 className="title">Crie sua Conta</h1>
                    <h2 className="subtitle">Preencha seus dados</h2>
                </header>

                <form>
                    <input type="text" placeholder="Nome Completo *" required/>
                    <input type="text" placeholder="Profissão" />
                    <input type="email" placeholder="E-mail *" required />
                    <input type="password" placeholder="Senha *" required />
                    <input type="password" placeholder="Confirmação de senha *" required />
                    <label className="checkbox-label">
                        <input type="checkbox" required />
                        Eu concordo com os <a href="">Termos de Política de Privacidade</a> *
                    </label>
                    <button type="submit">Cadastrar</button>
                </form>
                <button className="button-login" type="submit">Já tem uma conta? <b>Faça Login.</b>
                    
                </button>
            </div>
        </>

    );
}

export default Register;

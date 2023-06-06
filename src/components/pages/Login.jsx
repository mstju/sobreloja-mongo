import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import { useEffect, useState } from "react";
// import axios from "axios"
import logo from "../../components/img/logo/logo-black.png";
import "../styles/login.css";

const schema = yup.object({
  email: yup
    .string()
    .required("*Campo obrigatório!")
    .email("*Precisa ser um email válido")
    .test("isValidPass", "*Email inválido", (value, context) => {
      const hasDot = /[.]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasAt = /[@]/.test(value);
      let validConditions = 0;
      const numberOfMustBeValidConditions = 3;
      const conditions = [hasLowerCase, hasDot, hasAt];
      conditions.forEach((condition) => (condition ? validConditions++ : null));
      if (validConditions >= numberOfMustBeValidConditions) {
        return true;
      }
      return false;
    }),
  password: yup
    .string()
    .required("*Campo obrigatório!")
    .min(6, "*Sua senha deve conter no mínimo 6 caracteres")
    .test(
      "isValidPass",
      "*Senha inválida ([A-Z] [a-z] [0-9] [!@#%&])",
      (value, context) => {
        const hasUpperCase = /[A-Z]/.test(value);
        const hasLowerCase = /[a-z]/.test(value);
        const hasNumber = /[0-9]/.test(value);
        const hasSymbole = /[!@#%&]/.test(value);
        let validConditions = 0;
        const numberOfMustBeValidConditions = 3;
        const conditions = [hasLowerCase, hasUpperCase, hasNumber, hasSymbole];
        conditions.forEach((condition) =>
          condition ? validConditions++ : null
        );
        if (validConditions >= numberOfMustBeValidConditions) {
          return true;
        }
        return false;
      }
    ),
});

export default function Login() {
  const handleRedirectHome = () => {};

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  console.log(errors);

  // const history = useNavigate()

  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

  // async function submit(e){
  //   e.preventDefault()
  //   try{
  //     await axios.post("http://localhost:8000/",{
  //     email, password
  //     })
  //     .then(res=>{
  //       if(res.data="Esse usuário já existe"){
  //         history("/home")
  //       }
  //       else if(res.data="Esse usuário ainda não existe"){
  //         alert("Usuário ainda não realizou o cadastro")
  //       }
  //     })
  //     .catch(e => {
  //       alert("erro")
  //       console.log(e);
  //     })
  //   }
  //   catch(e){
  //     console.log(e);
  //   }
  // }
  return (
    <div className="container py-2 login-container">
      <div className="row d-flex justify-content-center align-items-center h-100 login-conteudo">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card-cadastro bg-light text-white">
            <div className="card-body p-3 text-center">
              <div className="md-4">
                <Link to="/" onClick={handleRedirectHome}>
                  <img
                    src={logo}
                    className="img-fluid p-2 mb-2 logo-cadastro"
                    alt="Voltar para a página inicial"
                  />
                </Link>

                <section>
                  <form action="POST" onSubmit={handleSubmit(onSubmit)}>
                    <input
                      type="text"
                      id="email"
                      className="form-control "
                      placeholder="Digite seu E-mail"
                      // onChange={(e)=>{setEmail(e.target.value)}}
                      {...register("email")}
                    />
                    <p className="error">{errors.email?.message}</p>

                    <input
                      type="password"
                      id="password"
                      className="form-control  mt-2"
                      placeholder="Digite sua Senha"
                      {...register("password")}
                      // onChange={(e)=>{setPassword(e.target.value)}}
                    />
                    <p className="error">{errors.password?.message}</p>

                    <input
                      className="btn btn-outline-dark btn-lg px-5 cadastro-btn "
                      type="submit"
                      value="Login"
                      id="submit-login"
                      // onClick={submit}
                    />
                  </form>
                </section>

                <p className="small pb-lg-2 mt-4">
                  <Link
                    className="links-register fs-6 text-decoration-none"
                    to="/forgot"
                  >
                    Esqueci minha senha
                  </Link>
                </p>
              </div>

              <div>
                <p className="text-black mb-4">
                  Não tem uma conta?
                  <Link
                    to="/cadastro"
                    className="links-register register fw-bold"
                  >
                     Cadastre-se
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

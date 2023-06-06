import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputMask from "react-input-mask";
import * as yup from "yup";
import axios from "axios";
import logo from "../img/logo/logo-black.png";
import "../styles/cadastro.css";
import { Link } from "react-router-dom";

const schema = yup.object({
  nomeCompleto: yup
    .string()
    .required("Nome Completo é obrigatório")
    .min(3, "O Nome Completo deve conter no mínimo 3 caracteres"),
  dataNascimento: yup
    .string()
    .required("Data de Nascimento é obrigatória")
    .test("isValidDate", "Data de Nascimento inválida (XX/XX/XXXX)", (value) => {
      const dateRegex =
        /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;

      if (!dateRegex.test(value)) {
        return false;
      }

      const [day, month, year] = value.split("/");
      const currentDate = new Date();
      const inputDate = new Date(`${year}-${month}-${day}`);
      if (isNaN(inputDate.getTime()) || inputDate > currentDate) {
        return false;
      }
      const minimumAge = 18;
      const minimumAgeDate = new Date();
      minimumAgeDate.setFullYear(minimumAgeDate.getFullYear() - minimumAge);
      if (inputDate > minimumAgeDate) {
        return false;
      }
      return true;
    }),

  email: yup
    .string()
    .email("Email inválido")
    .required("Email é obrigatório")
    .test("isValidEmail", "Email inválido", (value) => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

      return emailRegex.test(value);
    }),

  celular: yup
    .string()
    .required("Celular é obrigatório")
    .matches(/^\(\d{2}\) \d{5}-\d{4}$/, "Celular inválido (XX) XXXXX-XXXX"),

  senha: yup.string().required("Senha é obrigatória"),
  confirmarSenha: yup
    .string()
    .oneOf([yup.ref("senha"), null], "Senhas devem ser iguais")
    .required("Confirmação de senha é obrigatória"),
  cep: yup.string().required("CEP é obrigatório"),
  uf: yup.string().required("UF é obrigatório"),
  numero: yup.string().required("Número é obrigatório"),
  bairro: yup.string().required("Bairro é obrigatório"),
  cidade: yup.string().required("Cidade é obrigatória"),
  rua: yup.string().required("Rua é obrigatória"),
});

export default function Cadastro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [, setLoading] = useState(false);

  const handleCpfCnpjChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");

    let maskedValue = value;

    if (value.length <= 11) {
      // Máscara para CPF
      maskedValue = value
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    } else {
      // Máscara para CNPJ
      maskedValue = value
        .replace(/^(\d{2})(\d)/, "$1.$2")
        .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
        .replace(/\.(\d{3})(\d)/, ".$1/$2")
        .replace(/(\d{4})(\d)/, "$1-$2");
    }

    setValue("cpfCnpj", maskedValue);
  };

  const handleCEPChange = async (e) => {
    const cep = e.target.value.replace(/\D/g, "");

    if (cep.length === 8) {
      setLoading(true);

      try {
        const response = await axios.get(
          `https://viacep.com.br/ws/${cep}/json/`
        );

        if (response.data.erro) {
          console.log("CEP não encontrado");
        } else {
          setValue("uf", response.data.uf);
          setValue("cidade", response.data.localidade);
          setValue("bairro", response.data.bairro);
          setValue("rua", response.data.logradouro);
        }
      } catch (error) {
        console.log("Erro ao buscar CEP:", error);
      }
      setLoading(false);
    }
  };

  const onSubmit = async (data) => {
    try {
      await axios.post("https://sobreloja-mongo.vercel.app/submit", data);
      console.log("Dados armazenados com sucesso!");
    } catch (error) {
      console.error("Erro ao armazenar os dados", error);
    }
  };
  

  const handleRedirectHome = () => {};

  return (
    <div className="container py-2 cadastro-container">
      <div className="row d-flex justify-content-center align-items-center h-100 cadastro-conteudo">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card-cadastro bg-light text-white">
            <div className="card-body p-3 text-center">
              <div className="md-4">
                <Link to="/" onClick={handleRedirectHome}>
                  <img
                    src={logo}
                    role="button"
                    className="img-fluid p-2 mb-2 logo-cadastro"
                    alt="Voltar para a página inicial"
                  />
                </Link>
                <form
                  className="cadastro-form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="form-group">
                    <input
                      type="text"
                      id="nomeCompleto"
                      className="form-control"
                      placeholder="Nome Completo"
                      {...register("nomeCompleto")}
                    />
                    <p className="error">{errors.nomeCompleto?.message}</p>
                  </div>
                  <div className="form-group">
                    <InputMask
                      mask="99/99/9999"
                      maskplaceholder=""
                      id="dataNascimento"
                      className="form-control"
                      placeholder="Data de Nascimento"
                      {...register("dataNascimento")}
                    />
                    <p className="error">{errors.dataNascimento?.message}</p>
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      id="cpfCnpj"
                      className="form-control"
                      placeholder="CPF ou CNPJ"
                      {...register("cpfCnpj")}
                      onChange={handleCpfCnpjChange}
                      maxLength={18}
                    />
                    <p className="error">{errors.cpfCnpj?.message}</p>
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Email"
                      {...register("email")}
                    />
                    <p className="error">{errors.email?.message}</p>
                  </div>
                  <div className="form-group">
                    <InputMask
                      mask="(99) 99999-9999"
                      maskChar=""
                      id="celular"
                      className="form-control"
                      placeholder="Celular"
                      {...register("celular")}
                    />
                    <p className="error">{errors.celular?.message}</p>
                  </div>

                  <div className="form-group">
                    <input
                      type="password"
                      id="senha"
                      className="form-control"
                      placeholder="Senha"
                      {...register("senha")}
                    />
                    <p className="error">{errors.senha?.message}</p>
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      id="confirmarSenha"
                      className="form-control"
                      placeholder="Confirmar Senha"
                      {...register("confirmarSenha")}
                    />
                    <p className="error">{errors.confirmarSenha?.message}</p>
                  </div>
                  <section className="endereco">
                    <div className="form-group">
                      <input
                        type="text"
                        id="cep"
                        className="form-control"
                        placeholder="CEP"
                        {...register("cep")}
                        onChange={handleCEPChange}
                      />
                      <p className="error">{errors.cep?.message}</p>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        id="uf"
                        className="form-control"
                        placeholder="UF"
                        {...register("uf")}
                      />
                      <p className="error">{errors.uf?.message}</p>
                    </div>
                  </section>
                  <div className="form-group">
                    <input
                      type="text"
                      id="cidade"
                      className="form-control"
                      placeholder="Cidade"
                      {...register("cidade")}
                    />
                    <p className="error">{errors.cidade?.message}</p>
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      id="bairro"
                      className="form-control"
                      placeholder="Bairro"
                      {...register("bairro")}
                    />
                    <p className="error">{errors.bairro?.message}</p>
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      id="rua"
                      className="form-control"
                      placeholder="Rua"
                      {...register("rua")}
                    />
                    <p className="error">{errors.rua?.message}</p>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      id="numero"
                      className="form-control"
                      placeholder="Número"
                      {...register("numero")}
                    />
                    <p className="error">{errors.numero?.message}</p>
                  </div>

                  <div>
                    <p className="small text-center">
                      <Link
                        className="links-register fs-6 text-decoration-none "
                        to="/forgot"
                      >
                        Esqueci minha senha
                      </Link>
                    </p>
                  </div>

                  <div>
                    <p className="text-black text-center">
                      Já tem uma conta? 
                      <Link
                        to="/login"
                        className="links-register register fw-bold"
                      >
                        Entre
                      </Link>
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-outline-dark btn-lg px-5 cadastro-btn "
                  >
                    Cadastrar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

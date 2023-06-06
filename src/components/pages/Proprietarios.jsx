/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from "react";
import logo from "../../components/img/logo/logo.png"

export default function Proprietarios() {
  return (
    <div>
     
      <header>
        <nav className='navbar navbar-expand-lg'>
          <div className='container-fluid'>
            <a className='navbar-brand' href='../index.html'>
              <img
                src={logo}
                alt='Voltar para a página inicial'
                width='20%'
                className='d-inline-block align-text-top'
              />
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon btn btn-outline-light btn-lg'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <a
                    className='nav-link text-uppercase'
                    aria-current='page'
                    href='#'
                  >
                    buscar lojas
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link text-uppercase' href='#'>
                    para proprietários
                  </a>
                </li>

                <li className='nav-item'>
                  <a className='nav-link text-uppercase' href='#'>
                    para imobiliárias
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <h1>Cadastre sua Loja!</h1>
      </header>
      
      <main>
        <div className='container-form'>
          <form>
            <select
              id='cidade'
              onchange='obterCidade()'
              className='form-select mb-3 p-2 w-100'
            >
              <option value='0' selected>
                Cidade
              </option>
              <option value='1'>São Paulo</option>
            </select>
            <select
              id='bairro'
              onchange='obterBairro(event)'
              className='form-select mb-3 p-2 w-100'
            >
              <option selected>Bairro</option>
              <option id='districtOption' value=''></option>
            </select>
            <select
              id='valorLocacao'
              onchange='obterValorLocacao()'
              className='form-select mb-3 p-2 w-100'
            >
              <option value='0' selected>
                Valor da Locação
              </option>
              <option value='1'>até R$1.000,00</option>
              <option value='2'>R$1.000,00 a R$2.000,00</option>
              <option value='3'>R$2.0000,00 a R$3.000,00</option>
              <option value='4'>R$3.0000,00 a R$5.000,00</option>
              <option value='5'>R$5.0000,00 a R$7.000,00</option>
              <option value='6'>R$7.0000,00 a R$9.000,00</option>
              <option value='7'>R$10.000,00 a R$15.000,00</option>
              <option value='8'>R$15.000,00 a R$20.000,00</option>
              <option value='9'>mais de R$20.000,00</option>
            </select>
            <select
              id='tamanho'
              onchange='obterTamanho()'
              className='form-select mb-3 p-2 w-100'
            >
              <option value='0' selected>
                Tamanho
              </option>
              <option value='1'>até 20m²</option>
              <option value='2'>de 20m² a 50m²</option>
              <option value='3'>de 50m² a 100m²</option>
              <option value='4'>de 100m² a 200m²</option>
              <option value='5'>de 200m² a 300m²</option>
              <option value='6'>de 300m² a 500m²</option>
              <option value='7'>de 500m² a 1000m²</option>
              <option value='8'>mais de 1000m²</option>
            </select>
            <select
              id='estabelecimento'
              onchange='obterEstabelecimento()'
              className='form-select mb-3 p-2 w-100'
            >
              <option value='0' selected>
                Estabelecimento
              </option>
              <option value='1'>Shopping Iguatemi</option>
              <option value='2'>Shopping Ibirapuera</option>
              <option value='3'>Shopping Morumbi</option>
            </select>
            <select
              id='tipo'
              onchange='obterTipo()'
              className='form-select mb-3 p-2 w-100'
            >
              <option value='0' selected>
                Tipo
              </option>
              <option value='1'>Lojas de Shopping / Galerias</option>
              <option value='2'>Quiosques</option>
              <option value='3'>
                Lojas de Alimentação de Shopping / Galerias
              </option>
              <option value='4'>Boxes</option>
              <option value='5'>Lojas de Rua</option>
              <option value='5'>Lojas de Alimentação de Rua</option>
            </select>
          </form>
          <form id='rent-form' method='post'>
            <div className='full-box'>
              <label htmlFor='email'>E-mail</label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Digite seu e-mail'
              />
              <span className='msg-error msg-email'></span>
            </div>
            <div className='full-box spacing'>
              <label htmlFor='name'>Nome</label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Digite seu nome'
              />
              <span className='msg-error msg-name'></span>
            </div>
            <div className='full-box'>
              <label htmlFor='lastname'>Sobrenome</label>
              <input
                type='text'
                name='lastname'
                id='lastname'
                placeholder='Digite seu sobrenome'
              />
              <span className='msg-error msg-lastname'></span>
            </div>
            <div className='full-box'>
              <label htmlFor='phone'>Telefone</label>
              <input
                type='tel'
                name='phone'
                id='phone'
                placeholder='Digite seu celular com DDD'
              />
              <span className='msg-error msg-phone'></span>
            </div>

            <div>
              <button
                type='submit'
                className='btn btn-outline-dark btn-lg px-5 mt-4'
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </main>
      <br />
    </div>
  );
}

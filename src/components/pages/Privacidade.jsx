import React, { useEffect } from "react";
import "../styles/privacidade.css";
import Navbar from "../home/Nav";
import Footer from "../home/Footer";

export default function Privacidade() {
  useEffect(() => {
    const handleCollapsibleClick = (event) => {
      event.target.classList.toggle("active");
      const content = event.target.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.classList.remove("show");
      } else {
        content.style.maxHeight = `${content.scrollHeight}px`;
        content.classList.add("show");
      }
    };

    const collapsibles = document.getElementsByClassName("collapsible");
    for (let i = 0; i < collapsibles.length; i++) {
      collapsibles[i].addEventListener("click", handleCollapsibleClick);
    }

    return () => {
      for (let i = 0; i < collapsibles.length; i++) {
        collapsibles[i].removeEventListener("click", handleCollapsibleClick);
      }
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container-fluid privacidade-container">
        <main className="privacidade">
          <button className="collapsible">
            O que é e pra que serve a política de privacidade?
          </button>
          <div className="content">
            <p>
              A política de privacidade é um documento importante que explica
              como coletamos, usamos e protegemos as informações pessoais de
              nossos usuários.
            </p>
            <p>
              Em nosso site, solicitamos informações pessoais de nossos
              usuários, como nome, CPF, endereço de e-mail e número de telefone,
              para que possamos fornecer os serviços solicitados. Também podemos
              coletar informações não pessoais, como dados demográficos e
              informações sobre o uso do site.
            </p>
            <p>
              Uma das principais razões pela qual as empresas e organizações
              criam políticas de privacidade é para cumprir com leis e
              regulamentos que protegem a privacidade das pessoas. Por exemplo,
              a Lei Geral de Proteção de Dados (LGPD) no Brasil e o Regulamento
              Geral de Proteção de Dados (GDPR) na União Europeia estabelecem
              regras para o tratamento de dados pessoais de cidadãos desses
              países. Essas leis exigem que as empresas e organizações informem
              claramente como coletam, usam e protegem esses dados, e dão aos
              usuários direitos específicos em relação às suas informações
              pessoais.
            </p>
            <p>
              Além de cumprir com leis e regulamentos, as políticas de
              privacidade também servem para estabelecer confiança e
              transparência entre as empresas e os usuários. Quando os usuários
              sabem como suas informações serão tratadas e que elas serão
              protegidas de forma adequada, eles podem se sentir mais
              confortáveis em compartilhar esses dados e utilizar os serviços
              oferecidos pela empresa. Isso é especialmente importante em um
              site de venda e aluguel de imóveis, onde os usuários compartilham
              informações pessoais e financeiras para reservar propriedades ou
              fazer transações.
            </p>
            <p>
              Além disso, as políticas de privacidade também podem ajudar a
              evitar problemas legais e de responsabilidade para as empresas. Se
              uma empresa não cumprir com as leis de proteção de dados ou não
              for transparente sobre como trata as informações pessoais de seus
              usuários, ela pode ser responsabilizada por danos ou perdas
              causados por esses atos. Além disso, a falta de confiança dos
              usuários em relação à privacidade pode levar a uma diminuição da
              base de clientes e a prejuízos financeiros para a empresa.
              Respeitamos a privacidade de nossos usuários e tomamos medidas
              para garantir que as informações pessoais sejam tratadas de forma
              segura e confidencial. Se você tiver alguma dúvida sobre nossa
              política de privacidade, não hesite em entrar em contato conosco.
            </p>
          </div>
          <button className="collapsible">Quais dados coletamos?</button>
          <div className="content">
            <p>
              Em nosso site, coletamos algumas informações pessoais de nossos
              usuários para que possamos oferecer os serviços solicitados. Esses
              dados incluem:
            </p>
            <ul>
              <li>
                <p>
                  Nome: solicitamos o nome do usuário para que possamos
                  identificá-lo e fornecer os serviços solicitados.
                </p>
              </li>
              <li>
                <p>
                  Endereço de e-mail: pedimos o endereço de e-mail do usuário
                  para que possamos entrar em contato e enviar informações sobre
                  imóveis disponíveis..
                </p>
              </li>
              <li>
                <p>
                  Número de telefone: solicitamos o número de telefone do
                  usuário para que possamos entrar em contato caso haja dúvidas.
                </p>
              </li>
              <li>
                <p>
                  Endereço: solicitamos o endereço completo do usuário para que
                  possamos enviar informações sobre imóveis disponíveis na
                  região.
                </p>
              </li>
              <li>
                <p>
                  CPF: o CPF (Cadastro de Pessoa Física) é um número único de
                  identificação usado no Brasil e é solicitado para fins de
                  cadastro.
                </p>
              </li>
              <li>
                <p>
                  RG: o RG (Registro Geral) é um documento de identidade emitido
                  pelo governo e é solicitado para fins de cadastro.
                </p>
              </li>
              <li>
                <p>
                  Data de nascimento: solicitamos a data de nascimento do
                  usuário para fins de cadastro e para garantir que os serviços
                  sejam oferecidos apenas a maiores de idade.
                </p>
              </li>
            </ul>
            <p>
              Além dessas informações pessoais, também podemos coletar dados de
              navegação dos usuários em nosso site. Esses dados incluem
              informações sobre o dispositivo usado para acessar o site, o
              endereço IP, a localização geográfica, o histórico de navegação e
              os sites acessados antes e depois de visitar o nosso site. Esses
              dados são coletados de forma anônima e não são associados a um
              usuário específico. Eles são usados para entender como os usuários
              estão utilizando o site e para melhorar a experiência de
              navegação.
            </p>
            <p>
              Para acessar alguns serviços em nosso site, o usuário pode ser
              solicitado a criar uma conta e escolher uma senha. A senha é usada
              para proteger a conta do usuário e garantir que apenas ele tenha
              acesso às informações dela. É importante que o usuário escolha uma
              senha segura e não a compartilhe com terceiros.
            </p>
            <p>
              Os usuários têm o direito de acessar, corrigir ou excluir suas
              informações pessoais a qualquer momento, mediante solicitação.
              Também podem optar por não receber comunicações promocionais ou
              marketing de nossa parte, bastando para isso seguir as instruções
              de cancelamento de inscrição nas mensagens enviadas.
            </p>
          </div>
          <button className="collapsible">Pra que coletamos seus dados?</button>
          <div className="content">
            <p>
              Em nosso site, utilizamos as informações pessoais dos usuários
              para oferecer os serviços solicitados e garantir a melhor
              experiência possível. Alguns dos principais motivos pelos quais
              utilizamos esses dados incluem:
            </p>
            <ul>
              <li>
                <p>
                  Entrar em contato: usamos o nome, o endereço de e-mail e o
                  número de telefone dos usuários para entrar em contato e
                  enviar informações sobre imóveis disponíveis.
                </p>
              </li>
              <li>
                <p>
                  Cadastro: solicitamos o endereço completo, o CEP, o CPF, o RG
                  e a data de nascimento dos usuários para fins de cadastro e
                  confirmação de reservas. Esses dados são necessários para
                  garantir que os serviços sejam oferecidos apenas a maiores de
                  idade e para proteger os interesses da empresa.
                </p>
              </li>
              <li>
                <p>
                  Personalização: utilizamos as informações de navegação dos
                  usuários para entender como eles estão utilizando o site e
                  para oferecer conteúdo e recomendações personalizadas. Por
                  exemplo, se um usuário estiver procurando por imóveis em
                  determinada região, podemos mostrar anúncios de imóveis
                  similares na mesma área.
                </p>
              </li>
              <li>
                <p>
                  Segurança: usamos a senha dos usuários para proteger as contas
                  e garantir que apenas eles tenham acesso às informações delas.
                  Garantimos que essas informações serão utilizadas apenas para
                  os fins especificados em nossa política de privacidade e não
                  serão vendidas ou compartilhadas com terceiros, exceto quando
                  exigido por lei ou para proteger os interesses da empresa.
                  Respeitamos a privacidade de nossos usuários e tomamos medidas
                  para garantir que as informações pessoais sejam tratadas de
                  forma segura e confidencial. Se você tiver alguma dúvida sobre
                  nossa política de privacidade ou sobre para que utilizamos os
                  seus dados, não hesite em entrar em contato conosco. Estamos
                  sempre à disposição para esclarecer qualquer questão e
                  garantir a transparência e confiança em nossos serviços.
                </p>
              </li>
            </ul>
          </div>
          <button className="collapsible">
            Com quem podemos compartilhar os seus dados?
          </button>
          <div className="content">
            <p>
              Em nosso site, tomamos medidas para proteger as informações
              pessoais dos usuários e garantir que elas sejam tratadas de forma
              segura e confidencial. No entanto, em alguns casos, podemos
              compartilhar os dados dos usuários com terceiros para oferecer os
              serviços solicitados ou para proteger os interesses da empresa.
              Alguns dos casos em que podemos compartilhar os dados dos usuários
              incluem:
            </p>
            <ul>
              <li>
                <p>
                  Parceiros de negócio: em alguns casos, podemos compartilhar os
                  dados dos usuários com parceiros de negócio, como corretores
                  de imóveis ou empresas de administração de imóveis, para que
                  possamos oferecer os serviços solicitados.
                </p>
              </li>
              <li>
                <p>
                  Fornecedores de serviços: para oferecer os serviços
                  solicitados, podemos compartilhar os dados dos usuários com
                  fornecedores de serviços, como empresas de envio de e-mails ou
                  de processamento de pagamentos.
                </p>
              </li>
              <li>
                <p>
                  Autoridades competentes: em alguns casos, podemos ser
                  obrigados a compartilhar os dados dos usuários com autoridades
                  competentes, como a polícia ou o Ministério Público, quando
                  exigido por lei ou para proteger os interesses da empresa.
                </p>
              </li>
            </ul>
          </div>
          <button className="collapsible">Seus direitos</button>
          <div className="content">
            <ul>
              <li>
                <p>
                  Direito de acesso: os usuários têm o direito de acessar as
                  informações pessoais que mantemos sobre eles e solicitar uma
                  cópia desses dados. Para exercer esse direito, basta entrar em
                  contato conosco e solicitar uma cópia dos seus dados.
                </p>
              </li>
              <li>
                <p>
                  Direito de correção: os usuários têm o direito de corrigir
                  quaisquer informações pessoais incorretas ou incompletas que
                  mantemos sobre eles. Para exercer esse direito, basta entrar
                  em contato conosco e informar as alterações necessárias.
                </p>
              </li>
              <li>
                <p>
                  Direito de exclusão: os usuários têm o direito de exigir a
                  exclusão das informações pessoais que mantemos sobre eles,
                  desde que essa exclusão não prejudique os interesses legítimos
                  da empresa ou os direitos de terceiros. Para exercer esse
                  direito, basta entrar em contato conosco e solicitar a
                  exclusão dos seus dados.
                </p>
              </li>
              <li>
                <p>
                  Direito de oposição: os usuários têm o direito de se opor ao
                  tratamento das informações pessoais que mantemos sobre eles
                  para fins de marketing ou para fins de pesquisa. Para exercer
                  esse direito, basta entrar em contato conosco e informar a sua
                  oposição.
                </p>
              </li>
              <li>
                <p>
                  Direito de oposição: os usuários têm o direito de se opor ao
                  tratamento das informações pessoais que mantemos sobre eles
                  para fins de marketing ou para fins de pesquisa. Para exercer
                  esse direito, basta entrar em contato conosco e informar a sua
                  oposição.
                </p>
              </li>
              <li>
                <p>
                  Direito de oposição: os usuários têm o direito de se opor ao
                  tratamento das informações pessoais que mantemos sobre eles
                  para fins de marketing ou para fins de pesquisa. Para exercer
                  esse direito, basta entrar em contato conosco e informar a sua
                  oposição.
                </p>
              </li>
              <li>
                <p>
                  Direito de restrição: os usuários têm o direito de exigir que
                  restrinjamos o tratamento das informações pessoais que
                  mantemos sobre eles, desde que essa restrição não prejudique
                  os interesses legítimos da empresa ou os direitos de
                  terceiros. Para exercer esse direito, basta entrar em contato
                  conosco e informar a sua solicitação.
                </p>
              </li>
              <li>
                <p>
                  Direito de portabilidade: os usuários têm o direito de receber
                  as informações pessoais que mantemos sobre eles em um formato
                  estruturado, de uso comum e legível por máquina. Isso permite
                  que os usuários utilizem esses dados em outro serviço ou
                  transfiram para outra empresa. Para exercer esse direito,
                  basta entrar em contato conosco e solicitar a portabilidade
                  dos seus dados.
                </p>
              </li>
              <li>
                <p>
                  Direito de recurso: se os usuários acreditarem que o
                  tratamento das informações pessoais que mantemos sobre eles
                  viola a lei de proteção de dados ou os seus direitos, eles têm
                  o direito de apresentar uma reclamação à autoridade de
                  proteção de dados competente. No Brasil, a autoridade
                  competente é a Agência Nacional de Proteção de Dados (ANPD).
                </p>
              </li>
              <li>
                <p>
                  Garantimos que faremos todo o possível para atender às
                  solicitações dos usuários de forma rápida e eficiente e para
                  esclarecer qualquer dúvida ou questão sobre nossa política de
                  privacidade e o tratamento das informações pessoais. Caso os
                  usuários desejem exercer algum de seus direitos, basta entrar
                  em contato conosco pelo e-mail ou pelo telefone indicados em
                  nossa página de contato. Faremos todo o possível para atender
                  às suas solicitações de forma transparente e confiável.
                </p>
              </li>
            </ul>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

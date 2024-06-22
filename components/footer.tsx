import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#22c55e] border-t">
      <div className="container mx-auto py-10">
        <div className="mb-8 text-center">
          <h2 className="text-xl font-bold mb-2 text-white">News da Vegan</h2>
          <p className="mb-4 text-white">Inscreva-se e <span className="font-bold">ganhe 5% de desconto</span> na sua primeira compra</p>
          <form className="flex justify-center">
            <input
              type="email"
              placeholder="E-mail"
              className="px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">INSCREVA-SE</button>
          </form>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left text-white">
          <div>
            <h3 className="font-bold mb-2">sobre a vegan</h3>
            <ul>
              <li><a href="#" className="hover:underline">blog</a></li>
              <li><a href="#" className="hover:underline">contato</a></li>
              <li><a href="#" className="hover:underline">revenda</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">trocas e devoluções</h3>
            <ul>
              <li><a href="#" className="hover:underline">processo de fabricação</a></li>
              <li><a href="#" className="hover:underline">como comprar</a></li>
              <li><a href="#" className="hover:underline">políticas e regulamentos</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">minha conta</h3>
            <ul>
              <li><a href="#" className="hover:underline">avaliações de clientes</a></li>
              <li><a href="#" className="hover:underline">perguntas frequentes</a></li>
              <li><a href="#" className="hover:underline">loja</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Formas de pagamento</h3>
            <ul className="flex flex-wrap justify-center lg:justify-start">
              <img src="https://www.urbanflowers.com.br/wp-content/uploads/2019/10/Camada-3.png" alt="Visa" />
              
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <h3 className="font-bold mb-2 text-white">Certificações</h3>
          <div className="flex flex-wrap justify-center space-x-10">
            <img src="https://www.urbanflowers.com.br/wp-content/uploads/2019/10/peta-2.png" alt="Vegan Certification" className="h-16 my-1" />
            <img src="https://www.urbanflowers.com.br/wp-content/uploads/2019/10/eureciclo.png" alt="Eureciclo Certification" className="h-16 my-1" />
            <img src="https://www.urbanflowers.com.br/wp-content/uploads/2018/07/Selo-Empresa-Lixo-Zero-Certificada-2021-3-300x201.png" alt="Lixo Zero Certification" className="h-16 my-1" />
            <img src="https://www.urbanflowers.com.br/wp-content/uploads/2019/10/norton.png" alt="Norton Certification" className="h-16 my-1" />
            {/* Adicione mais certificados conforme necessário */}
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-xs text-white">
            &copy; 2024 Vegan Roots, Inc. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

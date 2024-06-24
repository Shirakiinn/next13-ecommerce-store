import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("9db7f1bb-9d2f-4900-b00a-0b5e4d634330");

  // Dividir produtos em destaque e restantes
  const featuredProducts = products.slice(0, 4);
  const remainingProducts = products.slice(4);

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Produtos em destaque" items={featuredProducts} />
        </div>
        {/* Adicionando a seção das três imagens */}
        <div className="flex justify-center my-10 space-x-4">
        <img src="https://tinypic.host/images/2024/06/20/Prancheta-4-768x893_jpg.png" alt="Imagem 1" className="w-1/3" />
        <img src="https://tinypic.host/images/2024/06/24/ZERO-PLASTICO-768x894_jpg_png.png" alt="Imagem 2" className="w-1/3" />
        <img src="https://tinypic.host/images/2024/06/20/Prancheta-6-768x893_jpg.png" alt="Imagem 3" className="w-1/3" />
        </div>
        {/* Adicionando a seção de impacto ambiental */}
        <div className="centro">
        <div className="text-center mt-10">
          <h2 className="text-2xl font-bold">NOSSO IMPACTO</h2>
          <div className="flex flex-wrap justify-center gap-10 mt-6">
            <div className="flex flex-col items-center">
              <img src="https://www.urbanflowers.com.br/wp-content/uploads/2021/07/01-100x100.png" alt="Ícone 1" className="w-12 h-12" />
              <p className="mt-2 font-bold">17.229m²</p>
              <p>de tecidos reaproveitados</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://www.urbanflowers.com.br/wp-content/uploads/2021/07/02-100x100.png" alt="Ícone 2" className="w-12 h-12" />
              <p className="mt-2 font-bold">4.4 toneladas</p>
              <p>de borracha reciclada</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://www.urbanflowers.com.br/wp-content/uploads/2021/07/03-100x100.png" alt="Ícone 3" className="w-12 h-12" />
              <p className="mt-2 font-bold">7.5 toneladas</p>
              <p>de papelão reciclado</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://www.urbanflowers.com.br/wp-content/uploads/2024/02/solar-panel-300x300.png" alt="Ícone 4" className="w-12 h-12" />
              <p className="mt-2 font-bold">41.3 toneladas</p>
              <p>de CO² reduzido</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://www.urbanflowers.com.br/wp-content/uploads/2024/02/umbrella-300x300.png" alt="Ícone 5" className="w-12 h-12" />
              <p className="mt-2 font-bold">1176 un.</p>
              <p>Guarda-chuvas recuperados</p>
            </div>
          </div>
        </div>
        <br></br>
        {/* Adicionando o restante dos produtos */}
        {remainingProducts.length > 0 && (
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Mais produtos" items={remainingProducts} />
          </div>
        )}
      </div>
      </div>
    </Container>
  );
};

export default HomePage;

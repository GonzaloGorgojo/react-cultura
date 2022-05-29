import Main1 from "../assets/main1.png";
import Main3 from "../assets/main3.jpg";
import { GiSuperMushroom, GiStrong } from "react-icons/gi";
import { RiPlantLine } from "react-icons/ri";

export default function Tempeh() {
  return (
    <div id="tempeh" class="pt-5 px-6 border-b-2 border-slate-300">
      <section class=" text-gray-800 text-center md:text-left">
        <h2 class="text-3xl font-bold mb-5 text-center">Tempeh</h2>

        <div class="grid md:grid-cols-2 gap-x-6 xl:gap-x-12 items-center mb-12">
          <div class="mb-6 md:mb-0">
            <div
              class=" relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img src={Main3} class="w-full" alt="Mainpic" />
            </div>
          </div>

          <div class="mb-2 md:mb-0">
            <h3 class="flex items-center text-2xl font-bold mb-3">
              <GiSuperMushroom size={25} />
              &nbsp;Conoces el Tempeh?
            </h3>

            <p class="text-gray-900 sm:font-mono text-justify">
              Es un alimento originario de Indonesia cada vez mas consumido en
              todo el mundo por su exquisito sabor y versatilidad a la hora de
              cocinarlo. Este se obtiene a partir de la fermentación de
              legumbres con el hongo R. oligospurus.
            </p>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-x-6 xl:gap-x-12 items-center mb-6">
          <div class="mb-6 md:mb-0 md:order-2">
            <div
              class="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img src={Main3} class="w-full" alt="tempeh" />
            </div>
          </div>

          <div class="mb-6 md:mb-0 md:order-1">
            <h3 class="text-2xl font-bold mb-3 flex ">
              <RiPlantLine size={45} />
              &nbsp; ¿Por qué el tempeh es el mejor sustituto cárnico?
            </h3>

            <p class="text-gray-900 sm:font-mono text-justify">
              Su sabor único dominado por el Umami, notas de nuez y levadura,
              junto a su textura que se asemeja a la de carnes blancas lo hacen
              un sustituto cárnico por excelencia ! Además, el Tempeh es el
              único sustituto carnico fermentado. El proceso de fermentación
              conlleva una transformacion en la química del alimento, que como
              resultado, produce un aumento en el contenido de proteína
              asimilable, proteńa soluble, aminoácidos, antioxidantes, fibra
              cruda, vitaminas, y disminuye los niveles de antinutrientes y
              lípidos crudos de las legumbres. Esto hace del Tempeh un alimento
              rico en proteínas, comparable a las carnes blancas, y con un gran
              número de nutrientes de fácil asimilación, que sirve para
              complementar dietas con mayor consumo de vegetales.
            </p>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-x-6 xl:gap-x-12 items-center mb-12">
          <div class="mb-6 md:mb-0">
            <div
              class="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img src={Main1} class="h-1/4" alt="tempeh" />
            </div>
          </div>

          <div>
            <h3 class=" flex text-2xl font-bold mb-3">
              <GiStrong size={35} />
              &nbsp; ¿Que beneficios aporta a la salud?
            </h3>
            <p class="text-gray-900 sm:font-mono text-justify">
              La evidencia actual sobre los posibles beneficios para la salud
              del consumo de tempeh incluyen beneficios en salud intestinal, la
              función cognitiva, la salud pulmonar, la salud cardiovascular, la
              anemia, la salud del hígado, la salud ósea, la diabetes mellitus
              tipo 2, la obesidad, la recuperación del músculo esquelético y
              problemos de nutrición. La mayorá de los beneficios para la salud
              se relacionan con su contenido de isoflavonas (antioxidantes),
              proteínas, minerales, así como para y probióticos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

import PIC1 from "../assets/1.jpg";
import PIC2 from "../assets/2.jpg";
import PIC3 from "../assets/3.jpg";
import PIC4 from "../assets/4.jpg";
import PIC5 from "../assets/5.jpg";
import PIC6 from "../assets/6.jpg";
export default function Work() {
  return (
    <section id="work" class="overflow-hidden text-gray-700 pb-5">
      <div class="container px-5 py-2  lg:pt-6 lg:px-32">
        <h2 class="text-2xl text-center font-bold mb-5 text-emerald-700">
          Nuestro Producto
        </h2>
        <div class="flex flex-wrap -m-1 md:-m-2">
          <div class="flex flex-wrap w-1/2">
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="tempeh"
                class="block object-cover object-center w-full h-full rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                src={PIC1}
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="tempeh"
                class="block object-cover object-center w-full h-full rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                src={PIC4}
              />
            </div>
            <div class="w-full p-1 md:p-2">
              <img
                alt="tempeh"
                class="block object-cover object-center w-full h-full rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                src={PIC5}
              />
            </div>
          </div>
          <div class="flex flex-wrap w-1/2">
            <div class="w-full p-1 md:p-2">
              <img
                alt="tempeh"
                class="block object-cover object-center w-full h-full rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                src={PIC2}
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="tempeh"
                class="block object-cover object-center w-full h-full rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                src={PIC3}
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="tempeh"
                class="block object-cover object-center w-full h-full rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                src={PIC6}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

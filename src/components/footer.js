import QR from "../assets/qr.png";
export default function Footer() {
  return (
    <div class="flex bg-neutral-900 justify-around p-2">
      <div class="flex flex-col justify-center ">
        <p class="text-[1.5rem] text-orange-400 font-mono">
          Conoce mas en <br />
          nuestras redes
        </p>

        <a
          href="https://instagram.com/cultura_nam"
          target="_blank"
          rel="noreferrer"
          class=" flex items-center text-white mt-2 text-[1.3rem]"
        >
          <svg
            class="h-12 w-12 text-black"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <rect x="4" y="4" width="16" height="16" rx="4" />{" "}
            <circle cx="12" cy="12" r="3" />{" "}
            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
          </svg>
          Cultura_nam
        </a>
      </div>
      <div class="">
        <img class="h-48 w-48 rounded-lg" src={QR} alt="QR Cultura" />
      </div>
    </div>
  );
}

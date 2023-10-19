import { shoe8 } from "../assets/images";
import Button from "../components/Button";

function SuperQuality() {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center  max-lg:flex-col gap-10 w-full max-container "
    >
      <div className="flex flex-1 flex-col ">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg max-sm:text-[36px] max-sm:leading-[42px]">
          Wir bieten Ihnen
          <span className="text-coral-red "> erstklassige</span> Qualitätsschuhe
        </h2>
        <p className="mt-6 lg:max-w-lg info-text">
          Gewährleistung von erstklassigem Komfort und Stil, unser sorgfältig
          gefertigtes Schuhwerk ist darauf ausgerichtet, Ihre Erfahrung zu
          steigern und Ihnen unübertroffene Qualität, Innovation und einen Hauch
          von Eleganz zu bieten.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Unsere Hingabe zu Details und Exzellenz garantiert Ihre Zufriedenheit.
        </p>
        <div className="flex justify-start max-sm:justify-center mt-11 ">
          <Button label="Details anzeigen" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="Shuhe Bild"
          width={570}
          height={522}
          className="object-contain pb-10"
        />
      </div>
    </section>
  );
}

export default SuperQuality;

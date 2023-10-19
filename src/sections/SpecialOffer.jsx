import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

function SpecialOffer() {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="Angebot Bild"
          width={687}
          className="object-contain w-full"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg max-sm:text-[36px] max-sm:leading-[42px]">
          Spezial
          <span className="text-coral-red ">angebot</span>
        </h2>
        <p className="mt-6 lg:max-w-lg info-text ">
          Begib dich auf eine Einkaufsreise, die deine Erfahrung mit
          unschlagbaren Angeboten neu definiert. Von erstklassigen
          Auswahlmöglichkeiten bis zu unglaublichen Einsparungen bieten wir
          unvergleichlichen Wert, der uns auszeichnet.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigiere durch eine Welt der Möglichkeiten, die darauf ausgelegt ist,
          deine einzigartigen Wünsche zu erfüllen und die höchsten Erwartungen
          zu übertreffen. Deine Reise mit uns ist nichts weniger als
          außergewöhnlich.
        </p>
        <div className="mt-11 flex flex-wrap gap-4 max-sm:justify-center">
          <Button label="Jetzt kaufen" iconUrl={arrowRight} />
          <Button
            label="Mehr erfahren"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
}

export default SpecialOffer;

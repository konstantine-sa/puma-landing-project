import Button from "../components/Button";

function Subscribe() {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col max-sm:items-center gap-10"
      id="contact-us"
    >
      <h3 className="text-4xl leading-[58px] lg:max-w-md font-palanquin font-bold lg:text-left sm:text-center max-sm:text-center max-sm:text-[36px] max-sm:leading-[42px]">
        Anmelden für <span className="text-coral-red"> Aktualisierungen </span>{" "}
        <br />& Newsletter
      </h3>

      <div
        className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col max-sm:items-center gap-5 p-2.5 sm:border
       sm:border-slate-gray rounded-full"
      >
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="input max-sm:text-center"
        />
        <div className="flex max-sm:justify-center items-center max-sm:w-full">
          <Button label="Anmelden" fullWidth />
        </div>
      </div>
    </section>
  );
}

export default Subscribe;

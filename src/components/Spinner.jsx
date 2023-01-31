import spinner from "./assets/spinner.gif";

function Spinner() {
  return (
    <div className="mx-auto w-100 mt-20">
      <img
        src={spinner}
        alt="Loading..."
        width={180}
        className="text-center m-auto"
      />
    </div>
  );
}

export default Spinner;

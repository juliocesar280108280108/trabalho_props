export function InputButton({ value, handleChangeRateNote }) {
    return (
      <input
        type="button"
        value={value}
        className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm text-medium-grey font-bold focus:bg-medium-grey focus:text-white hover:bg-orange hover:text-white cursor-pointer sm:w-13 sm:h-13 transition duration-400"
        onClick={() => handleChangeRateNote(value)}
      />
    );
  }
  
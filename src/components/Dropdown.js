const Dropdown = ({ name, value, onChange, options }) => {
  return (
    <div>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-0 cursor-pointer focus:ring-0 sm:text-sm sm:leading-6"
      >
        {options.map((option, i) => (
          <option key={`opation_${name}_${i}`} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Dropdown;

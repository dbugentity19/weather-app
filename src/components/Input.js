import { MapPinIcon } from '@heroicons/react/20/solid';

const Input = ({ name, type, value, placeholder, onChange }) => {
  return (
    <div>
      <div className="relative rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <MapPinIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
          type={type}
          name={name}
          value={value}
          className="block w-full bg-transparent rounded-md border-0 py-1.5 pl-10 text-black ring-0  placeholder:text-black  focus:ring-0 sm:text-sm sm:leading-6"
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
export default Input;

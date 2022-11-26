import React from "react";

const InputFormV2 = ({ label, unit, value, setValue, name, small }) => {
  return (
    <div>
      <label htmlFor="title">{label}</label>
      <div className="flex items-center">
        <input
          type="text"
          id=" title"
          className={`${
            unit ? "rounded-tl-md rounded-bl-md" : "rounded-md"
          } outline-none border flex-auto border-gray-300 p-2`}
          value={value}
          onChange={(e) =>
            setValue((prev) => ({ ...prev, [name]: e.target.value }))
          }
        />
        {unit && (
          <span className="flex items-center justify-center flex-none w-16 p-2 bg-gray-200 border rounded-tr-md rounded-br-md">
            {unit}
          </span>
        )}
      </div>
      {small && <small className="opacity-70">{small}</small>}
    </div>
  );
};

export default InputFormV2;

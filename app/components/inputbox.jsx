import React from 'react';

function InputBox({ placeholder, value, onChange }) {
    return (
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="px-4 py-2 border-black border rounded text-black shadow-md outline-none transition-colors duration-300 ease-in-out font-sans w-full box-border"
        />
    );
}

export default InputBox;

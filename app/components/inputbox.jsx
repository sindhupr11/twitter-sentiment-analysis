import React from 'react';

function InputBox({ placeholder, value, onChange }) {
    return (
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="px-2 py-1 border-black border rounded text-black shadow-md outline-none transition-colors duration-300 ease-in-out font-sans w-full box-border"
        />
    );
}

export default InputBox;
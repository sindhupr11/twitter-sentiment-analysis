import React from 'react';

function SubmitButton({ onClick, label }) {
    return (
        <button 
            onClick={onClick}
            className="transition-all font-sans duration-300 ease-in-out bg-blue-500 hover:bg-black active:bg-gray-700 text-white py-2 px-4 rounded shadow-md focus:outline-none cursor-pointer"
        >
            {label}
        </button>
    );
}

export default SubmitButton;

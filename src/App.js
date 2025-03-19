import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  const [values, setValues] = useState([]);

  const [modalCheck, setModalCheck] = useState(false);

  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setValues((pre) => [
        ...pre,
        {
          id: crypto.randomUUID(),
          inputValue: inputValue,
        },
      ]);
      setInputValue("");
    }
  };

  const handleClick = (inputValue) => {
    setSelectedValue(inputValue);
    setModalCheck(true);
  };
  const closeModal = () => {
    setModalCheck(false);
  };

  return (
    <div
      className="flex flex-col justify-center items-center w-screen min-h-screen "
      onClick={closeModal}
    >
      <div>
        <input
          type="text"
          onChange={handleChange}
          value={inputValue}
          onKeyDown={handleKeyDown}
          className="border-2"
        />
      </div>
      <div>
        <List values={values} handleClick={handleClick} />
      </div>

      {modalCheck && <Modal selectedValue={selectedValue} />}
    </div>
  );
}
const Modal = ({ selectedValue }) => {
  return (
    <div
      className="bg-black opacity-50 text-white absolute  w-[50%] h-[50%] bottom-5 flex justify-center  top-[25%] left-[25%] rounded-lg"
      onClick={(e) => e.stopPropagation()}
    >
      <p className="pt-5 ">Full Text : "{selectedValue}"</p>
    </div>
  );
};

const List = ({ values, handleClick }) => {
  return (
    <ul onClick={(e) => e.stopPropagation()}>
      {values?.map(({ id, inputValue }) => {
        return (
          <li
            className="border-2 m-4 py-2 px-8 cursor-pointer"
            key={id}
            onClick={() => handleClick(inputValue)}
          >
            {inputValue.length < 6
              ? inputValue
              : `${inputValue.slice(0, 5)}...`}
          </li>
        );
      })}
    </ul>
  );
};

export default App;

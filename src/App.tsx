import React, { useState } from "react";
import Select, { MultiValue } from "react-select";
import Map from "./components/Map";
import logo from "./logo.png";
import "./index.css";

interface Option {
  value: string;
  label: string;
}

const App: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<MultiValue<Option>>(
    []
  );
  const options: Option[] = [
    { value: "face-to-face", label: "Face to Face" },
    { value: "online-asynchronous", label: "Online Asynchronous" },
    { value: "online-synchronous", label: "Online Synchronous" },
    { value: "hybrid", label: "Hybrid" },
  ];

  const handleChange = (selected: MultiValue<Option>) => {
    setSelectedOptions(selected);
  };

  return (
    <div className="flex h-screen bg-background text-gray-200">
      <div className="w-1/6 bg-sidebar p-4 text-gray-200">
        <div className="mb-8">
          <div className="mb-8 logo-container">
            <img
              src={require("./logo.png")}
              alt="Logo"
              className="mb-4 small-logo"
            />
          </div>
          <ul className="space-y-4">
            <li>
              <a href="#" className="block p-2 bg-gray-700 rounded">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="block p-2">
                Events
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <button className="bg-blue-500 text-white px-4 py-2 rounded w-full mb-4">
            Add CRN...
          </button>
          <label className="block mb-2">Delivery Mode</label>
          <Select
            isMulti
            value={selectedOptions}
            onChange={handleChange}
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"
            styles={{
              control: (provided) => ({
                ...provided,
                backgroundColor: "#4A4A4A",
                borderColor: "#4A4A4A",
                color: "#fff",
              }),
              option: (provided, state) => ({
                ...provided,
                backgroundColor: state.isSelected ? "#6B7280" : "#4A4A4A",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#6B7280",
                },
              }),
              multiValue: (provided) => ({
                ...provided,
                backgroundColor: "#6B7280",
                color: "#fff",
              }),
              multiValueLabel: (provided) => ({
                ...provided,
                color: "#fff",
              }),
              multiValueRemove: (provided) => ({
                ...provided,
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#FF0000",
                  color: "#fff",
                },
              }),
            }}
          />
          <label className="block mt-4 mb-2">Campus</label>
          <select className="block w-full bg-gray-700 p-2 rounded">
            <option>Main</option>
            <option>Satellite</option>
          </select>
        </div>
        <div className="mt-8 space-y-4">
          <button className="block p-2 bg-gray-700 rounded w-full">
            Send Feedback
          </button>
          <button className="block p-2 bg-gray-700 rounded w-full">
            GitHub
          </button>
        </div>
      </div>
      <div className="flex-grow p-4">
        <header className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4">
            <button className="bg-blue-500 text-white px-3 py-2 rounded">
              Share Schedule
            </button>
            <button className="bg-gray-700 text-white px-4 py-2 rounded">
              Export
            </button>
          </div>
          <div className="flex items-center space-x-3">
            <select className="bg-gray-700 text-white px-4 py-2 rounded">
              <option value="spring2024">Spring 2024</option>
              {/* Add more options as needed */}
            </select>
            <select className="bg-gray-700 text-white px-4 py-2 rounded">
              <option value="primary">Primary</option>
            </select>
            <button className="bg-gray-700 text-white px-4 py-2 rounded">
              ?
            </button>
          </div>
        </header>
        <div className="flex">
          <div className="w-3/4 bg-white text-black p-4 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">0 Credits</h2>
              <div className="flex items-center flex-grow space-x-2 justify-center">
                <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded">
                  {"<"}
                </button>
                <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded">
                  Spring Semester
                </button>
                <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded">
                  {">"}
                </button>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-4 justify-items-center">
              <div className="col-span-1"></div>
              <div className="col-span-1 day">Monday</div>
              <div className="col-span-1 day">Tuesday</div>
              <div className="col-span-1 day">Wednesday</div>
              <div className="col-span-1 day">Thursday</div>
              <div className="col-span-1 day">Friday</div>
              <div className="col-span-1 gap-8 time-column">
                <div className="time">8</div>
                <div className="time">9</div>
                <div className="time">10</div>
                <div className="time">11</div>
                <div className="time">12</div>
                <div className="time">1</div>
                <div className="time">2</div>
                <div className="time">3</div>
                <div className="time">4</div>
                <div className="time">5</div>
                <div className="time">6</div>
                <div className="time">7</div>
              </div>
              {/* Add more divs for the 6 by 12 grid cells */}
              <div className="col-span-1 table-cell"></div>
              {/* Repeat this line for the remaining cells */}
            </div>
          </div>
          <div
            className="w-1/4 bg-gray-300 p-4 rounded-lg shadow-lg ml-4"
            style={{ height: "800px" }}
          >
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

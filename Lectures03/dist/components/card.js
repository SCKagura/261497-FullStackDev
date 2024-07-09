"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Card = ({ title, text }) => {
    return (<div className="border border-gray-300 p-2 rounded shadow-sm flex flex-col items-center">
      <div className="font-bold text-lg text-gray-800">{title}</div>
      <div className="text-gray-600">{text !== null && text !== void 0 ? text : "...."}</div>
    </div>);
};
exports.default = Card;

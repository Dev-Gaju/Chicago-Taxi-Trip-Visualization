import React from "react";
import {kaggles} from "../resources/allData";

const KaggleUI = ({ kaggle }) => {
  return (
    <tr>
      <td className="p-1 md:p-2 w-1/4 shadow-md bg-white align-middle rounded-lg">
        <div className="w-16 md:w-40 h-16 md:h-32 mx-auto overflow-hidden">
          <img
            className="w-full text-sm"
            alt={kaggle.title}
            src={require(`../assets/research/${kaggle.image}`)}
          />
        </div>
      </td>
      <td className="p-1 md:p-5 w-3/4 align-top">
        <div className="font-poppins block">
          <a
            href={kaggle.src}
            className="block text-teal-600 hover:text-teal-500 text-base cursor-pointer"
          >
            <span>{kaggle.title}</span>
          </a>
          <span className="block text-[#3d4346] text-sm mb-1">
            {kaggle.authors.map((it) => {
              return it === "Gazuruddin" || it === "Gazuruddin" ? (
                <span className="text-slate-800 font-semibold" key={it}>
                  {it},{" "}
                </span>
              ) : (
                <span key={it}>{it}, </span>
              );
            })}
          </span>
          <span className="block text-[#3d434680] text-sm">
            {kaggle.organization}, {kaggle.year}
          </span>
        </div>
      </td>
    </tr>
  );
};

const Kaggles = () => {
  return (
    <div className="mb-8">
      <h1 className="text-[#3d4346] font-light text-3xl font-poppins leading-5 break-words mb-2">Other works</h1>
      <div>
        <table className="border-separate border-spacing-2">
          <tbody>
            {kaggles.map((kaggle) => {
              return (
                <KaggleUI
                  key={kaggle.title}
                  kaggle={kaggle}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Kaggles;

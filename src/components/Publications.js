import React from "react";
import { publications } from "../resources/allData";

const PublicationUI = ({ publication }) => {
  return (
    <tr>
      <td className="p-1 md:p-2 w-1/4 shadow-md bg-white align-middle rounded-lg">
        <div className="w-16 md:w-40 h-16 md:h-32 mx-auto overflow-hidden">
          <img
            className="w-full text-sm"
            alt={publication.title}
            src={require(`../assets/research/${publication.image}`)}
          />
        </div>
      </td>
      <td className="p-1 md:p-5 w-3/4 align-top">
        <div className="font-poppins block">
          <a
            href={publication.src}
            className="block text-teal-600 hover:text-teal-500 text-base cursor-pointer"
          >
            <span>{publication.title}</span>
          </a>
          <span className="block text-[#3d4346] text-sm mb-1">
            {publication.authors.map((it) => {
              return it === "Anis Sarker" || it === "A Sarker" ? (
                <span className="text-slate-800 font-semibold" key={it}>
                  {it},{" "}
                </span>
              ) : (
                <span key={it}>{it}, </span>
              );
            })}
          </span>
          <span className="block text-[#3d434680] text-sm">
            {publication.organization}, {publication.year}
          </span>
        </div>
      </td>
    </tr>
  );
};

const Publications = () => {
  return (
    <div className="mb-8">
      <h1 className="text-[#3d4346] font-light text-3xl font-poppins leading-5 break-words mb-2">Publications</h1>
      <div>
        <table className="border-separate border-spacing-2">
          <tbody>
            {publications.map((publication) => {
              return (
                <PublicationUI
                  key={publication.title}
                  publication={publication}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Publications;

import React from "react";
import Head from "next/head";

import CV from "../../components/curriculum-vitae";

import { siteTitle } from "../../utils";

import style from "../../components/curriculum-vitae/style.module.scss";

const CurriculumVitae = () => {
  const generatePDF = async () => {
    window.print();
  };

  return (
    <div className={style.container}>
      <button className={style.pdfButton} onClick={generatePDF}>
        Gerar PDF
      </button>

      <Head>
        <title>{siteTitle} - CV</title>
      </Head>

      <CV />
    </div>
  );
};

export default CurriculumVitae;

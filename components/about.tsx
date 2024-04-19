"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Tentang");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="tentang"
    >
      <SectionHeading>Tentang Saya</SectionHeading>
      <p className="mb-3">
        Saya, Andy Rahman Ramadhan, adalah mahasiswa semester 4 di program studi{" "}
        <span className="font-medium">Informatika </span>
        di <span className="font-medium">Universitas Siber Asia</span>. Saat
        ini, saya tengah aktif mencari{" "}
        <span className="italic">peluang magang </span>
        untuk mengasah kemampuan dan mendapatkan pengalaman profesional di dunia
        teknologi informasi. Selama masa studi, saya telah mengembangkan
        keahlian dalam berbagai Bahasa Pemrograman, termasuk{" "}
        <span className="font-medium">
          Javascript, Typescript, Docker, dan Python.{" "}
        </span>
        <span className="italic">
          Keahlian ini saya peroleh melalui partisipasi dalam berbagai proyek
          akademik{" "}
        </span>
        yang tidak hanya menguji kemampuan teknis saya, tetapi juga kemampuan
        untuk bekerja dalam tim dan memecahkan masalah secara efektif.
      </p>
      <p>
        Ketika saya tidak sedang coding, saya
        menikmati membaca novel, menonton film, dan memancing. Saya juga menikmati{" "}
        <span className="font-medium">belajar hal-hal baru</span>. Saat ini
        saya sedang mempelajari{" "}
        <span className="font-medium">bahasa arab</span>. Saya juga
        sedang belajar cara bermain ukulele.
      </p>
    </motion.section>
  );
}

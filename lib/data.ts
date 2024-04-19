import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import adminshop from "@/public/adminshop.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Tentang",
    hash: "#tentang",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Pengalaman",
    hash: "#pengalaman",
  },
  {
    name: "Kontak",
    hash: "#kontak",
  },
] as const;

export const experiencesData = [
  {
    title: "Kuliah di Universitas Siber Asia",
    location: "Jakarta Selatan",
    description:
      "Saya memulai kuliah di UNSIA sejak 2022 dan sampai sekarang masih kuliah di sana. Pada masa kuliah ini saya mengasah kemampuan pemrograman saya dengan belajar Machine Learning, DevOps & Backend API Server",
    icon: React.createElement(FaReact),
    date: "2022 - Sekarang",
  },
  {
    title: "SMA NEGERI 3 PALOPO",
    location: "Kota Palopo, Sulawesi Selatan",
    description:
      "Saya bersekolah di SMA 3 Palopo dan lulus pada tahun 2021. Di masa SMA saya mencoba pertama kali Bahasa Pemrograman saya yaitu Python, di Python saya mencoba berbagai hal seperti membuat Game menggunakan PythonTurtle & Membuat website menggunakan Django",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2021",
  }
] as const;

export const projectsData = [
  {
    title: "QuizzA",
    description:
      "Saya terinspirasi membuat website ini dari website populer membuat quiz seperti Quizziz & Kahoot",
    tags: ["React", "Next.js", "PostgreSQL", "Tailwind", "TypeScript", "Nest.js"],
    imageUrl: corpcommentImg,
    githubUrl: "https://github.com/andyrhman/nestjs-quiz-server",
  },
  {
    title: "Shopyfy Admin",
    description:
      "Ini project favorit saya karena memiliki banyak tantangan ketika membuatnya, saya terinspirasi dari Shopee & Tokopedia",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux", "Nest.js", "Node.js", "PostgreSQL"],
    imageUrl: adminshop,
    githubUrl: "https://github.com/andyrhman/nestjs-shop-admin",
  },
  {
    title: "Shopyfy Client",
    description:
      "Ini project favorit saya karena memiliki banyak tantangan ketika membuatnya, saya terinspirasi dari Shopee & Tokopedia",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux", "Nest.js", "Node.js", "PostgreSQL"],
    imageUrl: rmtdevImg,
    githubUrl: "https://github.com/andyrhman/nestjs-shop-client",
  },
  {
    title: "Autentikasi",
    description:
      "Ini adalah project pertama Python Django saya membuat Server API autentikasi pengguna. Menggunakan JWT Refresh & Access Token",
    tags: ["Python", "Django", "PostgreSQL"],
    imageUrl: wordanalyticsImg,
    githubUrl: "https://github.com/andyrhman/django-auth",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Nest.js",
  "Node.js",
  "Git",
  "Tailwind",
  "TypeORM",
  "MongoDB",
  "Mongoose",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Django"
] as const;

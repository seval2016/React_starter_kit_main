import sqlImage from "../assets/images/sql.png";
import webImage from "../assets/images/web.png";
import springImage from "../assets/images/spring.png";
import reactImage from "../assets/images/react.png";
import csharpImage from "../assets/images/csharp.png";
import javaImage from "../assets/images/java.png";

const courses = [
  {
    id: 1,
    title: "Uygulamalarla SQL Server Öğreniyorum : A'dan Z'ye",
    desc: "SQL dilini detaylı olarak öğrenmek ve gerçek hayat projelerinde aktif olarak kullanabilmek.",
    price: 399.99,
    rating: 4.7,
    students: 3471,
    image: sqlImage
  },
  {
    id: 2,
    title: "Full Stack Web Development",
    desc: "React + Spring Boot ile uçtan uca web uygulamaları.",
    price: 2499,
    rating: 4.9,
    students: 1820,
    image: webImage
  },
  {
    id: 3,
    title: "Spring Boot ile Modern Backend",
    desc: "Spring Boot, REST API, Security ve JPA ile profesyonel backend geliştirme.",
    price: 1799,
    rating: 4.8,
    students: 1240,
    image: springImage
  },
  {
    id: 4,
    title: "React ile Modern Frontend",
    desc: "Hook’lar, state management ve component mimarisi ile React öğrenin.",
    price: 1499,
    rating: 4.9,
    students: 2105,
    image: reactImage
  },
  {
    id: 5,
    title: "C# ile Nesne Yönelimli Programlama",
    desc: "C# temelleri, OOP prensipleri ve uygulamalı örnekler.",
    price: 1299,
    rating: 4.6,
    students: 980,
    image: csharpImage
  },
  {
    id: 6,
    title: "Java ile Profesyonel Yazılım Geliştirme",
    desc: "Java core, koleksiyonlar ve modern Java pratikleri.",
    price: 1599,
    rating: 4.8,
    students: 1670,
    image: javaImage
  }
];

export default courses;

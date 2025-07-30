const handlerBarsContext = {
  "/index.html": {
    historia: [
      {
        image: "/descarga.jpg",
        etapa: "Infancia en Rosario",
        resumen: "Messi nació en Rosario, Argentina, y desde muy joven mostró un talento natural para el fútbol."
      },
      {
        image: "/messi.png",
        etapa: "FC Barcelona",
        resumen: "Se unió al FC Barcelona a los 13 años y se convirtió en el máximo goleador del club, ganando 4 Champions y 10 Ligas."
      },
      {
        image: "/messi2.jpg",
        etapa: "Selección Argentina",
        resumen: "Ganó la Copa América en 2021 y la Copa del Mundo en 2022, consolidando su legado como leyenda mundial."
      },
      {
        image: "/psg.png",
        etapa: "ParisParís Saint-Germain",
        resumen: "Llegó en 2021 tras salir del Barça. Ganó 2 ligas y una Supercopa antes de partir en 2023."
      },
            {
        image: "/inter.png",
        etapa: "Inter de Miami",
        resumen: "Llegó en 2021 tras salir del Barça. Ganó 2 ligas y una Supercopa antes de partir en 2023."
      },
      {
        image: "/copa.jpg",
        etapa: "Consagración Mundial",
        resumen: "Su coronación como campeón mundial en Qatar 2022 fue el cierre perfecto a una carrera llena de éxitos."
      }
    ]
  }
};

const pageContext = (page) => {
  const context = { ...handlerBarsContext[page] };
  return context;
};

export default pageContext;

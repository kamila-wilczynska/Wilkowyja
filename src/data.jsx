import room1 from "/rooms/details-1.webp"; //żółty
import room2 from "/rooms/IMG_4998.webp"; //żółty

import img8 from "/rooms/room-8.webp"; //fioletowy

import img11 from "/slider/domek-glowne.webp";
import img12 from "/rooms/room-12.webp"; //Zielony
import img13F from "/rooms/IMG_4990.webp"; //zielony
import img14F from "/rooms/IMG_5004.webp"; //fiotet
import wiata from "/gallery/wiata.webp";
import lazienka from "/gallery/lazienka.webp";
import kuchnia from "/gallery/kuchnia.webp";

export default [
  {
    sys: {
      id: "1",
    },
    fields: {
      name: "Fioletowy",
      slug: "twin-room",
      type: "podwójny",
      price: 160,
      priceTwo: 130,
      balcony: true,
      capacity: 2,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "Pokój dwuosobowy z dwoma pojedynczymi łóżkami. Wyposażony jest w przestronną szafę. Pokój posiada wyjście na balkon, na którym znajduje się stolik oraz dwa wygodne siedzenia, idealne do relaksu. Z balkonu rozciąga się malowniczy widok na wzgórza, co pozwala na pełne odprężenie i kontakt z naturą. Obok pokoju znajduje się łazienka z prysznicem",
      extras: ["Pościel", "Internet"],
      images: [
        {
          fields: {
            file: {
              url: img8,
            },
          },
        },

        {
          fields: {
            file: {
              url: img14F,
            },
          },
        },
      ],
    },
  },

  {
    sys: {
      id: "2",
    },
    fields: {
      name: "Zielony",
      slug: "triple-room",
      type: "trzyosobowy",
      price: 240,
      priceTwo: 195,
      capacity: 3,
      balcony: true,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "Pokój trzyosobowy z wyjściem na balkon, który zapewnia dodatkową przestrzeń do relaksu i podziwiania widoków. W pokoju znajduje się przestronna szafa na ubrania, drewniany stolik oraz dwa wygodne siedzenia, idealne do spędzania czasu w komfortowych warunkach. Na tym samym piętrze znajduje się dzielona łazienka z prysznicem, dostępna dla gości. Pokój zapewnia przytulne i funkcjonalne zakwaterowanie dla trzech osób.",
      extras: ["Pościel", "Internet"],
      images: [
        {
          fields: {
            file: {
              url: img12,
            },
          },
        },
        {
          fields: {
            file: {
              url: img13F,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "3",
    },
    fields: {
      name: "Żółty",
      slug: "quad-room",
      type: "czteroosobowy",
      price: 320,
      priceTwo: 260,
      capacity: 4,
      balcony: false,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "Pokój czteroosobowy, idealny dla rodzin lub grup przyjaciół. W środku znajduje się stolik dla trzech osób, idealny do spożywania posiłków czy pracy. Pokój wyposażony jest również w przestronną szafę, zapewniającą dużo miejsca na przechowywanie ubrań i innych rzeczy. Dzięki przestronności i funkcjonalnemu wyposażeniu, pokój ten gwarantuje wygodny i przyjemny pobyt dla czterech osób. Obok pokoju znajduje się dzielona łazienka z prysznicem.",
      extras: ["Pościel", "Internet"],
      images: [
        {
          fields: {
            file: {
              url: room1,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "4",
    },
    fields: {
      name: "caly domek",
      slug: "apartment",
      type: "family",
      price: 720,
      priceTwo: 585,
      capacity: 9,
      balcony: true,
      pets: true,
      breakfast: false,
      featured: true,
      description:
        "przytulny domek składa się z trzech przestronnych pokoi, dwóch nowoczesnych łazienek z prysznicem oraz osobnej toalety. Komfort pobytu zwiększa dostęp do pralki i w pełni wyposażonej kuchni, w której znajdziecie wszystkie niezbędne sprzęty, aby przygotować domowe posiłki. Wieczory możecie spędzić przy kominku, ciesząc się ciepłem i atmosferą. Na zewnątrz czeka na Was wiata na grilla, idealna na letnie biesiady. Dzieci z pewnością ucieszą się z trampoliny, mini boiska do siatkówki, zjeżdżalni oraz placu zabaw z huśtawką. Dla tych, którzy pragną relaksu na świeżym powietrzu, przygotowaliśmy hamak i miejsce na ognisko, gdzie można piec kiełbaski pod gwiazdami.",
      extras: [
        "pralka",
        "deska do prasowania",
        "wyposażona kuchnia",
        "pościel",
        "internet",
      ],
      images: [
        {
          fields: {
            file: {
              url: img11,
            },
          },
        },
        {
          fields: {
            file: {
              url: wiata,
            },
          },
        },
        {
          fields: {
            file: {
              url: lazienka,
            },
          },
        },
        {
          fields: {
            file: {
              url: kuchnia,
            },
          },
        },
      ],
    },
  },
];

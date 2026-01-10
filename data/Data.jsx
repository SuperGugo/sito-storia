import MapRiforma from '../src/components/maps/MapRiforma.jsx'
import GeoMapRiforma from '../src/components/geoMaps/GeoMapRiforma.jsx'


const Data = {
  riforma: {
    title: "riforma",

    map: <MapRiforma />,

    characters: [{
      name: "Personaggio 1",
      image: "/martin.jpg",
      description: "*TESTO* TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO ",
    },
    {
      name: "Personaggio 2",
      image: "/martin.jpg",
      description: "TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO ",
    },
    {
      name: "Personaggio 3",
      image: "/martin.jpg",
      description: "***Lutero e' morto e noi lo abbiamo ucciso***",
    }
    ],

    general: {
      geoMap: <GeoMapRiforma />,
      factTitle: "TITOLO ",
      factDescription: "TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO TESTO"
    },

    sources: {
      sourcesMap: [{
        image: "immagine videolezione di storia sulla Controriforma",
        link: "https://youtu.be/9pN_Sd99pns?si=lhpaO1vLT6bU3x_E"
      },
      {
        image: "immagine riformismo femminile",
        link: ""
      }
      {
        image: "immagine La chiesa luterana",
        link: ""
      }
      ],
      sourcesCharacters: [{
        image: "immagine Film Luther",
        link: "https://youtu.be/Qm693G3A3MY?si=6iUi5spl49lvZPnz"
      },
      {
        image: "immaginePersonaggio2",
        link: ""
      }
      ],
      sourcesGeneral: [{
        image: "immagine documentario di Alessandro Barbero su Lutero parte 1",
        link: "https://youtu.be/DiJPdvn2D0o?si=n9vJzdkWnV5_6Eem"
      },
      {
        image: "immagine documentario di Alessandro Barbero su Lutero parte 2",
        link: "https://youtu.be/5QQranJaGN8?si=Jwg6aJrbSajyOb59"
      },
      {
        image: "immagine film Paranorman",
        link: "https://it.chili.com/content/paranorman-2012/3cb0c821-e02d-4b31-ab33-42b95edb81f0"
      },
      {
        image: "immagine cortometraggio Le Streghe di Salem",
        link: "https://youtu.be/8gksEuJN04Q?si=jhB3HbCEwwMCVeG7"
      }
      ]
    }
  }
};

export default Data;

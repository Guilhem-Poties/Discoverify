function getRandomTrack(genre) {
  if (genre == "-") {
    return tracks[Math.floor(Math.random() * tracks.length)];
  }
  else {
    const genreTracks = getTracksFromGenre(genre);
    return genreTracks[Math.floor(Math.random() * genreTracks.length)];
  }
}

function getTracksFromGenre(genre) {
  let genreTracks = [];
  tracks.forEach(track => {
    if (track.genre == genre) {
      console.log(genre);
      genreTracks.push(track);
    }
  })

  return genreTracks;
}


export default getRandomTrack
export { tracks }

const tracks = [
    {
      "title": "Blinding Lights",
      "artist": "The Weeknd",
      "album": "After Hours",
      "description": "Un morceau électro-pop entraînant qui évoque la nostalgie des années 80.",
      "genre": "Pop"
    },
    {
      "title": "Bohemian Rhapsody",
      "artist": "Queen",
      "album": "A Night at the Opera",
      "description": "Une chanson iconique mêlant rock progressif et opéra avec des paroles énigmatiques.",
      "genre": "Rock"
    },
    {
      "title": "Lose Yourself",
      "artist": "Eminem",
      "album": "8 Mile (Soundtrack)",
      "description": "Un classique du rap motivant, issu de la bande originale du film '8 Mile'.",
      "genre": "Hip-Hop"
    },
    {
      "title": "Clair de Lune",
      "artist": "Claude Debussy",
      "album": "Suite bergamasque",
      "description": "Une pièce de piano impressionniste emblématique, douce et rêveuse.",
      "genre": "Classique"
    },
    {
      "title": "Smells Like Teen Spirit",
      "artist": "Nirvana",
      "album": "Nevermind",
      "description": "Un hymne grunge énergique qui a marqué les années 90.",
      "genre": "Grunge"
    },
    {
      "title": "Shape of You",
      "artist": "Ed Sheeran",
      "album": "÷ (Divide)",
      "description": "Un hit pop moderne avec une influence dancehall et des paroles romantiques.",
      "genre": "Pop"
    },
    {
      "title": "Hotel California",
      "artist": "Eagles",
      "album": "Hotel California",
      "description": "Une chanson rock légendaire racontant une histoire mystérieuse et envoûtante.",
      "genre": "Rock"
    },
    {
      "title": "Take Five",
      "artist": "Dave Brubeck Quartet",
      "album": "Time Out",
      "description": "Un morceau de jazz intemporel en 5/4, célèbre pour son rythme unique.",
      "genre": "Jazz"
    },
    {
      "title": "Billie Jean",
      "artist": "Michael Jackson",
      "album": "Thriller",
      "description": "Un morceau pop légendaire avec une ligne de basse iconique.",
      "genre": "Pop"
    },
    {
      "title": "Stairway to Heaven",
      "artist": "Led Zeppelin",
      "album": "Led Zeppelin IV",
      "description": "Un chef-d'œuvre du rock progressif, célèbre pour sa montée en puissance.",
      "genre": "Rock"
    },
    {
      "title": "Respect",
      "artist": "Aretha Franklin",
      "album": "I Never Loved a Man the Way I Love You",
      "description": "Un hymne soul puissant sur l'indépendance et le respect.",
      "genre": "Soul"
    },
    {
      "title": "Thriller",
      "artist": "Michael Jackson",
      "album": "Thriller",
      "description": "Un tube iconique avec une ambiance horrifique et un clip légendaire.",
      "genre": "Pop"
    },
    {
      "title": "Like a Rolling Stone",
      "artist": "Bob Dylan",
      "album": "Highway 61 Revisited",
      "description": "Un classique du folk-rock qui a révolutionné la musique populaire.",
      "genre": "Folk Rock"
    },
    {
      "title": "God's Plan",
      "artist": "Drake",
      "album": "Scorpion",
      "description": "Un hit rap moderne avec une vibe positive et inspirante.",
      "genre": "Hip-Hop"
    },
    {
      "title": "Hallelujah",
      "artist": "Leonard Cohen",
      "album": "Various Positions",
      "description": "Une ballade poétique et émotive, reprise par de nombreux artists.",
      "genre": "Folk"
    },
    {
      "title": "Uptown Funk",
      "artist": "Mark Ronson ft. Bruno Mars",
      "album": "Uptown Special",
      "description": "Un morceau funk-pop explosif et ultra dansant.",
      "genre": "Funk"
    },
    {
      "title": "No Woman, No Cry",
      "artist": "Bob Marley & The Wailers",
      "album": "Natty Dread",
      "description": "Un classique du reggae prônant la résilience et l'espoir.",
      "genre": "Reggae"
    },
    {
      "title": "Rolling in the Deep",
      "artist": "Adele",
      "album": "21",
      "description": "Une chanson soul puissante sur la rupture et la vengeance.",
      "genre": "Soul"
    },
    {
      "title": "Sweet Child O' Mine",
      "artist": "Guns N' Roses",
      "album": "Appetite for Destruction",
      "description": "Un solo de guitare mythique et une ballade rock intemporelle.",
      "genre": "Rock"
    },
    {
      "title": "Lose Control",
      "artist": "Missy Elliott",
      "album": "The Cookbook",
      "description": "Un morceau de hip-hop électrisant avec une production innovante.",
      "genre": "Hip-Hop"
    },
    {
      "title": "Yesterday",
      "artist": "The Beatles",
      "album": "Help!",
      "description": "Une ballade mélancolique et intemporelle sur la nostalgie.",
      "genre": "Pop"
    },
    {
      "title": "Paint It Black",
      "artist": "The Rolling Stones",
      "album": "Aftermath",
      "description": "Un rock sombre et hypnotisant avec une influence orientale.",
      "genre": "Rock"
    },
    {
      "title": "Toxic",
      "artist": "Britney Spears",
      "album": "In the Zone",
      "description": "Un morceau pop électrisant avec des sonorités orientales.",
      "genre": "Pop"
    },
    {
      "title": "Breathe",
      "artist": "The Prodigy",
      "album": "The Fat of the Land",
      "description": "Un title électro-punk intense et révolutionnaire.",
      "genre": "Electro"
    },
    {
      "title": "Dance Monkey",
      "artist": "Tones and I",
      "album": "The Kids Are Coming",
      "description": "Un hit viral avec une voix unique et un rythme accrocheur.",
      "genre": "Pop"
    },
    {
      "title": "Blue Monday",
      "artist": "New Order",
      "album": "Blue Monday",
      "description": "Un classique de l'électro des années 80 avec un beat mythique.",
      "genre": "Electro"
    },
    {
      "title": "Enter Sandman",
      "artist": "Metallica",
      "album": "Metallica",
      "description": "Un morceau heavy metal culte avec une intro légendaire.",
      "genre": "Metal"
    },
    {
      "title": "I Will Always Love You",
      "artist": "Whitney Houston",
      "album": "The Bodyguard (Soundtrack)",
      "description": "Une ballade iconique avec une performance vocale exceptionnelle.",
      "genre": "Pop"
    },
    {
      "title": "Satisfaction",
      "artist": "The Rolling Stones",
      "album": "Out of Our Heads",
      "description": "Un riff de guitare légendaire et un pur son rock.",
      "genre": "Rock"
    },
    {
      "title": "Imagine",
      "artist": "John Lennon",
      "album": "Imagine",
      "description": "Une ballade pacifiste intemporelle portée par un piano mélodique.",
      "genre": "Pop"
    },
    {
      "title": "Back in Black",
      "artist": "AC/DC",
      "album": "Back in Black",
      "description": "Un classique du hard rock aux riffs puissants et inoubliables.",
      "genre": "Rock"
    },
    {
      "title": "Juicy",
      "artist": "The Notorious B.I.G.",
      "album": "Ready to Die",
      "description": "Un morceau de hip-hop autobiographique et inspirant.",
      "genre": "Hip-Hop"
    },
    {
      "title": "Moonlight Sonata",
      "artist": "Ludwig van Beethoven",
      "album": "Sonata No. 14",
      "description": "Une œuvre pour piano profonde et mélancolique en trois mouvements.",
      "genre": "Classique"
    },
    {
      "title": "Come As You Are",
      "artist": "Nirvana",
      "album": "Nevermind",
      "description": "Un hymne grunge au rythme hypnotique et aux paroles ambigües.",
      "genre": "Grunge"
    },
    {
      "title": "Cantaloupe Island",
      "artist": "Herbie Hancock",
      "album": "Empyrean Isles",
      "description": "Un standard de jazz funky et accessible avec une ambiance cool.",
      "genre": "Jazz"
    },
    {
      "title": "I Shot the Sheriff",
      "artist": "Bob Marley",
      "album": "Burnin'",
      "description": "Un message engagé sur fond de reggae envoûtant.",
      "genre": "Reggae"
    },
    {
      "title": "Ain't No Sunshine",
      "artist": "Bill Withers",
      "album": "Just As I Am",
      "description": "Une chanson soul minimaliste et poignante sur l'absence.",
      "genre": "Soul"
    },
    {
      "title": "Tainted Love",
      "artist": "Soft Cell",
      "album": "Non-Stop Erotic Cabaret",
      "description": "Un hit électro-pop sombre et entêtant des années 80.",
      "genre": "Electro"
    },
    {
      "title": "Iron Man",
      "artist": "Black Sabbath",
      "album": "Paranoid",
      "description": "Un morceau culte de metal avec une intro lourde et inoubliable.",
      "genre": "Metal"
    },
    {
      "title": "Bad Guy",
      "artist": "Billie Eilish",
      "album": "When We All Fall Asleep, Where Do We Go?",
      "description": "Un hit pop sombre et minimaliste, porté par une esthétique unique.",
      "genre": "Pop"
    },
    {
      "title": "Come Together",
      "artist": "The Beatles",
      "album": "Abbey Road",
      "description": "Un morceau rock psychédélique avec un groove hypnotique.",
      "genre": "Rock"
    },
    {
      "title": "Nuthin' But a 'G' Thang",
      "artist": "Dr. Dre ft. Snoop Dogg",
      "album": "The Chronic",
      "description": "Un classique West Coast du hip-hop des années 90.",
      "genre": "Hip-Hop"
    },
    {
      "title": "The Four Seasons: Spring",
      "artist": "Antonio Vivaldi",
      "album": "Le quattro stagioni",
      "description": "Un chef-d'œuvre baroque vibrant et expressif.",
      "genre": "Classique"
    },
    {
      "title": "Lithium",
      "artist": "Nirvana",
      "album": "Nevermind",
      "description": "Un morceau grunge alternant douceur et explosion.",
      "genre": "Grunge"
    },
    {
      "title": "My Favorite Things",
      "artist": "John Coltrane",
      "album": "My Favorite Things",
      "description": "Une réinterprétation jazz d’un classique avec des envolées de saxophone.",
      "genre": "Jazz"
    },
    {
      "title": "Could You Be Loved",
      "artist": "Bob Marley & The Wailers",
      "album": "Uprising",
      "description": "Un reggae lumineux et dansant sur fond de messages d’unité.",
      "genre": "Reggae"
    },
    {
      "title": "Superstition",
      "artist": "Stevie Wonder",
      "album": "Talking Book",
      "description": "Un morceau soul-funk irrésistible à la ligne de clavinet culte.",
      "genre": "Soul"
    },
    {
      "title": "Around the World",
      "artist": "Daft Punk",
      "album": "Homework",
      "description": "Un titre électro hypnotique avec une boucle vocale entêtante.",
      "genre": "Electro"
    },
    {
      "title": "Paranoid",
      "artist": "Black Sabbath",
      "album": "Paranoid",
      "description": "Un morceau fondateur du metal avec un riff légendaire.",
      "genre": "Metal"
    }
  ];
  
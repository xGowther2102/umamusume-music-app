// Album data for the Umamusume music library.
// Each album object contains a unique id, title, cover art URL, a link to legally
// stream or purchase the music, a description, an approximate listen count (for
// ranking purposes) and an array of songs. Each song has a title and a URL
// pointing to an audio file. For demonstration purposes the audio files are
// royalty‑free samples from SoundHelix. Feel free to replace them with
// legitimate tracks when using the project privately.

// Helper function para manejar rutas de assets según el entorno
const getAssetUrl = (path) => {
  // En desarrollo usar ruta normal, en producción usar ruta de subcarpeta
  const base = import.meta.env.PROD ? '/umamusume_sound' : '';
  return `${base}${path}`;
};

export const albums = [
  {
    id: 'animation-derby-02',
    title: 'Animation Derby 02: Grow Up Shine!',
    // Cover art from the Umamusume wiki. The page lists the album cover and
    // characters associated with the release【62681997915357†L17-L23】.
    coverUrl: 'https://umamusu.wiki/w/images/a/a0/Animation_derby_02_grow_up_shine.jpg',
    legalUrl: 'https://umamusume.jp/',
    description:
      'Released as part of the Animation Derby series, this CD features energetic tracks performed by several Umamusume idols.',
    listens: 12000,
    songs: [
      {
        title: 'Grow Up Shine!',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      },
      {
        title: 'Umapyoi Densetsu',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      },
      {
        title: 'Make Debut!',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
      },
      {
        title: 'Winning Dream Stage',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
      },
      {
        title: 'Fanfare for Future!',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
      },
    ],
  },
  {
    id: 'starting-gate-01',
    title: 'STARTING GATE 01 [2021 Remastered Version]',
    // Cover art taken from the STARTING GATE file page on the Umamusume wiki
    // which notes characters like Silence Suzuka, Special Week and Tokai
    // Teio【605324324245230†L20-L23】.
    coverUrl: getAssetUrl('/assets/music/STARTING GATE 01/SG01.jpg'),
    legalUrl: 'https://umamusume.jp/',
    description:
      'El primer álbum de la serie STARTING GATE con versiones remasterizadas de 2021. Incluye canciones icónicas interpretadas por Special Week (CV: Azumi Waki), Silence Suzuka (CV: Marika Kohno), y Tokai Teio (CV: Machico). Un álbum favorito de los fans que introdujo al mundo a la música de Umamusume.',
    year: 2021,
    catalogNumber: 'LZC-1955',
    publisher: 'Lantis',
    platforms: ['Android', 'iOS'],
    totalFilesize: '48 MB',
    albumType: 'Single',
    listens: 15000,
    songs: [
      {
        title: 'Fanfare for Future! (2021 Remastered Version)',
        audioUrl: 'https://vgmsite.com/soundtracks/umamusume-pretty-derby-starting-gate-01-2021-remastered-version-2021/zphspntbpt/01.%20Fanfare%20for%20Future%21%20%282021%20Remastered%20Version%29.mp3',
        vocals: 'Special Week (CV: Azumi Waki), Silence Suzuka (CV: Marika Kohno), Tokai Teio (CV: Machico)',
        composer: 'Hajime Mitsumasu',
        arranger: 'EFFY',
        lyricist: 'corochi (Cygames)',
        mixEngineer: 'Yasuhiro Shirai'
      },
      {
        title: '恋はダービー☆ (2021 Remastered Version)',
        audioUrl: 'https://vgmsite.com/soundtracks/umamusume-pretty-derby-starting-gate-01-2021-remastered-version-2021/yknsggxajh/02.%20%E6%81%8B%E3%81%AF%E3%83%80%E3%83%BC%E3%83%93%E3%83%BC%E2%98%86%20%282021%20Remastered%20Version%29.mp3',
        vocals: 'Tokai Teio (CV: Machico)',
        composer: 'Akihiro Honda (Cygames)',
        arranger: 'Ryosuke Nakanishi',
        lyricist: 'corochi (Cygames)',
        mixEngineer: 'Yasuhiro Shirai'
      },
      {
        title: 'Silent Star (2021 Remastered Version)',
        audioUrl: 'https://vgmsite.com/soundtracks/umamusume-pretty-derby-starting-gate-01-2021-remastered-version-2021/npdrpypbpy/03.%20Silent%20Star%20%282021%20Remastered%20Version%29.mp3',
        vocals: 'Silence Suzuka (CV: Marika Kohno)',
        composer: 'Hidekazu Tanaka (MONACA)',
        arranger: 'Hidekazu Tanaka (MONACA)',
        lyricist: 'corochi (Cygames)',
        mixEngineer: 'Hironobu Asano (Redefine)'
      },
      {
        title: 'うまぴょい伝説 (2021 Remastered Version)',
        audioUrl: 'https://vgmsite.com/soundtracks/umamusume-pretty-derby-starting-gate-01-2021-remastered-version-2021/aiqteitwgo/04.%20%E3%81%86%E3%81%BE%E3%81%B4%E3%82%87%E3%81%84%E4%BC%9D%E8%AA%AC%20%282021%20Remastered%20Version%29.mp3',
        vocals: 'Special Week (CV: Azumi Waki), Silence Suzuka (CV: Marika Kohno), Tokai Teio (CV: Machico)',
        composer: 'Akihiro Honda (Cygames)',
        arranger: 'Akihiro Honda (Cygames)',
        lyricist: 'Akihiro Honda (Cygames)',
        mixEngineer: 'Masahito Tobisawa'
      },
      {
        title: 'わたしの印は大本命◎ (2021 Remastered Version)',
        audioUrl: 'https://vgmsite.com/soundtracks/umamusume-pretty-derby-starting-gate-01-2021-remastered-version-2021/hqxxdztblx/05.%20%E3%82%8F%E3%81%9F%E3%81%97%E3%81%AE%E5%8D%B0%E3%81%AF%E5%A4%A7%E6%9C%AC%E5%91%BD%E2%97%8E%20%282021%20Remastered%20Version%29.mp3',
        vocals: 'Special Week (CV: Azumi Waki)',
        composer: 'Shunryu',
        arranger: 'Sizuk',
        lyricist: 'Shunryu',
        brassArranger: 'Hiroaki Sano',
        mixEngineer: 'Takehiko Naito'
      },
    ],
    credits: {
      soundProducer: 'Yohei Kisara (Lantis)',
      contentsProducer: 'Akihiro Ishihara (Cygames)',
      director: 'Takuya Hosaka (Lantis), Akihiro Honda (Cygames)',
      vocalRecDirector: 'Seiya Haga (APDREAM)'
    }
  },
  {
    id: 'starting-gate-03',
    title: 'STARTING GATE 03',
    coverUrl: getAssetUrl('/assets/music/STARTING GATE 03/00 Front.jpg'),
    legalUrl: 'https://umamusume.jp/',
    description:
      'El tercer álbum de la serie STARTING GATE presenta canciones interpretadas por Vodka (CV: Ayaka Ohashi), Daiwa Scarlet (CV: Chisa Kimura), y Gold Ship (CV: Hitomi Ueda). Incluye un drama especial con el elenco completo y dos canciones grupales icónicas. Una entrega emocionante que amplía el universo musical de Umamusume.',
    year: 2017,
    catalogNumber: 'LACA-15623',
    publisher: 'Lantis',
    platforms: ['Android', 'iOS'],
    totalFilesize: '120 MB',
    albumType: 'Single',
    listens: 13500,
    songs: [
      {
        title: 'CATCH THE VICTORY!',
        audioUrl: 'https://eta.vgmtreasurechest.com/soundtracks/umamusume-pretty-derby-starting-gate-03-2017/hqhltuqbpp/01.%20CATCH%20THE%20VICTORY%21.mp3',
        vocals: 'Vodka (CV: Ayaka Ohashi)',
        composer: 'Kenta Mukai',
        arranger: 'Kenta Mukai',
        lyricist: 'Aira Yuuki',
        mixEngineer: 'Takehiko Naito'
      },
      {
        title: 'Rising Girl',
        audioUrl: 'https://eta.vgmtreasurechest.com/soundtracks/umamusume-pretty-derby-starting-gate-03-2017/kuddelegov/02.%20Rising%20Girl.mp3',
        vocals: 'Daiwa Scarlet (CV: Chisa Kimura)',
        composer: 'Tomohiro Nakatsuchi',
        arranger: 'Tomohiro Nakatsuchi',
        lyricist: 'Kanata Nakamura',
        mixEngineer: 'Kazuya Yoshida'
      },
      {
        title: 'Goal To My SHIP',
        audioUrl: 'https://eta.vgmtreasurechest.com/soundtracks/umamusume-pretty-derby-starting-gate-03-2017/vekytmuwcz/03.%20Goal%20To%20My%20SHIP.mp3',
        vocals: 'Gold Ship (CV: Hitomi Ueda)',
        composer: 'Yugo Sasakura',
        arranger: 'Yugo Sasakura',
        lyricist: 'Erica Masaki',
        mixEngineer: 'Hironobu Asano (Redefine)'
      },
      {
        title: "Drama ''Special Today! -R3-''",
        audioUrl: 'https://eta.vgmtreasurechest.com/soundtracks/umamusume-pretty-derby-starting-gate-03-2017/umevwyxnji/04.%20Drama%20%27%27Special%20Today%21%20-R3-%27%27.mp3',
        vocals: 'Elenco Completo',
        composer: 'FILM SCORE LLC',
        arranger: 'FILM SCORE LLC',
        lyricist: 'Go Zappa (Guionista)',
        mixEngineer: 'Yuichi Morita'
      },
      {
        title: 'Umapyoi Densetsu',
        audioUrl: 'https://eta.vgmtreasurechest.com/soundtracks/umamusume-pretty-derby-starting-gate-03-2017/jmzrxanhzt/05.%20Umapyoi%20Densetsu.mp3',
        vocals: 'Vodka (CV: Ayaka Ohashi), Daiwa Scarlet (CV: Chisa Kimura), Gold Ship (CV: Hitomi Ueda)',
        composer: 'Cygames (Akihiro Honda)',
        arranger: 'Cygames (Akihiro Honda)',
        lyricist: 'Cygames (Akihiro Honda)',
        mixEngineer: 'Masahito Tobisawa'
      },
      {
        title: 'Bokura no Bluebird Days',
        audioUrl: 'https://eta.vgmtreasurechest.com/soundtracks/umamusume-pretty-derby-starting-gate-03-2017/jwpmvsfouk/06.%20Bokura%20no%20Bluebird%20Days.mp3',
        vocals: 'Vodka (CV: Ayaka Ohashi), Daiwa Scarlet (CV: Chisa Kimura), Gold Ship (CV: Hitomi Ueda)',
        composer: 'Ryota Fujii, Kotaro Odaka',
        arranger: 'Ryota Fujii, Kotaro Odaka',
        lyricist: 'Cygames (corochi)',
        guitar: 'Kentaro Fujii',
        trumpet: 'Yusuke Nakano',
        mixEngineer: 'Hironobu Asano (Redefine)'
      },
    ],
    credits: {
      soundProducer: 'Yohei Kisara (Lantis)',
      contentsProducer: 'Akihiro Ishihara (Cygames)',
      director: 'Takuya Hosaka (Lantis), Akihiro Honda, 内田哲也 (Cygames)',
      vocalRecDirector: 'Seiya Haga (APDREAM)',
      masteringEngineer: 'Motohiro Tsuji (form THE MASTER)',
      masteringCoordinator: 'Tomoki Kunihara (form THE MASTER)',
      anrDesk: 'Kanako Ishimaki (Lantis)',
      dramaScenarioWriter: 'Go Zappa',
      dramaSoundEditor: 'Konomi Seki',
      dramaSoundEffects: 'Yuji Furuya, Maki Takuma (Swara Pro)',
      dramaCoordinator: 'Asako Komuro (HALF H·P STUDIO)'
    }
  },
  {
    id: 'starting-gate-02',
    title: 'STARTING GATE 02',
    // Another album cover from the series; there is a corresponding file on
    // the wiki labelled SG02.jpg【605324324245230†L20-L23】.
    coverUrl: 'https://umamusu.wiki/w/images/8/86/SG02.jpg',
    legalUrl: 'https://umamusume.jp/',
    description:
      'The second volume of the STARTING GATE collection. This album continues to build on the success of the first with new character songs.',
    listens: 8600,
    songs: [
      {
        title: 'UNLIMITED IMPACT',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
      },
      {
        title: 'Bokura no Bluebird Days',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
      },
      {
        title: 'Make Debut! (Remaster)',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
      },
    ],
  },
  {
    id: 'starting-gate-04',
    title: 'STARTING GATE 04',
    coverUrl: getAssetUrl('/assets/music/STARTING GATE 04/00 Front Digital.jpg'),
    legalUrl: 'https://umamusume.jp/',
    description:
      'El cuarto álbum de la serie STARTING GATE presenta canciones interpretadas por Taiki Shuttle (CV: Yuka Otsubo), Grass Wonder (CV: Rena Maeda), y Hishi Amazon (CV: Yuiko Tatsumi). Incluye dramas especiales y la icónica canción grupal Umapyoi Densetsu. Una entrega emocionante que continúa expandiendo el universo musical de Umamusume.',
    year: 2017,
    catalogNumber: 'LACA-15624',
    publisher: 'Lantis',
    platforms: ['Android', 'iOS'],
    totalFilesize: '125 MB',
    albumType: 'Soundtrack',
    listens: 11200,
    songs: [
      {
        title: 'ドラマ「Special Today! -R4-」',
        audioUrl: 'https://kappa.vgmsite.com/soundtracks/umamusume-pretty-derby-starting-gate-04-2017/dspdkdsxap/01.%20%E3%83%89%E3%83%A9%E3%83%9E%E3%80%8CSpecial%20Today%21%20-R4-%E3%80%8D.mp3',
        vocals: 'Elenco Completo',
        composer: 'Cygames (Tetsuya Uchida)',
        arranger: 'Cygames (Tetsuya Uchida)',
        lyricist: 'Drama Track'
      },
      {
        title: '奇跡を信じて！',
        audioUrl: 'https://kappa.vgmsite.com/soundtracks/umamusume-pretty-derby-starting-gate-04-2017/gbmhszcpyr/02.%20%E5%A5%87%E8%B7%A1%E3%82%92%E4%BF%A1%E3%81%98%E3%81%A6%EF%BC%81.mp3',
        vocals: 'Taiki Shuttle (CV: Yuka Otsubo), Grass Wonder (CV: Rena Maeda), Hishi Amazon (CV: Yuiko Tatsumi)',
        composer: 'Cygames (Tetsuya Uchida)',
        arranger: 'Cygames (Tetsuya Uchida)',
        lyricist: 'Fubito Endo'
      },
      {
        title: '鳥かごのロンリーバード',
        audioUrl: 'https://kappa.vgmsite.com/soundtracks/umamusume-pretty-derby-starting-gate-04-2017/fpyikopfle/03.%20%E9%B3%A5%E3%81%8B%E3%81%94%E3%81%AE%E3%83%AD%E3%83%B3%E3%83%AA%E3%83%BC%E3%83%90%E3%83%BC%E3%83%89.mp3',
        vocals: 'Hishi Amazon (CV: Yuiko Tatsumi)',
        composer: 'Kentaro Ishii',
        arranger: 'Kentaro Ishii',
        lyricist: 'S-KEY-A'
      },
      {
        title: '直感ノープロブレム！',
        audioUrl: 'https://kappa.vgmsite.com/soundtracks/umamusume-pretty-derby-starting-gate-04-2017/nqjxcycaxz/04.%20%E7%9B%B4%E6%84%9F%E3%83%8E%E3%83%BC%E3%83%97%E3%83%AD%E3%83%96%E3%83%AC%E3%83%A0%EF%BC%81.mp3',
        vocals: 'Taiki Shuttle (CV: Yuka Otsubo)',
        composer: 'Hajime Mitsumasu',
        arranger: 'Shuho Mitani',
        lyricist: 'Yoshie Isogai'
      },
      {
        title: 'Secret GRADUATION',
        audioUrl: 'https://kappa.vgmsite.com/soundtracks/umamusume-pretty-derby-starting-gate-04-2017/xproregfec/05.%20Secret%20GRADUATION.mp3',
        vocals: 'Grass Wonder (CV: Rena Maeda)',
        composer: 'Toshihiko Watanabe',
        arranger: 'Toshihiko Watanabe',
        lyricist: 'Erica Masaki'
      },
      {
        title: 'ドラマ「Special Today! -R4- Epilogue」',
        audioUrl: 'https://kappa.vgmsite.com/soundtracks/umamusume-pretty-derby-starting-gate-04-2017/hdmldkzjgq/06.%20%E3%83%89%E3%83%A9%E3%83%9E%E3%80%8CSpecial%20Today%21%20-R4-%20Epilogue%E3%80%8D.mp3',
        vocals: 'Elenco Completo',
        composer: 'N/A',
        arranger: 'N/A',
        lyricist: 'Drama Track'
      },
      {
        title: 'うまぴょい伝説',
        audioUrl: 'https://kappa.vgmsite.com/soundtracks/umamusume-pretty-derby-starting-gate-04-2017/dknqtfkwow/07.%20%E3%81%86%E3%81%BE%E3%81%B4%E3%82%87%E3%81%84%E4%BC%9D%E8%AA%AC.mp3',
        vocals: 'Taiki Shuttle (CV: Yuka Otsubo), Grass Wonder (CV: Rena Maeda), Hishi Amazon (CV: Yuiko Tatsumi)',
        composer: 'Cygames (Akihiro Honda)',
        arranger: 'Cygames (Akihiro Honda)',
        lyricist: 'Cygames (Akihiro Honda)'
      },
    ],
    credits: {
      soundProducer: 'Yohei Kisara (Lantis)',
      contentsProducer: 'Akihiro Ishihara (Cygames)',
      director: 'Takuya Hosaka (Lantis), Tetsuya Uchida (Cygames)',
      publisher: 'Lantis'
    }
  },
];
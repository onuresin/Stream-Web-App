import MovieShape from "../assets/images/movie.svg"
import TvShape from "../assets/images/tv.svg"

const videos = [
    {
        id:'2024-top10-tvseries',
        title: '2024 Top 10 Yeni TV Serileri',
        year: 2024,
        show: TvShape,
        type: 'Dizi',
        raiting: 'Gİ',
        url:'https://www.youtube.com/embed/LuqC_VgFfkM?si=V7aryNmpYab-RDTI',
        thumbnail: 'https://img.youtube.com/vi/LuqC_VgFfkM/0.jpg'
    },
    {
        id:'dizi-gibis1b1',
        title: 'Gibi 1.Sezon 1.Bölüm',
        year: 2021,
        show: TvShape,
        type: 'Dizi',
        raiting: '+16',
        url:'https://www.youtube.com/embed/OwwMrpW1m5g?si=z18b78DH4WSrZx_g',
        thumbnail: 'https://img.youtube.com/vi/OwwMrpW1m5g/0.jpg'
    },
    {
        id:'dizi-dogus1b1',
        title: 'Doğu 1.Sezon 1.Bölüm',
        year: 2022,
        show: TvShape,
        type: 'Dizi',
        raiting: 'Gİ',
        url:'https://www.youtube.com/embed/LiEqF2zJSqo?si=z18b78DH4WSrZx_g',
        thumbnail: 'https://img.youtube.com/vi/LiEqF2zJSqo/0.jpg'
    },
    {
        id:'dizi-prenss1b1',
        title: 'Prens 1.Sezon 1.Bölüm',
        year: 2023,
        show: TvShape,
        type: 'Dizi',
        raiting: '+16',
        url:'https://www.youtube.com/embed/Zx_hhjw4r8I?si=8OR5m-TVLoDsP5fB',
        thumbnail: 'https://img.youtube.com/vi/Zx_hhjw4r8I/0.jpg'
    },
    {
        id:'dizi-bahars1b1',
        title: 'Bahar 1.Bölüm',
        year: 2024,
        show: TvShape,
        type: 'Dizi',
        raiting: 'PG',
        url:'https://www.youtube.com/embed/QeWGR13YGfU?si=0prOq5UWCt2LKlLV',
        thumbnail: 'https://img.youtube.com/vi/QeWGR13YGfU/0.jpg'
    },    
    {
        id:'dizi-starwars-theacolyte',
        title: 'Star Wars The Acolyte',
        year: 2024,
        show: TvShape,
        type: 'Dizi',
        raiting: 'Gİ',
        url:'https://www.youtube.com/embed/6tzur6JrUEA?si=z18b78DH4WSrZx_g',
        thumbnail: 'https://img.youtube.com/vi/6tzur6JrUEA/0.jpg'
    },
    {
        id:'dizi-kizilgoncalar',
        title: 'Kızıl Goncalar 1.Bölüm',
        year: 2024,
        show: TvShape,
        type: 'Dizi',
        raiting: 'Gİ',
        url:'https://www.youtube.com/embed/kJiPjewTae4?si=a8zCfyHoAhiOyu0X',
        thumbnail: 'https://img.youtube.com/vi/kJiPjewTae4/0.jpg'
    },
    {
        id:'eee-sonra-b1',
        title: 'Eee Sonra? 1. Bölüm',
        year: 2023,
        show: TvShape,
        type: 'Dizi',
        raiting: '+16',
        url:'https://www.youtube.com/embed/M0SyXSCcOZ0?si=1s8lcDKEwraS3rPx',
        thumbnail: 'https://img.youtube.com/vi/M0SyXSCcOZ0/0.jpg'
    },
    {
        id:'dizi-arcane2sezon',
        title: 'Arcane 2.Sezon İlk Bakış',
        year: 2025,
        show: TvShape,
        type: 'Dizi',
        raiting: '+16',
        url:'https://www.youtube.com/embed/zioV65tW7Ik?si=z18b78DH4WSrZx_g',
        thumbnail: 'https://img.youtube.com/vi/zioV65tW7Ik/0.jpg'
    },
    {
        id:'dizi-mandalorian-lukeskywalker',
        title: 'Mandalorian Luke Skywalker',
        year: 2023,
        show: TvShape,
        type: 'Dizi',
        raiting: 'Gİ',
        url:'https://www.youtube.com/embed/gqcNx2B9HVw?si=z18b78DH4WSrZx_g',
        thumbnail: 'https://img.youtube.com/vi/gqcNx2B9HVw/0.jpg'
    },
    {
        id:'dizi-sherlocks2b2',
        title: 'Sherlock 2.Sezon 2.Bölüm',
        year: 2016,
        type: 'Dizi',
        show: TvShape,
        raiting: '+16',
        url:'https://www.youtube.com/embed/jHsr4h1SWMY?si=z18b78DH4WSrZx_g',
        thumbnail: 'https://img.youtube.com/vi/jHsr4h1SWMY/0.jpg'
    },
    {
        id:'eee-sonra-b2',
        title: 'Eee Sonra? 2. Bölüm',
        year: 2023,
        show: TvShape,
        type: 'Dizi',
        raiting: '+16',
        url:'https://www.youtube.com/embed/htSwE1vYEEQ?si=MVHl7CNu4N8jtMWy',
        thumbnail: 'https://img.youtube.com/vi/htSwE1vYEEQ/0.jpg'
    },
    {
        id:'dizi-fargos1-trailer',
        title: 'Fargo 1.Sezon Fragman',
        year: 2014,
        show: TvShape,
        type: 'Dizi',
        raiting: '+16',
        url:'https://www.youtube.com/embed/setgvHG3w48?si=z18b78DH4WSrZx_g',
        thumbnail: 'https://img.youtube.com/vi/setgvHG3w48/0.jpg'
    },
    {
        id:'dizi-bahars1b2',
        title: 'Bahar 2.Bölüm',
        year: 2024,
        show: TvShape,
        type: 'Dizi',
        raiting: 'Gİ',
        url:'https://www.youtube.com/embed/Dy0qXPrV3t4?si=sXBsC4MvM6QHpcdr',
        thumbnail: 'https://img.youtube.com/vi/Dy0qXPrV3t4/0.jpg'
    },
    {
        id:'dizi-mrrobot-final-scene',
        title: 'MR.Robot Final Sahnesi',
        year: 2019,
        show: TvShape,
        type: 'Dizi',
        raiting: '+16',
        url:'https://www.youtube.com/embed/r9jL-lbE558?si=z18b78DH4WSrZx_g',
        thumbnail: 'https://img.youtube.com/vi/r9jL-lbE558/0.jpg'
    },
    {
        id:'dizi-kizilgoncalarb2',
        title: 'Kızıl Goncalar 2.Bölüm',
        year: 2024,
        show: TvShape,
        type: 'Dizi',
        raiting: 'Gİ',
        url:'https://www.youtube.com/embed/5nXRi1dkRps?si=eU5swbXp2ZRSNUpV',
        thumbnail: 'https://img.youtube.com/vi/5nXRi1dkRps/0.jpg'
    },
    {
        id:'dizi-theboys-s4trailer',
        title: 'The Boys 4.Sezon Fragman',
        year: 2024,
        show: TvShape,
        type: 'Dizi',
        raiting: '+18',
        url:'https://www.youtube.com/embed/r082-prOIB8?si=z18b78DH4WSrZx_g',
        thumbnail: 'https://img.youtube.com/vi/r082-prOIB8/0.jpg'
    },
    {
        id:'eee-sonra-b3',
        title: 'Eee Sonra? 3. Bölüm',
        year: 2023,
        show: TvShape,
        type: 'Dizi',
        raiting: '+16',
        url:'https://www.youtube.com/embed/WJNc0nXmpek?si=ZHpvmEreCiuLLpqh',
        thumbnail: 'https://img.youtube.com/vi/WJNc0nXmpek/0.jpg'
    },
    {
        id:'dizi-undercoverb1',
        title: 'Undercover 1.Bölüm',
        year: 2011,
        show: TvShape,
        type: 'Dizi',
        raiting: '+18',
        url:'https://www.youtube.com/embed/sDpBvZ8IMG8?si=G6Gfu599eyKs8C_x',
        thumbnail: 'https://img.youtube.com/vi/sDpBvZ8IMG8/0.jpg'
    },
    {
        id:'film-maymunlar-cehennemi-yenikr',
        title: 'Maymunlar Cehennemi: Yeni Krallık',
        year: 2024,
        show: MovieShape,
        type: 'Film',
        raiting: '+16',
        url:'https://www.youtube.com/embed/Kdr5oedn7q8?si=z18b78DH4WSrZx_g',
        thumbnail: 'https://img.youtube.com/vi/Kdr5oedn7q8/0.jpg'
    },
    {
        id:'dizi-bahars1b12',
        title: 'Bahar 1.Sezon 12.Bölüm',
        year: 2024,
        show: TvShape,
        type: 'Dizi',
        raiting: 'PG',
        url:'https://www.youtube.com/embed/A0ngErTsCZQ?si=z18b78DH4WSrZx_g',
        thumbnail: 'https://img.youtube.com/vi/A0ngErTsCZQ/0.jpg'
    },
    {
        id:'film-kacisplani',
        title: 'Kaçış Planı',
        year: 2010,
        show: MovieShape,
        type: 'Film',
        raiting: '+16',
        url:'https://www.youtube.com/embed/ZQderBMyTdM?si=xwLTJ_nvzQzrOOQc',
        thumbnail: 'https://img.youtube.com/vi/ZQderBMyTdM/0.jpg'
    },
    {
        id:'eee-sonra-b4',
        title: 'Eee Sonra? 4. Bölüm',
        year: 2023,
        show: TvShape,
        type: 'Dizi',
        raiting: '+16',
        url:'https://www.youtube.com/embed/amOfvd9jZ4Q?si=OVs-irAm3vsJX6KJ',
        thumbnail: 'https://img.youtube.com/vi/amOfvd9jZ4Q/0.jpg'
    },
    {
        id:'film-tuzak',
        title: 'Tuzak Fragman',
        year: 2008,
        show: MovieShape,
        type: 'Film',
        raiting: '+16',
        url:'https://www.youtube.com/embed/hJiPAJKjUVg?si=z18b78DH4WSrZx_g',
        thumbnail: 'https://img.youtube.com/vi/hJiPAJKjUVg/0.jpg'
    },
    {
        id:'film-kiyamet',
        title: 'Kıyamet',
        year: 2018,
        show: TvShape,
        type: 'Film',
        raiting: '+16',
        url:'https://www.youtube.com/embed/RYSDgMIeonM?si=l3c7dN6Pqm34Q8G_',
        thumbnail: 'https://img.youtube.com/vi/RYSDgMIeonM/0.jpg'
    },
    {
        id:'dizi-merlins1b1',
        title: 'Merlin 1.Sezon 1.Bölüm',
        year: 2005,
        show: TvShape,
        type: 'Dizi',
        raiting: 'Gİ',
        url:'https://www.youtube.com/embed/Hbw4IhOK6MA?si=2jiF118Ab-qVND92',
        thumbnail: 'https://img.youtube.com/vi/Hbw4IhOK6MA/0.jpg'
    },
    {
        id:'memento-nolan',
        title: 'Memento | Akıl Defteri',
        year: 2000,
        show: MovieShape,
        type: 'Film',
        raiting: '+13',
        url:'https://www.youtube.com/embed/WoFQnaAni4g?si=CKJkohwCkPmyDUHM',
        thumbnail: 'https://img.youtube.com/vi/WoFQnaAni4g/0.jpg'
    },
    {
        id:'film-therush',
        title: 'Zafere Hücum',
        year: 2013,
        show: MovieShape,
        type: 'Film',
        raiting: 'Gİ',
        url:'https://www.youtube.com/embed/MJN9BNHRK-c?si=CH69u9iakeBOPOCX',
        thumbnail: 'https://img.youtube.com/vi/MJN9BNHRK-c/0.jpg'
    },
    {
        id:'evdeki-dusman',
        title: 'Evdeki Düşman - Başlangıç',
        year: 2022,
        show: MovieShape,
        type: 'Film',
        raiting: '+18',
        url:'https://www.youtube.com/embed/VoJwNw7i71E?si=JHb4z7nPDkoAzg2G',
        thumbnail: 'https://img.youtube.com/vi/VoJwNw7i71E/0.jpg'
    },
    {
        id:'film-muhbir',
        title: 'Muhbir (Snitch)',
        year: 2013,
        show: MovieShape,
        type: 'Film',
        raiting: '+16',
        url:'https://www.youtube.com/embed/M3I9KbpzrnY?si=q-wUgLF1iVd_kPQJ',
        thumbnail: 'https://img.youtube.com/vi/M3I9KbpzrnY/0.jpg'
    },
    {
        id:'film-golge-savasci',
        title: 'Gölge Savaşçı',
        year: 2018,
        show: MovieShape,
        type: 'Film',
        raiting: '+18',
        url:'https://www.youtube.com/embed/ngUrZo2_CEY?si=YnD2rO350-QYqRqh',
        thumbnail: 'https://img.youtube.com/vi/ngUrZo2_CEY/0.jpg'
    },
    {
        id:'film-kizim-zoe',
        title: 'Kızım Zoé',
        year: 2019,
        show: MovieShape,
        type: 'Film',
        raiting: 'Gİ',
        url:'https://www.youtube.com/embed/34Z_yjlzs3w?si=At7VkaCET8R3dGIP',
        thumbnail: 'https://img.youtube.com/vi/34Z_yjlzs3w/0.jpg'
    },
    {
        id:'film-the-gentlemen',
        title: 'The Gentlemen',
        year: 2024,
        show: MovieShape,
        type: 'Film',
        raiting: '+16',
        url:'https://www.youtube.com/embed/JTcdCKwn-XA?si=eS4Sc_bQ_NU78Mth',
        thumbnail: 'https://img.youtube.com/vi/JTcdCKwn-XA/0.jpg'
    },
    {
        id:'film-hucre',
        title: 'Hücre 211',
        year: 2009,
        show: MovieShape,
        type: 'Film',
        raiting: '+18',
        url:'https://www.youtube.com/embed/Gfdd0TVa2jg?si=8GKqSa-Hx4KORM2H',
        thumbnail: 'https://img.youtube.com/vi/Gfdd0TVa2jg/0.jpg'
    },
    {
        id:'findik-isi-2',
        title: 'Fındık İşi 2',
        year: 2017,
        show: MovieShape,
        type: 'Film',
        raiting: 'Gİ',
        url:'https://www.youtube.com/embed/H-_zKeWvnRo?si=jaIAejSgniedRWr7',
        thumbnail: 'https://img.youtube.com/vi/H-_zKeWvnRo/0.jpg'
    },
    {
        id:'belgesel-aslan-kralligi',
        title: 'Aslan Krallığı: Devlerin Avcısı ',
        year: 2016,
        show: MovieShape,
        type: 'Film',
        raiting: 'Gİ',
        url:'https://www.youtube.com/embed/aHQb7sV9vcA?si=EphgtThjRIekdTx7',
        thumbnail: 'https://img.youtube.com/vi/aHQb7sV9vcA/0.jpg'
    },
    {
        id:'belgesel-keops-piramidinin-gizemi',
        title: 'Keops Piramidinin Gizemi Belgeseli',
        year: 2013,
        show: MovieShape,
        type: 'Film',
        raiting: 'Gİ',
        url:'https://www.youtube.com/embed/AXZhsZJRDns?si=RI3021gCJhpXtBkX',
        thumbnail: 'https://img.youtube.com/vi/AXZhsZJRDns/0.jpg'
    },
    {
        id:'belgesel-dunyadan-kacis',
        title: 'Kozmik Dünyadan Kaçış Belgeseli',
        year: 2009,
        show: MovieShape,
        type: 'Film',
        raiting: 'Gİ',
        url:'https://www.youtube.com/embed/j8aPfWnkd3w?si=J_arjHf4SMB1P30k',
        thumbnail: 'https://img.youtube.com/vi/j8aPfWnkd3w/0.jpg'
    },
    {
        id:'belgesel-megafabrikalar-pagani',
        title: 'Mega Fabrikalar Pagani Huayra',
        year: 2015,
        show: MovieShape,
        type: 'Film',
        raiting: 'Gİ',
        url:'https://www.youtube.com/embed/T-w-SyrYeCU?si=IISk2dl14sSjcVZy',
        thumbnail: 'https://img.youtube.com/vi/T-w-SyrYeCU/0.jpg'
    },
    {
        id:'belgesel-goktasi-carpmasi',
        title: 'Göktaşı Çarpması Belgeseli',
        year: 2011,
        show: MovieShape,
        type: 'Film',
        raiting: 'Gİ',
        url:'https://www.youtube.com/embed/qOc7uhpJC6k?si=exXT5hI_fUs2AnL6',
        thumbnail: 'https://img.youtube.com/vi/qOc7uhpJC6k/0.jpg'
    },
    {
        id:'zafere-hucum-kesit1',
        title: 'Zafere Hücum | Bu Nasil Ferrari!',
        year: 2013,
        show: MovieShape,
        type: 'Film',
        raiting: 'Gİ',
        url:'https://www.youtube.com/embed/5rOHDaQ1SOA?si=nueGwuTlUNrdo-5Y',
        thumbnail: 'https://img.youtube.com/vi/5rOHDaQ1SOA/0.jpg'
    },
    {
        id:'var-bunlar-1',
        title: 'Var Bunlar S1 B1',
        year: 2022,
        show: TvShape,
        type: 'Dizi',
        raiting: '+16',
        url:'https://www.youtube.com/embed/t2JmSLsKNU0?si=gqR1hygqwSctwVxX',
        thumbnail: 'https://img.youtube.com/vi/t2JmSLsKNU0/0.jpg'
    },
    {
        id:'dusler-fabrikasi',
        title: 'Düşler Fabrikası',
        year: 2020,
        show: MovieShape,
        type: 'Film',
        raiting: 'Gİ',
        url:'https://www.youtube.com/embed/BdhrB2X4GCM?si=TkNKVImtRhga49gm',
        thumbnail: 'https://img.youtube.com/vi/BdhrB2X4GCM/0.jpg'
    },
    {
        id:'var-bunlar-2',
        title: 'Var Bunlar S1 B2',
        year: 2022,
        show: TvShape,
        type: 'Dizi',
        raiting: '+16',
        url:'https://www.youtube.com/embed/iDm3MtKlPro?si=L8bMb7e2iZRQjQgc',
        thumbnail: 'https://img.youtube.com/vi/iDm3MtKlPro/0.jpg'
    },
    {
        id:'var-bunlar-3',
        title: 'Var Bunlar S1 B3',
        year: 2022,
        show: TvShape,
        type: 'Dizi',
        raiting: '+16',
        url:'https://www.youtube.com/embed/eYrtMDbV3LU?si=zxDBmg7YmDrwUCWi',
        thumbnail: 'https://img.youtube.com/vi/eYrtMDbV3LU/0.jpg'
    },
    
    
];

export default videos;
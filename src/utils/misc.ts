
const deskripsiHasil = {
  "stasiun beos": "Dibangun pada tahun 1930, Stasiun Beos terletak di daerah Beos, Jawa Tengah, Indonesia. Keunikan tempat ini adalah arsitektur kolonial Belanda yang masih terjaga.",
  "candi kalasan": "Candi Kalasan, dibangun pada abad ke-8, terletak di sebelah timur Yogyakarta, Indonesia. Candi ini dikenal karena memiliki dekorasi relief yang indah.",
  "candi mendut": "Candi Mendut dibangun pada awal abad ke-9 dan terletak dekat Candi Borobudur di Jawa Tengah, Indonesia. Candi ini dikenal karena patung Buddha yang besar di dalamnya.",
  "candi gedong songo": "Terletak di dataran tinggi Jawa Tengah, Candi Gedong Songo adalah kompleks candi Hindu yang terdiri dari sembilan candi yang dibangun pada abad ke-9. Keunikan tempat ini adalah pemandangan alam yang indah.",
  "klaton yogyakarta": "Klaton adalah istana kerajaan Yogyakarta, Indonesia, yang dibangun pada tahun 1755. Keunikan tempat ini adalah arsitektur istana yang indah dan menjadi tempat tinggal Sultan Yogyakarta.",
  "stasiun tugu yogyakarta": "Stasiun ini dibangun pada tahun 1887 dan terletak di pusat kota Yogyakarta. Keunikan Stasiun Tugu adalah bangunannya yang ikonik dengan ornamen-ornamen khas Jawa.",
  "masjid istiqlal": "Masjid Istiqlal, yang selesai dibangun pada tahun 1978, terletak di Jakarta, Indonesia. Masjid ini adalah salah satu masjid terbesar di dunia dan menjadi simbol kemerdekaan Indonesia.",
  "gereja katedral jakarta": "Gereja Katedral Jakarta, selesai dibangun pada tahun 1901, adalah gereja Katolik terbesar di Indonesia. Keunikan gereja ini adalah arsitektur gotik yang indah.",
  "masjid muhammad cheng ho": "Masjid ini terletak di Semarang, Jawa Tengah, dan dibangun pada tahun 2002. Keunikan masjid ini adalah arsitektur Tionghoa yang memadukan elemen-elemen Islam.",
  "lawang sewu semarang": "Dibangun pada awal abad ke-20, Lawang Sewu adalah bangunan bersejarah di Semarang, Jawa Tengah. Keunikan tempat ini adalah arsitektur kolonial Belanda dan banyak pintu dan jendela yang memberikan kesan 'ribuan pintu.'",
  "masjid ampel surabaya": "Masjid Ampel, yang dibangun pada awal abad ke-15, terletak di Surabaya, Jawa Timur. Masjid ini adalah salah satu masjid tertua di Indonesia dan menjadi tempat bersejarah dalam perkembangan agama Islam di wilayah tersebut.",
  "kelenteng tay kak Sie": "Kelenteng Tay Kak Sie adalah kelenteng Tionghoa yang berlokasi di Semarang, Jawa Tengah. Dibangun pada tahun 1746, kelenteng ini memiliki arsitektur Tionghoa yang indah dan menjadi tempat ibadah dan budaya yang penting.",
  "candi pawon": "Candi Pawon adalah candi Buddha yang terletak di sebelah timur Candi Borobudur, Jawa Tengah. Dibangun pada abad ke-9, candi ini memiliki peran penting dalam perjalanan para peziarah menuju Borobudur.",
  "candi plaosan": "Candi Plaosan terletak di Klaten, Jawa Tengah, dan dibangun pada abad ke-9. Candi ini dikenal karena dua kompleks candi, yaitu Candi Plaosan Lor dan Candi Plaosan Kidul, yang memiliki arsitektur yang indah.",
  "candi cetho": "Candi Cetho adalah candi Hindu yang terletak di Karanganyar, Jawa Tengah, dan dibangun pada abad ke-15. Keunikan candi ini adalah lokasinya di perbukitan dan arsitekturnya yang indah.",
  "candi borobudur": "Candi Borobudur adalah candi Buddha terbesar di dunia, yang selesai dibangun pada abad ke-9 di Magelang, Jawa Tengah. Candi ini memiliki struktur bertingkat dengan relief-relief yang menggambarkan cerita Buddha.",
  "candi prambanan": "Candi Prambanan adalah kompleks candi Hindu yang terletak di Klaten, Jawa Tengah. Dibangun pada abad ke-9, candi ini dikenal karena arsitektur candi utama yang tinggi dan relief-relief epiknya.",
  "candi singosari": "Candi Singosari, yang dibangun pada abad ke-13, terletak di Malang, Jawa Timur. Candi ini merupakan salah satu sisa-sisa kerajaan Singhasari yang kaya sejarah.",
  "rumoh aceh": "Rumoh Aceh adalah rumah adat Aceh yang terletak di Banda Aceh, Aceh. Keunikan rumah ini adalah arsitektur tradisional yang khas.",
  "rumah gonjong ampek baanjuang": "Rumah adat Minangkabau ini terletak di Sumatera Barat dan dikenal karena atapnya yang melengkung mirip tanduk kerbau (gonjong).",
  "rumah adat karo": "Rumah adat Karo adalah rumah tradisional suku Karo di Sumatera Utara. Rumah ini memiliki atap berlapis-lapis yang khas.",
  "rumah adat limas": "Rumah Limas adalah rumah adat Sunda yang terletak di Jawa Barat. Rumah ini memiliki atap berbentuk limas.",
  "rumah adat nuwo sesat": "Rumah Nuwo Sesat adalah rumah tradisional Sumba, Nusa Tenggara Timur, yang memiliki atap berbentuk tumpang tiga.",
  "rumah rakit bangka belitung": "Rumah adat ini terdapat di Bangka Belitung, dan unik karena rumah ini dibangun di atas rakit dan biasanya digunakan oleh nelayan.",
  "rumah bubungan lima": "Rumah adat Banjar, Kalimantan Selatan, memiliki atap lima bagian yang menonjol dan unik.",
  "rumah adat kajang leko jambi": "Rumah adat Kajang Leko adalah rumah tradisional masyarakat Jambi, Sumatera, yang memiliki atap berbentuk meriam.",
  "rumah adat melayu atap lontik": "Rumah adat Melayu dengan atap berbentuk lontik yang khas, terutama ditemui di wilayah Riau dan Kepulauan Riau.",
  "pura tirta empul": "Pura Tirta Empul terletak di Tampaksiring, Bali, dan terkenal dengan kolam suci tempat umat Hindu melakukan ritual penyucian.",
  "pura besakih": "Pura Besakih adalah 'Pura Agung Besakih,' dan terletak di Gunung Agung, Bali. Pura ini adalah tempat ibadah utama Hindu Bali.",
  "pura tanah lot": "Pura Tanah Lot adalah pura laut yang terletak di Tanah Lot, Bali. Keunikan pura ini adalah lokasinya yang terletak di atas batu besar di tengah laut.",
  "pura luhur uluwatu": "Pura Luhur Uluwatu adalah pura yang terletak di ujung selatan Bali. Keunikan pura ini adalah pemandangan laut yang spektakuler dan pertunjukan tari Kecak.",
  "pura ulun danu beratan": "Pura Ulun Danu Beratan adalah pura yang terletak di tepi Danau Beratan, Bali. Pura ini dikenal dengan tiga candi kecilnya yang terletak di atas air.",
  "pura lempuyangan": "Pura Lempuyangan terletak di Gunung Lempuyang, Bali, dan dikenal dengan 'Gerbang Surga' yang menghadap ke Gunung Agung, menciptakan pemandangan yang indah dan ikonik."
};


export type Hasil = keyof typeof deskripsiHasil;


export {deskripsiHasil}
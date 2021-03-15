const data: Array<{[key: string]: any}> = [{
  "country": "Australia",
  "capital": {
      "name": "Canberra",
      "coords": [-35.306904, 149.125529]
  },
  "overview": "Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands. It is the largest country in Oceania and the world's sixth-largest country by total area.",
  "photoURL": "https://kratkoe.com/wp-content/uploads/2020/08/osobennosti-avstralii.jpg",
  "landmarks": [{
          "name": "Great Ocean Road",
          "photo": "https://cdn.newsapi.com.au/image/v1/2d735ccafa68694f78f0b7f804437bcd?width=1024",
          "description": "Australia's Great Ocean Road is one of the world's most iconic drives. The coastal road stretches 151 miles from Torquay to Allansford, and was constructed in the 20s. It's got an unprecedented amount of jaw-dropping scenery, from sheer ocean cliffs to untouched surf beaches, whilst also traversing one of Australia's most cultured rural areas, offering an opportunity to experience some of Australia's most iconic landscapes in one fell swoop. Heading to Apollo Bay, it travels inland through the Otway Region, the Shipwreck Coast and the famous Twelve Apostles."
      },
      {
          "name": "Twelve Apostles",
          "photo": "https://upload.wikimedia.org/wikipedia/commons/e/e4/The_Twelve_Apostles_2011.jpg",
          "description": "The Twelve Apostles is a collection of limestone stacks off the shore of Port Campbell National Park, by the Great Ocean Road in Victoria, Australia. Their proximity to one another has made the site a popular tourist attraction."
      },
      {
          "name": "Lake Hillier",
          "photo": "https://www.leisurepro.com/blog/wp-content/uploads/2019/04/shutterstock_714405349-1366x800@2x.jpg",
          "description": "Lake Hillier is a saline lake on the edge of Middle Island, the largest of the islands and islets that make up the Recherche Archipelago in the Goldfields-Esperance region, off the south coast of Western Australia. It is particularly notable for its pink colour."
      },
      {
          "name": "Jim Jim Falls",
          "photo": "https://d19lgisewk9l6l.cloudfront.net/assetbank/The_Jim_Jim_Falls_in_Kakadu_National_Park_331211.jpg",
          "description": "The Jim Jim Falls is a plunge waterfall on the Jim Jim Creek that descends over the Arnhem Land escarpment within the UNESCO World Heritage–listed Kakadu National Park in the Northern Territory of Australia. The Jim Jim Falls area is registered on the Australian National Heritage List."
      },
      {
          "name": "Uluru",
          "photo": "https://thebigbus.com.au/wp-content/uploads/2018/11/bigstock-200401003-5.jpg",
          "description": "Uluru, or Ayers Rock, is a massive sandstone monolith in the heart of the Northern Territory’s arid \"Red Centre\". The nearest large town is Alice Springs, 450km away. Uluru is sacred to indigenous Australians and is thought to have started forming around 550 million years ago. It’s within Uluru-Kata Tjuta National Park, which also includes the 36 red-rock domes of the Kata Tjuta (colloquially “The Olgas”) formation."
      },
      {
          "name": "Kangaroo Island",
          "photo": "https://www.exceptionalkangarooisland.com/wp-content/uploads/2019/07/image-6.jpg",
          "description": "Kangaroo Island lies off the mainland of South Australia, southwest of Adelaide. Over a third of the island is protected in nature reserves, home to native wildlife like sea lions, koalas and diverse bird species. In the west, Flinders Chase National Park is known for penguin colonies and striking coastal rock formations, like the sculpted Remarkable Rocks and the stalactite-covered Admirals Arch."
      }
  ],
  "video": "https://www.youtube.com/embed/QojXRvYgXxo"
},
{
  "country": "Canada",
  "capital": {
      "name": "Ottawa",
      "coords": [45.401833, -75.699511]
  },
  "overview": "Canada is a country in the northern part of North America. Its ten provinces and three territories extend from the Atlantic to the Pacific and northward into the Arctic Ocean, covering 9.98 million square kilometres, making it the world's second-largest country by total area. ",
  "photoURL": "https://internationalwealth.info/wp-content/uploads/2016/08/Canada-busines.jpg",
  "landmarks": [{
          "name": "Big Muddy Valley",
          "photo": "https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2015/01/shutterstock_93403981.jpg",
          "description": "The Big Muddy Badlands are a series of badlands in southern Saskatchewan and northern Montana along Big Muddy Creek. They are found in the Big Muddy Valley, a cleft of erosion and sandstone along Big Muddy Creek. The valley is 55 kilometres long, 3.2 kilometres wide and 160 metres deep."
      },
      {
          "name": "Nahanni National Park Reserve of Canada",
          "photo": "https://lp-cms-production.imgix.net/2019-06/ae9990aec1f7b74566feab305cf55146-nahanni-nationalpark-reserve.jpg",
          "description": "Nahanni National Park Reserve in the Dehcho Region of the Northwest Territories, Canada, approximately 500 km west of Yellowknife, protects a portion of the Mackenzie Mountains Natural Region. The centrepiece of the park is the South Nahanni River."
      },
      {
          "name": "Notre Dame Basilica",
          "photo": "https://i.ytimg.com/vi/KdJjZFmg-_o/maxresdefault.jpg",
          "description": "Notre-Dame Basilica is a basilica in the historic district of Old Montreal, in Montreal, Quebec, Canada. The church is located at 110 Notre-Dame Street West, at the corner of Saint Sulpice Street. It is located next to the Saint-Sulpice Seminary and faces the Place d'Armes square."
      },
      {
          "name": "Capilano Suspension Bridge Park",
          "photo": "https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2015/01/shutterstock_478181668.jpg",
          "description": "The Capilano Suspension Bridge is a simple suspension bridge crossing the Capilano River in the District of North Vancouver, British Columbia, Canada. The current bridge is 140 metres long and 70 metres above the river."
      },
      {
          "name": "Cape Spear",
          "photo": "https://images.squarespace-cdn.com/content/v1/588e9740b3db2b428d95cf56/1526868661647-IPMF3397OTTAYISE6FKS/ke17ZwdGBToddI8pDm48kKAwwdAfKsTlKsCcElEApLR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UegTYNQkRo-Jk4EWsyBNhwKrKLo5CceA1-Tdpfgyxoog5ck0MD3_q0rY3jFJjjoLbQ/2015-06-13_5657-HDR.jpg?format=1500w",
          "description": "Cape Spear is Canada’s easternmost point, its sheer cliffs overlooking the Atlantic Ocean. In addition to stunning sunrises, the cape is an excellent place to spot seabirds, whales and even icebergs. The site is also home to the oldest surviving lighthouse in the province, which was constructed in 1836. A graceful neoclassical cube with a domed light tower in the center, the lighthouse has a restored interior that demonstrates the conditions in which a typical lighthouse keeper and his family would have lived in the mid-19th century."
      },
      {
          "name": "Lake Louise",
          "photo": "https://www.tripsavvy.com/thmb/eNPRdLn3mHQu731s_8NA5Js_jhk=/2121x1193/smart/filters:no_upscale()/LakeLouise_GettyImages-6b1e83ecabbb423c9cc66ea024c0e6bf.jpg",
          "description": "Lake Louise is a hamlet in Banff National Park in the Canadian Rockies, known for its turquoise, glacier-fed lake ringed by high peaks and overlooked by a stately chateau. Hiking trails wind up to the Lake Agnes Tea House for bird's-eye views. There's a canoe dock in summer, and a skating rink on the frozen lake in winter. The Lake Louise Ski Resort features a wildlife interpretive center at the top of a gondola. "
      }
  ],
  "video": "https://www.youtube.com/embed/8Z1eMy2FoX4"
},
{
  "country": "Germany",
  "capital": {
      "name": "Berlin",
      "coords": [52.518654, 13.374711]
  },
  "overview": "Germany is a Western European country with a landscape of forests, rivers, mountain ranges and North Sea beaches. It has over 2 millennia of history. Berlin, its capital, is home to art and nightlife scenes, the Brandenburg Gate and many sites relating to WWII. Munich is known for its Oktoberfest and beer halls, including the 16th-century Hofbräuhaus. Frankfurt, with its skyscrapers, houses the European Central Bank.",
  "photoURL": "https://wantsee.world/wp-content/uploads/2020/05/Germany-Travel.jpg",
  "landmarks": [{
          "name": "Rakotzbrücke",
          "photo": "https://a.cdn-hotels.com/gdcs/production22/d363/4dc44bd3-3f14-4be0-bea8-a3c1c68bbf06.jpg",
          "description": "Rakotzbrücke is a masonry bridge within Azalea and Rhododendron Park Kromlau. Built in 1860, it features a half-circled arch with jagged, rocky spires on both ends. When reflected against still water, the bridge gives the illusion of a perfect circle – a popular spot for landscape photography. \n Home to Germany’s largest rhododendron gardens, the park itself attracts nature lovers with its 200-acre landscape and outdoor activities such as picnics and strolls. Entrance to the park and Rakotzbrücke is free year-round."
      },
      {
          "name": "Externsteine",
          "photo": "https://a.cdn-hotels.com/gdcs/production186/d942/6578fc1d-b860-4723-8fa0-3162829396a0.jpg",
          "description": "The Externsteine is a series of sandstone columns jutting out from Wiembecke, a natural pond within Teutoburg Forest. One of Germany’s most impressive scenery, it dates back to the Ice Age, with several manmade structures added during the Middle Ages. Today, you can visit a grotto, a sarcophagus, and a relief depicting Christ's Descent from the Cross. \n The jagged cliffs range between 13 and 40 metres in height, set against a picturesque backdrop of lush forests, moors, and lakes of Wiembecke Valley. Private gatherings and pagan celebrations often take place at Externsteine, especially during the summer solstice and Walpurgis Night."
      },
      {
          "name": "Romantic Road",
          "photo": "https://a.cdn-hotels.com/gdcs/production163/d1338/2c6deb71-c305-4c1b-a7f7-505f127da244.jpg",
          "description": "Germany’s Romantic Road covers around 350 km between Würzburg and Füssen, with plenty of natural and medieval sites dotting the southern region. You can start your journey from Munich, Frankfurt, or Nuremberg, and depending on how many stops you make, spend about 2 days to 1 week to explore the route. "
      },
      {
          "name": "Obersee Lake",
          "photo": "https://a.cdn-hotels.com/gdcs/production192/d208/2190b2eb-6996-46b1-867c-1c1c85ef35fc.jpg",
          "description": "Obersee Lake is a pristine fjord in Berchtesgaden National Park, about 140 km southeast of Munich. Surrounded by alpine mountains and forests, its emerald waters are so clear you can even see the rocky bottoms. You can reach Obersee Lake by boat – you’ll enjoy an hour-long journey across Lake Königssee to Saletalm Pier. From there, it takes between 30 minutes and 1 hour of hiking on a forested pathway to Lake Obersee. The fjord is open to the public year-round, but the best time to visit is during the summer, when the waters are warm enough for a dip."
      },
      {
          "name": "Basteibrücke",
          "photo": "https://a.cdn-hotels.com/gdcs/production78/d981/c26b9c5d-c1bd-4e69-9a88-4734d17cf22d.jpg",
          "description": "Basteibrücke (Bastion Bridge) is a medieval-era bridge in Saxon Switzerland National Park. Spanning 76.5 metres in length, it dates back to the mid-1800s and connects a cluster of jagged sandstone rocks above the Elbe River.Basteibrücke stands over 182 metres tall, serving as a prominent lookout point in Saxon Switzerland – you can enjoy panoramic views of the surrounding rock formations, Elbe River, Lilienstein Mountain, and the fortress of  Koenigstein."
      },
      {
          "name": "Moselle Valley",
          "photo": "https://a.cdn-hotels.com/gdcs/production179/d524/54350dba-0f0c-44f0-861f-bd9e7937414a.jpg",
          "description": "Moselle Valley covers some of Germany’s most impressive sights, from terraced vineyards and rolling hills, to medieval villages and hilltop castles. The region is named after the 545-km-long River Mosel, which runs along the borders of southwestern Germany, north-eastern France, and eastern Luxembourg. "
      }
  ],
  "video": "https://www.youtube.com/embed/ZHHbpy91O2E"
},
{
  "country": "France",
  "capital": {
      "name": "Paris",
      "coords": [48.856663, 2.351556]
  },
  "overview": "France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower. The country is also renowned for its wines and sophisticated cuisine. Lascaux’s ancient cave drawings, Lyon’s Roman theater and the vast Palace of Versailles attest to its rich history.",
  "photoURL": "http://www.rustrade.fr/images/Site/France/France.jpg",
  "landmarks": [{
          "name": "Eiffel Tower",
          "photo": "https://cdn.asiatatler.com/asiatatler/i/sg/2019/10/23231025-denys-nevozhai-uzagqg756ou-unsplash_cover_2000x1449.jpg",
          "description": "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower."
      },
      {
          "name": "Louvre Museum",
          "photo": "https://www.airtecnics.com/media/6385/Louvre-museum-in-Paris.jpg",
          "description": "The Louvre, or the Louvre Museum, is the world's largest art museum and a historic monument in Paris, France, and is best known for being the home of the Mona Lisa. A central landmark of the city, it is located on the Right Bank of the Seine in the city's 1st arrondissement."
      },
      {
          "name": "Cathédrale Notre-Dame de Paris",
          "photo": "https://images2.minutemediacdn.com/image/upload/c_crop,h_2138,w_3809,x_0,y_0/v1554744380/shape/mentalfloss/556629-istock-852755038_primary.jpg?itok=HrgIMUwd",
          "description": "Notre-Dame de Paris, referred to simply as Notre-Dame, is a medieval Catholic cathedral on the Île de la Cité in the 4th arrondissement of Paris. The cathedral was consecrated to the Virgin Mary and considered to be one of the finest examples of French Gothic architecture."
      },
      {
          "name": "Palace of Versailles",
          "photo": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Versailles-Chateau-Jardins02_%28cropped%29.jpg",
          "description": "The Palace of Versailles was the principal royal residence of France from 1682, under Louis XIV, until the start of the French Revolution in 1789, under Louis XVI. It is located in the department of Yvelines, in the region of Île-de-France, about 20 kilometres southwest of the centre of Paris."
      },
      {
          "name": "Arc de Triomphe",
          "photo": "https://afar-production.imgix.net/uploads/images/afar_post_headers/images/9429LsS7l2/original_shutterstock_214344625.jpg",
          "description": "The Arc de Triomphe de l'Étoile is one of the most famous monuments in Paris, France, standing at the western end of the Champs-Élysées at the centre of Place Charles de Gaulle, formerly named Place de l'Étoile—the étoile or \"star\" of the juncture formed by its twelve radiating avenues."
      },
      {
          "name": "Sacré-Cœur",
          "photo": "https://lp-cms-production.imgix.net/2019-06/7ad4233f75ec81e3a9a38897ee57353d-basilique-du-sacre-coeur.jpg",
          "description": "The Basilica of the Sacred Heart of Paris, commonly known as Sacré-Cœur Basilica and often simply Sacré-Cœur, is a Roman Catholic church and minor basilica in Paris, France, dedicated to the Sacred Heart of Jesus. Sacré-Cœur Basilica is located at the summit of the butte Montmartre, the highest point in the city."
      }
  ],
  "video": "https://www.youtube.com/embed/r9qq0GHJeUc"
},
{
  "country": "Spain",
  "capital": {
      "name": "Madrid",
      "coords": [40.419348, -3.700897]
  },
  "overview": "Spain, a country on Europe’s Iberian Peninsula, includes 17 autonomous regions with diverse geography and cultures. Capital city Madrid is home to the Royal Palace and Prado museum, housing works by European masters. Segovia has a medieval castle (the Alcázar) and an intact Roman aqueduct. Catalonia’s capital, Barcelona, is defined by Antoni Gaudí’s whimsical modernist landmarks like the Sagrada Família church.",
  "photoURL": "https://cdn.iz.ru/sites/default/files/styles/1920x1080/public/article-2018-06/8%20june%20d.jpg?itok=gtlmbe2v",
  "landmarks": [{
          "name": "La Sagrada Familia",
          "photo": "https://lp-cms-production.imgix.net/2019-06/8ae1c56041e64517e29372a889f1beb7-la-sagrada-familia.jpg",
          "description": "The Basílica de la Sagrada Família, also known as the Sagrada Família, is a large unfinished Roman Catholic minor basilica in the Eixample district of Barcelona, Catalonia, Spain. Designed by Spanish/Catalan architect Antoni Gaudí, his work on the building is part of a UNESCO World Heritage Site."
      },
      {
          "name": "Park Güell",
          "photo": "https://images.musement.com/cover/0002/15/park-guell-fotolia-39543467-subscription-xl-resize-jpg_header-114423.jpeg?w=1200&h=630&q=95&fit=crop",
          "description": "Parc Güell is a public park system composed of gardens and architectural elements located on Carmel Hill, in Barcelona, Catalonia, Spain. Carmel Hill belongs to the mountain range of Collserola – the Parc del Carmel is located on the northern face."
      },
      {
          "name": "Alhambra",
          "photo": "https://cdn.getyourguide.com/img/location/60096d8b4abac.jpeg/88.jpg",
          "description": "The Alhambra is a palace and fortress complex located in Granada, Andalucia, Spain. It was originally constructed as a small fortress in 889 CE on the remains of Roman fortifications,. The Alhambra is a UNESCO World Heritage Site."
      },
      {
          "name": "Casa Milà",
          "photo": "https://casambi.com/wp-content/uploads/2020/05/casamila1-scaled.jpg",
          "description": "Casa Milà, popularly known as La Pedrera or \"The stone quarry\", a reference to its unconventional rough-hewn appearance, is a modernist building in Barcelona, Catalonia, Spain. It was the last private residence designed by architect Antoni Gaudí and was built between 1906 and 1912."
      },
      {
          "name": "Casa Batlló",
          "photo": "https://www.barcelona.com/var/plain/storage/images/barcelona_tickets/casa_batllo_tickets/header_container/casa_batllo_main_header/10251430-1-eng-GB/casa_batllo_main_header_header.jpg",
          "description": "Casa Batlló is a building in the center of Barcelona. It was designed by Antoni Gaudí, and is considered one of his masterpieces. A remodel of a previously built house, it was redesigned in 1904 by Gaudí and has been refurbished several times after that."
      },
      {
          "name": "La Rambla",
          "photo": "https://hotelarclarambla.com/wp-content/uploads/2019/11/Las-ramblas-de-Barcelona.jpg",
          "description": "La Rambla is a street in central Barcelona. A tree-lined pedestrian street, it stretches for 1.2 km connecting the Plaça de Catalunya in its center with the Christopher Columbus Monument at Port Vell. La Rambla forms the boundary between the neighbourhoods of the Barri Gòtic to the east and the El Raval to the west."
      }
  ],
  "video": "https://www.youtube.com/embed/XUIZOdls3XY"
},
{
  "country": "Italy",
  "capital": {
      "name": "Rome",
      "coords": [41.902689, 12.496176]
  },
  "overview": "Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine. Its capital, Rome, is home to the Vatican as well as landmark art and ancient ruins. Other major cities include Florence, with Renaissance masterpieces such as Michelangelo’s \"David\" and Brunelleschi's Duomo; Venice, the city of canals; and Milan, Italy’s fashion capital.",
  "photoURL": "https://abstour.by/upload/iblock/814/814ae5cb81981d50d9cf99181e3d4b86.jpg",
  "landmarks": [{
          "name": "Colosseum",
          "photo": "https://cdn.getyourguide.com/img/location/60096e0d90302.jpeg/88.jpg",
          "description": "The Colosseum, is an oval amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum and is the largest ancient amphitheatre ever built, and is still the largest standing amphitheater in the world today, despite its age."
      },
      {
          "name": "Cinque Terre",
          "photo": "https://lp-cms-production.imgix.net/features/2015/12/Manarola_cs.jpg?format=auto",
          "description": "Cinque Terre is a string of centuries-old seaside villages on the rugged Italian Riviera coastline. In each of the 5 towns, colorful houses and vineyards cling to steep terraces, harbors are filled with fishing boats and trattorias turn out seafood specialties along with the Liguria region’s famous sauce, pesto. The Sentiero Azzurro cliffside hiking trail links the villages and offers sweeping sea vistas."
      },
      {
          "name": "Cathedral of Santa Maria del Fiore",
          "photo": "https://cdn.britannica.com/71/8671-050-2EE6A745/Cathedral-Florence-Santa-Maria-del-Fiore.jpg",
          "description": "Florence Cathedral, formally the Cattedrale di Santa Maria del Fiore, is the cathedral of Florence, Italy. It was begun in 1296 in the Gothic style to a design of Arnolfo di Cambio and was structurally completed by 1436, with the dome engineered by Filippo Brunelleschi."
      },
      {
          "name": "Pantheon",
          "photo": "https://www.learnreligions.com/thmb/Ab0Nl8iWXE9EIZwYPCPhoJ3PMzo=/3864x2173/smart/filters:no_upscale()/pantheon--rome--italy-870287362-5a87671b6bf06900375c06f2.jpg",
          "description": "The Pantheon is a former Roman temple, now a Catholic church, in Rome, Italy, on the site of an earlier temple commissioned by Marcus Agrippa during the reign of Augustus. It was rebuilt by the emperor Hadrian and probably dedicated around 126AD."
      },
      {
          "name": "Trevi Fountain",
          "photo": "https://inspirations.blacktomato.com/wp-content/uploads/2019/11/Trevi-Fountain-in-Rome-daylight.jpg",
          "description": "The Trevi Fountain is a fountain in the Trevi district in Rome, Italy, designed by Italian architect Nicola Salvi and completed by Giuseppe Pannini and several others. Standing 26.3 metres high and 49.15 metres wide, it is the largest Baroque fountain in the city and one of the most famous fountains in the world."
      },
      {
          "name": "Uffizi Gallery",
          "photo": "https://www.uffiziticket.com/wp-content/uploads/2019/11/Slide-4.jpg",
          "description": "The Uffizi Gallery is a prominent art museum located adjacent to the Piazza della Signoria in the Historic Centre of Florence in the region of Tuscany, Italy."
      }
  ],
  "video": "https://www.youtube.com/embed/jLgcah7bpl4"
},
{
  "country": "Japan",
  "capital": {
      "name": "Tokyo",
      "coords": [35.6817, 139.753882]
  },
  "overview": "Japan is an island country in East Asia, located in the northwest Pacific Ocean. It is bordered on the west by the Sea of Japan, and extends from the Sea of Okhotsk in the north toward the East China Sea and Taiwan in the south.",
  "photoURL": "https://smolensk-travel.com/assets/galleries/58/jap-4.jpg",
  "landmarks": [{
          "name": "Mount Fuji",
          "photo": "https://www.liveabout.com/thmb/xmHHjutbUKGMvgxh5Dr1F_BVXB8=/3435x2576/smart/filters:no_upscale()/fuji-mountain-in-autumn-822273028-5a6a8a9c3418c600363958d3.jpg",
          "description": "Japan’s Mt. Fuji is an active volcano about 100 kilometers southwest of Tokyo. Commonly called “Fuji-san,” it’s the country’s tallest peak, at 3,776 meters. A pilgrimage site for centuries, it’s considered one of Japan’s 3 sacred mountains, and summit hikes remain a popular activity. Its iconic profile is the subject of numerous works of art, notably Edo Period prints by Hokusai and Hiroshige."
      },
      {
          "name": "Kinkaku-ji",
          "photo": "https://lp-cms-production.imgix.net/2019-06/015e2ab56932a07a3cb5f7f2decd418c0623bf47d28d262a8ab8199eb8797ad8.jpg",
          "description": "Kinkaku-ji, officially named Rokuon-ji, is a Zen Buddhist temple in Kyoto, Japan. It is one of the most popular buildings in Kyoto, attracting many visitors annually."
      },
      {
          "name": "Fushimi Inari Taisha",
          "photo": "https://dskyoto.s3.amazonaws.com/gallery/full/8514/5559/7797/08-20131216_FushimiInari_Mainspot-307.jpg",
          "description": "Fushimi Inari-taisha is the head shrine of the kami Inari, located in Fushimi-ku, Kyoto, Kyoto Prefecture, Japan."
      },
      {
          "name": "Kiyomizu-dera",
          "photo": "https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2017/07/Kiyomizudera-Temple-Kyoto.jpg",
          "description": "Kiyomizu-dera, formally Otowa-san Kiyomizu-dera, is a Buddhist temple in eastern Kyoto. The temple is part of the Historic Monuments of Ancient Kyoto UNESCO World Heritage site."
      },
      {
          "name": "Tokyo Skytree",
          "photo": "https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2017/07/iStock-skytree-Torsakarin.jpg",
          "description": "Tokyo Skytree is a broadcasting and observation tower in Sumida, Tokyo. It became the tallest structure in Japan in 2010 and reached its full height of 634 meters in March 2011, making it the tallest tower in the world, displacing the Canton Tower, and the second tallest structure in the world after the Burj Khalifa."
      },
      {
          "name": "Sensō-ji",
          "photo": "https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2020/05/sensoji-temple-iStock-1083328636.jpg",
          "description": "Sensō-ji is an ancient Buddhist temple located in Asakusa, Tokyo, Japan. It is Tokyo's oldest temple, and one of its most significant. Formerly associated with the Tendai sect of Buddhism, it became independent after World War II."
      }
  ],
  "video": "https://www.youtube.com/embed/IQy0FPmZpRo"
},
{
  "country": "Switzerland",
  "capital": {
      "name": "Bern",
      "coords": [46.947978, 7.440386]
  },
  "overview": "Switzerland is a mountainous Central European country, home to numerous lakes, villages and the high peaks of the Alps. Its cities contain medieval quarters, with landmarks like capital Bern’s Zytglogge clock tower and Lucerne’s wooden chapel bridge. The country is also known for its ski resorts and hiking trails. Banking and finance are key industries, and Swiss watches and chocolate are world renowned.",
  "photoURL": "https://www.expatica.com/app/uploads/sites/9/2017/07/cost-of-living-thun.jpg",
  "landmarks": [{
          "name": "Mount Pilatus",
          "photo": "https://www.touropia.com/gfx/d/tourist-attractions-in-switzerland/mount_pilatus.jpg?v=5d8ecb3f56d223081d50aab24d85ae31",
          "description": "Mount Pilatus in the Lake Lucerne region is full of legends. The name of the mountain comes from a rumor that the famous biblical Roman governor Pontius Pilate may have been buried there. Medieval Europeans believed that the mountain formed as a dragon rock falling from the sky. The 2,100 meter (7000 foot) peak offers views of the Swiss and French Alps, as well as Lake Lucerne below. The winter boasts a high-altitude Christmas market, and the summer offers hiking opportunities galore. This region can be reached with the steepest railway in the world, boasting grades over 48%."
      },
      {
          "name": "Jet d'Eau",
          "photo": "https://www.touropia.com/gfx/d/tourist-attractions-in-switzerland/jet_deau.jpg?v=1",
          "description": "This giant water fountain is one of Geneva’s most famous landmarks. Shooting 140 meters (460 feet) into the air, the Jet d’Eau sits where Lake Geneva empties into the Rhone river, and is so large that it can be seen from miles away. At any one time, 7 tons of water is in the air, much of which sprays spectators on the pier beneath. Two or three times a year it is illuminated pink, blue or another color to mark a humanitarian occasion. The local swimming area, known as the Bains de Paquis, is one of the best areas to view the fountain."
      },
      {
          "name": "Grindelwald",
          "photo": "https://www.touropia.com/gfx/d/tourist-attractions-in-switzerland/grindelwald.jpg?v=31200f8a8a74438751da02807bd77e97",
          "description": "The mountain town of Grindelwald is the largest ski resort town in the Jungfrau region. This lovely alpine town is both a summer and winter activity region. Tourists who visit in the summer can enjoy spectacular hiking trails and some of Europe’s most loved rock climbing locations. Winter tourists can ski or even try the local toboggan run. A number of locally accessible mountain peaks and passes makes this a beautiful choice for photographers and nature lovers alike. Festival lovers will love the ice sculptures at the world snow festival."
      },
      {
          "name": "Rhine Falls",
          "photo": "https://www.touropia.com/gfx/d/tourist-attractions-in-switzerland/rhine_falls.jpg?v=1",
          "description": "Rhine falls, near Schaffausen, is Europe’s largest waterfall. This amazing sight can be reached via a boat tour, which will also show visitors to Switzerland the lovely basin, riverside castles, and spectacular boulder perched in the middle of the river at the top of the falls. There are viewing platforms that reach out over the falls and allow guests to feel like they’re hovering directly above. A children’s playground, historical museum region and adventure trail make the visitor’s center a wonderful way to cap off the trip."
      },
      {
          "name": "Zytglogge",
          "photo": "https://www.touropia.com/gfx/d/tourist-attractions-in-switzerland/zytglogge.jpg?v=ae60a3cbd0e2a95f1b307e6f3b407644",
          "description": "The clock tower gate in Bern is the oldest city gate in town, and is a great historical site. The gate was built in the 1100s, and the clock that graces the tower is one of the most spectacular and oldest clocks that can be visited anywhere in the world. Built in 1530, this clock was the city’s master clock for centuries. The Baroque style with gold accents is a beautiful picture for both amateur and professional photographers. The tower boasts an astronomical clock, figurines, hour chimes, and two tower clocks that are all driven by a single central mechanism. This is one of the items that has secured Switzerland as one of the premiere clockmaking regions in the world."
      },
      {
          "name": "Bernina Express",
          "photo": "https://www.touropia.com/gfx/d/tourist-attractions-in-switzerland/bernina_express.jpg?v=8800068a3c2bf281ae37521162d641ad",
          "description": "The Bernina Express is a brightly colored scarlet train that crosses the Alps beginning in the town of Chur and ends in Tirano, just across the border in northern Italy. Arguable the most scenic Swiss train ride, the route takes about 4hours, and goes over 196 bridges and through 55 tunnels. Views of glaciers and mountain peaks and towns, bridges spanning across 60 meter (200 foot) drops and many more breathtaking sights are speeding by outside of the train, while porters bring snacks and drinks directly to your seat. This is not a trip to miss."
      }
  ],
  "video": "https://www.youtube.com/embed/dapluVS0lgg"
}
]

export default data;
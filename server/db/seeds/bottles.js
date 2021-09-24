exports.seed = (knex) => {
  return knex('bottles').del()
    .then(() => {
      return knex('bottles').insert([
        {
          name: "1800 Reserva Coconut",
          size: "750ml",
          size_num: 750,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000128_1800-reserva-coconut-750ml_550.jpeg",
          silhouette: ""
        },
        {
          name: "1800 Tequila Reserva Añejo",
          size: "750ml",
          size_num: 750,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001703_1800-tequila-reserva-anejo-750ml_550.jpeg",
          silhouette: ""
        },
        {
          name: "42 Below Feijoa",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000606_42-below-feijoa-700ml_550.png",
          silhouette: ""
        },
        {
          name: "42 Below Passionfruit",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0004848_42-below-passionfruit-700ml_550.jpeg",
          silhouette: ""
        },
        {
          name: "42 Below Pure Vodka",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000604_42-below-pure-vodka-700ml_550.jpeg",
          silhouette: ""
        },
        {
          name: "Aberlour A'bunadh Original Cask Strength Single Malt",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0003778_550.jpeg",
          silhouette: ""
        },
        {
          name: "Absolut Apeach",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000466_550.jpeg",
          silhouette: ""
        },
        {
          name: "Absolut Elyx",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0002561_absolut-elyx-700ml_550.jpeg",
          silhouette: ""
        },
        {
          name: "Absolut Extrakt",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000551_550.jpeg",
          silhouette: ""
        },
        {
          name: "Absolut Grapefruit",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000566_absolut-grapefruit-700ml_550.jpeg",
          silhouette: ""
        },
        {
          name: "Absolut Mango",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000522_550.jpeg",
          silhouette: ""
        },
        {
          name: "Absolut Passionfruit",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0004887_550.jpeg",
          silhouette: ""
        },
        {
          name: "Absolut Pears",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000613_550.jpeg",
          silhouette: ""
        },
        {
          name: "Absolut Raspberri",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000601_550.jpeg",
          silhouette: ""
        },
        {
          name: "Absolut Vanilia",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000445_550.jpeg",
          silhouette: ""
        },
        {
          name: "Absolut Vodka",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000400_550.jpeg",
          silhouette: ""
        },
        {
          name: "Absolut Vodka",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001968_550.jpeg",
          silhouette: ""
        },
        {
          name: "Aerstone 10YO Land Cask Single Malt",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0002865_550.jpeg",
          silhouette: ""
        },
        {
          name: "Alizé Gold Passion",
          size: "750ml",
          size_num: 750,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005189_550.jpeg",
          silhouette: ""
        },
        {
          name: "Alizé Rose Passion",
          size: "750ml",
          size_num: 750,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005211_550.jpeg",
          silhouette: ""
        },
        {
          name: "Amarula Cream &amp; Marula Fruit",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005305_550.jpeg",
          silhouette: ""
        },
        {
          name: "Amarula Vanilla Spice Cream Liqueur",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0004231_amarula-vanilla-spice-cream-liqueur-700ml_550.jpeg",
          silhouette: ""
        },
        {
          name: "Aperol Aperitivo",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001980_aperol-aperitivo-700ml_550.jpeg",
          silhouette: ""
        },
        {
          name: "Appleton Estate 12YO Rare Casks",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0004699_appleton-estate-12yo-rare-casks-700ml_550.jpeg",
          silhouette: ""
        },
        {
          name: "Appleton Estate Reserve Blend",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001934_550.jpeg",
          silhouette: ""
        },
        {
          name: "Appleton Estate Signature",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0004694_appleton-estate-signature-1-litre_550.jpeg",
          silhouette: ""
        },
        {
          name: "Ardbeg 10YO Islay Single Malt",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000805_550.jpeg",
          silhouette: ""
        },
        {
          name: "Ardmore Legacy Lightly Peated Single Malt",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005071_550.jpeg",
          silhouette: ""
        },
        {
          name: "Auchentoshan 12YO Single Malt",
          size: "700ml",
          size_num: 700,
          image: "https://halswell.superliquor.co.nz/images/thumbs/0004890_Drammy Bronze 2021_100.png",
          silhouette: ""
        },
        {
          name: "Bacardí 8YO Reserva Ocho Rare Gold Rum",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0004234_550.jpeg",
          silhouette: ""
        },
        {
          name: "Bacardí Carta Blanca White Rum",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000594_bacardi-carta-blanca-white-rum-1-litre_550.jpeg",
          silhouette: ""
        },
        {
          name: "Bacardí Carta Oro Gold Rum",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000825_550.jpeg",
          silhouette: ""
        },
        {
          name: "Bacardí Spiced",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0004233_550.jpeg",
          silhouette: ""
        },
        {
          name: "Baileys Red Velvet Cupcake Limited Edition",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0003136_baileys-red-velvet-cupcake-limited-edition-700ml_550.jpeg",
          silhouette: ""
        },
        {
          name: "Baileys Salted Caramel",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001916_550.jpeg",
          silhouette: ""
        },
        {
          name: "Baileys Strawberries &amp; Cream Limited Edition",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001917_550.jpeg",
          silhouette: ""
        },
        {
          name: "Baileys The Original Irish Cream",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000311_baileys-irish-cream-1-litre_550.jpeg",
          silhouette: ""
        },
        {
          name: "Baileys The Original Irish Cream",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000720_baileys-irish-cream-700ml_550.jpeg",
          silhouette: ""
        },
        {
          name: "Ballantine's 12YO Blended",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0002410_550.jpeg",
          silhouette: ""
        },
        {
          name: "Ballantine's Finest Blended",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001845_550.jpeg",
          silhouette: ""
        },
        {
          name: "Beefeater 24",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001908_550.jpeg",
          silhouette: ""
        },
        {
          name: "Beefeater Pink Strawberry Gin",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001827_550.jpeg",
          silhouette: ""
        },
        {
          name: "Bell's Original Blended",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000197_bells-original-blended-1-litre_550.jpeg",
          silhouette: ""
        },
        {
          name: "Belvedere Vodka",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000826_550.jpeg",
          silhouette: ""
        },
        {
          name: "Black Heart Dark Rum",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000431_550.jpeg",
          silhouette: ""
        },
        {
          name: "Bombay Bramble Gin with Blackberry &amp; Raspberry",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0004655_550.jpeg",
          silhouette: ""
        },
        {
          name: "Bombay Sapphire",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000903_bombay-sapphire-1-litre_550.jpeg",
          silhouette: ""
        },
        {
          name: "Bombay Sapphire",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001199_550.jpeg",
          silhouette: ""
        },
        {
          name: "Bowmore 12YO Single Malt",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000810_bowmore-12yo-single-malt-700ml_550.jpeg",
          silhouette: ""
        },
        {
          name: "Bruichladdich The Classic Laddie Scottish Barley Single Malt",
          size: "700ml",
          size_num: 700,
          image: "https://matamata.superliquor.co.nz/images/thumbs/0004891_Drammy Silver 2021_100.png",
          silhouette: ""
        },
        {
          name: "Buffalo Trace Bourbon",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001223_550.jpeg",
          silhouette: ""
        },
        {
          name: "Bunnahabhain 12YO Single Malt",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000150_bunnahabhain-12yo-single-malt-700ml_550.jpeg",
          silhouette: ""
        },
        {
          name: "Bushmills 10YO Irish Single Malt",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001288_550.jpeg",
          silhouette: ""
        },
        {
          name: "Bushmills Original Irish Whiskey",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000258_bushmills-original-irish-whiskey-1-litre_550.jpeg",
          silhouette: ""
        },
        {
          name: "Campari Bitter Apéritif",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0003047_550.jpeg",
          silhouette: ""
        },
        {
          name: "Canadian Club Spiced Whisky",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000829_550.jpeg",
          silhouette: ""
        },
        {
          name: "Canadian Club Whisky",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000439_canadian-club-whisky-1-litre_550.jpeg",
          silhouette: ""
        },
        {
          name: "Canterbury Cream",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000391_canterbury-cream-700ml_550.jpeg",
          silhouette: ""
        },
        {
          name: "Captain Morgan Dark",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000457_550.jpeg",
          silhouette: ""
        },
        {
          name: "Captain Morgan Original Spiced Gold",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000256_550.jpeg",
          silhouette: ""
        },
        {
          name: "Cavalier Green Ginger Wine",
          size: "750ml",
          size_num: 750,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000270_cavalier-green-ginger-wine-750ml_550.jpeg",
          silhouette: ""
        },
        {
          name: "Chambord Liqueur",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005206_550.jpeg",
          silhouette: ""
        },
        {
          name: "Chatelle VSOP Brandy",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000587_550.jpeg",
          silhouette: ""
        },
        {
          name: "Chivas Regal 12YO",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0004891_Drammy Silver 2021_100.png",
          silhouette: ""
        },
        {
          name: "Chivas Regal 12YO",
          size: "700ml",
          size_num: 700,
          image: "https://mtroskill.superliquor.co.nz/images/thumbs/0004891_Drammy Silver 2021_100.png",
          silhouette: ""
        },
        {
          name: "Chivas Regal 18YO Gold Signature",
          size: "700ml",
          size_num: 700,
          image: "https://mtroskill.superliquor.co.nz/images/thumbs/0004892_Drammy Gold 2021_100.png",
          silhouette: ""
        },
        {
          name: "Chivas Regal Extra 13YO Blended",
          size: "700ml",
          size_num: 700,
          image: "https://whitianga.superliquor.co.nz/images/thumbs/0004892_Drammy Gold 2021_100.png",
          silhouette: ""
        },
        {
          name: "Chivas Regal XV 15YO",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000165_chivas-regal-xv-15yo-700ml_550.jpeg",
          silhouette: ""
        },
        {
          name: "Ciroc Vodka",
          size: "750ml",
          size_num: 750,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0002859_ciroc-vodka-700ml_550.jpeg",
          silhouette: ""
        },
        {
          name: "City of London Gin",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005065_550.jpeg",
          silhouette: ""
        },
        {
          name: "Cointreau",
          size: "350ml",
          size_num: 350,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001890_550.jpeg",
          silhouette: ""
        },
        {
          name: "Cointreau",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0004963_550.jpeg",
          silhouette: ""
        },
        {
          name: "Coruba Gold Barrel Aged Rum",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000465_550.jpeg",
          silhouette: ""
        },
        {
          name: "Coruba Original Barrel Aged Rum",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000441_coruba-original-dark-rum-1-litre_550.jpeg",
          silhouette: ""
        },
        {
          name: "Courvoisier VS Cognac",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0004958_550.jpeg",
          silhouette: ""
        },
        {
          name: "Crystal Head Vodka",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005007_550.jpeg",
          silhouette: ""
        },
        {
          name: "Dancing Sands Sauvignon Blanc Gin",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0004223_550.jpeg",
          silhouette: ""
        },
        {
          name: "De Kuyper Blue Curacao Liqueur",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005194_550.jpeg",
          silhouette: ""
        },
        {
          name: "De Kuyper Cherry Brandy Liqueur",
          size: "500ml",
          size_num: 500,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005079_550.jpeg",
          silhouette: ""
        },
        {
          name: "De Kuyper Crème de Menthe Green",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0004995_550.jpeg",
          silhouette: ""
        },
        {
          name: "De Kuyper Kirsh",
          size: "500ml",
          size_num: 500,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005212_550.jpeg",
          silhouette: ""
        },
        {
          name: "De Kuyper Triple Sec",
          size: "500ml",
          size_num: 500,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005198_550.jpeg",
          silhouette: ""
        },
        {
          name: "De Kuyper Yellow Advocat",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005208_550.jpeg",
          silhouette: ""
        },
        {
          name: "Dewar's White Label Blended",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000507_dewars-white-label-blended-1-litre_550.jpeg",
          silhouette: ""
        },
        {
          name: "Dimple 15YO Blended",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0002386_550.jpeg",
          silhouette: ""
        },
        {
          name: "Disaronno Originale",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0003191_550.jpeg",
          silhouette: ""
        },
        {
          name: "Drambuie",
          size: "350ml",
          size_num: 350,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001913_550.jpeg",
          silhouette: ""
        },
        {
          name: "Drambuie The Isle of Skye Liqueur",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005248_550.jpeg",
          silhouette: ""
        },
        {
          name: "El Jimador Blanco Tequila",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005228_550.jpeg",
          silhouette: ""
        },
        {
          name: "El Jimador Reposado Tequila",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000337_550.jpeg",
          silhouette: ""
        },
        {
          name: "Espolón Blanco Tequila",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000887_550.jpeg",
          silhouette: ""
        },
        {
          name: "Espolón Reposado Tequila",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0002746_550.jpeg",
          silhouette: ""
        },
        {
          name: "Everglades Peach",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001363_550.jpeg",
          silhouette: ""
        },
        {
          name: "Everglades Triple Sec",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0002064_550.jpeg",
          silhouette: ""
        },
        {
          name: "Finlandia Vodka",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005249_550.jpeg",
          silhouette: ""
        },
        {
          name: "Fireball Cinnamon Whisky",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001458_550.jpeg",
          silhouette: ""
        },
        {
          name: "Galliano Amaretto Liqueur",
          size: "500ml",
          size_num: 500,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005227_550.jpeg",
          silhouette: ""
        },
        {
          name: "Galliano Black Liquore Alla Sambuca",
          size: "500ml",
          size_num: 500,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0002017_550.jpeg",
          silhouette: ""
        },
        {
          name: "Galliano Black Liquore Alla Sambuca",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005048_550.jpeg",
          silhouette: ""
        },
        {
          name: "Galliano Sambuca Liqueur White",
          size: "500ml",
          size_num: 500,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0004965_550.jpeg",
          silhouette: ""
        },
        {
          name: "Galliano Sambuca Liqueur White",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0004965_550.jpeg",
          silhouette: ""
        },
        {
          name: "Galliano Vanilla Liqueur",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0004964_550.jpeg",
          silhouette: ""
        },
        {
          name: "Gekkeikan Sake",
          size: "720ml",
          size_num: 720,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001902_550.jpeg",
          silhouette: ""
        },
        {
          name: "Gentleman Jack &amp; 2 Glasses Gift Pack",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001873_550.jpeg",
          silhouette: ""
        },
        {
          name: "Gentleman Jack",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000437_550.jpeg",
          silhouette: ""
        },
        {
          name: "Glayva Whisky Liqueur",
          size: "500ml",
          size_num: 500,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0006504_550.jpeg",
          silhouette: ""
        },
        {
          name: "Glen Grant 12YO Single Malt",
          size: "700ml",
          size_num: 700,
          image: "https://poenamo.superliquor.co.nz/images/thumbs/0004892_Drammy Gold 2021_100.png",
          silhouette: ""
        },
        {
          name: "Glen Grant The Major's Reserve Single Malt",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0002415_550.jpeg",
          silhouette: ""
        },
        {
          name: "Glenfiddich 12YO Single Malt",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001276_glenfiddich-12yo-single-malt-700ml_550.jpeg",
          silhouette: ""
        },
        {
          name: "Glenfiddich 12YO Single Malt",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001276_glenfiddich-12yo-single-malt-700ml_550.jpeg",
          silhouette: ""
        },
        {
          name: "Glenfiddich 12YO Single Malt",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001276_glenfiddich-12yo-single-malt-700ml_550.jpeg",
          silhouette: ""
        },
        {
          name: "Glenfiddich 15YO Solera Reserve Single Malt",
          size: "700ml",
          size_num: 700,
          image: "https://leeston.superliquor.co.nz/images/thumbs/0004891_Drammy Silver 2021_100.png",
          silhouette: ""
        },
        {
          name: "Glenfiddich Experimental Series Fire &amp; Cane Single Malt",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005117_550.jpeg",
          silhouette: ""
        },
        {
          name: "Glenmorangie 10YO The Original Single Malt",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000293_glenmorangie-10yo-the-original-single-malt-700ml_550.jpeg",
          silhouette: ""
        },
        {
          name: "Glenmorangie 12YO Lasanta Sherry Cask Finish Single Malt",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001282_550.jpeg",
          silhouette: ""
        },
        {
          name: "Glenmorangie 14YO The Quinta Ruban Port Cask Finish Single Malt",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0002567_550.jpeg",
          silhouette: ""
        },
        {
          name: "Gordon's Gin",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000430_gordons-gin-1-litre_550.jpeg",
          silhouette: ""
        },
        {
          name: "Gordon's Gin",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001269_550.jpeg",
          silhouette: ""
        },
        {
          name: "Gordon's Premium Pink Gin",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000740_gordons-premium-pink-gin-700ml_550.jpeg",
          silhouette: ""
        },
        {
          name: "Gordon's Sicilian Lemon Gin",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0004654_gordons-sicilian-lemon-gin-700ml_550.jpeg",
          silhouette: ""
        },
        {
          name: "Graham Norton's Own Irish Gin",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000143_graham-nortons-own-irish-gin-700ml_550.jpeg",
          silhouette: ""
        },
        {
          name: "Graham Norton's Own Pink Gin",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000144_graham-nortons-own-pink-gin-700ml_550.jpeg",
          silhouette: ""
        },
        {
          name: "Grand Marnier Cordon Rouge Orange &amp; Cognac Liqueur",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0002578_550.jpeg",
          silhouette: ""
        },
        {
          name: "Grant's Cask Editions Rum Cask Finish",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005167_550.jpeg",
          silhouette: ""
        },
        {
          name: "Grant's Triple Wood Blended",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0003068_grants-triple-wood-blended-1-litre_550.jpeg",
          silhouette: ""
        },
        {
          name: "Greenall's Blueberry Gin",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005165_550.jpeg",
          silhouette: ""
        },
        {
          name: "Greenall's The Original London Dry Gin",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005168_550.jpeg",
          silhouette: ""
        },
        {
          name: "Greenall's Wild Berry Gin",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005153_550.jpeg",
          silhouette: ""
        },
        {
          name: "Grey Goose Vodka",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000597_550.png",
          silhouette: ""
        },
        {
          name: "Hapsburg Absinthe XC Original 89.9%",
          size: "500ml",
          size_num: 500,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001930_550.jpeg",
          silhouette: ""
        },
        {
          name: "Havana Club 3YO Añejo",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001783_550.jpeg",
          silhouette: ""
        },
        {
          name: "Havana Club 7YO Añejo",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001784_550.jpeg",
          silhouette: ""
        },
        {
          name: "Hayman's Sloe Gin",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0004992_550.jpeg",
          silhouette: ""
        },
        {
          name: "Helmsman Spiced Rum",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0002178_550.jpeg",
          silhouette: ""
        },
        {
          name: "Hendrick's Gin",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0002484_hendricks-gin-700ml_550.jpeg",
          silhouette: ""
        },
        {
          name: "Hendrick's Midsummer Solstice Gin",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005132_550.jpeg",
          silhouette: ""
        },
        {
          name: "Hennessy Very Special Cognac",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001669_550.jpeg",
          silhouette: ""
        },
        {
          name: "Hibiki Suntory Whisky Japanese Harmony",
          size: "700ml",
          size_num: 700,
          image: "https://richmond.superliquor.co.nz/images/thumbs/0004891_Drammy Silver 2021_100.png",
          silhouette: ""
        },
        {
          name: "Highland Queen",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001894_550.jpeg",
          silhouette: ""
        },
        {
          name: "Ivanov Vodka",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000470_550.jpeg",
          silhouette: ""
        },
        {
          name: "J &amp; B Rare Whisky",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001274_550.jpeg",
          silhouette: ""
        },
        {
          name: "Jack Daniel's Single Barrel Select",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000168_550.jpeg",
          silhouette: ""
        },
        {
          name: "Jack Daniel's Tennessee Apple",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0004775_550.jpeg",
          silhouette: ""
        },
        {
          name: "Jack Daniel's Tennessee Fire",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005064_550.jpeg",
          silhouette: ""
        },
        {
          name: "Jack Daniel's Tennessee Honey",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000345_550.jpeg",
          silhouette: ""
        },
        {
          name: "Jack Daniel's Tennessee Whiskey",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000310_550.jpeg",
          silhouette: ""
        },
        {
          name: "Jack Daniel's Tennessee Whiskey",
          size: "1.75 Litre",
          size_num: 1750,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005245_550.jpeg",
          silhouette: ""
        },
        {
          name: "Jack Daniel's Tennessee Whiskey",
          size: "350ml",
          size_num: 350,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0002556_550.jpeg",
          silhouette: ""
        },
        {
          name: "Jack Daniel's Tennessee Whiskey",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000218_550.jpeg",
          silhouette: ""
        },
        {
          name: "Jägermeister",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005218_550.jpeg",
          silhouette: ""
        },
        {
          name: "Jägermeister",
          size: "350ml",
          size_num: 350,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001688_550.jpeg",
          silhouette: ""
        },
        {
          name: "Jägermeister",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005169_550.jpeg",
          silhouette: ""
        },
        {
          name: "Jameson Caskmates Stout Edition Irish Whiskey",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0004891_Drammy Silver 2021_100.png",
          silhouette: ""
        },
        {
          name: "Jameson Cold Brew Whiskey &amp; Coffee",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0003721_jameson-cold-brew-whiskey-coffee-700ml_550.jpeg",
          silhouette: ""
        },
        {
          name: "Jameson Irish Whiskey",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0004890_Drammy Bronze 2021_100.png",
          silhouette: ""
        },
        {
          name: "Jameson Irish Whiskey",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000300_jameson-irish-whiskey-700ml_550.jpeg",
          silhouette: ""
        },
        {
          name: "Jim Beam Black Label Extra Aged Bourbon",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005192_550.jpeg",
          silhouette: ""
        },
        {
          name: "Jim Beam Black Label Extra Aged Bourbon",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000281_550.jpeg",
          silhouette: ""
        },
        {
          name: "Jim Beam Devil's Cut Bourbon",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000521_550.png",
          silhouette: ""
        },
        {
          name: "Jim Beam Devil's Cut Bourbon",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0004998_550.jpeg",
          silhouette: ""
        },
        {
          name: "Jim Beam Double Oak Bourbon",
          size: "1 Litre",
          size_num: 1000,
          image: "https://www.superliquor.co.nz/images/thumbs/0004891_Drammy Silver 2021_100.png",
          silhouette: ""
        },
        {
          name: "Jim Beam Double Oak Bourbon",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005068_550.jpeg",
          silhouette: ""
        },
        {
          name: "Jim Beam Honey",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0004999_550.jpeg",
          silhouette: ""
        },
        {
          name: "Jim Beam Red Stag",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005070_550.jpeg",
          silhouette: ""
        },
        {
          name: "Jim Beam Small Batch Bourbon",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005203_550.jpeg",
          silhouette: ""
        },
        {
          name: "Jim Beam White Label Bourbon",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000423_jim-beam-white-label-bourbon-1-litre_550.jpeg",
          silhouette: ""
        },
        {
          name: "Jim Beam White Label Bourbon",
          size: "1.125 Litre",
          size_num: 1125,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000423_jim-beam-white-label-bourbon-1-litre_550.jpeg",
          silhouette: ""
        },
        {
          name: "Jim Beam White Label Bourbon",
          size: "1.75 Litre",
          size_num: 1750,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005178_550.jpeg",
          silhouette: ""
        },
        {
          name: "Jim Beam White Label Bourbon",
          size: "375ml",
          size_num: 375,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0004960_550.jpeg",
          silhouette: ""
        },
        {
          name: "Jim Beam White Label Bourbon",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000423_jim-beam-white-label-bourbon-1-litre_550.jpeg",
          silhouette: ""
        },
        {
          name: "Johnnie Walker 18YO Ultimate",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001265_550.jpeg",
          silhouette: ""
        },
        {
          name: "Johnnie Walker Black Label",
          size: "1 Litre",
          size_num: 1000,
          image: "https://whangamata.superliquor.co.nz/images/thumbs/0004891_Drammy Silver 2021_100.png",
          silhouette: ""
        },
        {
          name: "Johnnie Walker Black Label",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000804_johnnie-walker-black-label-1-litre_550.jpeg",
          silhouette: ""
        },
        {
          name: "Johnnie Walker Black Label",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0004891_Drammy Silver 2021_100.png",
          silhouette: ""
        },
        {
          name: "Johnnie Walker Blue Label",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001693_550.jpeg",
          silhouette: ""
        },
        {
          name: "Johnnie Walker Double Black",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000188_johnnie-walker-double-black-700ml_550.jpeg",
          silhouette: ""
        },
        {
          name: "Johnnie Walker Red Label",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000225_johnnie-walker-red-label-1-litre_550.jpeg",
          silhouette: ""
        },
        {
          name: "Johnnie Walker Red Label",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001200_550.jpeg",
          silhouette: ""
        },
        {
          name: "Jose Cuervo Especial Gold Tequila",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000591_jose-cuervo-especial-tequila-gold-700ml_550.jpeg",
          silhouette: ""
        },
        {
          name: "Jose Cuervo Especial Silver Tequila",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001307_550.jpeg",
          silhouette: ""
        },
        {
          name: "Jose Curevo Agavero",
          size: "750ml",
          size_num: 750,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0002867_550.jpeg",
          silhouette: ""
        },
        {
          name: "Jura 10YO Single Malt",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000801_isle-of-jura-10yo-single-malt-700ml_550.jpeg",
          silhouette: ""
        },
        {
          name: "Jura 18YO Single Malt",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001928_550.jpeg",
          silhouette: ""
        },
        {
          name: "Kahlúa The Original Coffee Liqueur",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000307_kahlua-coffee-liqueur-1-litre_550.jpeg",
          silhouette: ""
        },
        {
          name: "Kahlúa The Original Coffee Liqueur",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005812_kahlua-the-original-coffee-liqueur-700ml_550.jpeg",
          silhouette: ""
        },
        {
          name: "Kentucky Blue 13.9%",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0002870_550.jpeg",
          silhouette: ""
        },
        {
          name: "Klipdrift Export Brandy",
          size: "750ml",
          size_num: 750,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005340_550.jpeg",
          silhouette: ""
        },
        {
          name: "Knob Creek 9YO Small Batch 100 Proof",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0002675_550.jpeg",
          silhouette: ""
        },
        {
          name: "Kraken Black Spiced Rum",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000206_550.jpeg",
          silhouette: ""
        },
        {
          name: "Laphroaig 10YO Islay Single Malt",
          size: "700ml",
          size_num: 700,
          image: "https://leeston.superliquor.co.nz/images/thumbs/0004890_Drammy Bronze 2021_100.png",
          silhouette: ""
        },
        {
          name: "Laphroaig Select Single Malt",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005072_550.jpeg",
          silhouette: ""
        },
        {
          name: "Larios Ginebra Mediterránea",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0002849_larios-ginebra-mediterranea-1-litre_550.jpeg",
          silhouette: ""
        },
        {
          name: "Larios Rose Premium Gin Mediterránea",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005118_550.jpeg",
          silhouette: ""
        },
        {
          name: "Lemon Z Limoncello Liqueur",
          size: "750ml",
          size_num: 750,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001863_550.jpeg",
          silhouette: ""
        },
        {
          name: "Lighthouse Gin",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0002758_550.jpeg",
          silhouette: ""
        },
        {
          name: "Longmorn 16YO Single Malt",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0003116_550.jpeg",
          silhouette: ""
        },
        {
          name: "Lyre's Non-Alcoholic Dry London Spirit",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005138_550.jpeg",
          silhouette: ""
        },
        {
          name: "Mad Jacks Gold 13.9%",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001749_550.jpeg",
          silhouette: ""
        },
        {
          name: "Maker's 46 Bourbon",
          size: "750ml",
          size_num: 750,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0004892_Drammy Gold 2021_100.png",
          silhouette: ""
        },
        {
          name: "Maker's Mark",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0004890_Drammy Bronze 2021_100.png",
          silhouette: ""
        },
        {
          name: "Maker's Mark",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000221_550.jpeg",
          silhouette: ""
        },
        {
          name: "Malfy Con Arancia Gin",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000332_malfy-con-arancia-gin-700ml_550.jpeg",
          silhouette: ""
        },
        {
          name: "Malfy Con Limone Gin",
          size: "700ml",
          size_num: 700,
          image: "https://tokoroa.superliquor.co.nz/images/thumbs/0001541_juniper-gold_100.png",
          silhouette: ""
        },
        {
          name: "Malfy Rosa Sicilian Pink Grapefruit Gin",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001133_550.jpeg",
          silhouette: ""
        },
        {
          name: "Malfy Rosa Sicilian Pink Grapefruit Gin",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001133_550.jpeg",
          silhouette: ""
        },
        {
          name: "Malibu Original Coconut Rum Liqueur",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000808_550.jpeg",
          silhouette: ""
        },
        {
          name: "Malibu Original Coconut Rum Liqueur",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005811_malibu-original-coconut-rum-liqueur-700ml_550.jpeg",
          silhouette: ""
        },
        {
          name: "Malibu Passion Fruit Liqueur",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0002607_550.jpeg",
          silhouette: ""
        },
        {
          name: "Mars Whisky Iwai Japanese Whisky",
          size: "750ml",
          size_num: 750,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005076_550.jpeg",
          silhouette: ""
        },
        {
          name: "Martini Bianco Vermouth",
          size: "750ml",
          size_num: 750,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0002809_martini-bianco-vermouth-1-litre_550.jpeg",
          silhouette: ""
        },
        {
          name: "Martini Rosso Vermouth",
          size: "750ml",
          size_num: 750,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0002808_550.jpeg",
          silhouette: ""
        },
        {
          name: "Midori The Original Melon Liqueur",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000410_550.jpeg",
          silhouette: ""
        },
        {
          name: "Monkey Shoulder Blended Malt",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0004991_550.jpeg",
          silhouette: ""
        },
        {
          name: "Mount Gay Eclipse Gold Rum",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0004873_550.jpeg",
          silhouette: ""
        },
        {
          name: "Mount Gay XO Reserve Rum",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005202_550.jpeg",
          silhouette: ""
        },
        {
          name: "O'Mara's Chocolate Orange Cream",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005135_550.jpeg",
          silhouette: ""
        },
        {
          name: "O'Mara's Irish Country Cream",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005154_550.jpeg",
          silhouette: ""
        },
        {
          name: "O'Mara's Salted Caramel Cream",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005136_550.jpeg",
          silhouette: ""
        },
        {
          name: "O'Mara's Strawberries &amp; Cream",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005137_550.jpeg",
          silhouette: ""
        },
        {
          name: "Opal Nera The Original Black",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001315_550.jpeg",
          silhouette: ""
        },
        {
          name: "Ouzo 12 Kaloyannis",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001292_550.jpeg",
          silhouette: ""
        },
        {
          name: "Patrón XO Café Coffee",
          size: "750ml",
          size_num: 750,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0003036_550.jpeg",
          silhouette: ""
        },
        {
          name: "Pepe Lopez Gold",
          size: "375ml",
          size_num: 375,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0002181_550.jpeg",
          silhouette: ""
        },
        {
          name: "Pepe Lopez Gold",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005183_550.jpeg",
          silhouette: ""
        },
        {
          name: "Pepe Lopez Silver",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0004962_550.jpeg",
          silhouette: ""
        },
        {
          name: "Pernod Pastis French Apertif",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001240_550.jpeg",
          silhouette: ""
        },
        {
          name: "Pimms Original No.1 Cup",
          size: "750ml",
          size_num: 750,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000493_550.jpeg",
          silhouette: ""
        },
        {
          name: "Pinnacle Vodka",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005041_550.jpeg",
          silhouette: ""
        },
        {
          name: "Red Breast 15YO Irish Whiskey",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0003134_550.jpeg",
          silhouette: ""
        },
        {
          name: "Ricard Pastis de Marseille French Apertif",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001243_550.jpeg",
          silhouette: ""
        },
        {
          name: "Rum Co. of Fiji Ratu 8YO Signature Blend Rum Liqueur",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005322_550.jpeg",
          silhouette: ""
        },
        {
          name: "Russian Standard Gold",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0004987_550.jpeg",
          silhouette: ""
        },
        {
          name: "Russian Standard Vodka",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000476_russian-standard-vodka-1-litre_550.jpeg",
          silhouette: ""
        },
        {
          name: "Sailor Jerry Savage Apple",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005313_550.jpeg",
          silhouette: ""
        },
        {
          name: "Sailor Jerry Spiced Rum",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0004985_550.jpeg",
          silhouette: ""
        },
        {
          name: "Scapegrace Black Gin",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005133_550.jpeg",
          silhouette: ""
        },
        {
          name: "Scapegrace Dry Gin",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005102_550.jpeg",
          silhouette: ""
        },
        {
          name: "Scapegrace Vodka",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0002782_550.jpeg",
          silhouette: ""
        },
        {
          name: "Seagers Gin",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000429_550.jpeg",
          silhouette: ""
        },
        {
          name: "Seagers Gin",
          size: "375ml",
          size_num: 375,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0002817_550.jpeg",
          silhouette: ""
        },
        {
          name: "Seagers Lime Twisted Gin",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000477_550.jpeg",
          silhouette: ""
        },
        {
          name: "Slane Triple Cask Irish Whiskey",
          size: "700ml",
          size_num: 700,
          image: "https://www.superliquor.co.nz/images/thumbs/0004892_Drammy Gold 2021_100.png",
          silhouette: ""
        },
        {
          name: "Smirnoff Red No.21 Vodka",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0002176_smirnoff-red-no21-vodka-1-litre_550.jpeg",
          silhouette: ""
        },
        {
          name: "Smirnoff Red Vodka",
          size: "375ml",
          size_num: 375,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001034_smirnoff-red-vodka-375ml_550.jpeg",
          silhouette: ""
        },
        {
          name: "Sourz Apple",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005179_550.jpeg",
          silhouette: ""
        },
        {
          name: "Sourz Raspberry",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005107_550.jpeg",
          silhouette: ""
        },
        {
          name: "Southern Comfort",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001137_550.jpeg",
          silhouette: ""
        },
        {
          name: "Southern Comfort",
          size: "375ml",
          size_num: 375,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0002422_550.jpeg",
          silhouette: ""
        },
        {
          name: "Southern Comfort",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001840_550.jpeg",
          silhouette: ""
        },
        {
          name: "Stolen Dark Rum",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005009_550.jpeg",
          silhouette: ""
        },
        {
          name: "Stolen Gold Rum",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005062_550.jpeg",
          silhouette: ""
        },
        {
          name: "Stolen Smoked Rum",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005037_550.jpeg",
          silhouette: ""
        },
        {
          name: "Stolichnaya Vodka",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001256_550.jpeg",
          silhouette: ""
        },
        {
          name: "Stone's Mac Full Strength Green Ginger Wine",
          size: "750ml",
          size_num: 750,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0003744_550.jpeg",
          silhouette: ""
        },
        {
          name: "Stone's Original Green Ginger Wine",
          size: "750ml",
          size_num: 750,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000119_550.jpeg",
          silhouette: ""
        },
        {
          name: "Stone's Reserve Green Ginger Wine",
          size: "750ml",
          size_num: 750,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0002806_550.jpeg",
          silhouette: ""
        },
        {
          name: "St-Rémy VSOP French Brandy",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000327_550.jpeg",
          silhouette: ""
        },
        {
          name: "St-Rémy VSOP French Brandy",
          size: "1.75 Litre",
          size_num: 1750,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0002421_550.jpeg",
          silhouette: ""
        },
        {
          name: "St-Rémy VSOP French Brandy",
          size: "350ml",
          size_num: 350,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0004037_550.jpeg",
          silhouette: ""
        },
        {
          name: "St-Rémy VSOP French Brandy",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000329_550.jpeg",
          silhouette: ""
        },
        {
          name: "Suntory Roku The Japanese Craft Gin",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005113_550.jpeg",
          silhouette: ""
        },
        {
          name: "Talisker 10YO Single Malt",
          size: "700ml",
          size_num: 700,
          image: "https://redbeach.superliquor.co.nz/images/thumbs/0004890_Drammy Bronze 2021_100.png",
          silhouette: ""
        },
        {
          name: "Tanqueray London Dry Gin",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000404_tanqueray-london-dry-gin-1-litre_550.jpeg",
          silhouette: ""
        },
        {
          name: "Teacher's Highland Cream Blended",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005184_550.jpeg",
          silhouette: ""
        },
        {
          name: "Teeling Single Malt Irish Whiskey",
          size: "700ml",
          size_num: 700,
          image: "https://groveroad.superliquor.co.nz/images/thumbs/0004891_Drammy Silver 2021_100.png",
          silhouette: ""
        },
        {
          name: "The Balvenie 12YO DoubleWood Single Malt",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005057_550.jpeg",
          silhouette: ""
        },
        {
          name: "The Balvenie 14YO Caribbean Cask Single Malt",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005097_550.jpeg",
          silhouette: ""
        },
        {
          name: "The BenRiach 10YO Single Malt",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005067_550.jpeg",
          silhouette: ""
        },
        {
          name: "The Botanist Gin",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0004983_550.jpeg",
          silhouette: ""
        },
        {
          name: "The Dalmore 12YO Single Malt",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000148_550.jpeg",
          silhouette: ""
        },
        {
          name: "The Dalmore 15YO Single Malt",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0004976_550.jpeg",
          silhouette: ""
        },
        {
          name: "The Dubliner Irish Whiskey Liqueur",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005229_550.jpeg",
          silhouette: ""
        },
        {
          name: "The Famous Grouse",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005190_550.jpeg",
          silhouette: ""
        },
        {
          name: "The Famous Grouse Smoky Black",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005221_550.jpeg",
          silhouette: ""
        },
        {
          name: "The GlenDronach 12YO Original Single Malt",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0001798_550.jpeg",
          silhouette: ""
        },
        {
          name: "The Glenlivet 15YO Single Malt French Oak Reserve",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0004935_the-glenlivet-15yo-single-malt-french-oak-reserve-700ml_550.jpeg",
          silhouette: ""
        },
        {
          name: "The Glenlivet 18YO Single Malt Batch Reserve",
          size: "700ml",
          size_num: 700,
          image: "https://mtroskill.superliquor.co.nz/images/thumbs/0004890_Drammy Bronze 2021_100.png",
          silhouette: ""
        },
        {
          name: "The Glenlivet Captain's Reserve Single Malt",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0004890_Drammy Bronze 2021_100.png",
          silhouette: ""
        },
        {
          name: "The Glenlivet Caribbean Reserve Single Malt",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005312_550.jpeg",
          silhouette: ""
        },
        {
          name: "The Glenlivet Founder's Reserve Single Malt",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0004892_Drammy Gold 2021_100.png",
          silhouette: ""
        },
        {
          name: "The Glenlivet Founder's Reserve Single Malt",
          size: "700ml",
          size_num: 700,
          image: "https://shop.superliquor.co.nz/images/thumbs/0004892_Drammy Gold 2021_100.png",
          silhouette: ""
        },
        {
          name: "The Glenlivet Nàdurra First Fill Selection Single Malt",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0002725_550.jpeg",
          silhouette: ""
        },
        {
          name: "The Macallan 12YO Double Cask Single Malt",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005111_550.jpeg",
          silhouette: ""
        },
        {
          name: "Tia Maria Coffee Liqueur",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0002811_550.jpeg",
          silhouette: ""
        },
        {
          name: "Tito's Handmade Vodka",
          size: "750ml",
          size_num: 750,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005036_550.jpeg",
          silhouette: ""
        },
        {
          name: "Tullamore Dew",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0005174_550.jpeg",
          silhouette: ""
        },
        {
          name: "Vok Advokaat Liqueur",
          size: "500ml",
          size_num: 500,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0002793_550.jpeg",
          silhouette: ""
        },
        {
          name: "Vok Blue Curacao Liqueur",
          size: "500ml",
          size_num: 500,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0002815_550.jpeg",
          silhouette: ""
        },
        {
          name: "Vok Butterscotch Liqueur",
          size: "500ml",
          size_num: 500,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0002749_550.jpeg",
          silhouette: ""
        },
        {
          name: "Vok Triple Sec Liqueur",
          size: "500ml",
          size_num: 500,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0002816_550.jpeg",
          silhouette: ""
        },
        {
          name: "Wild Turkey 101 Proof",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0002519_550.jpeg",
          silhouette: ""
        },
        {
          name: "Wild Turkey American Honey",
          size: "700ml",
          size_num: 700,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000585_550.jpeg",
          silhouette: ""
        },
        {
          name: "Wild Turkey Bourbon",
          size: "1 Litre",
          size_num: 1000,
          image: "https://hilltop.superliquor.co.nz/images/thumbs/0004890_Drammy Bronze 2021_100.png",
          silhouette: ""
        },
        {
          name: "Wild Turkey Longbranch Bourbon",
          size: "700ml",
          size_num: 700,
          image: "https://papanui.superliquor.co.nz/images/thumbs/0004890_Drammy Bronze 2021_100.png",
          silhouette: ""
        },
        {
          name: "Woodford Reserve Bourbon",
          size: "700ml",
          size_num: 700,
          image: "https://southland.superliquor.co.nz/images/thumbs/0004891_Drammy Silver 2021_100.png",
          silhouette: ""
        },
        {
          name: "Woodstock Bourbon",
          size: "1 Litre",
          size_num: 1000,
          image: "https://taumarunui.superliquor.co.nz/images/thumbs/0000452_550.jpeg",
          silhouette: ""
        }
     ])}
    )
}
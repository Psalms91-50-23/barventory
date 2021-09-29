exports.seed = (knex) => {
  return knex("bottles")
    .del()
    .then(() => {
      return knex("bottles").insert([
        {
          "name": "1800 Reserva Coconut",
          "size": "750ml",
          "size_num": 750,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000128_1800-reserva-coconut-750ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "1800 Tequila Reserva Añejo",
          "size": "750ml",
          "size_num": 750,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001703_1800-tequila-reserva-anejo-750ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "42 Below Feijoa",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000606_42-below-feijoa-700ml_550.png",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "42 Below Passionfruit",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0004848_42-below-passionfruit-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "42 Below Pure Vodka",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000604_42-below-pure-vodka-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Aberlour A'bunadh Original Cask Strength Single Malt",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0003778_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Absolut Apeach",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000466_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Absolut Elyx",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0002561_absolut-elyx-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Absolut Extrakt",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000551_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Absolut Grapefruit",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000566_absolut-grapefruit-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Absolut Mango",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000522_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Absolut Passionfruit",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0004887_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Absolut Pears",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000613_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Absolut Raspberri",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000601_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Absolut Vanilia",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000445_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Absolut Vodka",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000400_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Absolut Vodka",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001968_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Aerstone 10YO Land Cask Single Malt",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0002865_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Alizé Gold Passion",
          "size": "750ml",
          "size_num": 750,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005189_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Alizé Rose Passion",
          "size": "750ml",
          "size_num": 750,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005211_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Amarula Cream &amp; Marula Fruit",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005305_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Amarula Vanilla Spice Cream Liqueur",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0004231_amarula-vanilla-spice-cream-liqueur-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Angostura Aromatic Bitters",
          "size": "200ml",
          "size_num": 200,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0004961_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Aperol Aperitivo",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001980_aperol-aperitivo-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Appleton Estate 12YO Rare Casks",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0004699_appleton-estate-12yo-rare-casks-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Appleton Estate Reserve Blend",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001934_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Appleton Estate Signature",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0004694_appleton-estate-signature-1-litre_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Ardbeg 10YO Islay Single Malt",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000805_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Ardmore Legacy Lightly Peated Single Malt",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005071_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Auchentoshan 12YO Single Malt",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005017_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Bacardí 8YO Reserva Ocho Rare Gold Rum",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0004234_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Bacardí Carta Blanca White Rum",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000594_bacardi-carta-blanca-white-rum-1-litre_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Bacardí Carta Oro Gold Rum",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000825_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Bacardí Spiced",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0004233_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Baileys Red Velvet Cupcake Limited Edition",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0003136_baileys-red-velvet-cupcake-limited-edition-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Baileys Salted Caramel",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001916_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Baileys Strawberries &amp; Cream Limited Edition",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001917_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Baileys The Original Irish Cream",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000311_baileys-irish-cream-1-litre_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Baileys The Original Irish Cream",
          "size": "200ml",
          "size_num": 200,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001914_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Baileys The Original Irish Cream",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000720_baileys-irish-cream-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Ballantine's 12YO Blended",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0002410_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Ballantine's Finest Blended",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001845_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Beefeater 24",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001908_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Beefeater Pink Strawberry Gin",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001827_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Bell's Original Blended",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000197_bells-original-blended-1-litre_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Belvedere Vodka",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000826_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Black Heart Dark Rum",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000431_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Bombay Bramble Gin with Blackberry &amp; Raspberry",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0004655_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Bombay Sapphire",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000903_bombay-sapphire-1-litre_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Bombay Sapphire",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001199_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Bowmore 12YO Single Malt",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000810_bowmore-12yo-single-malt-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Bruichladdich The Classic Laddie Scottish Barley Single Malt",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0002416_bruichladdich-the-classic-laddie-scottish-barley-single-malt-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Buffalo Trace Bourbon",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001223_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Bunnahabhain 12YO Single Malt",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000150_bunnahabhain-12yo-single-malt-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Bushmills 10YO Irish Single Malt",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001288_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Bushmills Original Irish Whiskey",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000258_bushmills-original-irish-whiskey-1-litre_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Campari Bitter Apéritif",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0003047_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Canadian Club Spiced Whisky",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000829_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Canadian Club Whisky",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000439_canadian-club-whisky-1-litre_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Canterbury Cream",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000391_canterbury-cream-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Captain Morgan Dark",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000457_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Captain Morgan Original Spiced Gold",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000256_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Cavalier Green Ginger Wine",
          "size": "750ml",
          "size_num": 750,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000270_cavalier-green-ginger-wine-750ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Chambord Liqueur",
          "size": "200ml",
          "size_num": 200,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001876_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Chambord Liqueur",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005206_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Chatelle VSOP Brandy",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000587_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Chivas Regal 12YO",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000172_chivas-regal-12yo-1-litre_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Chivas Regal 12YO",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000412_chivas-regal-12yo-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Chivas Regal 18YO Gold Signature",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000294_chivas-regal-18yo-gold-signature-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Chivas Regal Extra 13YO Blended",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0003023_chivas-regal-extra-13yo-blended-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Chivas Regal XV 15YO",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000165_chivas-regal-xv-15yo-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Ciroc Vodka",
          "size": "750ml",
          "size_num": 750,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0002859_ciroc-vodka-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "City of London Gin",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005065_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Cointreau",
          "size": "350ml",
          "size_num": 350,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001890_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Cointreau",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0004963_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Coruba Gold Barrel Aged Rum",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000465_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Coruba Original Barrel Aged Rum",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000441_coruba-original-dark-rum-1-litre_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Courvoisier VS Cognac",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0004958_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Crystal Head Vodka",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005007_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Dancing Sands Sauvignon Blanc Gin",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0004223_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "De Kuyper Blue Curacao Liqueur",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005194_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "De Kuyper Cherry Brandy Liqueur",
          "size": "500ml",
          "size_num": 500,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005079_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "De Kuyper Crème de Menthe Green",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0004995_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "De Kuyper Kirsh",
          "size": "500ml",
          "size_num": 500,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005212_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "De Kuyper Triple Sec",
          "size": "500ml",
          "size_num": 500,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005198_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "De Kuyper Yellow Advocat",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005208_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Dewar's White Label Blended",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000507_dewars-white-label-blended-1-litre_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Dimple 15YO Blended",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0002386_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Disaronno Originale",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0003191_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Drambuie",
          "size": "350ml",
          "size_num": 350,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001913_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Drambuie The Isle of Skye Liqueur",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005248_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "El Jimador Blanco Tequila",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005228_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "El Jimador Reposado Tequila",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000337_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Espolón Blanco Tequila",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000887_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Espolón Reposado Tequila",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0002746_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Everglades Peach",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001363_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Everglades Triple Sec",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0002064_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Finlandia Vodka",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005249_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Fireball Cinnamon Whisky",
          "size": "200ml",
          "size_num": 200,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001878_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Fireball Cinnamon Whisky",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001458_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Galliano Amaretto Liqueur",
          "size": "500ml",
          "size_num": 500,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005227_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Galliano Black Liquore Alla Sambuca",
          "size": "500ml",
          "size_num": 500,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0002017_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Galliano Black Liquore Alla Sambuca",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005048_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Galliano Sambuca Liqueur White",
          "size": "500ml",
          "size_num": 500,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0004965_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Galliano Sambuca Liqueur White",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0004965_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Galliano Vanilla Liqueur",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0004964_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Gekkeikan Sake",
          "size": "720ml",
          "size_num": 720,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001902_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Gentleman Jack &amp; 2 Glasses Gift Pack",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001873_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Gentleman Jack",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000437_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Glayva Whisky Liqueur",
          "size": "500ml",
          "size_num": 500,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0006504_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Glen Grant 12YO Single Malt",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001069_glen-grant-12yo-single-malt-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Glen Grant The Major's Reserve Single Malt",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0002415_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Glenfiddich 12YO Single Malt",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001276_glenfiddich-12yo-single-malt-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Glenfiddich 12YO Single Malt",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001276_glenfiddich-12yo-single-malt-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Glenfiddich 12YO Single Malt",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001276_glenfiddich-12yo-single-malt-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Glenfiddich 15YO Solera Reserve Single Malt",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001694_glenfiddich-15yo-solera-reserve-single-malt-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Glenfiddich Experimental Series Fire &amp; Cane Single Malt",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005117_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Glenmorangie 10YO The Original Single Malt",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000293_glenmorangie-10yo-the-original-single-malt-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Glenmorangie 12YO Lasanta Sherry Cask Finish Single Malt",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001282_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Glenmorangie 14YO The Quinta Ruban Port Cask Finish Single Malt",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0002567_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Gordon's Gin",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000430_gordons-gin-1-litre_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Gordon's Gin",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001269_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Gordon's Premium Pink Gin",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000740_gordons-premium-pink-gin-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Gordon's Sicilian Lemon Gin",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0004654_gordons-sicilian-lemon-gin-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Graham Norton's Own Irish Gin",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000143_graham-nortons-own-irish-gin-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Graham Norton's Own Pink Gin",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000144_graham-nortons-own-pink-gin-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Grand Marnier Cordon Rouge Orange &amp; Cognac Liqueur",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0002578_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Grant's Cask Editions Rum Cask Finish",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005167_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Grant's Triple Wood Blended",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0003068_grants-triple-wood-blended-1-litre_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Greenall's Blueberry Gin",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005165_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Greenall's The Original London Dry Gin",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005168_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Greenall's Wild Berry Gin",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005153_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Grey Goose Vodka",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000597_550.png",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Hapsburg Absinthe XC Original 89.9%",
          "size": "500ml",
          "size_num": 500,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001930_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Havana Club 3YO Añejo",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001783_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Havana Club 7YO Añejo",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001784_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Hayman's Sloe Gin",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0004992_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Helmsman Spiced Rum",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0002178_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Hendrick's Gin",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0002484_hendricks-gin-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Hendrick's Midsummer Solstice Gin",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005132_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Hennessy Very Special Cognac",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001669_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Hibiki Suntory Whisky Japanese Harmony",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005230_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Highland Queen",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001894_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Ivanov Vodka",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000470_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "J &amp; B Rare Whisky",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001274_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Jack Daniel's Single Barrel Select",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000168_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Jack Daniel's Tennessee Apple",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0004775_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Jack Daniel's Tennessee Fire",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005064_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Jack Daniel's Tennessee Honey",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000345_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Jack Daniel's Tennessee Whiskey",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000310_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Jack Daniel's Tennessee Whiskey",
          "size": "1.75 Litre",
          "size_num": 1750,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005245_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Jack Daniel's Tennessee Whiskey",
          "size": "350ml",
          "size_num": 350,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0002556_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Jack Daniel's Tennessee Whiskey",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000218_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Jägermeister",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005218_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Jägermeister",
          "size": "200ml",
          "size_num": 200,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005019_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Jägermeister",
          "size": "350ml",
          "size_num": 350,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001688_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Jägermeister",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005169_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Jameson Caskmates Stout Edition Irish Whiskey",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0004770_jameson-caskmates-stout-edition-irish-whiskey-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Jameson Cold Brew Whiskey &amp; Coffee",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0003721_jameson-cold-brew-whiskey-coffee-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Jameson Irish Whiskey",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000213_jameson-irish-whiskey-1-litre_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Jameson Irish Whiskey",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000300_jameson-irish-whiskey-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Jim Beam Black Label Extra Aged Bourbon",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005192_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Jim Beam Black Label Extra Aged Bourbon",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000281_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Jim Beam Devil's Cut Bourbon",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000521_550.png",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Jim Beam Devil's Cut Bourbon",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0004998_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Jim Beam Double Oak Bourbon",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000790_jim-beam-double-oak-bourbon-1-litre_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Jim Beam Double Oak Bourbon",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005068_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Jim Beam Honey",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0004999_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Jim Beam Red Stag",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005070_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Jim Beam Small Batch Bourbon",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005203_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Jim Beam White Label Bourbon",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000423_jim-beam-white-label-bourbon-1-litre_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Jim Beam White Label Bourbon",
          "size": "1.125 Litre",
          "size_num": 1125,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000423_jim-beam-white-label-bourbon-1-litre_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Jim Beam White Label Bourbon",
          "size": "1.75 Litre",
          "size_num": 1750,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005178_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Jim Beam White Label Bourbon",
          "size": "375ml",
          "size_num": 375,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0004960_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Jim Beam White Label Bourbon",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000423_jim-beam-white-label-bourbon-1-litre_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Johnnie Walker 18YO Ultimate",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001265_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Johnnie Walker Black Label",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000804_johnnie-walker-black-label-1-litre_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Johnnie Walker Black Label",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000804_johnnie-walker-black-label-1-litre_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Johnnie Walker Black Label",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000303_johnnie-walker-black-label-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Johnnie Walker Blue Label",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001693_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Johnnie Walker Double Black",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000188_johnnie-walker-double-black-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Johnnie Walker Red Label",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000225_johnnie-walker-red-label-1-litre_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Johnnie Walker Red Label",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001200_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Jose Cuervo Especial Gold Tequila",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000591_jose-cuervo-especial-tequila-gold-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Jose Cuervo Especial Silver Tequila",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001307_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Jose Curevo Agavero",
          "size": "750ml",
          "size_num": 750,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0002867_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Jumping Goat Coffee Vodka Liqueur",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005086_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Jura 10YO Single Malt",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000801_isle-of-jura-10yo-single-malt-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Jura 18YO Single Malt",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001928_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Kahlúa The Original Coffee Liqueur",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000307_kahlua-coffee-liqueur-1-litre_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Kahlúa The Original Coffee Liqueur",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005812_kahlua-the-original-coffee-liqueur-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Kentucky Blue 13.9%",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0002870_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Klipdrift Export Brandy",
          "size": "750ml",
          "size_num": 750,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005340_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Knob Creek 9YO Small Batch 100 Proof",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0002675_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Kraken Black Spiced Rum",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000206_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Laphroaig 10YO Islay Single Malt",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000162_laphroaig-10yo-islay-single-malt-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Laphroaig Select Single Malt",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005072_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Larios Ginebra Mediterránea",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0002849_larios-ginebra-mediterranea-1-litre_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Larios Rose Premium Gin Mediterránea",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005118_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Lemon Z Limoncello Liqueur",
          "size": "750ml",
          "size_num": 750,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001863_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Lighthouse Gin",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0002758_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Longmorn 16YO Single Malt",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0003116_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Lyre's Non-Alcoholic Dry London Spirit",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005138_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Mad Jacks Gold 13.9%",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001749_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Maker's 46 Bourbon",
          "size": "750ml",
          "size_num": 750,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000127_makers-46-bourbon-750ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Maker's Mark",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000546_makers-mark-1-litre_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Maker's Mark",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000221_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Malfy Con Arancia Gin",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000332_malfy-con-arancia-gin-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Malfy Con Limone Gin",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000343_malfy-con-limone-gin-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Malfy Rosa Sicilian Pink Grapefruit Gin",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001133_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Malfy Rosa Sicilian Pink Grapefruit Gin",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001133_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Malibu Original Coconut Rum Liqueur",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000808_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Malibu Original Coconut Rum Liqueur",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005811_malibu-original-coconut-rum-liqueur-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Malibu Passion Fruit Liqueur",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0002607_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Mars Whisky Iwai Japanese Whisky",
          "size": "750ml",
          "size_num": 750,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005076_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Martini Bianco Vermouth",
          "size": "750ml",
          "size_num": 750,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0002809_martini-bianco-vermouth-1-litre_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Martini Rosso Vermouth",
          "size": "750ml",
          "size_num": 750,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0002808_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Midori The Original Melon Liqueur",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000410_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Monkey Shoulder Blended Malt",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0004991_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Mount Gay Eclipse Gold Rum",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0004873_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Mount Gay XO Reserve Rum",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005202_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "O'Mara's Chocolate Orange Cream",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005135_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "O'Mara's Irish Country Cream",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005154_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "O'Mara's Salted Caramel Cream",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005136_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "O'Mara's Strawberries &amp; Cream",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005137_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Opal Nera The Original Black",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001315_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Ouzo 12 Kaloyannis",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001292_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Patrón XO Café Coffee",
          "size": "750ml",
          "size_num": 750,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0003036_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Pepe Lopez Gold",
          "size": "375ml",
          "size_num": 375,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0002181_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Pepe Lopez Gold",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005183_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Pepe Lopez Silver",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0004962_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Pernod Pastis French Apertif",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001240_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Pimms Original No.1 Cup",
          "size": "750ml",
          "size_num": 750,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000493_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Pinnacle Vodka",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005041_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Red Breast 15YO Irish Whiskey",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0003134_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Ricard Pastis de Marseille French Apertif",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001243_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Rum Co. of Fiji Ratu 8YO Signature Blend Rum Liqueur",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005322_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Russian Standard Gold",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0004987_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Russian Standard Vodka",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000476_russian-standard-vodka-1-litre_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Sailor Jerry Savage Apple",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005313_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Sailor Jerry Spiced Rum",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0004985_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Scapegrace Black Gin",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005133_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Scapegrace Dry Gin",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005102_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Scapegrace Vodka",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0002782_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Seagers Gin",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000429_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Seagers Gin",
          "size": "375ml",
          "size_num": 375,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0002817_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Seagers Lime Twisted Gin",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000477_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Slane Triple Cask Irish Whiskey",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0004967_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Smirnoff Red No.21 Vodka",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0002176_smirnoff-red-no21-vodka-1-litre_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Smirnoff Red Vodka",
          "size": "375ml",
          "size_num": 375,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001034_smirnoff-red-vodka-375ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Sourz Apple",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005179_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Sourz Raspberry",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005107_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Southern Comfort",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001137_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Southern Comfort",
          "size": "375ml",
          "size_num": 375,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0002422_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Southern Comfort",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001840_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Stolen Dark Rum",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005009_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Stolen Gold Rum",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005062_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Stolen Smoked Rum",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005037_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Stolichnaya Vodka",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001256_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Stone's Mac Full Strength Green Ginger Wine",
          "size": "750ml",
          "size_num": 750,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0003744_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Stone's Original Green Ginger Wine",
          "size": "750ml",
          "size_num": 750,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000119_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Stone's Reserve Green Ginger Wine",
          "size": "750ml",
          "size_num": 750,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0002806_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "St-Rémy VSOP French Brandy",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000327_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "St-Rémy VSOP French Brandy",
          "size": "1.75 Litre",
          "size_num": 1750,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0002421_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "St-Rémy VSOP French Brandy",
          "size": "350ml",
          "size_num": 350,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0004037_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "St-Rémy VSOP French Brandy",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000329_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Suntory Roku The Japanese Craft Gin",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005113_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Talisker 10YO Single Malt",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000302_talisker-10yo-single-malt-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Tanqueray London Dry Gin",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000404_tanqueray-london-dry-gin-1-litre_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Teacher's Highland Cream Blended",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005184_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Teeling Single Malt Irish Whiskey",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005029_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "The Balvenie 12YO DoubleWood Single Malt",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005057_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "The Balvenie 14YO Caribbean Cask Single Malt",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005097_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "The BenRiach 10YO Single Malt",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005067_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "The Botanist Gin",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0004983_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "The Dalmore 12YO Single Malt",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000148_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "The Dalmore 15YO Single Malt",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0004976_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "The Dubliner Irish Whiskey Liqueur",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005229_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "The Famous Grouse",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005190_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "The Famous Grouse Smoky Black",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005221_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "The GlenDronach 12YO Original Single Malt",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001798_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "The Glenlivet 15YO Single Malt French Oak Reserve",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0004935_the-glenlivet-15yo-single-malt-french-oak-reserve-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "The Glenlivet 18YO Single Malt Batch Reserve",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0004938_the-glenlivet-18yo-single-malt-batch-reserve-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "The Glenlivet Captain's Reserve Single Malt",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0004937_the-glenlivet-captains-reserve-single-malt-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "The Glenlivet Caribbean Reserve Single Malt",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005312_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "The Glenlivet Founder's Reserve Single Malt",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0004939_the-glenlivet-founders-reserve-single-malt-1-litre_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "The Glenlivet Founder's Reserve Single Malt",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0004936_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "The Glenlivet Nàdurra First Fill Selection Single Malt",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0002725_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "The Macallan 12YO Double Cask Single Malt",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005111_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Tia Maria Coffee Liqueur",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0002811_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Tito's Handmade Vodka",
          "size": "750ml",
          "size_num": 750,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005036_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Tullamore Dew",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0005174_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Vok Advokaat Liqueur",
          "size": "500ml",
          "size_num": 500,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0002793_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Vok Blue Curacao Liqueur",
          "size": "500ml",
          "size_num": 500,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0002815_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Vok Butterscotch Liqueur",
          "size": "500ml",
          "size_num": 500,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0002749_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Vok Triple Sec Liqueur",
          "size": "500ml",
          "size_num": 500,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0002816_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Wild Turkey 101 Proof",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0002519_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Wild Turkey American Honey",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000585_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Wild Turkey Bourbon",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000414_wild-turkey-bourbon-1-litre_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Wild Turkey Longbranch Bourbon",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000141_wild-turkey-longbranch-bourbon-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Woodford Reserve Bourbon",
          "size": "700ml",
          "size_num": 700,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0001846_woodford-reserve-bourbon-700ml_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        },
        {
          "name": "Woodstock Bourbon",
          "size": "1 Litre",
          "size_num": 1000,
          "image": "https://taumarunui.superliquor.co.nz/images/thumbs/0000452_550.jpeg",
          "silhouette": "/img/silhouette-smirnoff-vodka-1000ml.svg"
        }
      ]);
    });
};

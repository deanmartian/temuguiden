import { Product, Review, Category, Author } from '@/lib/types'

export const categories: Category[] = [
  { id: '1', name: 'Elektronikk', slug: 'elektronikk' },
  { id: '2', name: 'Kjøkken', slug: 'kjokken' },
  { id: '3', name: 'Tilbehør', slug: 'tilbehor' },
  { id: '4', name: 'Hjem & Hage', slug: 'hjem-hage' },
  { id: '5', name: 'Sport & Fritid', slug: 'sport-fritid' },
  { id: '6', name: 'Klær & Mote', slug: 'klaer-mote' }
]

export const authors: Author[] = [
  {
    id: '1',
    name: 'Lars Hansen',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    bio: 'Teknologi-entusiast med over 10 års erfaring innen produkttesting'
  },
  {
    id: '2',
    name: 'Anna Nordahl',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    bio: 'Kjøkkenekspert og food blogger'
  },
  {
    id: '3',
    name: 'Erik Johansen',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    bio: 'Gadget-guru og teknisk anmelder'
  }
]

export const products: Product[] = [
  {
    id: '1',
    name: 'Trådløse ørepropper XZ-Pro',
    slug: 'tradlose-orepropper-xz-pro',
    category: 'Elektronikk',
    priceRange: 'Rimelig',
    temuUrl: 'https://temu.com/product-example-1',
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop'
    ],
    specs: {
      'Batteritid': '6 timer',
      'Bluetooth': '5.3',
      'Ladeetui': 'Ja',
      'Vanntett': 'IPX4',
      'Vekt': '45g'
    }
  },
  {
    id: '2',
    name: 'Mini Airfryer 2L',
    slug: 'mini-airfryer-2l',
    category: 'Kjøkken',
    priceRange: 'Rimelig',
    temuUrl: 'https://temu.com/product-example-2',
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1574781330855-d0db0cc6a79c?w=500&h=500&fit=crop'
    ],
    specs: {
      'Effekt': '1000W',
      'Kapasitet': '2L',
      'Timer': '60 minutter',
      'Temperatur': '80-200°C',
      'Materiale': 'BPA-fri plast'
    }
  },
  {
    id: '3',
    name: 'Magnetisk mobil-lommebok',
    slug: 'magnetisk-mobil-lommebok',
    category: 'Tilbehør',
    priceRange: 'Rimelig',
    temuUrl: 'https://temu.com/product-example-3',
    images: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=500&h=500&fit=crop'
    ],
    specs: {
      'Materiale': 'Ekte skinn',
      'Kortplasser': '3 stk',
      'Magnet': 'Neodym',
      'Kompatibilitet': 'iPhone 12-15, Samsung Galaxy',
      'Farge': 'Svart, Brun, Blå'
    }
  }
]

export const reviews: Review[] = [
  {
    id: '1',
    productId: '1',
    slug: 'tradlose-orepropper-xz-pro-anmeldelse',
    title: 'XZ-Pro ørepropper: Overraskende bra lyd til en lav pris',
    summary: 'Disse rimelige øreproppene leverer solid lydkvalitet og god batteritid, men byggekvaliteten kunne vært bedre.',
    rating: 4.2,
    pros: [
      'Utmerket lydkvalitet i prisklassen',
      'Lang batteritid på 6 timer',
      'Stabil Bluetooth-tilkobling',
      'Komfortabel passform',
      'IPX4 vannresistens'
    ],
    cons: [
      'Litt plastikk-følelse i etuiet',
      'Mangler støykansellering',
      'Kan gli ut under intensiv trening',
      'Begrenset bass-respons'
    ],
    verdict: 'XZ-Pro øreproppene er et solid valg for de som søker gode trådløse ørepropper uten å sprenge budsjettet. Lydkvaliteten imponerer i prisklassen, og batteritiden på 6 timer er mer enn tilfredsstillende for daglig bruk. Selv om byggekvaliteten ikke matcher dyrere alternativer, får du mye verdi for pengene.',
    videoUrls: ['https://www.youtube.com/watch?v=dQw4w9WgXcQ'],
    authorId: '1',
    createdAt: '2024-01-15',
    content: 'Etter å ha testet XZ-Pro øreproppene i flere uker, kan jeg trygt si at de overgår forventningene for denne prisklassen. Lydkvaliteten er klar og balansert, med hyggelige mellomtoner og akseptabel bassrespons. Batteritiden på 6 timer holder seg stabil gjennom testperioden, og Bluetooth 5.3-tilkoblingen er pålitelig selv på lengre avstander. Designet er enkelt men funksjonelt, og øreproppene sitter komfortabelt under langvarig bruk. IPX4-klassifiseringen gjør dem egnet for lettere treningsøkter og dårlig vær.'
  },
  {
    id: '2',
    productId: '2',
    slug: 'mini-airfryer-2l-anmeldelse',
    title: 'Mini Airfryer 2L: Perfekt for små husholdninger',
    summary: 'En kompakt og effektiv airfryer som leverer sprø resultater på kort tid, ideell for 1-2 personer.',
    rating: 3.8,
    pros: [
      'Kompakt design som passer på små kjøkken',
      'Rask oppvarming - kun 3 minutter',
      'Enkel å rengjøre',
      'Stillegående drift',
      'Energieffektiv med 1000W'
    ],
    cons: [
      'Begrenset kapasitet for familier',
      'Timeren kan være upresis',
      'Mangler forhåndsinnstillinger',
      'Korte strømkabel'
    ],
    verdict: 'Mini Airfryer 2L er perfekt for single eller par som ønsker helseriktig matlaging uten å ta opp mye kjøkkenplass. Den kompakte størrelsen er både en styrke og svakhet - flott for små porsjoner, men ikke praktisk for familier. Byggekvaliteten er solid for prisen.',
    videoUrls: ['https://www.tiktok.com/@user/video/1234567890'],
    authorId: '2',
    createdAt: '2024-01-10',
    content: 'Denne lille airfryeren har blitt en fast del av mitt daglige kjøkkenrutine. Med sin 2L kapasitet er den ideell for å lage middag til en person eller en lett snack til to. Oppvarmingstiden på bare 3 minutter gjør den perfekt for travle hverdager. Jeg har testet alt fra frossen pommes frites til hjemmelaget kyllingbiter, og resultatet har konsekvent vært sprøtt utenpå og saftig inni. Rengjøringen er enkel takket være non-stick belegget i kurven.'
  },
  {
    id: '3',
    productId: '3',
    slug: 'magnetisk-mobil-lommebok-anmeldelse',
    title: 'Magnetisk lommebok: Stilig og praktisk mobilbeskyttelse',
    summary: 'En elegant kombinasjon av mobilbeskyttelse og lommebok med sterk magnetfeste og premium følelse.',
    rating: 4.5,
    pros: [
      'Solid magnetfeste som holder godt',
      'Ekte skinn med premium følelse',
      'Plass til 3 kort og kontanter',
      'Beskytter både skjerm og bakside',
      'Elegant design som passer alle anledninger'
    ],
    cons: [
      'Tykkere enn vanlige mobildeksler',
      'Kan påvirke trådløs lading',
      'Magneten kan samle metall-partikler'
    ],
    verdict: 'Den magnetiske lommebok-dekselet kombinerer eleganse og funksjonalitet på en imponerende måte. Selv om den legger litt ekstra tykkelse til telefonen, oppveies dette av den praktiske funksjonaliteten og premium følelsen. Et utmerket valg for de som vil redusere antall ting i lommene.',
    videoUrls: ['https://www.youtube.com/watch?v=abc123def456'],
    authorId: '3',
    createdAt: '2024-01-08',
    content: 'Etter måneder med testing av ulike mobilbeskyttelse, skiller denne magnetiske lommeboken seg ut som en vinner. Det ekte skinnet føles premium og aldres pent med bruk. Magnetfestet er imponerende sterkt - jeg har aldri opplevd at lommeboken løsner utilsiktet, selv under aktiv bruk. De tre kortplassene rommer det viktigste jeg trenger: bankkort, førerkort og et kredittkort. Designet er tidløst og profesjonelt, og passer like godt til business-møter som til hverdagsbruk.'
  }
]

// Utility functions for data access
export const getReviewBySlug = (slug: string): Review | undefined => {
  return reviews.find(review => review.slug === slug)
}

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id)
}

export const getAuthorById = (id: string): Author | undefined => {
  return authors.find(author => author.id === id)
}

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(category => category.slug === slug)
}

export const getReviewsByCategory = (categorySlug: string): Review[] => {
  const categoryProducts = products.filter(product => {
    const category = categories.find(cat => cat.name === product.category)
    return category?.slug === categorySlug
  })

  return reviews.filter(review =>
    categoryProducts.some(product => product.id === review.productId)
  )
}

export const getLatestReviews = (limit?: number): Review[] => {
  const sorted = [...reviews].sort((a, b) =>
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )
  return limit ? sorted.slice(0, limit) : sorted
}

export const getRelatedReviews = (currentReviewId: string, productCategory: string, limit = 3): Review[] => {
  const categoryProducts = products.filter(product => product.category === productCategory)
  const relatedReviews = reviews.filter(review =>
    review.id !== currentReviewId &&
    categoryProducts.some(product => product.id === review.productId)
  )

  return relatedReviews.slice(0, limit)
}

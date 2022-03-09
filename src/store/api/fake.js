const products = [
  {
    category: '1',
    id: 'MLA832761830',
    title: 'Azzaro By Night Spray EDP 150 ml',
    description: 'Azzaro By Night Spray EDP 150 ml para hombre.',
    price: 12800,
    image:
      'https://http2.mlstatic.com/D_NQ_NP_735461-MLA48462221617_122021-O.webp',
    isNew: false,
  },
  {
    category: '1',
    id: 'MLA832761831',
    title: 'Antonio Banderas Blue Seduction EDT 100 ml',
    description: 'Antonio Banderas Blue Seduction EDT 100 ml para hombre.',
    price: 14000,
    image:
      'https://http2.mlstatic.com/D_NQ_NP_2X_727640-MLA45374756022_032021-F.webp',
    isNew: false,
  },
  {
    category: '2',
    id: 'MLA832761832',
    title: 'Cartera bandolera PM',
    description:
      'Cartera bandolera PM Complementos  Morral  diseño liso de cuero sintético',
    price: 6500,
    image:
      'https://http2.mlstatic.com/D_NQ_NP_979391-MLA48395071215_112021-O.webp',
    isNew: false,
  },
];

export const requestProducts = async category => {
  const filtered = products.filter(p => p.category === category);
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(filtered);
    }, 2000);
  });
};

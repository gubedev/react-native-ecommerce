const products = [
  {
    category: '1',
    id: 'MLA832761830',
    title: 'Repetidor TP-Link TL-WA850RE',
    description:
      'Señal amplificada.El repetidor wifi TP-Link TL-WA850RE te va a permitir disfrutar de la conexión en una mayor cantidad de espacios. Este aparato extiende el rango de la señal para que puedas disfrutar de todos los equipos electrónicos de tu hogar o tu oficina sin inconvenientes.',
    price: 2175,
    image:
      'https://http2.mlstatic.com/D_NQ_NP_668117-MLA31786420833_082019-O.webp',
    isNew: false,
  },
  {
    category: '1',
    id: 'MLA832761831',
    title: 'Repetidor TP-Link TL-WA850RE',
    description:
      'Señal amplificada.El repetidor wifi TP-Link TL-WA850RE te va a permitir disfrutar de la conexión en una mayor cantidad de espacios. Este aparato extiende el rango de la señal para que puedas disfrutar de todos los equipos electrónicos de tu hogar o tu oficina sin inconvenientes.',
    price: 2175,
    image:
      'https://http2.mlstatic.com/D_NQ_NP_668117-MLA31786420833_082019-O.webp',
    isNew: false,
  },
  {
    category: '2',
    id: 'MLA832761832',
    title: 'Repetidor TP-Link TL-WA850RE',
    description:
      'Señal amplificada.El repetidor wifi TP-Link TL-WA850RE te va a permitir disfrutar de la conexión en una mayor cantidad de espacios. Este aparato extiende el rango de la señal para que puedas disfrutar de todos los equipos electrónicos de tu hogar o tu oficina sin inconvenientes.',
    price: 2175,
    image:
      'https://http2.mlstatic.com/D_NQ_NP_668117-MLA31786420833_082019-O.webp',
    isNew: false,
  },
  {
    category: '1',
    id: 'MLA832761833',
    title: 'Repetidor TP-Link TL-WA850RE',
    description:
      'Señal amplificada.El repetidor wifi TP-Link TL-WA850RE te va a permitir disfrutar de la conexión en una mayor cantidad de espacios. Este aparato extiende el rango de la señal para que puedas disfrutar de todos los equipos electrónicos de tu hogar o tu oficina sin inconvenientes.',
    price: 2175,
    image:
      'https://http2.mlstatic.com/D_NQ_NP_668117-MLA31786420833_082019-O.webp',
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

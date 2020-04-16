import { Product } from './product';
/*
  id: number ;
  category_id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  link: string;
 */
export const PRODUCTS: Product[] = [
  //// Flowers
  { id: 10,
    category_id: 1,
    name: 'Geo Fiore',
    delivery_time: 60,
    delivery_cost: 600,
    min_order : 4000,
    rating: 5,
    description: 'Магазин цветов',
    image: 'https://thumb.chocofood.kz/QyaVXqbnqspEf2n7xR3eOyuLSzE=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      'Geo-Fiore.jpg'
  },
  { id: 11,
    category_id: 1,
    name: 'Rouge',
    delivery_time: 60,
    delivery_cost: 600,
    min_order : 4000,
    rating: 5,
    description: 'Магазин цветов',
    image: 'https://thumb.chocofood.kz/RastzxOyP_UpROENYvVt8MhRjFE=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      'Rouge.jpg'
  },
  { id: 12,
    category_id: 1,
    name: 'Zakazbuketov',
    delivery_time: 60,
    delivery_cost: 600,
    min_order : 4000,
    rating: 5,
    description: 'Магазин цветов',
    image: 'https://thumb.chocofood.kz/p1n2QENKZBxjhT75xP1j1GSHQIk=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      'Zakazbuketov.jpg'
  },
  { id: 13,
    category_id: 1,
    name: 'Цветок Короля Артура',
    delivery_time: 60,
    delivery_cost: 600,
    min_order : 4000,
    rating: 5,
    description: 'Магазин цветов',
    image: 'https://thumb.chocofood.kz/rw7Z4T_WH9UFW8zwFUQKLsGu1MU=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      '1_utr4aYU.jpg'
  },
  { id: 14,
    category_id: 1,
    name: 'Rafale',
    delivery_time: 60,
    delivery_cost: 600,
    min_order : 4000,
    rating: 5,
    description: 'Магазин цветов',
    image: 'https://thumb.chocofood.kz/4gThjNco-cUYjqB6K7EE2JO9BRo=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      'Rafale.jpg'
  },
  { id: 15,
    category_id: 1,
    name: 'Империя цветов',
    delivery_time: 60,
    delivery_cost: 600,
    min_order : 4000,
    rating: 5,
    description: 'Магазин цветов',
    image: 'https://thumb.chocofood.kz/VEFUbbDBiwRNACtKdT7rn2zrCbs=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      '1_GZKDpZp.jpg'
  },
  { id: 16,
    category_id: 1,
    name: 'Счастье Цветочный Магазин',
    delivery_time: 60,
    delivery_cost: 600,
    min_order : 4000,
    rating: 5,
    description: 'Магазин цветов',
    image: 'https://thumb.chocofood.kz/N_6HZzEkLXy2ELqeFk5TR6TeWBU=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      '1_NHU2naQ.jpg'
  },
  { id: 17,
    category_id: 1,
    name: 'Koktem',
    delivery_time: 60,
    delivery_cost: 600,
    min_order : 4000,
    rating: 5,
    description: 'Магазин цветов',
    image: 'https://thumb.chocofood.kz/FRmW-efN56r33mhJZo-Qpr5XPq8=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      'Logo-1080-1080_c9cXm7a.jpg'
  },
  { id: 18,
    category_id: 1,
    name: 'florigi.com',
    delivery_time: 60,
    delivery_cost: 600,
    min_order : 3825,
    rating: 5,
    description: 'Магазин цветов',
    image: 'https://thumb.chocofood.kz/W5DhamDYZDVl7Hw9kP3Nlegdiwc=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      '1_fnscGWP.jpg'
  },
  { id: 19,
    category_id: 1,
    name: 'Rosalie Flowers',
    delivery_time: 60,
    delivery_cost: 600,
    min_order : 4000,
    rating: 4.5,
    description: 'Магазин цветов',
    image: 'https://thumb.chocofood.kz/OL2dX4_US4h6zFVsEbcll21g5Mk=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      'logo_o8xa7yB.jpg'
  },
  //// Pizza
  { id: 20,
    category_id: 2,
    name: 'Чибо Сано',
    delivery_time: 90,
    delivery_cost: 400,
    min_order : 0,
    rating: 5,
    description: 'Пиццерия',
    image: 'https://thumb.chocofood.kz/-1dcyP5-NwxsMkrINCa905S35Wo=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      'Chibo-sano_Y5dBeXx.jpg'
  },
  { id: 21,
    category_id: 2,
    name: 'Pomodoro Royal',
    delivery_time: 60,
    delivery_cost: 600,
    min_order : 2500,
    rating: 5,
    description: 'Ресторан',
    image: 'https://thumb.chocofood.kz/X5Lf6Nzqy2_lX_CrsLMV7G93BUE=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      'pomodoro.jpg'
  },
  { id: 22,
    category_id: 2,
    name: 'Sabirkin Kitchen',
    delivery_time: 60,
    delivery_cost: 600,
    min_order : 2500,
    rating: 5,
    description: 'Кафе',
    image: 'https://thumb.chocofood.kz/Kb6qfx8B3yumfE_2t7cN7dGhMYY=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      'logo_VPS6b4G.jpg'
  },
  { id: 23,
    category_id: 2,
    name: 'Dolcetto',
    delivery_time: 60,
    delivery_cost: 600,
    min_order : 2500,
    rating: 5,
    description: 'Ресторан',
    image: 'https://thumb.chocofood.kz/Wvto3yGFc40QGntkTJfoFOuNd08=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      'dolcetto.jpg'
  },
  { id: 24,
    category_id: 2,
    name: 'ALFA',
    delivery_time: 60,
    delivery_cost: 600,
    min_order : 2500,
    rating: 5,
    description: 'Ресторан',
    image: 'https://thumb.chocofood.kz/At979eGHgTzr_5pugzFI4WUo26s=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/alfa.jpg'
  },
  { id: 25,
    category_id: 2,
    name: 'Центр плова OD',
    delivery_time: 60,
    delivery_cost: 600,
    min_order : 3000,
    rating: 5,
    description: 'Кафе',
    image: 'https://thumb.chocofood.kz/4E992XnvM9gqwsWRtYMXXDNXUUk=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      'Centr_Plova_tEWbSee.jpeg'
  },
  { id: 26,
    category_id: 2,
    name: 'Domingo',
    delivery_time: 60,
    delivery_cost: 600,
    min_order : 2500,
    rating: 5,
    description: 'Служба доставки',
    image: 'https://thumb.chocofood.kz/MzP2nrxhCPXS47F3zo3FUQxE5SU=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      'WhatsApp_Image_2020-01-30_at_13.43.22.jpeg'
  },
  { id: 27,
    category_id: 2,
    name: 'Sadu',
    delivery_time: 60,
    delivery_cost: 600,
    min_order : 2000,
    rating: 5,
    description: 'Ресторан',
    image: 'https://thumb.chocofood.kz/cHgDa4ljypB49j2AzqDU70YFHAo=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      'Sadu_yLX219y.jpg'
  },
  { id: 28,
    category_id: 2,
    name: 'La Pizza',
    delivery_time: 60,
    delivery_cost: 600,
    min_order : 2500,
    rating: 5,
    description: 'Кафе',
    image: 'https://thumb.chocofood.kz/g6BaKvNxIeyMs0eV5HeK-Vp5n8g=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      'la-pizza_T7qjaNz.jpg'
  },
  { id: 29,
    category_id: 2,
    name: 'Chad',
    delivery_time: 60,
    delivery_cost: 600,
    min_order : 2500,
    rating: 5,
    description: 'Кафе',
    image: 'https://thumb.chocofood.kz/npinhyU2R294CNQaZDcvQqRJN1o=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/chad.jpg'
  },
  //// Sushi
  { id: 30,
    category_id: 3,
    name: 'Olivier Restaurant & Bar',
    delivery_time: 60,
    delivery_cost: 0,
    min_order : 2500,
    rating: 4.5,
    description: 'Пиццерия',
    image: 'https://thumb.chocofood.kz/_LzYftXas9TocyYVL-lUPq3knps=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      'olivier.jpg'
  },
  { id: 31,
    category_id: 3,
    name: 'Hokku Sushi',
    delivery_time: 60,
    delivery_cost: 600,
    min_order : 2500,
    rating: 5,
    description: 'Суши-бар',
    image: 'https://thumb.chocofood.kz/IU4CbXyaZBqOPCQBZ7vnAHH5crA=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      'Hokku-sushi.jpg'
  },
  { id: 32,
    category_id: 3,
    name: 'Chepil',
    delivery_time: 60,
    delivery_cost: 600,
    min_order : 2500,
    rating: 5,
    description: 'Кафе',
    image: 'https://thumb.chocofood.kz/df4yAgbBPXe6yIkQY6n7U7DsDFk=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      'logo_7fMflYf.jpg'
  },
  { id: 33,
    category_id: 3,
    name: 'Sushi & Roll\'s',
    delivery_time: 60,
    delivery_cost: 600,
    min_order : 2500,
    rating: 5,
    description: 'Суши-бар',
    image: 'https://thumb.chocofood.kz/jpAn0A_Xi1uex1Kip-MS9XPi5KQ=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      'SushiRolls_sd5uJTs.jpg'
  },
  { id: 34,
    category_id: 3,
    name: 'Beta Pizza',
    delivery_time: 90,
    delivery_cost: 600,
    min_order : 2500,
    rating: 5,
    description: 'Служба доставки',
    image: 'https://thumb.chocofood.kz/onxjmcPOCkOY-3HYAGCW-uOPJrc=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      'Beta-Pizza.jpg'
  },
  { id: 35,
    category_id: 3,
    name: 'Тануки',
    delivery_time: 60,
    delivery_cost: 600,
    min_order : 2500,
    rating: 4.5,
    description: 'Ресторан',
    image: 'https://thumb.chocofood.kz/kxVu0qZjDmLeo6tEWumYENQYAqE=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      '1_ttbrUgr.jpg'
  },
  { id: 36,
    category_id: 3,
    name: 'Takara Sushi Bar',
    delivery_time: 60,
    delivery_cost: 600,
    min_order : 2500,
    rating: 4.5,
    description: 'Ресторан',
    image: 'https://thumb.chocofood.kz/LzVOIIxI6GgBi-QdYJ9fg5LJ8Qc=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      'Takara-Sushi-Bar_WqW8r8O.jpg'
  },
  { id: 37,
    category_id: 3,
    name: 'Sushiwok',
    delivery_time: 60,
    delivery_cost: 0,
    min_order : 2500,
    rating: 4.5,
    description: 'Служба доставки',
    image: 'https://thumb.chocofood.kz/_GXpn1DL_qGsYnjl_ra3riqg7ow=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      'Sushiwok_BoAzR88.jpg'
  },
  { id: 38,
    category_id: 3,
    name: 'Алые Паруса',
    delivery_time: 180,
    delivery_cost: 600,
    min_order : 3000,
    rating: 4.5,
    description: 'Суши-бар',
    image: 'https://thumb.chocofood.kz/3OGdKAAIgHNu6JsQZRzttxS7CbE=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      '1_033p0ZL.jpg'
  },
  { id: 39,
    category_id: 3,
    name: 'Mio Pizza',
    delivery_time: 60,
    delivery_cost: 600,
    min_order : 2500,
    rating: 4.5,
    description: 'Служба доставки',
    image: 'https://thumb.chocofood.kz/V4XGjdPWqLpDFU0V7c5lrXnZPZo=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      'MIO-PIZZA.jpg'
  },
  //// Burgers
  { id: 40,
    category_id: 4,
    name: 'Istanbul Asia Park',
    delivery_time: 60,
    delivery_cost: 600,
    min_order : 2500,
    rating: 5,
    description: 'Кафе',
    image: 'https://thumb.chocofood.kz/EyQ9Xe8s7dyX8LP2uOI9OqgpreQ=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      'Istanbul_vLl40Qi.jpg'
  },
  { id: 41,
    category_id: 4,
    name: 'Pizza Italiano',
    delivery_time: 60,
    delivery_cost: 600,
    min_order : 2500,
    rating: 5,
    description: 'Пиццерия',
    image: 'https://thumb.chocofood.kz/wUW0y-hv78RoMf3QWCIu8livhks=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      'Pizza-Italiano_jbJYIVH.jpg'
  },
  { id: 42,
    category_id: 4,
    name: 'Barstol & Kok',
    delivery_time: 60,
    delivery_cost: 600,
    min_order : 2500,
    rating: 5,
    description: 'Ресторан',
    image: 'https://thumb.chocofood.kz/3yd_EFu1sYpyVaZSmPTKaj26psQ=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      '1_3V8rt1C.jpg'
  },
  { id: 43,
    category_id: 4,
    name: 'Donna Pizza',
    delivery_time: 60,
    delivery_cost: 600,
    min_order : 2500,
    rating: 5,
    description: 'Пиццерия',
    image: 'https://thumb.chocofood.kz/p0tA6SSXu6FvDP80NpjKUDMcKJw=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      'Donna-Pizza.jpg'
  },
  { id: 44,
    category_id: 4,
    name: 'Хмельная Пражечка',
    delivery_time: 60,
    delivery_cost: 600,
    min_order : 3500,
    rating: 5,
    description: 'Кафе',
    image: 'https://thumb.chocofood.kz/9wo8azCG3VZgmt_rzPDpK5dvdxc=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      'Hmelnaya-prazhecka.jpg'
  },
  { id: 45,
    category_id: 4,
    name: 'Gippo',
    delivery_time: 60,
    delivery_cost: 0,
    min_order : 1600,
    rating: 4.5,
    description: 'Фаст-фуд',
    image: 'https://thumb.chocofood.kz/DBsshjlTBwlCG3XONgv6K2xSsNc=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      'Gippo.jpg'
  },
  { id: 46,
    category_id: 4,
    name: 'Краснодарский парень',
    delivery_time: 60,
    delivery_cost: 600,
    min_order : 2500,
    rating: 4.5,
    description: 'Ресторан',
    image: 'https://thumb.chocofood.kz/vvGvKMTh-fcN2wZXftXlRT7DBzI=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      'LOGO_NrExyCK.jpg'
  },
  { id: 47,
    category_id: 4,
    name: 'KFC',
    delivery_time: 60,
    delivery_cost: 500,
    min_order : 0,
    rating: 4.5,
    description: 'Фаст-фуд',
    image: 'https://thumb.chocofood.kz/hPnmQ8vroMDl1GVrUhVF0kQQ5O4=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      'KFCLOG_rk8mGDt.jpg'
  },
  { id: 48,
    category_id: 4,
    name: 'Double Coffee',
    delivery_time: 60,
    delivery_cost: 600,
    min_order : 2500,
    rating: 4.5,
    description: 'Ресторан',
    image: 'https://thumb.chocofood.kz/gFlmZ1f4SngXPFUEt2eN5qnM0_k=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      '123_FTm4lpg.png'
  },
  { id: 49,
    category_id: 4,
    name: 'Coco',
    delivery_time: 90,
    delivery_cost: 600,
    min_order : 2500,
    rating: 4.5,
    description: 'Кафе',
    image: 'https://thumb.chocofood.kz/qWU9HDtN26hF6-STrWsMNH69K-g=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/Coco.jpg'
  },
  //// Dessert
  { id: 50,
    category_id: 5,
    name: 'Ciao Pizza & mamma mia',
    delivery_time: 60,
    delivery_cost: 600,
    min_order : 2500,
    rating: 5,
    description: 'Пиццерия',
    image: 'https://thumb.chocofood.kz/nObbjgwwMPFpilTh1JxIkKOKNG8=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      'Ciao-pizza--mamma-mia_ssUGu4x.jpg'
  },
  { id: 51,
    category_id: 5,
    name: 'Куликовский',
    delivery_time: 60,
    delivery_cost: 600,
    min_order : 3000,
    rating: 5,
    description: 'Кондитерская',
    image: 'https://thumb.chocofood.kz/cFl00Hj58gmBgxCL75u3QcSCWXo=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      'kulik_I55IxX0.jpg'
  },
  { id: 52,
    category_id: 5,
    name: 'New Bisquit',
    delivery_time: 60,
    delivery_cost: 600,
    min_order : 2500,
    rating: 5,
    description: 'Ресторан',
    image: 'https://thumb.chocofood.kz/j0r3qjZJd_FoFkkZ39u2810Yuhw=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      'bisquit.jpg'
  },
  { id: 53,
    category_id: 5,
    name: 'Сладари',
    delivery_time: 60,
    delivery_cost: 600,
    min_order : 2000,
    rating: 5,
    description: 'Кондитерская',
    image: 'https://thumb.chocofood.kz/kQIL7logIa8sOVTZFHX9L6fjy1o=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      'sladari_iOl2oI6.png'
  },
  { id: 54,
    category_id: 5,
    name: 'Малина Mix',
    delivery_time: 60,
    delivery_cost: 600,
    min_order : 2500,
    rating: 4.5,
    description: 'Ресторан',
    image: 'https://thumb.chocofood.kz/z3wbeD2jOg5FQBZTTRnGOAOKAmk=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      'malinamix.jpg'
  },
  { id: 55,
    category_id: 5,
    name: 'У Афанасича',
    delivery_time: 60,
    delivery_cost: 600,
    min_order : 3500,
    rating: 4.5,
    description: 'Ресторан',
    image: 'https://thumb.chocofood.kz/8xQ1LmLQC8wcXVoCRi74LVC5-Ow=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      '1_eeFxbt7.jpg'
  },
  { id: 56,
    category_id: 5,
    name: 'Grand Cafe Delicat\'L',
    delivery_time: 90,
    delivery_cost: 600,
    min_order : 2500,
    rating: 4.5,
    description: 'Ресторан',
    image: 'https://thumb.chocofood.kz/uzQPO5C23Fum03egwirrxSkZWyc=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      'delicat.jpg'
  },
  { id: 57,
    category_id: 5,
    name: 'Turandot',
    delivery_time: 90,
    delivery_cost: 400,
    min_order : 3500,
    rating: 4.5,
    description: 'Ресторан',
    image: 'https://thumb.chocofood.kz/HnWbwZvR1B1qkaVR8fUrJ2awJ04=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      'Turandot_7CtHu5M.jpg'
  },
  { id: 58,
    category_id: 5,
    name: 'Blin To Day',
    delivery_time: 90,
    delivery_cost: 600,
    min_order : 2500,
    rating: 4.5,
    description: 'Кафе',
    image: 'https://thumb.chocofood.kz/JtSB9mW5s9PQaJFNbVgWq9QqV68=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/blin.jpg'
  },
  { id: 59,
    category_id: 5,
    name: 'Куропатка',
    delivery_time: 90,
    delivery_cost: 600,
    min_order : 1600,
    rating: 4.5,
    description: 'Фаст-фуд',
    image: 'https://thumb.chocofood.kz/GsGx7IUjRi7IBVA2fM2W8Fx5kew=/140x140/smart/https://chocofood.kz/media/site/restaurants/logo/' +
      'kuropatka.jpg'
  }





];

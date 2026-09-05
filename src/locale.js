import { ref, computed } from 'vue'

export const currentCountry = ref('MX')

const setCountry = (c) => {
  if (!c) return
  const code = c.toUpperCase()
  if (locale[code]) {
    currentCountry.value = code
  } else {
    currentCountry.value = 'MX'
  }
}

const fetchCountry = async () => {
  try {
    const response = await fetch('https://api.country.is')
    const data = await response.json()
    if (data && data.country) {
      setCountry(data.country)
    }
  } catch (err) {
    console.error('Failed to detect country', err)
    setCountry('MX')
  }
}

export const locale = {
  MX: {
    // Envelope
    youAreInvited: '¡Estás invitado!',

    // DesktopGuard
    desktopGuardTitle: 'Priscila & Daniel',
    desktopGuardSubtitle: '20 · XI · 2026',
    desktopGuardMessage: 'Esta invitación fue diseñada<br />con mucho cariño para<br /><strong>teléfono móvil</strong>',
    desktopGuardHint: 'Por favor ábrela desde tu celular',

    // Header
    weGetMarried: '¡Nos casamos!',
    month: 'NOVIEMBRE',
    dayOfWeek: 'VIERNES',
    dayNumber: '20',
    time: '18:00h.',
    year: '2026',

    // ComeTo
    comeToMessage1: 'Tras más de siete años compartiendo momentos inolvidables, te invitamos a ser parte de un momento único en nuestras vidas.',
    comeToMessage2: '¡Tu presencia hará aún más especial este día que guardaremos en nuestros corazones para siempre!',

    // Place
    placeTitle: 'Lugar de celebración',
    placeName: 'Quinta de Anza',
    placeAddressLine1: 'Pedro Villegas Ramírez 2, 83070',
    placeAddressLine2: 'Col del Razo, 83070 Hermosillo, Son',
    howToGetThere: 'Cómo llegar',

    // Schedule
    scheduleTitle: 'Itinerario',
    ceremonyTitle: 'Ceremonia Religiosa',
    ceremonyDesc: 'En Capilla del Carmen',
    ceremonyTime: '18:00',
    cocktailTitle: 'Coctel',
    cocktailDesc: 'En Quinta de Anza',
    cocktailTime: '19:00',
    banquetTitle: 'Banquete',
    banquetTime: '21:00',
    firstDanceTitle: 'Baile Nupcial',
    firstDanceTime: '21:30',
    partyTitle: '¡Fiesta!',
    partyTime: '22:00',

    // Info / QA
    infoTitle: 'Más detalles',
    dressCodeQ: '¿Cómo hay que ir vestido?',
    dressCodeA: 'Nos encantaría ver a nuestra familia y amigos vestidos elegantes. El código de vestimenta es <strong class="text-black">formal</strong>.',
    kidsQ: '¿Puedo traer a mis hijos?',
    kidsA: 'Este día será una oportunidad para que los adultos se diviertan como niños. Por eso, hemos decidido que sea una celebración <strong class="text-black">solo para adultos</strong>. ¡Gracias por tu comprensión!',
    rsvpDeadlineQ: '¿Con cuánta antelación deberíamos confirmar nuestra asistencia?',
    rsvpDeadlineA: 'Lo ideal sería que nos confirmes lo antes posible para poder planear la mejor fiesta, pero si necesitas tiempo, te pedimos que nos lo comuniques antes del <strong class="text-black">05 de Octubre.</strong>',
    parkingQ: 'Estacionamiento y transporte',
    parkingA: 'Recomendamos usar aplicaciones de transporte para acudir al evento ya que el <strong class="text-black">estacionamiento es limitado</strong>',
    outOfTownQ: 'Recomendaciones para foráneos',
    outOfTownA: 'En caso de venir de fuera recomendamos las siguientes opciones de hospedaje:',
    hotels: ['Hotel Lucerna', 'Araiza Hermosillo', 'Hotel Colonial', 'Hotel Suites Kino'],
    barsIntro: 'Las siguientes opciones de bares:',
    bars: ['Buquibichi', 'Bombarderos', 'La ruina', 'London pub'],
    tacosIntro: 'Las siguientes recomendaciones aprobadas de tacos:',
    tacos: ['Tacos del Sam', 'Tacos del Chava', 'Tacos del Chambarete', 'Tacos de Arturo'],
    breakfastIntro: 'Y las siguientes opciones de desayuno:',
    breakfast: ['Gatogordo', 'El diputado y la Meche', 'Onza', 'Mulo'],

    // Form
    formTitle: 'Confírmanos tu asistencia',
    nameLabel: 'Nombre',
    cannotAttend: 'No podré asistir',
    howManyPeople: '¿Cuántas personas son?',
    personJustMe: 'Solo yo',
    personTwo: 'Seremos 2',
    mustHaveSong: '¡Una canción que no puede faltar!',
    anythingElse: '¿Quieres decirnos algo más?',
    sendButton: 'Enviar',
    thanksFormSubmitted: '¡Gracias por enviarnos tu información!',
    whatsappNotAttending: '¡Hola! Lamentablemente no podré asistir a la boda 😢',
    whatsappAttending: '¡Hola! Confirmo mi asistencia para la boda 💒✨',
    whatsappName: 'Nombre:',
    whatsappAttendees: 'Asistentes:',
    whatsappSong: 'Canción:',
    whatsappNote: 'Nota:',

    // Gift
    giftTitle: 'Regalo de bodas',
    giftMessage: 'Lo más importante para nosotros es compartir este día tan especial contigo, pero si quieres tener un detalle:',
    giftThanks: '¡Muchas gracias!',
    registryLabel: 'Mesa de regalos',
    liverpoolButton: 'Liverpool',
    amazonLabel: 'Gift card Amazon',
    amazonButton: 'Amazon',
    copiedText: '¡Copiado!',
    cashNote: '¿Un obsequio en efectivo entregado con todo el corazón y los mejores deseos? ¡Sí, también lo aceptamos!',

    // Last Message
    weWaitForYou: '¡Te esperamos!',
    thanksForSharing: '¡Gracias por haberlo compartido con nosotros!',
    daysLeftText: (days) => `Quedan ${days} días`,
    agoText: (partsStr) => `Hace ${partsStr}`,
    yearSingular: 'año',
    yearPlural: 'años',
    monthSingular: 'mes',
    monthPlural: 'meses',
    daySingular: 'día',
    dayPlural: 'días',
  },

  US: {
    // Envelope
    youAreInvited: "You're invited!",

    // DesktopGuard
    desktopGuardTitle: 'Priscila & Daniel',
    desktopGuardSubtitle: '20 · XI · 2026',
    desktopGuardMessage: 'This invitation was lovingly<br />designed for<br /><strong>mobile devices</strong>',
    desktopGuardHint: 'Please open it on your mobile phone',

    // Header
    weGetMarried: 'We are getting married!',
    month: 'NOVEMBER',
    dayOfWeek: 'FRIDAY',
    dayNumber: '20',
    time: '6:00 PM',
    year: '2026',

    // ComeTo
    comeToMessage1: 'After more than seven years of sharing unforgettable moments, we invite you to be part of a unique moment in our lives.',
    comeToMessage2: 'Your presence will make this day that we will cherish forever in our hearts even more special!',

    // Place
    placeTitle: 'Wedding Venue',
    placeName: 'Quinta de Anza',
    placeAddressLine1: 'Pedro Villegas Ramírez 2, 83070',
    placeAddressLine2: 'Col del Razo, 83070 Hermosillo, Son',
    howToGetThere: 'Get Directions',

    // Schedule
    scheduleTitle: 'Itinerary',
    ceremonyTitle: 'Religious Ceremony',
    ceremonyDesc: 'At Capilla del Carmen',
    ceremonyTime: '6:00 PM',
    cocktailTitle: 'Cocktail Hour',
    cocktailDesc: 'At Quinta de Anza',
    cocktailTime: '7:00 PM',
    banquetTitle: 'Reception & Dinner',
    banquetTime: '9:00 PM',
    firstDanceTitle: 'First Dance',
    firstDanceTime: '9:30 PM',
    partyTitle: 'Party Time!',
    partyTime: '10:00 PM',

    // Info / QA
    infoTitle: 'More Details',
    dressCodeQ: 'What is the dress code?',
    dressCodeA: 'We would love to see our family and friends dressed elegantly. The dress code is <strong class="text-black">formal</strong>.',
    kidsQ: 'Can I bring my children?',
    kidsA: 'This day will be an opportunity for adults to have fun like kids. Therefore, we have decided on an <strong class="text-black">adults-only</strong> celebration. Thank you for understanding!',
    rsvpDeadlineQ: 'How far in advance should we confirm our attendance?',
    rsvpDeadlineA: 'Ideally, please confirm as soon as possible so we can plan the best celebration, but if you need time, please let us know before <strong class="text-black">October 20th.</strong>',
    parkingQ: 'Parking & Transportation',
    parkingA: 'We recommend using rideshare apps to get to the event as <strong class="text-black">parking space is limited</strong>',
    outOfTownQ: 'Recommendations for Out-of-Town Guests',
    outOfTownA: 'If traveling from out of town, we recommend the following lodging options:',
    hotels: ['Hotel Lucerna', 'Araiza Hermosillo', 'Hotel Colonial', 'Hotel Suites Kino'],
    barsIntro: 'The following recommended bars:',
    bars: ['Buquibichi', 'Bombarderos', 'La ruina', 'London pub'],
    tacosIntro: 'The following approved taco spots:',
    tacos: ['Tacos del Sam', 'Tacos del Chava', 'Tacos del Chambarete', 'Tacos de Arturo'],
    breakfastIntro: 'And the following breakfast options:',
    breakfast: ['Gatogordo', 'El diputado y la Meche', 'Onza', 'Mulo'],

    // Form
    formTitle: 'RSVP / Confirm Attendance',
    nameLabel: 'Full Name',
    cannotAttend: "I won't be able to attend",
    howManyPeople: 'How many people?',
    personJustMe: 'Just me',
    personTwo: '2 guests',
    mustHaveSong: "A song that can't be missed!",
    anythingElse: 'Would you like to tell us anything else?',
    sendButton: 'Submit',
    thanksFormSubmitted: 'Thank you for submitting your response!',
    whatsappNotAttending: "Hi! Regrettably, I won't be able to attend the wedding 😢",
    whatsappAttending: 'Hi! Confirming my attendance for the wedding 💒✨',
    whatsappName: 'Name:',
    whatsappAttendees: 'Guests:',
    whatsappSong: 'Song:',
    whatsappNote: 'Note:',

    // Gift
    giftTitle: 'Wedding Registry',
    giftMessage: 'The most important thing for us is sharing this special day with you, but if you wish to give a gift:',
    giftThanks: 'Thank you so much!',
    registryLabel: 'Gift Registry',
    liverpoolButton: 'Liverpool',
    amazonLabel: 'Amazon Gift Card',
    amazonButton: 'Amazon',
    copiedText: 'Copied!',
    cashNote: 'A cash gift delivered with all the heart and best wishes? Yes, we accept that too!',

    // Last Message
    weWaitForYou: 'We look forward to seeing you!',
    thanksForSharing: 'Thank you for sharing this special day with us!',
    daysLeftText: (days) => `${days} days to go`,
    agoText: (partsStr) => `${partsStr} ago`,
    yearSingular: 'year',
    yearPlural: 'years',
    monthSingular: 'month',
    monthPlural: 'months',
    daySingular: 'day',
    dayPlural: 'days',
  },
}

export const t = computed(() => {
  const code = (currentCountry.value || 'MX').toUpperCase()
  // return locale["US"]
  return locale['ES'] || locale['MX']
})

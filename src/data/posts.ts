export interface Post {
  slug:     string;
  titulo:   string;
  fecha:    string;
  fechaISO: string;
  tipo:     'articulo' | 'video';
  extracto: string;
  temaColor: string; // CSS color for the card header gradient
  contenido: string; // HTML string
}

export const posts: Post[] = [
  {
    slug:      'lo-que-nadie-te-dice-sobre-el-duelo',
    titulo:    'Lo que nadie te dice sobre el duelo',
    fecha:     '12 mayo 2026',
    fechaISO:  '2026-05-12',
    tipo:      'articulo',
    temaColor: 'rgba(163,21,21,0.15)',
    extracto:  'El duelo no tiene manual. No hay cinco fases perfectas ni un momento exacto en el que "se supera". Hay días, y luego más días.',
    contenido: `
<p>Cuando se fue Kike, todo el mundo me dijo lo mismo. Con distintas palabras, pero el mismo mensaje: <em>ya pasará</em>. Como si el dolor fuese una tormenta de verano, de esas que llegan deprisa y se marchan dejando el suelo mojado y el cielo limpio. Como si bastara con esperar bajo el porche y, cuando dejase de llover, pudieras salir y seguir donde lo habías dejado.</p>

<p>Nadie me dijo que hay duelos que no pasan. Que se quedan. Que aprenden a vivir contigo, a ocupar el hueco que dejó la persona que perdiste, y que con el tiempo no desaparecen sino que se vuelven más silenciosos, más domésticos, más tuyos.</p>

<p>Tenía dieciséis años cuando murió mi tío Kike. Dieciséis años y una libreta verde donde apuntaba todo lo que no sabía decirle a nadie. Y lo que escribí en esa libreta durante los meses siguientes no fue rabia ni negación ni ninguna de las fases que te explican en los libros de psicología. Fue, sobre todo, una confusión enorme. Una sensación de que el mundo seguía girando a una velocidad que yo no podía seguir.</p>

<h2>Las fases que no te cuentan</h2>

<p>Hay un modelo famoso, el de Elisabeth Kübler-Ross, que habla de cinco etapas del duelo: negación, ira, negociación, depresión, aceptación. Lo habrás leído en algún sitio. Quizás incluso te lo hayan dicho cuando has perdido a alguien. Y puede que hayas intentado encajar tu dolor en esa secuencia, buscar en qué fase estás, medir tu progreso como si el duelo fuese un proyecto con hitos y plazos.</p>

<p>Yo lo intenté. Busqué mi ira. Busqué mi negación. Intenté nombrar lo que sentía con esas palabras prestadas. Y lo único que conseguí fue sentirme más solo, porque lo que yo vivía no encajaba en ningún esquema. Había días en que me levantaba bien, con una energía que me sorprendía, y había días en que me despertaba con el peso de su ausencia tan físico que me costaba respirar. No seguía ningún orden. No tenía ningún sentido.</p>

<p>Lo que nadie te dice es que el duelo no es lineal. No avanzas en fases sucesivas hacia una aceptación final, como si fuese un videojuego con niveles. El duelo es más parecido a un mar: hay días de calma y días de tormenta, y no puedes predecir cuál te va a tocar al levantarte. Y lo más difícil de aceptar es que eso no significa que estés haciendo algo mal.</p>

<h2>El día que llegó sin avisar</h2>

<p>Me acuerdo de un miércoles de noviembre, cinco meses después de que muriera Kike. Yo estaba en clase de historia, mirando por la ventana, y de repente me acordé de una tarde en el garaje de su casa, mirando cómo le cambiaba el aceite a la moto. No fue un recuerdo triste. Fue un recuerdo completo, con el olor a aceite quemado y el ruido de las herramientas y su voz explicándome algo que yo no entendía del todo. Y me puse a llorar en silencio, con la cabeza agachada, mientras el profesor hablaba de la Revolución Francesa.</p>

<p>Eso es el duelo. No es llorar en los funerales. Es llorar en clase de historia por un recuerdo que llega solo, sin permiso, y que tiene tanto de hermoso como de doloroso. Es encontrar en el bolsillo de una chaqueta vieja un papel con su letra y quedarte paralizado en medio del pasillo. Es escuchar una canción en la radio y no poder terminar de decir quién la ponía siempre.</p>

<p>Nadie te advierte de eso. Nadie te dice que los recuerdos buenos duelen tanto como los malos, a veces más. Porque cuando recuerdas algo malo, lo que sientes es coherente: pierdes algo que ya era doloroso. Pero cuando recuerdas algo bueno, lo que pierdes es exactamente aquello que más querías. Y eso tiene una textura distinta, más afilada.</p>

<h2>Lo que sí me ayudó</h2>

<p>No voy a mentir diciendo que encontré alguna fórmula mágica. No la encontré. Pero hubo cosas que sí me ayudaron, aunque en ese momento no supiera explicar por qué.</p>

<p>Lo primero fue escribir. No con la intención de hacer un libro ni de contar nada a nadie. Simplemente escribir lo que sentía, sin filtro, en esa libreta verde que llevaba conmigo a todas partes. Hay algo en poner las cosas por escrito que las hace más manejables. Como si al darles forma en palabras, el dolor dejara de ser un ruido sordo y se convirtiera en algo que puedes mirar. No que desaparezca. Pero sí que te permite verlo desde fuera, aunque sea un momento.</p>

<p>Lo segundo fue dejar de intentar "estar bien". Hay una presión social enorme alrededor del duelo. La gente quiere ver que avanzas, que superas, que vuelves a ser el de antes. Y esa presión, aunque bien intencionada, es agotadora. El día que dejé de intentar cumplir las expectativas de nadie y me permití estar exactamente como estaba, sin disculparme por ello, algo cambió. No mejoré de repente. Pero dejé de gastar energía en fingir que estaba mejorando.</p>

<p>Lo tercero fue hablar. No de manera terapéutica ni ordenada. Solo hablar. Con mi madre. Con algunos amigos que sabían escuchar sin intentar solucionar nada. Hay algo muy valioso en la presencia de alguien que no intenta arreglarte, que simplemente está ahí y te deja decir lo que tienes que decir.</p>

<h2>El duelo que no se ve</h2>

<p>Hay algo que me parece importante decir: el duelo por alguien que no era tu padre ni tu madre ni tu pareja es un duelo invisible. Nadie te pregunta cómo estás de la misma manera. Nadie te da el mismo espacio. Se asume que tienes que estar bien antes. Que hay otros que lo han perdido más. Que tu dolor ocupa un rango inferior en alguna jerarquía de pérdidas que alguien ha diseñado y nadie ha aprobado.</p>

<p>Yo perdí a mi tío. Y Kike era mucho más que un tío. Era la persona que me enseñó que las motos no son solo un medio de transporte. Que me escuchaba hablar de cosas que con otros no me atrevía. Que tenía una manera de estar presente que no requería demasiadas palabras. Perder eso no es un duelo de segunda categoría. Es un duelo completo, con toda su profundidad y todo su peso.</p>

<p>Si estás en una situación parecida, si has perdido a alguien y sientes que el mundo no termina de entender la magnitud de lo que has perdido, quiero decirte que tu dolor es válido. No necesita justificarse ni compararse. No necesita caber en ningún manual ni seguir ningún calendario. Es tuyo, y es tan real como cualquier otro.</p>

<h2>Tres años después</h2>

<p>Han pasado casi tres años desde que Kike murió. No he "superado" su pérdida. No creo que esa sea la palabra correcta. Lo que ha pasado es que aprendí a llevarla. A integrarla en mi vida de una manera que ya no me aplasta cada día, aunque algunos días siga haciéndolo.</p>

<p>He aprendido que el duelo no es un problema que resolver sino una relación que mantener. Una relación con la memoria de alguien, con el espacio que ocupó, con lo que me dejó. Y como toda relación, evoluciona. Cambia. Tiene sus momentos difíciles y sus momentos de paz.</p>

<p>Escribí un libro sobre todo esto. No porque crea que tengo respuestas que darte. Sino porque creo que a veces ayuda saber que alguien más ha estado en ese lugar oscuro y ha encontrado la manera de seguir. No perfectamente, no sin cicatrices. Pero seguir.</p>

<p>Eso es, al final, lo único que podemos hacer.</p>
    `,
  },

  {
    slug:      'por-que-escribi-este-libro',
    titulo:    'Por qué escribí este libro a los 18 años',
    fecha:     '28 abril 2026',
    fechaISO:  '2026-04-28',
    tipo:      'articulo',
    temaColor: 'rgba(163,21,21,0.10)',
    extracto:  'No fue valentía. Fue necesidad. Cuando no sabes qué hacer con el dolor, lo único que puedes hacer es ponerle nombre.',
    contenido: `
<p>Cuando le digo a alguien que publiqué un libro a los dieciocho años, la reacción más habitual es una mezcla de sorpresa y admiración. Y yo siempre siento una pequeña incomodidad al recibirla, porque la imagen que proyecta esa reacción no se corresponde del todo con la realidad. No publiqué un libro porque fuera valiente ni porque tuviera algo especial que ofrecer al mundo. Lo publiqué porque no supe qué más hacer con todo lo que llevaba dentro.</p>

<p>Esto no es modestia. Es la verdad más honesta que puedo dar.</p>

<h2>El principio: una libreta y un pupítre</h2>

<p>Empecé a escribir en serio cuando tenía quince años, en clase, mientras el profesor explicaba algo que yo no seguía. No recuerdo exactamente qué escribí el primer día, pero sí recuerdo la sensación. Había algo en poner palabras en papel que ordenaba el ruido interior de una manera que ninguna otra cosa conseguía. No música, no deporte, no hablar con amigos. Solo escribir.</p>

<p>La libreta era verde. Una libreta de tapas duras, con las páginas cuadriculadas, que compré por impulso en una papelería del centro. No tenía ningún plan para ella. La empecé sin ningún proyecto en mente. Y durante meses fue simplemente un espacio privado, un lugar donde podía ser completamente honesto sin consecuencias.</p>

<p>Escribía de todo. De lo que me pasaba en clase, de mis amigos, de las cosas que me gustaban y de las que me asustaban. De mi familia. De Kike, mi tío, que era una de las personas más importantes de mi vida sin que yo supiera entonces ponerle esas palabras exactas.</p>

<h2>El 29 de mayo de 2023</h2>

<p>El 29 de mayo de 2023 fue un lunes. Yo estaba en clase cuando mi hermano me mandó un mensaje. Kike había tenido un accidente de moto. Cuando salí del instituto y llamé a casa, la respuesta fue clara y concisa: ya no estaba.</p>

<p>No voy a describir lo que sentí en ese momento porque no tengo palabras para ello. Hay cosas que el lenguaje no alcanza, y ese es el tipo de dolor que solo puedes reconocer si lo has vivido. Lo que sí puedo decir es que en las semanas siguientes, la libreta verde fue lo único que me ayudó a mantenerme en pie.</p>

<p>No escribía con ninguna intención literaria. Escribía para no explotar. Para no quedarme completamente paralizado. Escribía porque necesitaba entender qué había pasado, y la única manera que encontré de intentarlo fue ponerlo en palabras, aunque esas palabras no tuvieran ningún orden, aunque muchas páginas fueran pura rabia y confusión y cosas que nunca mostraría a nadie.</p>

<p>Pero con el tiempo, entre todo ese caos, empezaron a aparecer frases que me sorprendían. Momentos en que lo que escribía tenía una forma que iba más allá del desahogo. Y fue entonces cuando empecé a pensar, muy despacio, que quizás había algo ahí que merecía existir más allá de mis páginas privadas.</p>

<h2>El momento en que decidí publicar</h2>

<p>No hubo un momento dramático de revelación. No me desperté un día con la certeza de que tenía que escribir un libro. Fue más gradual. Más parecido a ir viendo cómo las piezas encajaban poco a poco.</p>

<p>Lo que sí recuerdo con claridad es una conversación con mi madre, varios meses después del accidente. Le había estado leyendo algunas cosas que había escrito en la libreta, cosas que habían pasado de ser notas caóticas a tener un cierto ritmo, una cierta intención. Y ella me dijo, sin ningún drama, que creía que había algo valioso en lo que estaba haciendo. Que no debería guardarlo solo para mí.</p>

<p>Esa frase se quedó. No me convenció de golpe. Pero se quedó.</p>

<p>Meses más tarde, con casi todo el año 2023 escrito de alguna manera en esas páginas, empecé a ordenarlo. No era un diario convencional. Era más parecido a una sucesión de instantes: momentos concretos, conversaciones, recuerdos, reflexiones. El año en que mi tío murió, contado mes a mes, con toda su irregularidad y su imperfección.</p>

<h2>El miedo</h2>

<p>Hay algo que me cuesta admitir pero que es completamente cierto: publicar ese libro fue la cosa que más miedo me ha dado en mi vida. Y eso que tengo dieciocho años y que, objetivamente, no he vivido demasiado todavía.</p>

<p>El miedo no era al fracaso ni a que no gustara. El miedo era a la exposición. Porque lo que escribí es completamente personal. No hay distancia artística entre el autor y el texto. Soy yo, en todos mis momentos más vulnerables, en todas mis contradicciones, en todas mis dudas. Y convertir eso en un libro que podía leer cualquiera era como dejar la puerta de casa abierta de par en par.</p>

<p>Me pregunté muchas veces si tenía sentido hacerlo. Si no era demasiado joven. Si alguien iba a tomarse en serio el dolor de un adolescente. Si el hecho de haber vivido tan poco invalidaba de alguna manera lo que tenía que contar.</p>

<p>La respuesta que me di, y que sigo creyendo, es que el dolor no tiene edad mínima. Que la pérdida de alguien que quieres es igual de real con dieciséis años que con cincuenta. Y que si yo había necesitado, en algún momento de ese año oscuro, leer que alguien más había sentido algo parecido y había encontrado la manera de seguir, quizás alguien más también lo necesitaba.</p>

<h2>Lo que espero que haga el libro</h2>

<p>No escribí <em>29 de Mayo</em> para dar lecciones. No sé nada sobre el duelo que no haya aprendido a golpes. No soy psicólogo ni filósofo ni tengo ninguna autoridad especial sobre el dolor ajeno. Solo soy alguien que lo vivió y que intentó entenderlo escribiendo.</p>

<p>Lo que espero es algo más sencillo. Espero que alguien que esté pasando por algo parecido lo lea y sienta, aunque sea un momento, que no está solo. Que el peso que lleva, ese peso específico de haber perdido a alguien y no saber muy bien cómo seguir, es un peso que otros también han cargado. Y que se puede cargar.</p>

<p>No voy a decir que la escritura cura. Sería mentira. Pero sí creo que nombrar las cosas ayuda. Que poner en palabras lo que duele es una manera de hacerle frente que tiene algo de digno, algo de honesto. Que no es rendirse sino todo lo contrario: es negarse a que el dolor se quede mudo y sin forma dentro de ti.</p>

<p>Eso es lo que intenté hacer. Y eso es lo que espero, con toda la humildad que puedo reunir, que el libro devuelva a quien lo lea.</p>
    `,
  },

  {
    slug:      'la-moto-como-metafora',
    titulo:    'La moto como metáfora',
    fecha:     '10 abril 2026',
    fechaISO:  '2026-04-10',
    tipo:      'articulo',
    temaColor: 'rgba(196,120,50,0.12)',
    extracto:  'Kike y yo teníamos la moto en común antes de que yo la tuviera. Hay vínculos que no necesitan palabras, solo kilómetros.',
    contenido: `
<p>Mi tío Kike tenía una moto. La tenía desde mucho antes de que yo naciera, y cuando yo era pequeño y me llevaba a dar vueltas por el polígono industrial que había cerca de su casa, lo que sentía no era exactamente miedo, aunque había algo de eso también. Era más parecido a una forma particular de estar vivo, esa sensación de que el viento te empuja hacia atrás y de que la velocidad es una conversación entre tú y la carretera.</p>

<p>No sé si fue eso lo que me enganchó a las motos. Quizás fue solo que Kike las tenía y que todo lo que tenía Kike me parecía, de alguna manera, un poco más interesante que el resto del mundo.</p>

<h2>El garaje como territorio compartido</h2>

<p>Cuando era adolescente y empecé a ir a su casa con más frecuencia, el garaje se convirtió en el sitio donde más tiempo pasábamos juntos. No era un garaje especialmente ordenado ni especialmente bonito. Era un garaje normal, con cajas de herramientas y latas de aceite y ese olor mezclado a gasolina y polvo que yo asocio, todavía hoy, con una sensación muy concreta de seguridad.</p>

<p>Kike no me enseñó mecánica de forma sistemática. No hubo clases ni manuales. Hubo tardes en que él hacía cosas y yo miraba, y a veces preguntaba y a veces no, y a veces él explicaba sin que yo preguntara porque debía de notar en mi cara que quería saber. Eso era suficiente. En ese espacio no había que demostrar nada ni ser de ninguna manera en particular.</p>

<p>Hay personas que tienen ese don: la capacidad de estar contigo sin exigirte que seas diferente de lo que eres. Kike lo tenía. No sé si era consciente de ello. Supongo que no. Simplemente era así.</p>

<h2>Consiguiendo la mía</h2>

<p>En abril de 2023, un mes antes de que Kike muriera, conseguí mi primera moto. Era una Derbi GPR blanca. No era una moto impresionante ni cara. Era exactamente lo que podía permitirme con lo que había ahorrado, y me parecía la cosa más hermosa del mundo.</p>

<p>Kike la vio. Me ayudó a revisar algunas cosas antes de que la estrenara. Recuerdo que le dio una vuelta despacio alrededor, con ese gesto de alguien que sabe lo que está mirando, y dijo algo así como que estaba bien, que me cuidara. No lo convirtió en un gran momento. Tampoco lo necesitaba.</p>

<p>Un mes después, Kike murió en la moto. En una carretera que conocía, en una curva, cuando una vaca se cruzó en su camino. Así de rápido. Así de absurdo. Así de irreversible.</p>

<p>Y yo me quedé con mi Derbi en el garaje, sin saber muy bien qué hacer con ella.</p>

<h2>La paradoja que no sabía manejar</h2>

<p>Durante semanas no pude subirme a la moto. No era miedo exactamente, aunque el miedo también estaba. Era algo más complicado. La moto que había sido un símbolo de algo compartido con él se había convertido en algo que no sabía cómo leer. Como si la misma cosa pudiera significar cosas completamente opuestas dependiendo del momento.</p>

<p>Por un lado, la moto me conectaba con él. Era el vínculo más tangible que teníamos, el territorio donde habíamos construido una parte importante de nuestra relación. Por otro lado, era la cosa que le había matado. No la misma moto, no el mismo accidente, pero la misma lógica: un hombre sobre dos ruedas y una carretera que puede ser indistinguible de una trampa.</p>

<p>No sé cómo se llama esa emoción. La que mezcla el amor hacia algo con el miedo que te produce. Quizás no tiene nombre. O quizás el nombre es simplemente la vida, que tiene esta costumbre de presentarte las cosas más bellas envueltas en su propia fragilidad.</p>

<h2>Volver a subirse</h2>

<p>El día que volví a subirme a la moto fue en verano. No recuerdo la fecha exacta. Recuerdo que era por la tarde y que hacía mucho calor y que decidí hacerlo sin pensarlo demasiado, porque si lo pensaba no iba a hacerlo.</p>

<p>Di una vuelta corta por el barrio. Sin ir a ningún sitio en particular. Solo para ver cómo se sentía. Y lo que se sentía era exactamente lo de siempre: ese viento que te empuja hacia atrás, esa conversación entre tú y el asfalto. Igual que cuando tenía doce años y Kike me llevaba de paquete por el polígono.</p>

<p>Lloré cuando paré. No de tristeza exactamente. O sí, también de tristeza. Pero sobre todo porque en ese momento entendí que volver a subirme no era una traición ni una claudicación. Era seguir. Era reconocer que las cosas que amaba de Kike no tenían que quedar enterradas con él.</p>

<h2>Lo que las motos me enseñaron sobre el duelo</h2>

<p>Hay una cosa que aprendes cuando conduces una moto, especialmente cuando estás aprendiendo: tienes que mirar hacia donde quieres ir. No hacia los obstáculos. Si miras el obstáculo, te vas hacia él. Si miras donde quieres llegar, tu cuerpo ajusta sin que tengas que pensar demasiado.</p>

<p>No voy a estirar demasiado la metáfora porque las metáforas demasiado estiradas se rompen. Pero hay algo en esa mecánica que me parece que dice algo verdadero sobre cómo funciona el duelo. No se trata de ignorar el dolor ni de hacer como que no existe. Se trata de decidir, a pesar de él, dónde quieres poner la mirada. Hacia qué quieres ir.</p>

<p>Kike me enseñó eso sin saberlo. No con palabras. Con tardes en el garaje y vueltas por el polígono y la manera en que miraba las motos, con ese respeto tranquilo de alguien que conoce bien la cosa que ama.</p>

<h2>La moto en el libro</h2>

<p>En <em>29 de Mayo</em>, las motos aparecen varias veces. No como elemento dramático ni como símbolo fácil. Aparecen simplemente porque estaban ahí, porque formaban parte de lo que compartíamos, porque el accidente de Kike ocurrió en moto y sería deshonesto escribir sobre aquel año sin que la moto tuviera su lugar.</p>

<p>Lo que intenté al escribir sobre ellas fue mantener esa doble naturaleza: la belleza y el peligro, la conexión y la pérdida. No resolver la tensión sino dejarla estar, porque esa tensión es exactamente lo que sentí y lo que sigo sintiendo cuando me subo a una moto.</p>

<p>No hay forma de separar la moto de Kike en mi memoria. Ni quiero hacerlo. Lo que puedo hacer es llevarlos juntos, al mismo tiempo, como se lleva todo lo que importa: sin negar nada, sin olvidar nada, intentando encontrar la manera de seguir mirando hacia delante aunque el retrovisor muestre cosas que duelen.</p>

<p>Eso es lo que hago. Eso es lo que intento, al menos, cada vez que arranco.</p>
    `,
  },
];

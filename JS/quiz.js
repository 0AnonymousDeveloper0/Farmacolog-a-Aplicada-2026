const QUESTION_BANK = [
    {
        question: "¿Qué canales inhibe principalmente la etosuximida?",
        options: ["Canales de Na+ dependientes de voltaje", "Canales de Ca2+ tipo T", "Canales de K+ rectificadores", "Canales de Cl- del receptor GABA_A"],
        answer: 1,
        explanation: "La etosuximida actúa sobre los canales de Ca2+ tipo T, sobre todo en neuronas del tálamo. Al reducir esa corriente de calcio, dificulta la generación de descargas rítmicas que sostienen las crisis de ausencia."
    },
    {
        question: "¿En qué región neuronal tiene mayor relevancia la acción de la etosuximida para controlar crisis de ausencia?",
        options: ["Cerebelo", "Hipotálamo", "Tálamo", "Bulbo raquídeo"],
        answer: 2,
        explanation: "El tálamo es la región clave. Ahí existen neuronas con una participación importante de canales de Ca2+ tipo T, y por eso la etosuximida logra interrumpir mejor el patrón oscilatorio característico de estas crisis."
    },
    {
        question: "¿Qué fenómeno eléctrico disminuye la etosuximida al reducir la corriente tipo T?",
        options: ["La síntesis de GABA", "El low-threshold spike (LTS)", "La recaptación de serotonina", "La liberación de acetilcolina"],
        answer: 1,
        explanation: "La disminución de la corriente tipo T debilita el low-threshold spike o LTS. Sin ese disparo de bajo umbral, la neurona tiene más dificultad para entrar en descargas rítmicas repetitivas."
    },
    {
        question: "La carbamazepina se une preferentemente a los canales de sodio en estado:",
        options: ["Abierto", "Reposo", "Inactivado", "Fosforilado"],
        answer: 2,
        explanation: "La carbamazepina tiene preferencia por el estado inactivado del canal de Na+. Esto estabiliza al canal en una conformación menos disponible y frena la repetición rápida de potenciales de acción."
    },
    {
        question: "¿Qué efecto neuronal directo produce la carbamazepina?",
        options: ["Aumenta la recaptación de dopamina", "Prolonga el período refractario", "Estimula receptores D2", "Disminuye GABA-T"],
        answer: 1,
        explanation: "Al mantener más tiempo inactivos los canales de sodio, la carbamazepina prolonga el período refractario. Eso hace que la neurona tarde más en estar lista para disparar de nuevo."
    },
    {
        question: "La utilidad anticonvulsivante de la carbamazepina se relaciona especialmente con la reducción de:",
        options: ["La hiperactividad colinérgica estriatal", "Las descargas repetitivas de alta frecuencia", "La degradación de GABA", "La activación de receptores muscarínicos"],
        answer: 1,
        explanation: "La carbamazepina es especialmente útil porque frena las descargas repetitivas de alta frecuencia. Ese patrón es típico de focos epilépticos y depende mucho de la reapertura sucesiva de canales de sodio."
    },
    {
        question: "¿Qué transportadores inhibe de forma selectiva el bupropión?",
        options: ["SERT y NET", "DAT y NET", "GAT-1 y SERT", "DAT y GAT-1"],
        answer: 1,
        explanation: "El bupropión bloquea DAT y NET, es decir, la recaptación de dopamina y noradrenalina. Por eso aumenta la disponibilidad de estas catecolaminas en la sinapsis."
    },
    {
        question: "Además de modular catecolaminas, el bupropión bloquea de forma no competitiva receptores:",
        options: ["Nicotínicos de acetilcolina", "Muscarínicos M1", "Dopaminérgicos D2", "Serotoninérgicos 5-HT2A"],
        answer: 0,
        explanation: "El bupropión también antagoniza receptores nicotínicos de acetilcolina. Ese efecto ayuda a disminuir el refuerzo dopaminérgico asociado al consumo de nicotina y explica su uso para dejar de fumar."
    },
    {
        question: "¿Qué sistema no recibe un efecto significativo con el mecanismo principal del bupropión?",
        options: ["Noradrenérgico", "Dopaminérgico", "Serotoninérgico", "Catecolaminérgico"],
        answer: 2,
        explanation: "El sistema serotoninérgico no es el blanco principal del bupropión. Su acción se concentra mucho más en dopamina y noradrenalina, por eso se distingue de los antidepresivos serotoninérgicos clásicos."
    },
    {
        question: "La carbidopa inhibe periféricamente a la enzima:",
        options: ["GABA transaminasa", "Dopa descarboxilasa (AADC)", "Adenilato ciclasa", "Monoamino oxidasa B"],
        answer: 1,
        explanation: "La carbidopa inhibe la dopa descarboxilasa periférica o AADC. Con eso evita que la levodopa se convierta demasiado pronto en dopamina fuera del sistema nervioso central."
    },
    {
        question: "¿Cuál es el beneficio principal de combinar carbidopa con levodopa?",
        options: ["Activar receptores D2", "Aumentar la dopamina periférica", "Permitir que más levodopa llegue al cerebro", "Bloquear receptores muscarínicos"],
        answer: 2,
        explanation: "La combinación sirve para que una mayor cantidad de levodopa alcance el cerebro. Así se aprovecha mejor el precursor y se reduce la pérdida por conversión periférica."
    },
    {
        question: "La carbidopa reduce efectos adversos periféricos porque disminuye la formación de:",
        options: ["Serotonina", "Acetilcolina", "Dopamina", "Glutamato"],
        answer: 2,
        explanation: "Al bloquear la conversión periférica de levodopa, la carbidopa reduce la formación de dopamina fuera del SNC. Eso disminuye efectos adversos como náuseas, vómito y alteraciones cardiovasculares."
    },
    {
        question: "La levodopa actúa principalmente como:",
        options: ["Antagonista D2", "Precursor de dopamina", "Inhibidor de NET", "Modulador GABA_A"],
        answer: 1,
        explanation: "La levodopa funciona como precursor metabólico directo de la dopamina. Su importancia clínica está en que aporta sustrato para restaurar parcialmente la neurotransmisión dopaminérgica."
    },
    {
        question: "¿Cómo entra la levodopa al sistema nervioso central?",
        options: ["Por difusión simple lipídica exclusiva", "Mediante transportadores de aminoácidos neutros", "A través de canales de calcio tipo T", "Por cotransporte con cloro"],
        answer: 1,
        explanation: "La levodopa cruza la barrera hematoencefálica mediante transportadores de aminoácidos neutros. Ese paso es esencial para que luego pueda convertirse en dopamina dentro del cerebro."
    },
    {
        question: "La dopamina formada a partir de levodopa estimula principalmente receptores:",
        options: ["M1 y M2", "5-HT2A y D2", "D1 y D2", "GABA_A y GABA_B"],
        answer: 2,
        explanation: "La dopamina formada a partir de levodopa actúa principalmente sobre receptores D1 y D2. Esa activación mejora la modulación de los circuitos motores de los ganglios basales."
    },
    {
        question: "¿Qué fármaco aumenta la duración de apertura del canal de Cl- del receptor GABA_A?",
        options: ["Clonazepam", "Diazepam", "Fenobarbital", "Tiagabina"],
        answer: 2,
        explanation: "El fenobarbital, como barbitúrico, prolonga la duración de apertura del canal de cloro. Eso intensifica la hiperpolarización y fortalece la inhibición neuronal."
    },
    {
        question: "¿Qué fármaco aumenta la frecuencia de apertura del canal de Cl- del receptor GABA_A en presencia de GABA?",
        options: ["Fenobarbital", "Clonazepam", "Vigabatrina", "Carbamazepina"],
        answer: 1,
        explanation: "El clonazepam aumenta la frecuencia de apertura del canal de cloro cuando GABA ya está presente. Esa es una propiedad típica de las benzodiacepinas."
    },
    {
        question: "¿Qué propiedad distingue al fenobarbital a dosis altas?",
        options: ["Bloquea NET", "Puede activar directamente GABA_A", "Inhibe SERT", "Activa receptores D2"],
        answer: 1,
        explanation: "A dosis altas, el fenobarbital puede activar directamente el receptor GABA_A incluso sin GABA. Eso lo diferencia de muchos moduladores que dependen totalmente de la presencia previa del neurotransmisor."
    },
    {
        question: "Amitriptilina y duloxetina comparten como mecanismo principal el bloqueo de:",
        options: ["DAT y NET", "SERT y NET", "D2 y 5-HT2A", "GAT-1 y GABA-T"],
        answer: 1,
        explanation: "Ambas bloquean SERT y NET, por lo que aumentan serotonina y noradrenalina en la hendidura sináptica. Eso refuerza circuitos relacionados con el estado de ánimo y con la modulación del dolor."
    },
    {
        question: "¿Qué fármaco del grupo serotoninérgico y noradrenérgico también antagoniza receptores muscarínicos, H1 y alfa-adrenérgicos?",
        options: ["Duloxetina", "Fluoxetina", "Amitriptilina", "Bupropión"],
        answer: 2,
        explanation: "La amitriptilina es menos selectiva y además antagoniza receptores muscarínicos, histaminérgicos H1 y alfa-adrenérgicos. Esa menor selectividad explica varios de sus efectos adversos."
    },
    {
        question: "¿Qué fármaco destaca por ser más selectivo sobre SERT y NET?",
        options: ["Amitriptilina", "Duloxetina", "Clorpromazina", "Etosuximida"],
        answer: 1,
        explanation: "La duloxetina tiene una acción más específica sobre SERT y NET. Por eso su perfil es más limpio que el de fármacos menos selectivos como la amitriptilina."
    },
    {
        question: "La tiagabina aumenta GABA porque inhibe:",
        options: ["GABA transaminasa", "El receptor GABA_B", "La recaptación por GAT-1", "La dopa descarboxilasa"],
        answer: 2,
        explanation: "La tiagabina bloquea GAT-1, el transportador de recaptación de GABA. Al frenar la recaptación, el neurotransmisor permanece más tiempo disponible en la sinapsis."
    },
    {
        question: "La vigabatrina eleva GABA porque inhibe de forma irreversible a:",
        options: ["GABA transaminasa", "SERT", "NET", "AADC"],
        answer: 0,
        explanation: "La vigabatrina inhibe de forma irreversible la GABA transaminasa. Al impedir la degradación del GABA, eleva sus niveles y favorece una mayor disponibilidad inhibitoria."
    },
    {
        question: "Tiagabina y vigabatrina comparten como resultado final:",
        options: ["Disminuir dopamina", "Aumentar la disponibilidad de GABA", "Bloquear receptores nicotínicos", "Reducir serotonina"],
        answer: 1,
        explanation: "Aunque una inhibe recaptación y la otra degradación, ambas terminan aumentando la disponibilidad de GABA. El resultado final es mayor inhibición neuronal y menor excitabilidad."
    },
    {
        question: "El diazepam se une al receptor GABA_A en:",
        options: ["El mismo sitio que GABA", "El sitio benzodiacepínico alostérico", "El poro del canal de sodio", "Un receptor muscarínico"],
        answer: 1,
        explanation: "El diazepam se une al sitio benzodiacepínico, que es alostérico y distinto del sitio donde se une el GABA. Desde ahí potencia el efecto inhibidor sin ocupar el mismo sitio del neurotransmisor."
    },
    {
        question: "¿Qué efecto NO produce el diazepam por sí solo?",
        options: ["Potenciar el efecto inhibidor de GABA", "Aumentar la frecuencia de apertura del canal de Cl-", "Activar directamente el receptor GABA_A sin GABA", "Reducir la excitabilidad neuronal"],
        answer: 2,
        explanation: "El diazepam no activa por sí solo al receptor GABA_A. Necesita la presencia de GABA para potenciar la frecuencia de apertura del canal y reforzar la hiperpolarización."
    },
    {
        question: "¿Qué resultado eléctrico causa el diazepam al aumentar la entrada de Cl-?",
        options: ["Despolarización sostenida", "Hiperpolarización de la membrana", "Aumento de AMPc", "Inhibición de GAT-1"],
        answer: 1,
        explanation: "La entrada aumentada de cloro vuelve más negativa a la neurona, es decir, la hiperpolariza. Eso aleja a la membrana del umbral y disminuye la probabilidad de disparo."
    },
    {
        question: "El biperideno actúa como antagonista competitivo de receptores:",
        options: ["D2", "Nicotínicos", "Muscarínicos, sobre todo M1", "5-HT2A"],
        answer: 2,
        explanation: "El biperideno bloquea receptores muscarínicos, sobre todo M1, en el sistema nervioso central. Con eso reduce la influencia excesiva de acetilcolina sobre el estriado."
    },
    {
        question: "¿En qué región es especialmente relevante la acción central del biperideno?",
        options: ["Hipocampo", "Cuerpo estriado y ganglios basales", "Médula espinal", "Amígdala solamente"],
        answer: 1,
        explanation: "Su acción es especialmente importante en el cuerpo estriado y en los ganglios basales. Allí ayuda a corregir parte del desequilibrio entre dopamina y acetilcolina."
    },
    {
        question: "El objetivo funcional del biperideno en Parkinson es reducir el predominio de la actividad:",
        options: ["Serotoninérgica", "GABAérgica", "Colinérgica", "Glutamatérgica"],
        answer: 2,
        explanation: "En Parkinson existe un predominio relativo de la actividad colinérgica por déficit dopaminérgico. El biperideno atenúa ese exceso y mejora síntomas como temblor y rigidez."
    },
    {
        question: "La fluoxetina pertenece al grupo de:",
        options: ["Antagonistas D2", "ISRS", "Barbitúricos", "Antimuscarínicos"],
        answer: 1,
        explanation: "La fluoxetina es un ISRS, es decir, un inhibidor selectivo de la recaptación de serotonina. Su acción gira alrededor del aumento de serotonina sináptica."
    },
    {
        question: "El blanco molecular principal de la fluoxetina es:",
        options: ["SERT", "NET", "DAT", "GABA-T"],
        answer: 0,
        explanation: "El blanco principal de la fluoxetina es SERT. Al bloquear ese transportador, la serotonina permanece más tiempo en la hendidura sináptica."
    },
    {
        question: "Con uso crónico, la fluoxetina favorece una mayor liberación de serotonina porque induce:",
        options: ["Activación de M1", "Desensibilización de autorreceptores serotoninérgicos", "Inhibición de AADC", "Aumento de GABA-T"],
        answer: 1,
        explanation: "Con el uso crónico aparecen adaptaciones como la desensibilización de autorreceptores serotoninérgicos presinápticos. Eso facilita una liberación más sostenida de serotonina."
    },
    {
        question: "Clorpromazina y clozapina comparten el antagonismo competitivo sobre receptores:",
        options: ["M1", "D2", "GABA_A", "Nicotínicos"],
        answer: 1,
        explanation: "Ambas disminuyen la señal dopaminérgica al antagonizar receptores D2. Ese efecto es fundamental para reducir la hiperactividad mesolímbica asociada a síntomas psicóticos."
    },
    {
        question: "Los receptores D2 están acoplados principalmente a proteína:",
        options: ["Gs", "Gq", "Gi", "Golf"],
        answer: 2,
        explanation: "Los receptores D2 están acoplados a proteína Gi. Cuando se bloquean, se altera la inhibición normal sobre adenilato ciclasa y cambia la señalización intracelular."
    },
    {
        question: "¿Qué vía dopaminérgica se busca modular especialmente para disminuir síntomas psicóticos con clorpromazina y clozapina?",
        options: ["Nigroestriada", "Mesolímbica", "Corticospinal", "Vestibular"],
        answer: 1,
        explanation: "La vía mesolímbica es la más relacionada con la hiperactividad dopaminérgica de síntomas psicóticos como delirios y alucinaciones. Por eso es el blanco funcional más importante aquí."
    },
    {
        question: "La clozapina se diferencia porque además antagoniza receptores:",
        options: ["5-HT2A", "GAT-1", "M1", "AADC"],
        answer: 0,
        explanation: "La clozapina también antagoniza 5-HT2A. Eso ayuda a modular de manera más equilibrada la liberación de dopamina en otras vías y reduce parte del costo motor del bloqueo dopaminérgico."
    },
    {
        question: "¿Qué antipsicótico del par muestra un bloqueo D2 más intenso y menos selectivo?",
        options: ["Clozapina", "Fluoxetina", "Clorpromazina", "Duloxetina"],
        answer: 2,
        explanation: "La clorpromazina bloquea D2 de forma más intensa y en varias vías dopaminérgicas. Por eso conserva efecto terapéutico, pero también se asocia más a efectos extrapiramidales."
    },
    {
        question: "¿Qué par de fármacos comparte aumento de serotonina y noradrenalina sináptica por inhibición de recaptación?",
        options: ["Amitriptilina y duloxetina", "Tiagabina y vigabatrina", "Carbidopa y levodopa", "Diazepam y clonazepam"],
        answer: 0,
        explanation: "Amitriptilina y duloxetina comparten el bloqueo de SERT y NET. Ese mecanismo aumenta la disponibilidad sináptica de serotonina y noradrenalina."
    },
    {
        question: "¿Qué par de fármacos potencia el receptor GABA_A desde sitios alostéricos con efectos distintos sobre el canal de Cl-?",
        options: ["Clorpromazina y clozapina", "Fenobarbital y clonazepam", "Fluoxetina y bupropión", "Levodopa y carbidopa"],
        answer: 1,
        explanation: "Fenobarbital y clonazepam actúan sobre GABA_A, pero no de la misma forma. Uno prolonga la duración de apertura y el otro aumenta la frecuencia."
    },
    {
        question: "¿Qué fármaco ayuda a disminuir el deseo de fumar al reducir el refuerzo dopaminérgico inducido por nicotina?",
        options: ["Bupropión", "Fluoxetina", "Carbamazepina", "Biperideno"],
        answer: 0,
        explanation: "El bupropión bloquea receptores nicotínicos y así reduce la liberación de dopamina asociada al consumo de tabaco. Eso debilita el refuerzo positivo de la nicotina."
    },
    {
        question: "¿Qué fármaco de este conjunto actúa principalmente fuera del sistema nervioso central?",
        options: ["Levodopa", "Clonazepam", "Carbidopa", "Etosuximida"],
        answer: 2,
        explanation: "La carbidopa actúa sobre todo en la periferia, donde inhibe la AADC. Su valor clínico está en proteger a la levodopa antes de que llegue al cerebro."
    },
    {
        question: "¿Qué combinación permite restaurar parcialmente dopamina en el cuerpo estriado al llevar más precursor al cerebro?",
        options: ["Fluoxetina y bupropión", "Levodopa y carbidopa", "Tiagabina y vigabatrina", "Clorpromazina y clozapina"],
        answer: 1,
        explanation: "La levodopa aporta el precursor de dopamina y la carbidopa evita su conversión periférica prematura. Juntas mejoran la llegada efectiva del fármaco al SNC."
    },
    {
        question: "¿Qué mecanismo corresponde a un fármaco anticonvulsivante útil en crisis de ausencia?",
        options: ["Bloqueo de D2", "Inhibición de canales de Ca2+ tipo T", "Antagonismo 5-HT2A", "Bloqueo muscarínico M1"],
        answer: 1,
        explanation: "La inhibición de canales de Ca2+ tipo T corresponde a la etosuximida. Ese mecanismo encaja con la fisiología talámica de las crisis de ausencia."
    },
    {
        question: "¿Qué fármaco limita la reapertura de canales de Na+ en focos epilépticos?",
        options: ["Carbamazepina", "Etosuximida", "Diazepam", "Carbidopa"],
        answer: 0,
        explanation: "La carbamazepina limita la reapertura de canales de sodio dependientes de voltaje. De esa forma reduce la probabilidad de disparos repetitivos anómalos."
    },
    {
        question: "¿Qué par incrementa la entrada de cloro como efecto final más directo sobre la neurona?",
        options: ["Fenobarbital y clonazepam", "Levodopa y carbidopa", "Bupropión y fluoxetina", "Clorpromazina y clozapina"],
        answer: 0,
        explanation: "Fenobarbital y clonazepam potencian la acción del receptor GABA_A, lo que favorece la entrada de Cl-. El resultado es más hiperpolarización y menos excitabilidad."
    },
    {
        question: "¿Qué opción describe mejor a la clozapina frente a la clorpromazina?",
        options: ["Más selectiva y con modulación serotoninérgica por 5-HT2A", "Periférica y sin paso al SNC", "Inhibidora de SERT", "Barbitúrico que activa GABA_A sin GABA"],
        answer: 0,
        explanation: "La clozapina se diferencia por un bloqueo D2 menos intenso y por su antagonismo 5-HT2A. Eso le da un perfil más equilibrado y menos carga extrapiramidal."
    },
    {
        question: "¿Qué transportador bloquea específicamente la fluoxetina para aumentar serotonina sináptica?",
        options: ["NET", "DAT", "SERT", "GAT-1"],
        answer: 2,
        explanation: "La fluoxetina bloquea SERT de manera selectiva. Al hacerlo, impide la recaptación rápida de serotonina y prolonga su acción sináptica."
    },
    {
        question: "¿Qué fármaco actúa como precursor y no como antagonista ni como inhibidor de recaptación?",
        options: ["Levodopa", "Fluoxetina", "Biperideno", "Clorpromazina"],
        answer: 0,
        explanation: "La levodopa es un precursor metabólico. Su función no es bloquear un receptor ni un transportador, sino servir como base para sintetizar dopamina."
    },
    {
        question: "¿Qué efecto tiene la carbidopa sobre la producción central de dopamina?",
        options: ["La inhibe directamente dentro del SNC", "No la interfiere de manera directa", "Bloquea receptores D1 y D2", "Aumenta la recaptación de levodopa"],
        answer: 1,
        explanation: "La carbidopa actúa en la periferia y no inhibe de forma relevante la producción central de dopamina. Su valor está en permitir que más levodopa llegue intacta al cerebro."
    },
    {
        question: "¿Qué neurotransmisor aumenta principalmente la fluoxetina en la hendidura sináptica?",
        options: ["Dopamina", "Acetilcolina", "Serotonina", "GABA"],
        answer: 2,
        explanation: "La fluoxetina aumenta sobre todo la serotonina porque bloquea su transportador de recaptación. Ese incremento fortalece la neurotransmisión serotoninérgica en circuitos emocionales."
    },
    {
        question: "¿Qué efecto final comparten diazepam y clonazepam sobre el receptor GABA_A?",
        options: ["Reducen la entrada de cloro", "Aumentan la frecuencia de apertura del canal de Cl-", "Bloquean el sitio de GABA", "Activan el receptor sin necesidad de GABA"],
        answer: 1,
        explanation: "Tanto diazepam como clonazepam, como benzodiacepinas, aumentan la frecuencia de apertura del canal de cloro en presencia de GABA. Eso potencia la inhibición neuronal."
    },
    {
        question: "¿Qué efecto tiene la clozapina sobre los síntomas motores en comparación con la clorpromazina?",
        options: ["Los empeora siempre por mayor bloqueo D2", "No produce diferencias clínicas importantes", "Tiende a causar menos efectos extrapiramidales", "Activa receptores muscarínicos y por eso mejora el movimiento"],
        answer: 2,
        explanation: "La clozapina tiende a conservar mejor el equilibrio dopaminérgico en vías no mesolímbicas. Por eso suele asociarse con menos efectos extrapiramidales que la clorpromazina."
    },
    {
        question: "¿Qué diana farmacológica explica mejor el efecto de la tiagabina?",
        options: ["SERT", "GAT-1", "AADC", "5-HT2A"],
        answer: 1,
        explanation: "La diana central de la tiagabina es GAT-1, el transportador de recaptación de GABA. Al bloquearlo, aumenta la permanencia del neurotransmisor en la sinapsis."
    },
    {
        question: "¿Cuál de los siguientes mecanismos se relaciona mejor con la utilidad del biperideno en temblor y rigidez?",
        options: ["Inhibición de SERT", "Antagonismo muscarínico central", "Bloqueo de canales de Ca2+ tipo T", "Aumento de dopamina por inhibición de NET"],
        answer: 1,
        explanation: "El biperideno bloquea receptores muscarínicos centrales, sobre todo en el estriado. Eso disminuye la hiperactividad colinérgica que contribuye a temblor y rigidez."
    },
    {
        question: "¿Qué evento sináptico explica directamente la acción antidepresiva de amitriptilina y duloxetina?",
        options: ["Mayor recaptación de serotonina", "Menor concentración de noradrenalina", "Aumento de serotonina y noradrenalina en la hendidura sináptica", "Bloqueo de canales de Na+ del tálamo"],
        answer: 2,
        explanation: "Ambas aumentan la concentración sináptica de serotonina y noradrenalina al bloquear su recaptación. Eso potencia la señal en circuitos implicados en ánimo y modulación del dolor."
    },
    {
        question: "¿Qué fármaco aumenta dopamina y noradrenalina sin comportarse como ISRS?",
        options: ["Fluoxetina", "Bupropión", "Duloxetina", "Amitriptilina"],
        answer: 1,
        explanation: "El bupropión aumenta dopamina y noradrenalina a través de DAT y NET, pero no actúa principalmente como inhibidor selectivo de serotonina. Ese perfil lo hace bastante particular frente a otros antidepresivos."
    },
    {
        question: "¿Qué característica hace a la etosuximida relativamente selectiva para crisis de ausencia?",
        options: ["Su acción sobre receptores D2", "Su efecto sobre canales de Ca2+ tipo T del circuito tálamo-cortical", "Su antagonismo muscarínico M1", "Su bloqueo de la recaptación de GABA"],
        answer: 1,
        explanation: "La etosuximida es relativamente selectiva porque actúa justo sobre un componente eléctrico muy importante del circuito tálamo-cortical: los canales de Ca2+ tipo T implicados en las crisis de ausencia."
    }
];

const TOTAL_QUESTIONS_PER_GAME = 20;

const LOW_SCORE_MESSAGES = [
    "Esto no define lo que puedes llegar a hacer, solo muestra que este intento no funcionó.",
    "Fallar aquí es información: ya sabes por dónde no era, ahora toca ajustar.",
    "No es el final, es el punto donde decides si mejoras o te rindes.",
    "Lo importante no es este número, sino lo que hagas después de verlo.",
    "Mucha gente que ahora domina algo empezó exactamente aquí."
];

const MID_SCORE_MESSAGES = [
    "Estás cerca, ya tienes base; ahora toca afinar detalles.",
    "Esto no es fracaso, es progreso incompleto.",
    "Ya hiciste lo difícil: entender parte. Ahora solo falta consolidarlo.",
    "Con pequeños ajustes puedes subir bastante.",
    "Vas en buen camino, pero no te conformes con ‘casi’."
];

const HIGH_SCORE_MESSAGES = [
    "Buen resultado, se nota el trabajo que hay detrás.",
    "Esto demuestra que tu método está funcionando.",
    "No fue suerte, fue preparación.",
    "Ahora el reto es mantener ese nivel.",
    "Disfrútalo, pero sigue empujando, aún puedes mejorar más."
];

const introSection = document.getElementById("quiz-intro");
const playSection = document.getElementById("quiz-play");
const resultsSection = document.getElementById("quiz-results");
const startButton = document.getElementById("start-quiz");
const restartButton = document.getElementById("restart-quiz");
const nextButton = document.getElementById("next-question");
const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const answerFeedback = document.getElementById("answer-feedback");
const progressText = document.getElementById("quiz-progress");
const scoreLive = document.getElementById("quiz-score-live");
const finalScore = document.getElementById("final-score");
const finalSummary = document.getElementById("final-summary");
const reviewList = document.getElementById("review-list");
const correctSounds = createSoundPool("../Audios/acierto.mp3", 0.78);
const errorSounds = createSoundPool("../Audios/error.mp3", 0.78);
const backgroundMusic = new Audio("../Audios/ambience_crystal_planet.mp3");

backgroundMusic.loop = true;
backgroundMusic.volume = 0.28;

let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let reviewData = [];
let hasAnswered = false;

function shuffle(array) {
    const copy = [...array];

    for (let i = copy.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy;
}

function shuffleQuestionOptions(question) {
    const remappedOptions = question.options.map((option, index) => ({
        option,
        isCorrect: index === question.answer
    }));

    const shuffledOptions = shuffle(remappedOptions);

    return {
        question: question.question,
        options: shuffledOptions.map((item) => item.option),
        answer: shuffledOptions.findIndex((item) => item.isCorrect),
        explanation: question.explanation
    };
}

function pickMessageByScore(currentScore) {
    if (currentScore <= 9) {
        return shuffle(LOW_SCORE_MESSAGES)[0];
    }

    if (currentScore <= 15) {
        return shuffle(MID_SCORE_MESSAGES)[0];
    }

    return shuffle(HIGH_SCORE_MESSAGES)[0];
}

function createSoundPool(src, volume) {
    return Array.from({ length: 6 }, () => {
        const audio = new Audio(src);
        audio.preload = "auto";
        audio.volume = volume;
        audio.load();
        return audio;
    });
}

function primeSoundPool(pool) {
    pool.forEach((audio) => {
        const originalVolume = audio.volume;
        audio.volume = 0;
        audio.play()
            .then(() => {
                audio.pause();
                audio.currentTime = 0;
                audio.volume = originalVolume;
            })
            .catch(() => {
                audio.volume = originalVolume;
            });
    });
}

function playAudio(pool) {
    const audio = pool.find((item) => item.paused || item.ended) || pool[0];
    audio.pause();
    audio.currentTime = 0;
    audio.play().catch(() => {});
}

function startBackgroundMusic() {
    backgroundMusic.play().catch(() => {});
}

function pauseBackgroundMusic() {
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
}

function startQuiz() {
    primeSoundPool(correctSounds);
    primeSoundPool(errorSounds);
    startBackgroundMusic();
    selectedQuestions = shuffle(QUESTION_BANK)
        .slice(0, TOTAL_QUESTIONS_PER_GAME)
        .map(shuffleQuestionOptions);
    currentQuestionIndex = 0;
    score = 0;
    reviewData = [];
    hasAnswered = false;

    introSection.classList.add("hidden");
    resultsSection.classList.add("hidden");
    playSection.classList.remove("hidden");

    renderQuestion();
}

function renderQuestion() {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    hasAnswered = false;

    progressText.textContent = `Pregunta ${currentQuestionIndex + 1} de ${selectedQuestions.length}`;
    scoreLive.textContent = `Aciertos: ${score}`;
    questionText.textContent = currentQuestion.question;
    answerButtons.innerHTML = "";
    answerFeedback.innerHTML = "";
    nextButton.classList.add("hidden");

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.className = "answer-btn";
        button.type = "button";
        button.textContent = option;
        button.addEventListener("click", () => handleAnswer(index));
        answerButtons.appendChild(button);
    });
}

function handleAnswer(selectedIndex) {
    if (hasAnswered) {
        return;
    }

    hasAnswered = true;
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    const isCorrect = selectedIndex === currentQuestion.answer;
    const buttons = Array.from(answerButtons.children);

    playAudio(isCorrect ? correctSounds : errorSounds);

    buttons.forEach((button, index) => {
        button.disabled = true;

        if (index === currentQuestion.answer) {
            button.classList.add("correct");
        }

        if (index === selectedIndex && !isCorrect) {
            button.classList.add("incorrect");
        }
    });

    if (isCorrect) {
        score += 1;
        scoreLive.textContent = `Aciertos: ${score}`;
    }

    reviewData.push({
        question: currentQuestion.question,
        selected: currentQuestion.options[selectedIndex],
        correct: currentQuestion.options[currentQuestion.answer],
        isCorrect,
        explanation: currentQuestion.explanation
    });

    answerFeedback.innerHTML = isCorrect
        ? `<strong>Correcta.</strong>${currentQuestion.explanation}`
        : `<strong>Incorrecta.</strong>La respuesta correcta es: ${currentQuestion.options[currentQuestion.answer]}. ${currentQuestion.explanation}`;

    nextButton.classList.remove("hidden");
}

function goToNextQuestion() {
    currentQuestionIndex += 1;

    if (currentQuestionIndex < selectedQuestions.length) {
        renderQuestion();
        return;
    }

    showResults();
}

function showResults() {
    const percentage = Math.round((score / selectedQuestions.length) * 100);

    playSection.classList.add("hidden");
    resultsSection.classList.remove("hidden");

    finalScore.textContent = `Obtuviste ${score} de ${selectedQuestions.length} (${percentage}%)`;
    finalSummary.textContent = pickMessageByScore(score);

    reviewList.innerHTML = "";

    reviewData.forEach((item, index) => {
        const reviewCard = document.createElement("article");
        reviewCard.className = `review-item ${item.isCorrect ? "correct" : "incorrect"}`;
        reviewCard.innerHTML = `
            <h3>${index + 1}. ${item.question}</h3>
            <p><strong>Tu respuesta:</strong> ${item.selected}</p>
            <p><strong>Respuesta correcta:</strong> ${item.correct}</p>
            <p><strong>Revisión:</strong> ${item.explanation}</p>
        `;
        reviewList.appendChild(reviewCard);
    });
}

function returnToIntro() {
    pauseBackgroundMusic();
    resultsSection.classList.add("hidden");
    playSection.classList.add("hidden");
    introSection.classList.remove("hidden");
}

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", returnToIntro);
nextButton.addEventListener("click", goToNextQuestion);

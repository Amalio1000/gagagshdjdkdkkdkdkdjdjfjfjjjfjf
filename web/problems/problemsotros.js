button_array = [
  'mirate una miniserie',
  'mirate una serie en rumano',
  'mirate una serie en inglés con subtítulos', 
  'mirate una serie en inglés',
  'mirate una serie que te recuerde a tu infancia',
  'haz 10sentadillas',
  'haz 10 flexiones',
  'Que dice la letra de la primera canción que te salga en tiktok?',
  'Sabes que es un nootropico?Investiga un poco',
  'Sabes que es un efecto mandela?Investiga un poco',
  'Juega a algo de playgrounds!',
  'Sabes que,podrías verte el trailer de "Primal"(serie)',
  'Podrías verte el tráiler de "Media noche en Paris"(película)',
  'Podrías verte el tráiler de "Muñeca Rusa"(serie)' ,
  'Podrías verte el tráiler de "Glow"(serie)',
  'Podrías verte el tráiler de "Somos."(miniserie)',
  'Podrías verte "Thers a man in the woods"(corto)',
  'Podrías verte el "La ruta natural"(corto)',
  'Podrías verte "The crush"(corto)',
  'Podrías verte "como perder peso en 4 sencillos pasos"(corto)',
  'Podrías verte el tráiler de "After Life"(miniserie)',
  'Podrías verte el tráiler de "Airplane"(película)',
  'Podrías verte el tráiler de "Barry"(serie)',
  'Podrías verte el tráiler de "The Office"(serie)',
  'Podrías verte el tráiler de "Luca"(película)',
  'Podrías verte el tráiler de "Fleabag"(serie)',
  'Podrías verte el tráiler de "Six feet under"(serie)',
  'Podrías verte el tráiler de "The Umbrella academy"(serie)',
  
  ]
  function randombut () {
    random_index = Math.floor(Math.random() * button_array.length);
    
    selected_th = button_array[random_index]
    
    document.getElementById('response').innerHTML = `<h2 id="randomgh">${selected_th}</h2>`;
  }
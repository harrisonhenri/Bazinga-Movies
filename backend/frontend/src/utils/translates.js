export function translateStatus(status) {
  switch (status) {
    case 'Released':
      return 'Lançado';
    case 'Planned':
      return 'Futuro';
    default:
      return '';
  }
}

export function translateLanguage(language) {
  switch (language) {
    case 'Afrikaans':
      return 'Africano';
    case 'Albanian':
      return 'Albanês';
    case 'Arabic':
      return 'Árabe';
    case 'Basque':
      return 'Basco';
    case 'Belorussian':
      return 'Bielorusso';
    case 'Catalan':
      return 'Catalão';
    case 'Croatian':
      return 'Croata';
    case 'Czech':
      return 'Tcheco';
    case 'English':
      return 'Inglês';
    case 'French':
      return 'Francês';
    case 'German':
      return 'Alemão';
    case 'Greek':
      return 'Greco';
    case 'Hungarian':
      return 'Húngaro';
    case 'Italian':
      return 'Italiano';
    case 'Japanese':
      return 'Japonês';
    case 'Korean':
      return 'Coreano';
    case 'Russian':
      return 'Russo';
    case 'Spanish':
      return 'Espanhol';
    case 'Taiwanese':
      return 'Tailandês';
    case 'Turkish':
      return 'Turco';
    default:
      return '';
  }
}

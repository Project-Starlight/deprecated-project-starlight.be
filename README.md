# Project Starlight - Front-end

## Project setup
```
npm install
```

## Wat gebruikt dit project?

- [SwiperJS](https://swiperjs.com/)

## Toevoegen van een nieuw product aan de hoofdpagina:

Ga naar volgende JSON file: [producten.json](assets/js/data/producten.json)

Voeg vervolgends in de array het volgende toe met natuurlijk je eigen nieuwe waarden

```json
{
  "title": "naam product",
  "description": "beschrijving",
  "images": [
    {
      "src": "url naar image (start vaak met assets/...",
      "alt": "alt tekst voor image"
    },
    {
      "src": "url naar image (start vaak met assets/...",
      "alt": "alt tekst voor image"
    }
  ]
}
```

## Toevoegen van media (momenteel enkel foto's)

Ga naar de map assets/media en voeg hier je nieuwe foto toe. Zorg ervoor dat je de foto in de juiste map plaatst.

Afhankelijk van waar je de foto's wilt gebruiken zal je de foto's moeten toevoegen aan de HTML of de juiste file.

Image files:

- [producten.js](assets/js/data/producten.json)
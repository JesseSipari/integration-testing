# Hex to RGB Converter API (Integration testing -tehtävä)

REST API, joka muuntaa heksadesimaalivärit RGB-muotoon. Projekti on toteutettu osana **Ohjelmistojen ylläpito ja testaus** -kurssia.

## Teknologiat

- **Node.js** (v14 tai uudempi)
- **Express** - Web framework
- **Jest** - Yksikkötestaus
- **Supertest** - API integraatiotestaus

## Ominaisuudet

- Muuntaa 6-merkkiset hex-koodit (esim. `#FFFFFF`) RGB-objektiksi.
- Tukee lyhennettyjä 3-merkkisiä hex-koodeja (esim. `#FFF`).
- Validoi syötteen ja antaa virheilmoituksen virheellisistä arvoista.

## Asennus

1. Kloonaa repositorio.
2. Asenna riippuvuudet komennolla:

   ```bash
    npm install
    ```

## Käyttö

Käynnistä palvelin komennolla:

```bash
npm start

```

Palvelin käynnistyy oletuksena porttiin 3000.
API:n testaus selaimella tai Postmanilla osoitteessa:
`http://localhost:3000/hex-to-rgb?hex=#FF0000`

## Testaus

Projektissa on käytössä Jest ja Supertest.
Aja testit komennolla:

```bash
npm test

```

## Projektin rakenne

- `src/converter.js`: Logiikka hex-to-rgb muunnokselle.
  
- `src/server.js`: Express-palvelin ja reitit.

- `tests/`: Yksikkö- ja integraatiotestit.

---

// Structured data for search engines. `<` is escaped because the data now
// includes article text: a stray "</script>" inside a string would otherwise
// close the element early and spill the rest of the JSON onto the page.
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}

export default function Person({ name, mail }) {
    return (
        <article>
            <h2>{name}</h2>
            <a href={`mailto:${mail}`}>{mail}</a>
        </article>
    );
}

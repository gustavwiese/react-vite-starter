export default function Member({ member }) {
  return (
    <article>
      <h2>
        {member.firstName} {member.lastName}
      </h2>
      <a href={`mailto:${member.email}`}>{member.email}</a>
    </article>
  );
}

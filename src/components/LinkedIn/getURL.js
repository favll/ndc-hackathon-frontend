export default function({ clientId, state, scope }) {
  const current = "http://localhost:3000/linkedin/callback"; //encodeURIComponent(window.location.href);
  const base =
    "https://www.linkedin.com/oauth/v2/authorization?response_type=code&";
  const fullScope =
    scope && scope.length
      ? `&scope=${encodeURIComponent(scope.join(" "))}`
      : "";
  return `${base}client_id=${clientId}&state=${state}&redirect_uri=${current}${fullScope}`;
}

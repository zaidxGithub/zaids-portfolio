export default function Loader({ isHidden }) {
  return (
    <div className={`loader-screen ${isHidden ? "is-hidden" : ""}`} aria-label="Loading portfolio">
      <div className="loader-mark">MZ<span>.</span></div>
      <div className="loader-name">Mohammad Zaid</div>
      <div className="loader-line"><span /></div>
      <p>Loading portfolio...</p>
    </div>
  );
}

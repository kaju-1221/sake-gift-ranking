/* 共有UIパーツ */

function Stars({ n, max = 5 }) {
  return (
    <span className="stars" aria-label={`レア度 ${n} / ${max}`}>
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} className={i < n ? "" : "off"}>★</span>
      ))}
    </span>
  );
}

function Placeholder({ tag, className = "", style = {}, note }) {
  return (
    <div className={`ph ${className}`} style={style} role="img" aria-label={tag}>
      <div className="ph__tag">
        {tag}
        {note ? <><br />{note}</> : null}
      </div>
    </div>
  );
}

/* 画像があれば <img>、無ければプレースホルダー */
function Media({ imgKey, src, tag, note, className = "", style = {}, contain = false, position }) {
  const url = src || (window.SAKE_IMG && window.SAKE_IMG[imgKey]);
  if (!url) return <Placeholder tag={tag} note={note} className={className} style={style} />;
  return (
    <div className={`media ${contain ? "contain" : ""} ${className}`} style={style}>
      <img className="imgfill" src={url} alt={tag} loading="lazy"
        style={position ? { objectPosition: position } : undefined} />
    </div>
  );
}

/* 味のタイプ 3軸 */
const AXIS_DEFS = [
  { key: "sweet",  l: "甘口",   r: "辛口" },
  { key: "body",   l: "淡麗",   r: "濃醇" },
  { key: "mature", l: "華やか", r: "熟成" },
];
function TasteAxes({ axes }) {
  return (
    <div className="axes">
      {AXIS_DEFS.map((d) => (
        <div className="axis" key={d.key}>
          <span className="l">{d.l}</span>
          <span className="axis__track">
            <span className="axis__dot" style={{ left: `${axes[d.key]}%` }} />
          </span>
          <span className="r">{d.r}</span>
        </div>
      ))}
    </div>
  );
}

/* 小さな線アイコン（墨/藍の線画・自前SVGは単純図形のみ） */
function Icon({ name }) {
  const s = { width: 22, height: 22, fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "budget":
      return (<svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="8" /><path d="M12 8v8M9.5 10.5h3.2a1.5 1.5 0 0 1 0 3H9.8" /></svg>);
    case "taste":
      return (<svg viewBox="0 0 24 24" {...s}><path d="M6 4h12l-1.2 9a4.8 4.8 0 0 1-9.6 0L6 4Z" /><path d="M9 17v3M15 17v3M8 20h8" /></svg>);
    case "scene":
      return (<svg viewBox="0 0 24 24" {...s}><rect x="4" y="9" width="16" height="11" rx="1" /><path d="M4 12h16M12 9v11M12 9c-1.8-3-5.5-2.4-5.5 0M12 9c1.8-3 5.5-2.4 5.5 0" /></svg>);
    case "arrow":
      return (<svg viewBox="0 0 24 24" {...s} className="ar"><path d="M5 12h14M13 6l6 6-6 6" /></svg>);
    case "check":
      return (<svg viewBox="0 0 24 24" {...s}><path d="M5 12.5l4.5 4.5L19 7" /></svg>);
    case "down":
      return (<svg viewBox="0 0 24 24" {...s}><path d="M6 9l6 6 6-6" /></svg>);
    case "ext":
      return (<svg viewBox="0 0 24 24" {...s}><path d="M14 5h5v5M19 5l-8 8M11 5H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5" /></svg>);
    default:
      return null;
  }
}

Object.assign(window, { Stars, Placeholder, Media, TasteAxes, Icon, AXIS_DEFS });

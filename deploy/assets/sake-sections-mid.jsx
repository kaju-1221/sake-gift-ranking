/* 中盤セクション: 比較表（ソート可）/ おすすめランキング */

const RARITY_LEGEND = [
  ["★5", "年1回・数量極小・長期熟成など極めて希少"],
  ["★4", "蔵元/店限定・BY限定・雫取り等の特別仕込み"],
  ["★3", "季節限定・生酒など時期や数量に制約"],
  ["★2", "人気銘柄で比較的入手しやすい定番"],
  ["★1", "通年安定して手に入る"],
];

const CMP_COLS = [
  { key: "rank",   label: "順位",        sortable: true,  type: "num" },
  { key: "name",   label: "銘柄",        sortable: false, type: "str" },
  { key: "type",   label: "種類",        sortable: false, type: "str" },
  { key: "region", label: "地域（蔵元）", sortable: false, type: "str" },
  { key: "rarity", label: "レア度",      sortable: true,  type: "num" },
  { key: "tasteAxis", label: "味タイプ",  sortable: false, type: "num" },
  { key: "food",   label: "合う料理",    sortable: false, type: "str" },
  { key: "price",  label: "価格",        sortable: true,  type: "num" },
  { key: "buy",    label: "購入",        sortable: false },
];

function ComparisonTable() {
  const [sort, setSort] = React.useState({ key: "rank", dir: 1 });

  const rows = React.useMemo(() => {
    const data = [...window.SAKE_DATA];
    const { key, dir } = sort;
    data.sort((a, b) => {
      let av, bv;
      if (key === "price") {
        av = Number(String(a.price).replace(/[^\d]/g, ""));
        bv = Number(String(b.price).replace(/[^\d]/g, ""));
      } else { av = a[key]; bv = b[key]; }
      if (typeof av === "string") return av.localeCompare(bv, "ja") * dir;
      return (av - bv) * dir;
    });
    return data;
  }, [sort]);

  function onSort(col) {
    if (!col.sortable) return;
    setSort((s) => s.key === col.key ? { key: col.key, dir: -s.dir } : { key: col.key, dir: 1 });
  }

  return (
    <section className="section" id="compare">
      <div className="wrap">
        <div className="eyebrow">10銘柄をまとめて比較</div>
        <h2 className="section-title">ひと目で分かる、比較表。</h2>
        <p className="section-lead">
          価格・レア度・地域・味タイプ・合う料理を横断比較。<br />見出しをタップすると並び替えできます。
        </p>

        <div className="rarity-note">
          <span className="ttl">レア度の見方</span>
          {RARITY_LEGEND.map((r, i) => (
            <span key={i}><b>{r[0]}</b>…{r[1]}</span>
          ))}
        </div>

        <div className="table-scroll">
          <table className="cmp">
            <thead>
              <tr>
                {CMP_COLS.map((c) => (
                  <th
                    key={c.key}
                    className={`${c.sortable ? "" : "no-sort"} ${sort.key === c.key ? "sorted" : ""}`}
                    onClick={() => onSort(c)}
                  >
                    {c.label}
                    {c.sortable && (
                      <span className="arw">{sort.key === c.key ? (sort.dir === 1 ? "▲" : "▼") : "◇"}</span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((d) => (
                <tr key={d.rank}>
                  <td className="c-rank" data-label="順位">{d.rank}</td>
                  <td className="c-name" data-label="銘柄">{d.name}</td>
                  <td className="c-type" data-label="種類">{d.type}</td>
                  <td className="c-region" data-label="地域">
                    {d.regionTbd ? <span className="tbd-pill">要確認</span> : d.region}
                  </td>
                  <td data-label="レア度"><Stars n={d.rarity} /></td>
                  <td className="c-taste" data-label="味タイプ">{d.taste}</td>
                  <td className="c-food" data-label="合う料理">{d.food}</td>
                  <td className="c-price" data-label="価格">
                    {d.priceTbd ? <span className="tbd">要確認</span> : d.price}
                  </td>
                  <td className="c-buy" data-label="購入">
                    <a href={d.url} target="_blank" rel="noopener noreferrer">購入<Icon name="ext" /></a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ---------- おすすめランキング ---------- */
function RankCard({ d }) {
  return (
    <article className={`rcard ${d.rank === 1 ? "rcard--top1" : ""}`}>
      <div className="rcard__media">
        <div className="rank-badge">
          <span className="lab">NO.</span>
          <span className="n">{d.rank}</span>
        </div>
        <Media src={d.photo} style={{ width: "100%", height: "100%", borderRadius: 2 }}
          tag={d.name} position="center 35%" />
      </div>
      <div className="rcard__body">
        <div className="rcard__type">{d.type}</div>
        <h3 className="rcard__name">{d.name}</h3>
        <p className="rcard__review">
          {d.review}
          <span className="by">— 唎酒師 日本酒屋店主の神前より</span>
        </p>

        <div className="rcard__meta">
          <div className="mrow">
            <span className="k">地域（蔵元）</span>
            <span className={`v ${d.regionTbd ? "tbd" : ""}`}>{d.regionTbd ? "要確認" : d.region}</span>
          </div>
          <div className="mrow">
            <span className="k">レア度</span>
            <span className="v"><Stars n={d.rarity} /></span>
          </div>
          <div className="mrow">
            <span className="k">合う料理</span>
            <span className="v">{d.food}</span>
          </div>
          <div className="mrow">
            <span className="k">価格</span>
            <span className={`v ${d.priceTbd ? "tbd" : ""}`}>{d.priceTbd ? "要確認" : d.price}</span>
          </div>
          <div className="mrow" style={{ gridColumn: "1 / -1" }}>
            <span className="k">味のタイプ</span>
            <TasteAxes axes={d.axes} />
          </div>
        </div>

        <div className="rcard__for">
          <span className="k">こんな人に</span>{d.forWhom}
        </div>

        <div className="rcard__cta">
          <a href={d.url} target="_blank" rel="noopener noreferrer" className="btn btn--shop" style={{ width: "auto", flex: 1, minWidth: 220 }}>
            この日本酒を見る<Icon name="ext" />
          </a>
          <span className="rcard__price">{d.priceTbd ? <span className="tbd">価格 要確認</span> : d.price}</span>
        </div>
      </div>
    </article>
  );
}

function Ranking() {
  return (
    <section className="section section--tint" id="ranking">
      <div className="wrap">
        <div className="eyebrow">唎酒師のおすすめランキング</div>
        <h2 className="section-title">1位から順に、プロが本気で選んだ10本。</h2>
        <p className="section-lead">
          それぞれにプロの一言レビューと、味のタイプ・合う料理・おすすめの相手を添えました。気になる一本は、そのまま商品ページへ。
        </p>
        <div className="rank-list">
          {window.SAKE_DATA.map((d) => <RankCard d={d} key={d.rank} />)}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ComparisonTable, Ranking });

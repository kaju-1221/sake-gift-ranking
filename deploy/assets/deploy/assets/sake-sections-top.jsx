/* 上部セクション: ヒーロー（3バリエーション）/ 監修者 / 失敗しない選び方 */

const HERO_BADGES = [
  { ic: "check", t: "唎酒師 監修" },
  { ic: "check", t: "全国の地酒10本を比較" },
  { ic: "check", t: "ギフト配送・ギフト包装" },
];

function HeroBadges() {
  return (
    <div className="badges hero__badges">
      {HERO_BADGES.map((b, i) => (
        <span className="badge" key={i}>
          <span className="seal"><Icon name="check" /></span>{b.t}
        </span>
      ))}
    </div>
  );
}

function HeroText({ variant }) {
  return (
    <div className="hero__copy">
      <div className="hero__kicker">唎酒師 SELECTION ｜ 父の日・記念日のギフトに</div>
      <h1>
        記念日の<br />贈り物にぴったり<br />
        <span className="accentword">唎酒師が選ぶ</span><br />
        ギフト日本酒 <span className="accentword">10選</span>
      </h1>
      <p className="hero__sub">
        「日本酒は詳しくないけど、プレゼントで失敗したくない」。
        そんなあなたに代わって、日本酒のプロが全国の地酒を本気で選定・比較しました。
      </p>
      <div className="hero__cta">
        <a href="#ranking" className="btn btn--primary">ランキングを見る<Icon name="arrow" /></a>
        <a href="#guide" className="btn btn--ghost">失敗しない選び方</a>
      </div>
      {variant !== "editorial" && <HeroBadges />}
    </div>
  );
}

function Hero({ variant }) {
  return (
    <header className={`hero hero--${variant}`}>
      <span className="hero__age">20歳未満の飲酒・購入はできません</span>
      <div className="wrap hero__inner">
        {variant === "centered" && (
          <>
            <HeroText variant={variant} />
            <Media imgKey="hero169" className="hero__media" tag="ヒーロー画像" />
          </>
        )}
        {variant === "split" && (
          <>
            <HeroText variant={variant} />
            <Media imgKey="hero45" className="hero__media" tag="ヒーロー画像" position="center" />
          </>
        )}
        {variant === "editorial" && (
          <>
            <HeroText variant={variant} />
            <div className="hero__row">
              <HeroBadges />
              <div className="hero__seal-line" style={{ minWidth: 160 }}>SINCE THE FINEST BREWERIES</div>
            </div>
            <Media imgKey="hero169" className="hero__media" tag="ヒーロー画像" position="center 35%" />
          </>
        )}
      </div>
    </header>
  );
}

/* ---------- 監修者紹介 ---------- */
const SV_QUALS = ["唎酒師", "日本酒検定", "ギフトコンシェルジュ"];
const SV_REASONS = [
  { t: "“違いが分かる”プロの舌で選定", b: "数百種を利き分ける唎酒師が、香り・味・余韻を実際に確かめて10本に厳選しています。" },
  { t: "贈る相手・シーンから逆算", b: "「誰に・どんな場面で」を起点に選ぶから、相手の食卓にちゃんと馴染む一本が見つかります。" },
  { t: "価格・レア度の基準を明示", b: "選定理由とレア度の基準を公開。なんとなくではなく、納得して選べる比較になっています。" },
];

function Supervisor() {
  return (
    <section className="section section--tint" id="supervisor">
      <div className="wrap">
        <div className="eyebrow">監修者について</div>
        <h2 className="section-title">なぜ、プロが選ぶと“外さない”のか。</h2>
        <p className="section-lead">
          このランキングは、日本酒のプロである唎酒師が選定・監修しています。
          自分で選ぶのが難しいギフトだからこそ、選ぶ人の確かさが、贈り物の安心につながります。
        </p>
        <div className="sv__grid">
          <Media imgKey="emblem" className="sv__photo" tag="監修者・資格エンブレム" contain={true} />
          <div>
            <h3 className="sv__name">唎酒師 日本酒屋店主の神前氏が厳選</h3>
            <div className="sv__role">日本酒屋 店主 ／ 唎酒師</div>
            <div className="sv__quals">
              {SV_QUALS.map((q, i) => (
                <span className="qual" key={i}><Icon name="check" />{q}</span>
              ))}
            </div>
            <div className="sv__reasons">
              {SV_REASONS.map((r, i) => (
                <div className="reason" key={i}>
                  <div className="reason__no">{String(i + 1).padStart(2, "0")}</div>
                  <div>
                    <div className="reason__t">{r.t}</div>
                    <div className="reason__b">{r.b}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 失敗しない選び方 ---------- */
const GUIDE_STEPS = [
  {
    ic: "budget", no: "STEP 01", t: "予算で決める",
    items: [["〜3,000円", "気軽な贈り物に"], ["3,000〜5,000円", "父の日・誕生日に"], ["5,000円〜", "還暦・特別な記念日に"]],
  },
  {
    ic: "taste", no: "STEP 02", t: "相手の好みで決める",
    items: [["お酒好き・通", "熟成 / 樽熟 / 古酒"], ["華やかが好き", "純米大吟醸"], ["スパークリング好き", "発泡・生酒"], ["甘め・飲みやすい", "フルーティ生酒"]],
  },
  {
    ic: "scene", no: "STEP 03", t: "シーンで決める",
    items: [["父の日", "好みに合わせて"], ["還暦・退職祝い", "熟成・古酒"], ["乾杯したいお祝い", "発泡・にごり"]],
  },
];

function Guide() {
  return (
    <section className="section" id="guide">
      <div className="wrap">
        <div className="eyebrow">失敗しない選び方</div>
        <h2 className="section-title"><span className="sp-br">3ステップで、</span><span className="sp-br">初心者でも迷わない。</span></h2>
        <p className="section-lead">
          「予算 → 相手の好み → シーン」の順に絞るだけ。<br />下のフローチャートに沿えば、あなたに合う一本にたどり着けます。
        </p>
        <Media imgKey="guide" className="guide-banner" tag="選び方アイコン" />
        <div className="steps">
          {GUIDE_STEPS.map((s, i) => (
            <div className="step" key={i}>
              <div className="step__icon"><Icon name={s.ic} /></div>
              <div className="step__no">{s.no}</div>
              <h3>{s.t}</h3>
              <ul>
                {s.items.map((it, j) => (
                  <li key={j}><b>{it[0]}</b>{it[1] ? `／${it[1]}` : ""}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <FlowChart />
      </div>
    </section>
  );
}

/* インタラクティブ・フローチャート */
function FlowChart() {
  const [ans, setAns] = React.useState(null);     // 'yes' | 'no'
  const [taste, setTaste] = React.useState(null); // 'hanayaka' | 'amai'
  const pick = (r) => window.SAKE_DATA.find((d) => d.rank === r);
  const reset = () => { setAns(null); setTaste(null); };

  let heading = null, results = null;
  if (ans === "yes") { heading = "熟成・樽熟・古酒がおすすめ"; results = [3, 5, 6].map(pick); }
  else if (ans === "no" && taste === "hanayaka") { heading = "華やかな純米大吟醸がおすすめ"; results = [1, 4].map(pick); }
  else if (ans === "no" && taste === "amai") { heading = "甘め・フルーティな生酒がおすすめ"; results = [7, 8].map(pick); }

  return (
    <div className="flow">
      <div className="flow__head">
        <h3>かんたんフローチャート</h3>
        <span className="tag">— 質問に答えると、おすすめの一本が見つかります</span>
      </div>
      <div className="flow__tree">
        <div className="flow__q">相手は日本酒に詳しい？</div>
        <div className="flow__btns">
          <button className={`flow__btn ${ans === "yes" ? "is-active" : ""}`}
            onClick={() => { setAns("yes"); setTaste(null); }}>はい</button>
          <button className={`flow__btn ${ans === "no" ? "is-active" : ""}`}
            onClick={() => { setAns("no"); setTaste(null); }}>いいえ</button>
        </div>

        {ans === "no" && (
          <>
            <div className="flow__q flow__q--sub">華やか or 甘め、どちらが好き？</div>
            <div className="flow__btns">
              <button className={`flow__btn ${taste === "hanayaka" ? "is-active" : ""}`}
                onClick={() => setTaste("hanayaka")}>華やか</button>
              <button className={`flow__btn ${taste === "amai" ? "is-active" : ""}`}
                onClick={() => setTaste("amai")}>甘め</button>
            </div>
          </>
        )}

        {results && (
          <div className="flow__answer">
            <div className="flow__reshead">{heading}</div>
            <div className="flow__results">
              {results.map((d) => (
                <a key={d.rank} className="flow__rescard" href={d.url} target="_blank" rel="noopener noreferrer">
                  <Media src={d.photo} className="pic" tag={d.name} position="center 35%" />
                  <span className="rk">No.{d.rank}　<span className="rk-star">{"★".repeat(d.rarity)}</span></span>
                  <span className="nm">{d.name}</span>
                  <span className="go">この一本を見る<Icon name="ext" /></span>
                </a>
              ))}
            </div>
            <button className="flow__reset" onClick={reset}>最初からやり直す</button>
          </div>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { Hero, Supervisor, Guide });

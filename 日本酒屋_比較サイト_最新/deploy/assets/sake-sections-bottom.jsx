/* 下部セクション: シーン別 / FAQ / 最終CTA / フッター / 年齢確認モーダル */

function byRank(r) { return window.SAKE_DATA.find((d) => d.rank === r); }

/* ---------- シーン別おすすめ（タブ） ---------- */
function SceneTabs() {
  const scenes = window.SAKE_SCENES;
  const [active, setActive] = React.useState(0);
  const sc = scenes[active];
  return (
    <section className="section" id="scenes">
      <div className="wrap">
        <div className="eyebrow">シーン別おすすめ</div>
        <h2 className="section-title">贈る場面から、選ぶ。</h2>
        <p className="section-lead">
          「父の日なら」「還暦祝いなら」。シーンを選ぶと、そのとき外さない2本がすぐ分かります。
        </p>
        <Media imgKey="sceneFather" className="scene-banner" tag="ギフトイメージ" position="center 40%" />
        <div className="tabs" role="tablist">
          {scenes.map((s, i) => (
            <button key={s.id} className={`tab ${i === active ? "is-active" : ""}`}
              role="tab" aria-selected={i === active} onClick={() => setActive(i)}>
              {s.label}
            </button>
          ))}
        </div>
        <div className="scene-pane">
          <p className="scene-lead">{sc.lead}</p>
          {sc.picks.map((p, i) => {
            const d = byRank(p.rank);
            return (
              <a className="scene-pick" key={i} href={d.url} target="_blank" rel="noopener noreferrer">
                <Media src={d.photo} className="scene-pick__media" tag={d.name} position="center 35%" />
                <div>
                  <div className="scene-pick__rank">RANK NO.{d.rank}</div>
                  <div className="scene-pick__name">{d.name}</div>
                  <div className="scene-pick__note">{p.note}</div>
                  <span className="go">この一本を見る<Icon name="ext" /></span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="section section--tint" id="faq">
      <div className="wrap">
        <div className="eyebrow">よくある質問</div>
        <h2 className="section-title">贈る前の、不安を解消。</h2>
        <div className="faq">
          {window.SAKE_FAQ.map((f, i) => {
            const isOpen = open === i;
            return (
              <div className={`faq__item ${isOpen ? "is-open" : ""}`} key={i}>
                <button className="faq__q" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)}>
                  <span className="qmark">Q</span>
                  <span>{f.q}</span>
                  <span className="ic" />
                </button>
                <div className="faq__a" style={{ maxHeight: isOpen ? 360 : 0 }}>
                  <div className="faq__a-inner">{f.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- 最終CTA ---------- */
function FinalCTA() {
  const d = byRank(4); // 迷ったらこの1本＝間違いのない純米大吟醸（杜来）
  return (
    <section className="section" id="final">
      <div className="wrap">
        <div className="final">
          <Media src={d.photo} className="final__media" tag={d.name} position="center 35%" />
          <div className="final__body">
            <div className="final__eyebrow">迷ったら、この1本。</div>
            <h2 className="final__title">どれを選ぶか迷ったら、<br />まずはこちらを。</h2>
            <div className="final__name">No.{d.rank}　{d.name}</div>
            <p className="final__review">
              華やかで上品、相手を選ばない純米大吟醸。日本酒好きの方にも、そうでない方にも自信を持って贈れる「間違いのない一本」です。
            </p>
            <div className="final__cta">
              <a href={d.url} target="_blank" rel="noopener noreferrer" className="btn btn--big btn--gold">
                この日本酒を見る<Icon name="ext" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- フッター ---------- */
function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot__pr">
          <div className="li"><span><b>本サイトは「日本酒屋」が運営する広告（PR）です。</b>第三者を装うものではありません。</span></div>
          <div className="li"><span>お酒は20歳になってから。<b>20歳未満の飲酒・購入は法律で禁止されています。</b></span></div>
          <div className="li"><span>お酒は楽しく適量を。飲酒運転は法律で禁止されています。</span></div>
        </div>
        <div className="foot__grid">
          <div>
            <div className="foot__brand">日本酒屋セレクション</div>
            <p style={{ margin: "10px 0 0", maxWidth: "42ch" }}>
              唎酒師が選ぶ、記念日の贈り物にぴったりのギフト日本酒の比較・ランキング
            </p>
          </div>
          <nav className="foot__links">
            <a href="#ranking">ランキング</a>
            <a href="#compare">比較表</a>
            <a href="#guide">選び方</a>
            <a href="#faq">よくある質問</a>
            <a href="https://nihonshuya.stores.jp/" target="_blank" rel="noopener noreferrer">日本酒屋（EC）</a>
            <a href="#">特定商取引法に基づく表記</a>
            <a href="#">運営者情報</a>
          </nav>
        </div>
        <div className="foot__copy">© 日本酒屋セレクション ｜ 掲載の価格・在庫・産地は各商品ページの最新情報をご確認ください。</div>
      </div>
    </footer>
  );
}

/* ---------- 年齢確認モーダル ---------- */
function AgeGate() {
  const [state, setState] = React.useState(() => {
    try { return sessionStorage.getItem("sake_age_ok") === "1" ? "passed" : "ask"; }
    catch (e) { return "ask"; }
  });
  if (state === "passed") return null;
  function allow() {
    try { sessionStorage.setItem("sake_age_ok", "1"); } catch (e) {}
    setState("passed");
  }
  return (
    <div className="agegate" role="dialog" aria-modal="true" aria-label="年齢確認">
      <div className="agegate__card">
        <div className="agegate__seal">酒</div>
        {state === "ask" ? (
          <>
            <h2>年齢確認</h2>
            <p>
              本サイトはお酒に関する情報を含みます。<br />
              20歳未満の飲酒・購入は法律で禁止されています。<br />
              あなたは20歳以上ですか？
            </p>
            <div className="agegate__btns">
              <button className="btn btn--primary" onClick={allow}>はい（20歳以上）</button>
              <button className="agegate__deny" onClick={() => setState("blocked")}>いいえ（20歳未満）</button>
            </div>
          </>
        ) : (
          <>
            <h2>ご利用いただけません</h2>
            <p className="agegate__blocked">
              20歳未満の方の飲酒・購入は法律で禁止されています。<br />
              <span style={{ fontWeight: 400, color: "var(--ink-soft)" }}>20歳になられたら、またお越しください。</span>
            </p>
            <div className="agegate__btns">
              <button className="btn btn--ghost" onClick={() => setState("ask")}>戻る</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { SceneTabs, FAQ, FinalCTA, Footer, AgeGate });

/* App — Tweaks（アクセント色・FVの見せ方）＋ 全セクション組み立て */

const ACCENTS = {
  "藍": {
    "--accent": "#1d3a5b", "--accent-deep": "#142a44",
    "--accent-tint": "#e8edf2", "--accent-line": "rgba(29,58,91,0.22)",
  },
  "臙脂": {
    "--accent": "#7a2230", "--accent-deep": "#591722",
    "--accent-tint": "#f3e7e9", "--accent-line": "rgba(122,34,48,0.22)",
  },
};

const HERO_LABELS = { "中央寄せ": "centered", "左右分割": "split", "雑誌風": "editorial" };

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "臙脂",
  "heroLayout": "雑誌風",
  "goldAccent": true
}/*EDITMODE-END*/;

function StickyCTA() {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    function onScroll() { setShow(window.scrollY > 640); }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={`stickycta ${show ? "show" : ""}`}>
      <span className="lab"><b>唎酒師が選ぶ10本。</b><br />気になる一本をチェック</span>
      <a href="#ranking" className="btn btn--primary" style={{ padding: "12px 20px" }}>ランキング<Icon name="arrow" /></a>
    </div>
  );
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const vars = ACCENTS[t.accent] || ACCENTS["藍"];
    Object.entries(vars).forEach(([k, v]) => document.documentElement.style.setProperty(k, v));
    document.documentElement.style.setProperty("--gold", t.goldAccent ? "#a9823c" : "var(--ink-soft)");
    document.documentElement.style.setProperty("--gold-soft", t.goldAccent ? "#c8a35a" : "#8a8377");
  }, [t.accent, t.goldAccent]);

  const heroVariant = HERO_LABELS[t.heroLayout] || "centered";

  return (
    <>
      <div className="legalbar">
        お酒は20歳になってから。<b>20歳未満の飲酒・購入は法律で禁止されています。</b>　｜　本サイトは「日本酒屋」が運営する広告（PR）です。
      </div>

      <Hero variant={heroVariant} />
      <Supervisor />
      <Guide />
      <Ranking />
      <ComparisonTable />
      <SceneTabs />
      <FAQ />
      <FinalCTA />
      <Footer />

      <StickyCTA />
      <AgeGate />

      <TweaksPanel>
        <TweakSection label="アクセントカラー" />
        <TweakRadio label="差し色" value={t.accent} options={["藍", "臙脂"]}
          onChange={(v) => setTweak("accent", v)} />
        <TweakToggle label="金の差し色を使う" value={t.goldAccent}
          onChange={(v) => setTweak("goldAccent", v)} />
        <TweakSection label="ヒーロー（FV）の見せ方" />
        <TweakRadio label="レイアウト" value={t.heroLayout}
          options={["中央寄せ", "左右分割", "雑誌風"]}
          onChange={(v) => setTweak("heroLayout", v)} />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

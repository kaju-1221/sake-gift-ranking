/* バナー画像（ChatGPT生成・アップロード済み） */
window.SAKE_IMG = {
  hero169: "assets/img/hero-16x9.png",
  hero45:  "assets/img/hero-4x5.png",
  emblem:  "assets/img/emblem.png",
  guide:   "assets/img/guide-icons.png",
  sceneFather: "assets/img/scene-fathersday.png",
  ctaBand: "assets/img/cta-band.png",
};

/* 商品データ（ランキング順）。価格・産地は確定値。
   axes は 甘口⇄辛口 / 淡麗⇄濃醇 / 華やか⇄熟成 の3軸（0=左・100=右）。 */
window.SAKE_DATA = [
  {
    rank: 1,
    name: "暴君 純米大吟醸 斗ビン囲い 活性滓酒 2024BY",
    photo: "assets/img/products/02-bokun.avif",
    type: "純米大吟醸 / 活性にごり（微発泡）",
    region: "静岡県（英君酒造）",
    regionTbd: false,
    rarity: 5,
    taste: "上品で穏やか・米の甘旨味",
    food: "乾杯 / カルパッチョ / 天ぷら",
    scene: "記念日の特別な贈り物に",
    forWhom: "限定36本の希少酒を、記念日の特別な贈り物に",
    price: "¥11,000",
    priceTbd: false,
    review: "暴君という名前からは想像がつきにくい、上品で穏やかな香りと米の甘味と旨味がしっかりしたきれいなお酒です。純米大吟醸・大吟醸の鑑評会用出品酒を取るために「袋吊り（斗ビン囲い）」という手法を使い、手間暇をかけて搾った貴重な日本酒です。限定36本・シリアルナンバー入りのお酒のためレア度はナンバーワン。希少性の高い「暴君」を、記念日の贈り物にぴったりの一本です。",
    axes: { sweet: 50, body: 52, mature: 25 },
    url: "https://nihonshuya.stores.jp/items/664029a3006ad131e38ffa5d"
  },
  {
    rank: 2,
    name: "尾仲 純米吟醸 スパークリング生酒 BY2025",
    photo: "assets/img/products/06-onaka.avif",
    type: "スパークリング生酒",
    region: "富山県（成政酒造）",
    regionTbd: false,
    rarity: 5,
    taste: "微発泡・爽やか・軽快",
    food: "乾杯 / 前菜 / サラダ",
    scene: "お祝い・女性へ",
    forWhom: "流通量の少ない入手困難な限定酒を、お祝いの席へ",
    price: "¥3,000",
    priceTbd: false,
    review: "学習院大学理学部で酵母を研究する尾仲宏康教授が、自然発酵ワインで知られる栃木のココ・ファーム・ワイナリーで採取したオリジナルの野生ワイン酵母で醸した日本酒です。2025年末のクラウドファンディングMakuakeでは達成率222％で終了した大人気酒。一般販売はほぼ日本酒屋のみという入手困難な限定酒を、プレゼントにぜひ。",
    axes: { sweet: 42, body: 24, mature: 18 },
    url: "https://nihonshuya.stores.jp/items/6961f171b354bf23d009760c"
  },
  {
    rank: 3,
    name: "常温熟成古酒（30年）",
    photo: "assets/img/products/01-koshu.avif",
    type: "長期熟成古酒",
    region: "和歌山県（吉村秀雄商店）",
    regionTbd: false,
    rarity: 5,
    taste: "濃厚・熟成香・ビターな後口",
    food: "ジビエ / 中華 / ビターチョコ",
    scene: "日本酒通な方へ",
    forWhom: "地元でも希少。日本酒通な方へのプレゼントに",
    price: "¥5,000",
    priceTbd: false,
    review: "30年間常温で熟成させた古酒で、地元でもほとんど流通していない希少酒。日本酒通な方へのプレゼントにおすすめです。ジビエや中華、エスニックなど、しっかりした味の料理に好相性。ブランデーのようなすっきりとした苦味の後口で、ビターチョコレートとの相性も抜群です。デザイナーHARISSAによる、日本酒屋オリジナルラベルでお届けします。",
    axes: { sweet: 58, body: 92, mature: 95 },
    url: "https://nihonshuya.stores.jp/items/63fbd51f3313d233f5caa8d6"
  },
  {
    rank: 4,
    name: "杜来 純米大吟醸 山田錦 雫取り 秘蔵酒",
    photo: "assets/img/products/03-torai.avif",
    type: "純米大吟醸",
    region: "青森県弘前市（六花酒造）",
    regionTbd: false,
    rarity: 4,
    taste: "上品な吟醸香・華やか",
    food: "刺身 / 出汁巻き / 鴨ロースト",
    scene: "ワンランク上のギフトに",
    forWhom: "間違いのない上質さを贈りたい、目上の方へ",
    price: "¥10,000",
    priceTbd: false,
    review: "山田錦を雫取りで搾った、雑味のない端正な味わい。気品ある吟醸香と絹のような口当たりは、まさに“秘蔵”の名にふさわしい。日本酒に親しんだ方にも自信を持って贈れる、ワンランク上の正統派です。",
    axes: { sweet: 52, body: 40, mature: 30 },
    url: "https://nihonshuya.stores.jp/items/6922bf629ad1d55d154718f7"
  },
  {
    rank: 5,
    name: "水酛純米原酒 ホワイトオーク樽熟成",
    photo: "assets/img/products/04-mizumoto-oak.avif",
    type: "水酛 × 樽熟成・原酒",
    region: "兵庫県（江井ヶ嶋酒造）",
    regionTbd: false,
    rarity: 4,
    taste: "樽香・複雑・コク",
    food: "燻製 / ローストビーフ / チーズ",
    scene: "ワイン・ウイスキー好きへ",
    forWhom: "日本酒もウイスキーも好き、という方への贈り物に",
    price: "¥3,000",
    priceTbd: false,
    review: "樽由来のバニラやハチミツ、カラメルを思わせる甘いフレーバーに、微かなスモーキーさと水酛特有の乳酸系の香りが複雑に重なります。水酛由来の厚みのある甘旨味と、樽から抽出された芳醇な熟味が調和し、余韻は日本酒というよりもウイスキーを彷彿とさせる独特な深みへと続きます。日本酒もウイスキーも好き、という方への贈り物としてぴったりです。",
    axes: { sweet: 40, body: 78, mature: 70 },
    url: "https://nihonshuya.stores.jp/items/69ec54cc73db3d5a9421b49f"
  },
  {
    rank: 6,
    name: "Narai sankei Type D 熟成",
    photo: "assets/img/products/05-narai.avif",
    type: "クラフトサケ・熟成",
    region: "長野県（杉の森酒造）",
    regionTbd: false,
    rarity: 4,
    taste: "個性派・複雑・熟成",
    food: "ワイン的ペアリング全般",
    scene: "通な相手へ",
    forWhom: "特別な一本が欲しい、お酒に詳しい相手へ",
    price: "¥8,800",
    priceTbd: false,
    review: "長野県安曇野産の酒米を、奈良井の天然山水で丁寧に仕込んだきれいなお酒。約10年休眠していた歴史ある酒蔵の再生第一弾です。既存の枠にとらわれないクラフトサケをさらに熟成させた挑戦的な一本で、複雑に折り重なる香味はまるで自然派ワイン。特別な一本が欲しい、そんなときにおすすめの日本酒です。",
    axes: { sweet: 52, body: 72, mature: 75 },
    url: "https://nihonshuya.stores.jp/items/66237001f56a721a59eb62cb"
  },
  {
    rank: 7,
    name: "日本魂 純米無濾過 生原酒 水酛甘露",
    photo: "assets/img/products/07-nihonkon.avif",
    type: "水酛・無濾過生原酒",
    region: "兵庫県（江井ヶ嶋酒造）",
    regionTbd: false,
    rarity: 3,
    taste: "甘口・梅酒様の酸味・後口キレ",
    food: "スイーツ / フルーツ / すき焼き",
    scene: "甘口好きの方へ",
    forWhom: "甘口やフルーティが好きな方、スイーツと楽しみたい方へ",
    price: "¥2,200",
    priceTbd: false,
    review: "日本酒度なんと−55度（甘辛の指標で、一般に−7度で甘口と言われます）。日本酒なのに梅酒のような酸味と甘味、それでいて後口のキレが良いという謎スペック。スイーツやフルーツと合わせても相性が良く、すき焼きなど牛肉との相性も抜群です。",
    axes: { sweet: 0, body: 100, mature: 40 },
    url: "https://nihonshuya.stores.jp/items/64ce07256c50d711d8a24feb"
  },
  {
    rank: 8,
    name: "いとをかし 豊能梅 純米吟醸 生酒",
    photo: "assets/img/products/08-itookashi.avif",
    type: "純米吟醸 生酒",
    region: "高知県（高木酒造）",
    regionTbd: false,
    rarity: 3,
    taste: "フルーティ・甘酸っぱい・軽快",
    food: "前菜 / サラダ / フルーツ",
    scene: "日本酒入門・女性へ",
    forWhom: "はじめての日本酒や、お酒が強くない方への贈り物に",
    price: "¥2,100",
    priceTbd: false,
    review: "数々の賞を受賞している一本。りんごのような華やかな香りに、リンゴ酸の涼やかな酸味と優しい甘味が特徴の純米吟醸です。14％の低アルコールで、日本酒の初心者やお酒が強くない方にもおすすめ。\n\n2021年 フランス KURA MASTER プラチナ受賞\n2021年 ボルドー酒チャレンジ GOLD 受賞\n2024年 KURA MASTER 純米酒部門 プラチナ受賞",
    axes: { sweet: 30, body: 30, mature: 18 },
    url: "https://nihonshuya.stores.jp/items/63ad63135ff4232b35f214fb"
  },
  {
    rank: 9,
    name: "曙 純米吟醸 獅子の舞 生酒",
    photo: "assets/img/products/09-akebono.avif",
    type: "純米吟醸 生酒",
    region: "富山県（髙澤酒造場）",
    regionTbd: false,
    rarity: 3,
    taste: "すっきり・やさしい・キレ",
    food: "和食全般 / 刺身",
    scene: "普段の贈り物に",
    forWhom: "気負わず渡せる、ちょっとしたお礼に",
    price: "¥2,500",
    priceTbd: false,
    review: "富山県産・五百万石を100％使用、50％精米。口当たりがよく、すっきりとした味わいで、非常にキレの良いお酒です。かしこまりすぎない“ちょっとしたお礼”に、ちょうどよい一本です。",
    axes: { sweet: 58, body: 44, mature: 22 },
    url: "https://nihonshuya.stores.jp/items/699bf6037dd1ee8a70782ee6"
  },
  {
    rank: 10,
    name: "玉乃光 純米吟醸 吟風100%",
    photo: "assets/img/products/10-tamanohikari.avif",
    type: "純米吟醸",
    region: "京都府伏見（玉乃光酒造）",
    regionTbd: false,
    rarity: 2,
    taste: "やわらか吟醸香・爽やか・ほろ苦",
    food: "煮物 / 天ぷら / 和食",
    scene: "間違いない定番に",
    forWhom: "外したくない、安心の定番を贈りたい方へ",
    price: "¥2,000",
    priceTbd: false,
    review: "北海道産酒米「吟風」を100％使った限定商品。北海道限定販売につき、道外の常設店としては日本酒屋のみの取り扱いです。やわらかな吟醸香と、ミントのようなすっきりした爽やかさ、ほろ苦さが口に広がります。「何を贈るか迷ったら、まずこれ」と言える定番の一本です。",
    axes: { sweet: 50, body: 58, mature: 38 },
    url: "https://nihonshuya.stores.jp/items/60306a2ec19c4567ae0eb822"
  }
];

/* シーン別おすすめ — 各シーン2本（rankで参照） */
window.SAKE_SCENES = [
  {
    id: "fathersday",
    label: "父の日",
    lead: "いつも飲んでいるお父さんにこそ、プロが選んだ“特別な一本”を。お酒の好みで選び分けるのがおすすめです。",
    picks: [
      { rank: 5, note: "ワインやウイスキー好きの父へ。樽熟成の複雑な香りで“いつもと違う”驚きを。" },
      { rank: 4, note: "日本酒党の父へ。雫取りの端正な味わいは、間違いのないワンランク上。" }
    ]
  },
  {
    id: "birthday",
    label: "誕生日",
    lead: "華やかに乾杯したい誕生日には、泡や香りで“おめでとう”を演出できる一本を。",
    picks: [
      { rank: 1, note: "微発泡の活性にごりで、乾杯の瞬間を華やかに。限定36本の特別感も。" },
      { rank: 2, note: "軽やかなスパークリング生酒。お酒に強くない方の誕生日にも喜ばれます。" }
    ]
  },
  {
    id: "celebration",
    label: "還暦・退職祝い",
    lead: "人生の節目には、“時間”そのものを贈る熟成酒を。深い味わいが特別感を物語ります。",
    picks: [
      { rank: 3, note: "30年熟成の古酒。その方の歩んだ年月に重ねて贈れる、希少な一本。" },
      { rank: 6, note: "熟成クラフトサケ。お酒に詳しい方の門出を祝う、語れる個性派。" }
    ]
  },
  {
    id: "toast",
    label: "お祝い・乾杯",
    lead: "結婚・昇進・記念日。みんなで乾杯するシーンには、開けた瞬間に歓声があがる一本を。",
    picks: [
      { rank: 2, note: "入手困難なスパークリング生酒。澄んだ泡で、乾杯の主役になります。" },
      { rank: 8, note: "フルーティで飲みやすい受賞酒。参加者みんなが楽しめる、安心の一本。" }
    ]
  }
];

/* FAQ */
window.SAKE_FAQ = [
  {
    q: "のし・ラッピングには対応していますか？",
    a: "はい。ギフト用ののし掛け・ラッピングに対応しています。父の日・還暦祝いなど用途に応じた表書きもご指定いただけます。詳しい仕様や対応可否は、各商品ページのギフトオプション欄をご確認ください。"
  },
  {
    q: "配送やクール便について教えてください。",
    a: "生酒・活性にごりなど品質が温度に左右されるお酒は、クール便でのお届けを基本としています。お届け日時のご指定も可能です。送料・配送地域・最短お届け日は、各商品ページおよびご注文画面でご確認いただけます。"
  },
  {
    q: "日本酒の保存方法は？",
    a: "生酒・無濾過生原酒・活性にごりは要冷蔵です。直射日光を避け、冷蔵庫(0〜5℃)で立てて保存してください。火入れ酒や熟成古酒は冷暗所で保存できますが、開栓後はいずれも冷蔵し、お早めにお楽しみください。"
  },
  {
    q: "賞味期限はどのくらいですか？",
    a: "日本酒に明確な賞味期限の表示義務はありませんが、生酒系はフレッシュなうちが飲みごろです。目安として、生酒は開栓前でも冷蔵で数ヶ月以内、開栓後は1〜2週間で飲み切るのがおすすめ。熟成古酒は長期保存に向く特性があります。"
  },
  {
    q: "購入に年齢確認はありますか？",
    a: "お酒の販売には年齢確認が必要です。20歳未満の方の飲酒・購入は法律で禁止されています。ご購入手続きの際に、ECサイト側で生年月日の入力など年齢確認をお願いしています。あらかじめご了承ください。"
  }
];

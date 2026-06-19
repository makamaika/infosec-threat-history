/* =========================================================================
 *  情報セキュリティ脅威の歴史 — データ
 *  情報セキュリティ脅威の歴史をたどる Web サイト
 *
 *  出典の中心：IPA「情報セキュリティ10大脅威 2026」
 *  https://www.ipa.go.jp/security/10threats/10threats2026.html
 *  各事件の出典は SOURCES（末尾）にまとめて記載。
 * ========================================================================= */

/* ---- タイムライン本体（時系列の「シーン」）------------------------------ */
window.ERAS = [
  {
    id: "prologue",
    period: "1980s — 1990s",
    yearStart: 1986,
    kicker: "PROLOGUE",
    title: "脅威の夜明け",
    lead: "脅威は「いたずら」から始まった。",
    palette: "era-green",
    body:
      "コンピュータがネットワークでつながり始めた時代。最初期の脅威は、金銭でも国家でもなく、" +
      "技術力の誇示や好奇心、いわゆる「愉快犯」が動機だった。被害は限定的で、攻撃者は基本的に個人。" +
      "それでも、世界中のコンピュータが一本の線で結ばれていく危うさは、このころすでに姿を現していた。",
    motive: { label: "主な動機", value: "愉快犯・技術誇示・好奇心" },
    events: [
      { y: 1986, t: "Brain（ブレイン）", d: "世界初のPC（MS-DOS）向けウイルスとされる。パキスタンのアルビ兄弟が自作ソフトの不正コピー対策として作り、ウイルス内に実名と連絡先まで記していた。破壊目的ではなかった。", tag: "ウイルス" },
      { y: 1988, t: "Morris Worm（モリスワーム）", d: "大学院生が放った自己増殖ワームが暴走。当時の接続台数の約1割にあたる数千台を過負荷で停止させ、世界に「ワーム」の脅威を知らしめた。", tag: "ワーム" },
      { y: 1989, t: "AIDS Trojan（世界初のランサムウェア）", d: "フロッピーで配布され、PC起動90回目にファイル名を暗号化し189ドルを要求した。実は“身代金型”は40年近く前から存在した——主役になるのは、ずっと後のことだ。", tag: "ランサム原型" },
      { y: 1999, t: "Melissa（メリッサ）", d: "Wordマクロを悪用し、Outlookのアドレス帳経由でメールが爆発的に自己拡散。メールで広がるマルウェアの先駆けとなり、企業のメールサーバを次々に止めた。", tag: "マクロ／メール" }
    ]
  },
  {
    id: "y2000s",
    period: "2000 — 2009",
    yearStart: 2001,
    kicker: "WORM & LEAK ERA",
    title: "ワームと情報漏えいの時代",
    lead: "拡散は世界規模に。そして「お金」が動機に加わった。",
    palette: "era-cyan",
    body:
      "ネットワークの脆弱性を突いて自動で増殖するワームが世界規模で大流行。一方で、攻撃の目的に" +
      "「金銭」が明確に混ざり始め、フィッシング詐欺が登場する。日本ではファイル共有ソフト Winny を" +
      "介した情報漏えいが社会問題化し、「個人の不注意」が組織の事故につながる構図が広く意識された。",
    motive: { label: "主な動機", value: "愉快犯 → 金銭目的の混在" },
    events: [
      { y: 2000, t: "ILOVEYOU（ラブレター・ワーム）", d: "「I LOVE YOU」という件名のメールで世界中に感染拡大、24時間で数千万台に及んだとされる。人の好奇心という“心理”を突くソーシャルな手口の原型。", tag: "メール／心理" },
      { y: 2001, t: "Code Red / Nimda", d: "サーバ（IIS）の脆弱性を突くワームが大流行。Webページを書き換え、ネットワーク経由で猛烈な速度で自己増殖した。", tag: "ワーム" },
      { y: 2003, t: "Blaster（ブラスター）", d: "Windowsの脆弱性(MS03-026)を悪用し、ユーザー操作なしで感染。対策していないPCが次々に再起動を繰り返す被害が世界中で発生した。", tag: "ワーム" },
      { y: 2006, t: "日本：Winnyによる情報漏えい多発", d: "ファイル共有ソフトの暴露ウイルス(Antinny等)で、官公庁・警察・企業の機密が次々流出。IPAが「情報セキュリティ10大脅威」の公表を始めたのもこの頃(2006年)。", tag: "情報漏えい", region: "日本" }
    ]
  },
  {
    id: "apt",
    period: "2010 — 2015",
    yearStart: 2010,
    kicker: "TARGETED & NATION-STATE",
    title: "標的型攻撃と「国家」の登場",
    lead: "脅威に、国家という最強のプレイヤーが現れた。",
    palette: "era-indigo",
    body:
      "不特定多数にばらまく時代から、特定の組織を執拗に狙う「標的型攻撃（APT）」の時代へ。" +
      "2010年のStuxnetは、サイバー攻撃が現実世界の設備を物理的に破壊し得ること、そして背後に" +
      "国家が存在し得ることを世界に突きつけた。日本でも年金機構が標的型攻撃を受け、大規模な個人情報流出が起きた。",
    motive: { label: "主な動機", value: "諜報・妨害・国家・金銭" },
    events: [
      { y: 2010, t: "Stuxnet（スタックスネット）", d: "イラン・ナタンツのウラン濃縮施設の制御システム(PLC)を狙い、遠心分離機を物理的に破壊した高度なワーム。米・イスラエルの関与が疑われ、サイバー攻撃が“兵器”になりうることを示した。", tag: "標的型／国家", src: "https://www.kaspersky.com/resource-center/definitions/what-is-stuxnet" },
      { y: 2013, t: "CryptoLocker：ランサムの収益化", d: "RSA暗号とビットコイン等での支払いを組み合わせたランサムウェアが登場。最初の約100日で20〜25万台に感染し、「暗号化して金を要求する」手口を“ビジネス”として確立した。", tag: "ランサム", src: "https://www.cisa.gov/news-events/alerts/2013/11/05/cryptolocker-ransomware-infections" },
      { y: 2015, t: "日本：日本年金機構 標的型攻撃", d: "職員宛の攻撃メールから端末がマルウェア(Emdivi)に感染し、約125万件の個人情報が流出。標的型攻撃の脅威を国内に決定的に知らしめた。", tag: "標的型", region: "日本", src: "https://www.itmedia.co.jp/enterprise/articles/1512/16/news035.html" },
      { y: 2015, t: "ウクライナ電力網への攻撃（世界初の停電）", d: "12月、ロシア系『Sandworm』がBlackEnergy等で配電会社に侵入し遠隔操作。約23万人が停電した、世界で初めて確認された電力網へのサイバー攻撃。サイバーが現実の電気を止めた。", tag: "国家／インフラ", src: "https://www.cisa.gov/news-events/ics-alerts/ir-alert-h-16-056-01" }
    ]
  },
  {
    id: "y2016",
    period: "2016",
    yearStart: 2016,
    kicker: "IPA RESET",
    title: "「10大脅威」が、個人と組織に分かれた年",
    lead: "脅威は、もはや一括りにできなくなった。",
    palette: "era-teal",
    pivot: true,
    body:
      "IPAは「情報セキュリティ10大脅威」を、この年から〈個人〉向けと〈組織〉向けに分けて公表するようになった。" +
      "私たち一人ひとりが直面する脅威と、企業・行政が直面する脅威は、もはや性質が異なる——そう整理せざるを得ないほど、" +
      "脅威は多様化・深刻化していた。本サイトの比較で「2016年〜」を基準にしているのは、この年が一つの転換点だからだ。",
    motive: { label: "この年のポイント", value: "個人／組織で脅威を分離して可視化" },
    events: [
      { y: 2016, t: "ランサムウェアが10大脅威の上位へ", d: "金銭目的のランサムウェアが組織の主要脅威として定着。以後、ランサムは長く首位級に居座り続ける。", tag: "ランサム" },
      { y: 2016, t: "個人向け脅威の整理", d: "ネットサービスへの不正ログイン、クレジットカード情報の不正利用など、個人を直接狙う脅威が並んだ。", tag: "個人" }
    ]
  },
  {
    id: "y2017",
    period: "2017",
    yearStart: 2017,
    kicker: "GLOBAL OUTBREAK",
    title: "ランサムウェアが世界を止めた",
    lead: "一夜にして、世界中の病院や工場が動かなくなった。",
    palette: "era-amber",
    body:
      "WannaCryは、Windowsの脆弱性を悪用して自己増殖するランサムウェアとして、わずか数日で世界150か国以上・" +
      "数十万台に感染。英国の国民保健サービス（NHS）では診療が止まり、サイバー攻撃が人命や社会インフラに" +
      "直結することが誰の目にも明らかになった。続くNotPetyaは、史上最大級ともいわれる経済的被害をもたらした。",
    motive: { label: "主な動機", value: "金銭・破壊（妨害）" },
    events: [
      { y: 2017, t: "WannaCry（ワナクライ）", d: "流出したNSA由来の攻撃ツール(EternalBlue)を組み込み、Windowsの脆弱性を突いて自動拡散。1日で約150か国・約23万台に感染し、英NHSの病院などが麻痺。北朝鮮系グループの関与が指摘された。", tag: "ランサム", src: "https://www.microsoft.com/en-us/security/blog/2017/05/12/wannacrypt-ransomware-worm-targets-out-of-date-systems/" },
      { y: 2017, t: "NotPetya（ノットペーチャ）", d: "ウクライナの会計ソフトの更新を踏み台に拡散した破壊型マルウェア。Maersk・Merck等を直撃し、被害総額は約100億ドル超とされ史上最大級。米英はロシア軍(GRU/Sandworm)の攻撃と断定した。", tag: "破壊型／国家", src: "https://www.wired.com/story/notpetya-cyberattack-ukraine-russia-code-crashed-the-world/" }
    ]
  },
  {
    id: "y2018",
    period: "2018",
    yearStart: 2018,
    kicker: "MONEY DIVERSIFIES",
    title: "金銭を狙う手口が、枝分かれする",
    lead: "暗号資産、そして「経理をだます」攻撃へ。",
    palette: "era-orange",
    body:
      "国内の暗号資産取引所コインチェックから、約580億円相当の暗号資産（NEM）が流出。デジタル資産が" +
      "巨額の標的になることを示した。同じ頃、経営者や取引先になりすまして送金させる「ビジネスメール詐欺（BEC）」が" +
      "台頭し、GoogleやFacebookさえ巨額をだまし取られた。FBIによればBECの世界の累計被害は約555億ドル(2013〜2023年)。" +
      "技術ではなく、業務手順と人の判断の隙を突く攻撃が前面に出てきた。",
    motive: { label: "主な動機", value: "金銭（高額・組織的）" },
    events: [
      { y: 2018, t: "日本：コインチェック 暗号資産流出", d: "取引所から約580億円相当のNEMが不正に流出。暗号資産が大規模な攻撃対象であることを印象づけた。", tag: "不正アクセス", region: "日本", src: "https://www3.nhk.or.jp/news/special/coincheck/" },
      { y: 2018, t: "Google・Facebook を騙した約1.2億ドルのBEC", d: "正規取引先になりすました偽の請求書で、両社の担当者に総額1億2,000万ドル超を送金させた詐欺（2013-15年に実行、2019年有罪）。世界の巨大企業ですら“人をだます”手口に陥る。", tag: "BEC", src: "https://www.justice.gov/usao-sdny/pr/lithuanian-man-sentenced-5-years-prison-theft-over-120-million-fraudulent-business" },
      { y: 2018, t: "Tecnimont：CEOなりすまし詐欺で約1,860万ドル", d: "経営トップになりすました偽のメールと“偽の電話会議”で「極秘の買収資金」と信じ込ませ、伊大手企業のインド子会社が約1,860万ドルを送金。BECは技術より心理を突く。", tag: "BEC", src: "https://www.bankinfosecurity.com/bec-scam-leads-to-theft-186-million-fraud-a-11930" }
    ]
  },
  {
    id: "y1920",
    period: "2019 — 2020",
    yearStart: 2019,
    kicker: "SUPPLY CHAIN & PANDEMIC",
    title: "サプライチェーンと、パンデミック",
    lead: "弱点は「自社」ではなく「つながり」になった。",
    palette: "era-orangered",
    body:
      "攻撃者は、堅牢な本丸を正面から攻めるのをやめ、取引先や委託先、利用しているソフトウェアといった" +
      "「サプライチェーン」の弱い環を狙うようになった。2020年のSolarWinds事件は、信頼されたソフト更新が" +
      "攻撃の運び手になり得ることを示した。コロナ禍で急拡大したリモートワークも、新たな侵入口になった。" +
      "ランサムは、暗号化に加えてデータを公開すると脅す「二重恐喝」へと凶悪化する。",
    motive: { label: "主な動機", value: "金銭・諜報（経路は委託先・更新）" },
    events: [
      { y: 2019, t: "Maze：二重恐喝とリークサイトの登場", d: "Mazeグループが、暗号化に加え「盗んだデータを公開するぞ」と脅す“二重恐喝”を本格化。専用のデータ公開サイトまで開設し、以後この手口が業界標準になった。", tag: "ランサム", src: "https://www.crowdstrike.com/en-us/blog/double-trouble-ransomware-data-leak-extortion-part-1/" },
      { y: 2019, t: "日本：Emotet（エモテット）の流行", d: "正規メールへの返信になりすまして広がるマルウェアが国内で猛威。感染端末からメールやアドレス帳を盗み、知人を装って次々と感染を広げた。", tag: "マルウェア", region: "日本", src: "https://www.jpcert.or.jp/at/2019/at190044.html" },
      { y: 2020, t: "SolarWinds サプライチェーン攻撃", d: "管理ソフトの正規アップデートに不正コードが仕込まれ、約1.8万組織が侵害の可能性、米連邦9機関と民間約100社が実害。ロシア対外情報庁(APT29)の関与とされる。“信頼された更新”が攻撃経路になった。", tag: "サプライチェーン／国家", src: "https://www.cisa.gov/news-events/cybersecurity-advisories/aa20-352a" },
      { y: 2020, t: "コロナ禍：リモートワークを狙う攻撃", d: "急ごしらえの在宅環境やVPN機器の脆弱性が狙われ、新たな侵入口に。働き方の変化が、そのまま攻撃面の拡大になった。", tag: "リモートワーク" }
    ]
  },
  {
    id: "y2021",
    period: "2021",
    yearStart: 2021,
    kicker: "CRITICAL INFRASTRUCTURE",
    title: "ランサムが、社会インフラを人質にした",
    lead: "燃料が止まり、病院のカルテが消えた。",
    palette: "era-red",
    body:
      "米国では大手燃料パイプラインがランサム被害で操業停止し、広域で燃料供給に影響が出た。日本でも" +
      "徳島県の町立病院が被害を受け、電子カルテが使えず通常診療が長期間ストップ。ランサムウェアは" +
      "もはや「データの問題」ではなく、人々の生活と命に直結する社会の問題になった。",
    motive: { label: "主な動機", value: "金銭（産業化したランサム）" },
    events: [
      { y: 2021, t: "Colonial Pipeline 操業停止（米国）", d: "米最大級の燃料パイプラインがRaaSグループDarkSideの攻撃で停止。たった1つのVPNアカウントが侵入口だった。約440万ドル(75BTC)を支払い、東海岸で燃料の買い占め騒ぎが起きた。", tag: "ランサム／インフラ", src: "https://www.chainalysis.com/blog/darkside-colonial-pipeline-ransomware-seizure-case-study/" },
      { y: 2021, t: "日本：つるぎ町立半田病院のランサム被害", d: "10月31日未明、LockBitの攻撃で電子カルテもバックアップも暗号化。保守業者が放置したVPN機器の脆弱性が侵入口で、約2か月診療が混乱し、復旧に約2億円を要した。", tag: "ランサム／医療", region: "日本", src: "https://xtech.nikkei.com/atcl/nxt/column/18/01157/041900059/" },
      { y: 2021, t: "Emotet 国際テイクダウン（そして復活）", d: "1月、8か国の合同作戦でEmotetの基盤を一斉摘発（約700台のサーバ停止）。だが約10か月後の11月に活動を再開し、2022年に国内で感染が再拡大。攻防は終わらない。", tag: "マルウェア／摘発", src: "https://www.jpcert.or.jp/at/2022/at220006.html" }
    ]
  },
  {
    id: "y2223",
    period: "2022 — 2023",
    yearStart: 2022,
    kicker: "THE CHAIN BREAKS",
    title: "被害は、連鎖する",
    lead: "部品メーカー1社の停止が、巨大工場を止めた。",
    palette: "era-crimson",
    body:
      "取引先1社へのサイバー攻撃が、サプライチェーン全体を巻き込む時代。国内では大手自動車メーカーの" +
      "部品取引先が攻撃を受け、国内全工場が一時停止に追い込まれた。2023年には、広く使われるファイル転送" +
      "ソフトの脆弱性を突いた攻撃で、世界中の多数の組織から大規模なデータが流出。一点の弱さが、" +
      "広範囲の被害へと拡大することが常態化した。",
    motive: { label: "主な動機", value: "金銭（サプライチェーン連鎖）" },
    events: [
      { y: 2022, t: "Viasat 衛星通信網への攻撃（ウクライナ侵攻初日）", d: "2月24日、ロシアの侵攻開始とほぼ同時に衛星通信網KA-SATがワイパー『AcidRain』で攻撃され、数万台のモデムが機能停止。独の風力発電約5,800基の遠隔監視にも波及。物理戦とサイバー戦が連動した。", tag: "国家／インフラ", src: "https://www.sentinelone.com/labs/acidrain-a-modem-wiper-rains-down-on-europe/" },
      { y: 2022, t: "日本：部品取引先への攻撃で完成車工場が全停止", d: "大手自動車メーカーの取引先(小島プレス工業)が攻撃を受け、国内全工場が一時稼働停止。委託先経由の被害連鎖を象徴。", tag: "サプライチェーン", region: "日本", src: "https://www.itmedia.co.jp/news/articles/2203/01/news060.html" },
      { y: 2023, t: "MOVEit 大規模情報流出（世界）", d: "ファイル転送ソフトのゼロデイ脆弱性をランサム集団Cl0pが悪用し、少なくとも約2,800組織・約9,580万人分の情報が流出。脆弱性ひとつが連鎖的な大流出を生んだ。", tag: "脆弱性／流出", src: "https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-158a" }
    ]
  },
  {
    id: "y2024",
    period: "2024",
    yearStart: 2024,
    kicker: "BIGGER & SMARTER",
    title: "大型化するランサム、巧妙化する詐欺",
    lead: "そして、AIが「だます」道具になった。",
    palette: "era-crimsonp",
    body:
      "国内では大手出版・動画配信サービスが大規模なランサム被害を受け、長期のサービス停止と情報流出が起きた。" +
      "個人に対しては、サポート詐欺や本物そっくりのフィッシングが急増（→次セクションの数字）。" +
      "そして決定的だったのがAIの「攻撃利用」だ。2023年には悪意ある生成AI『WormGPT/FraudGPT』が登場して詐欺メール作成を助け、" +
      "香港ではディープフェイクのビデオ会議で巨額が詐取され、FBIも生成AI悪用詐欺に警告を発した。「AIを攻撃に使う」段階が、現実になった。",
    motive: { label: "主な動機", value: "金銭（AI で高度化）" },
    events: [
      { y: 2024, t: "日本：KADOKAWA／ニコニコへのランサム攻撃", d: "6月、ロシア系『BlackSuit』の攻撃でニコニコ等が約2か月停止。約25万人分の個人情報が流出し、盗んだデータの公開で脅す二重恐喝を受けた。発端は従業員アカウントの窃取とみられる。", tag: "ランサム", region: "日本", src: "https://www.itmedia.co.jp/news/articles/2408/05/news146.html" },
      { y: 2024, t: "ディープフェイク詐欺（香港）", d: "AIで作った偽のビデオ会議でCFOや同僚になりすまし、担当者に約2,560万ドル(約38億円)を15回に分けて送金させた。本人以外の参加者は全員ディープフェイクだった。", tag: "AI／ディープフェイク", src: "https://www.cnn.com/2024/05/16/tech/arup-deepfake-scam-loss-hong-kong-intl-hnk" },
      { y: 2024, t: "日本：生成AIでウイルス作成、国内初摘発", d: "5月、対話型生成AIを悪用してランサムウェア機能を持つウイルスを作ったとして男を逮捕（警視庁）。生成AI悪用のウイルス作成では国内初の摘発。「楽に稼ぎたかった」と供述。", tag: "AI／摘発", region: "日本", src: "https://www.nikkei.com/article/DGXZQOUE2802U0Y4A520C2000000/" },
      { y: 2024, t: "反撃：LockBit を国際捜査で摘発", d: "2月、英NCA・米FBI・Europol等10か国の『Operation Cronos』が最大級のランサム集団LockBitの基盤を摘発。34台のサーバ押収、復号鍵を確保。攻撃者側も追い詰められている。", tag: "摘発／対抗", src: "https://www.europol.europa.eu/media-press/newsroom/news/law-enforcement-disrupt-worlds-biggest-ransomware-operation" }
    ]
  },
  {
    id: "y2025",
    period: "2025",
    yearStart: 2025,
    kicker: "GEOPOLITICS",
    title: "地政学リスクが、脅威リストに載った",
    lead: "国際情勢の緊張が、そのままサイバー空間に流れ込む。",
    palette: "era-deepred",
    body:
      "IPAの「情報セキュリティ10大脅威 2025」では、〈組織〉向けに『地政学的リスクに起因するサイバー攻撃（情報戦を含む）』が" +
      "新たに選出された。国家間の対立や紛争を背景とした重要インフラへの攻撃、偽情報による世論操作（情報戦）など、" +
      "国際政治とサイバー攻撃が分かちがたく結びついていることが、公式の脅威として明記された。",
    motive: { label: "主な動機", value: "国家・イデオロギー（情報戦）" },
    events: [
      { y: 2025, t: "「地政学的リスクに起因するサイバー攻撃」初選出（組織7位）", d: "IPA10大脅威2025で〈組織〉向けに圏外から初登場し7位に。中国の関与が疑われる『MirrorFace』の対日攻撃などが背景。国家間の対立が、そのまま企業のリスクになった。", tag: "国家／情報戦", src: "https://internet.watch.impress.co.jp/docs/news/1658994.html" },
      { y: 2025, t: "日本：MirrorFace 対日攻撃に警察庁が注意喚起", d: "1月、警察庁・NISCが中国の関与が疑われる『MirrorFace』による2019年来の攻撃を公表。外務省・防衛・JAXA・先端技術企業などから機密を狙う、安全保障目的の標的型攻撃。", tag: "国家／標的型", region: "日本", src: "https://www.npa.go.jp/bureau/cyber/koho/caution/caution20250108.html" },
      { y: 2023, t: "日本：JAXA への不正アクセス", d: "VPN機器の脆弱性を起点に侵入され、認証情報を盗まれクラウド(M365)にも不正アクセス。後にMirrorFace（中国系）の関与とされた。先端技術を持つ機関が国家級攻撃の標的に。", tag: "標的型", region: "日本", src: "https://www.itmedia.co.jp/news/articles/2407/05/news163.html" },
      { y: 2024, t: "Volt Typhoon：米重要インフラへの潜伏", d: "中国系グループが正規ツールだけで通信・電力・水道網に侵入し、最長5年も潜伏。有事に備えた“事前展開”とされCISA等が警告。攻撃は「盗む」から「いざという時に止める」備えへ。", tag: "国家／インフラ", src: "https://www.cisa.gov/news-events/cybersecurity-advisories/aa24-038a" },
      { y: 2025, t: "日本：年末年始の大規模DDoS攻撃", d: "航空・金融・行政などのサイトが相次ぎDDoS攻撃を受け、アクセス障害が発生。DDoSが数年ぶりに10大脅威へ返り咲いた。", tag: "DDoS", region: "日本" }
    ]
  },
  {
    id: "y2026",
    period: "2026 — 現在",
    yearStart: 2026,
    kicker: "THE AI ERA",
    title: "AIをめぐるリスクが、初めて選ばれた",
    lead: "脅威は、自分で学習し、増幅する時代に入った。",
    palette: "era-violet",
    present: true,
    body:
      "「情報セキュリティ10大脅威 2026」では、〈組織〉向けに『AIの利用をめぐるサイバーリスク』が初選出（第3位）。" +
      "生成AIによる巧妙なフィッシングやマルウェアの作成、ディープフェイクによるなりすまし、AIシステム自体を" +
      "狙う攻撃（プロンプトインジェクション等）、そしてAIの不適切な利用による情報漏えいまで——AIは守りにも攻めにも" +
      "使える「両刃の剣」として、脅威の中心に躍り出た。40年前の愉快犯から、いま私たちはここに立っている。",
    motive: { label: "主な動機", value: "金銭・国家・情報戦 ＋ AI による増幅" },
    events: [
      { y: 2026, t: "「AIの利用をめぐるサイバーリスク」初選出（組織3位）", d: "生成AIの悪用、ディープフェイク、AIシステムへの攻撃、AI利用に伴う情報漏えいなどを包括。1位ランサム・2位サプライチェーンに次ぐ第3位で初登場。脅威の新時代の到来。", tag: "AI", src: "https://www.ipa.go.jp/security/10threats/10threats2026.html" },
      { y: 2025, t: "AIが攻撃を自律実行した初の事例（Anthropic報告）", d: "11月、Anthropicが、中国系攻撃者がAI(Claude)に攻撃工程の8〜9割を自律実行させた初のスパイ活動を報告。約30組織を標的に。AIが“道具”から“実行者”へ近づいた。", tag: "AI／自律攻撃", src: "https://www.anthropic.com/news/disrupting-AI-espionage" },
      { y: 2025, t: "プロンプトインジェクション（AIへの攻撃）", d: "AIに不正な指示を紛れ込ませ、機密を吐かせたり誤作動させる攻撃。OWASPがLLMの最大リスクに位置づけ。AIを“使う側”だけでなく“AIそのもの”も狙われる。", tag: "AI／脆弱性", src: "https://genai.owasp.org/llmrisk/llm01-prompt-injection/" },
      { y: 2026, t: "ランサムウェアは依然として組織1位", d: "11年連続でランクイン。手口を変えながら、依然として組織の最大の脅威であり続けている。", tag: "ランサム" }
    ]
  }
];

/* ---- IPA「情報セキュリティ10大脅威 2026」----------------------------------
 *  出典：IPA https://www.ipa.go.jp/security/10threats/10threats2026.html
 *  ※〈組織〉は順位付き、〈個人〉は2025年から順位なし（五十音順）で公表。
 * ------------------------------------------------------------------------ */
window.IPA2026 = {
  org: [
    { rank: 1,  name: "ランサム攻撃による被害",                              first: 2016, note: "11年連続11回目" },
    { rank: 2,  name: "サプライチェーンや委託先を狙った攻撃",                first: 2019, note: "8年連続8回目" },
    { rank: 3,  name: "AIの利用をめぐるサイバーリスク",                      first: 2026, note: "初選出", isNew: true },
    { rank: 4,  name: "システムの脆弱性を悪用した攻撃",                      first: 2016, note: "6年連続9回目" },
    { rank: 5,  name: "機密情報を狙った標的型攻撃",                          first: 2016, note: "11年連続11回目" },
    { rank: 6,  name: "地政学的リスクに起因するサイバー攻撃（情報戦を含む）", first: 2025, note: "2年連続2回目", isNewish: true },
    { rank: 7,  name: "内部不正による情報漏えい等",                          first: 2016, note: "11年連続11回目" },
    { rank: 8,  name: "リモートワーク等の環境や仕組みを狙った攻撃",          first: 2021, note: "6年連続6回目" },
    { rank: 9,  name: "DDoS攻撃（分散型サービス妨害攻撃）",                  first: 2016, note: "2年連続7回目" },
    { rank: 10, name: "ビジネスメール詐欺",                                  first: 2018, note: "9年連続9回目" }
  ],
  // 〈個人〉は順位なし・五十音順
  individual: [
    { name: "インターネット上のサービスからの個人情報の窃取", first: 2016, note: "7年連続10回目" },
    { name: "インターネット上のサービスへの不正ログイン",     first: 2016, note: "11年連続11回目" },
    { name: "インターネットバンキングの不正利用",             first: 2016, note: "4年ぶり8回目", isBack: true },
    { name: "クレジットカード情報の不正利用",                 first: 2016, note: "11年連続11回目" },
    { name: "サポート詐欺（偽警告）による金銭被害",           first: 2020, note: "7年連続7回目" },
    { name: "スマホ決済の不正利用",                           first: 2020, note: "7年連続7回目" },
    { name: "ネット上の誹謗・中傷・デマ",                     first: 2016, note: "11年連続11回目" },
    { name: "フィッシングによる個人情報等の詐取",             first: 2019, note: "8年連続8回目" },
    { name: "不正アプリによるスマートフォン利用者への被害",   first: 2016, note: "11年連続11回目" },
    { name: "メールやSNS等を使った脅迫・詐欺の手口による金銭要求", first: 2019, note: "8年連続8回目" }
  ]
};

/* ---- 数字で見る「個人」の被害（IPA個人向け脅威の具体例）------------------- */
window.STATS = [
  { big: "171万件", label: "フィッシング報告件数（2024年・過去最多）", sub: "フィッシング対策協議会。2023年に初の100万件超、2024年は約1.44倍に急増。", ipa: "フィッシングによる個人情報等の詐取", src: "https://www.antiphishing.jp/report/phishing_report_2025.pdf" },
  { big: "約555億円", label: "クレジットカード不正利用被害（2024年・過去最多）", sub: "日本クレジット協会。約9割がEC等での「番号盗用」。2020年の約2倍超。", ipa: "クレジットカード情報の不正利用", src: "https://www.j-credit.or.jp/information/statistics/index.html" },
  { big: "約87億円", label: "ネットバンキング不正送金（2023年・過去最悪）", sub: "警察庁。5,578件、前年の約5.7倍。多くがフィッシング起因。", ipa: "インターネットバンキングの不正利用", src: "https://www.npa.go.jp/publications/statistics/cybersecurity/data/R5/R05_cyber_jousei.pdf" },
  { big: "約10億円", label: "サポート詐欺（偽警告）の被害（2024年・警察庁）", sub: "IPAへの相談件数も四半期で過去最多を更新。偽の警告→電話→送金の手口。", ipa: "サポート詐欺（偽警告）による金銭被害", src: "https://www.ipa.go.jp/security/anshin/measures/supportscam_report.html" },
  { big: "219件", label: "「ドコモ口座」型 不正引き出し（2020年）", sub: "口座振替の本人確認の甘さを突かれ約2,848万円。スマホ決済悪用の象徴。", ipa: "スマホ決済の不正利用", src: "https://ja.wikipedia.org/wiki/2020%E5%B9%B4%E9%9B%BB%E5%AD%90%E6%B1%BA%E6%B8%88%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E4%B8%8D%E6%AD%A3%E5%BC%95%E3%81%8D%E5%87%BA%E3%81%97%E4%BA%8B%E4%BB%B6" },
  { big: "2022年", label: "侮辱罪の厳罰化（施行）", sub: "2020年の木村花さん事案などを契機に。法定刑を引き上げ、時効を1→3年に。", ipa: "ネット上の誹謗・中傷・デマ", src: "https://www.moj.go.jp/keiji1/keiji12_00194.html" }
];

/* ---- 「昔とどう違うのか」比較（共通項の軸）-------------------------------- */
window.COMPARE = [
  { axis: "動機",   icon: "🎯", past: "愉快犯・技術力の誇示・好奇心", now: "金銭・組織犯罪・国家・情報戦" },
  { axis: "規模",   icon: "🌐", past: "単発・個人による犯行",         now: "産業化（RaaS）・サプライチェーンで連鎖" },
  { axis: "標的",   icon: "🎣", past: "不特定多数にばらまく",         now: "特定の組織・委託先の「弱い環」を狙う" },
  { axis: "手口",   icon: "🧠", past: "技術的な脆弱性が中心",         now: "人の心理（ソーシャル）＋ AI で増幅" },
  { axis: "影響",   icon: "🏥", past: "データ・PCの不調が中心",       now: "人命・社会インフラ・サービス停止に直結" },
  { axis: "境界",   icon: "🔗", past: "個人と組織は別々の問題",       now: "個人の不正ログインが組織侵入の入口に（地続き）" }
];

/* ---- 出典 ---------------------------------------------------------------- */
window.SOURCES = [
  { label: "IPA 情報セキュリティ10大脅威 2026", url: "https://www.ipa.go.jp/security/10threats/10threats2026.html" },
  { label: "IPA プレス発表「10大脅威 2026」を決定（2026/1/29）", url: "https://www.ipa.go.jp/pressrelease/2025/press20260129.html" },
  { label: "IPA 情報セキュリティ10大脅威 2025", url: "https://www.ipa.go.jp/security/10threats/10threats2025.html" },
  { label: "IPA サポート詐欺に関する注意・統計", url: "https://www.ipa.go.jp/security/anshin/measures/supportscam_report.html" },
  { label: "警察庁 令和5年 サイバー空間をめぐる脅威の情勢（不正送金等）", url: "https://www.npa.go.jp/publications/statistics/cybersecurity/data/R5/R05_cyber_jousei.pdf" },
  { label: "警察庁・NISC MirrorFace に関する注意喚起（2025/1/8）", url: "https://www.npa.go.jp/bureau/cyber/koho/caution/caution20250108.html" },
  { label: "日本クレジット協会 クレジットカード不正利用被害の統計", url: "https://www.j-credit.or.jp/information/statistics/index.html" },
  { label: "フィッシング対策協議会 フィッシングレポート", url: "https://www.antiphishing.jp/report/phishing_report_2025.pdf" },
  { label: "法務省 侮辱罪の厳罰化（改正刑法）Q&A", url: "https://www.moj.go.jp/keiji1/keiji12_00194.html" },
  { label: "JPCERT/CC Emotet の活動再開に関する注意喚起", url: "https://www.jpcert.or.jp/at/2022/at220006.html" },
  { label: "CISA Volt Typhoon 勧告（AA24-038A）", url: "https://www.cisa.gov/news-events/cybersecurity-advisories/aa24-038a" },
  { label: "CISA SolarWinds 勧告（AA20-352A）", url: "https://www.cisa.gov/news-events/cybersecurity-advisories/aa20-352a" },
  { label: "CISA MOVEit / Cl0p 勧告（AA23-158A）", url: "https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-158a" },
  { label: "FBI/IC3 BEC『The $55 Billion Scam』（2024/9）", url: "https://www.ic3.gov/PSA/2024/PSA240911" },
  { label: "FBI/IC3 生成AI悪用詐欺への警告（2024/12）", url: "https://www.ic3.gov/PSA/2024/PSA241203" },
  { label: "Europol LockBit 摘発（Operation Cronos, 2024/2）", url: "https://www.europol.europa.eu/media-press/newsroom/news/law-enforcement-disrupt-worlds-biggest-ransomware-operation" },
  { label: "Anthropic 初のAI主導サイバースパイ活動の阻止（2025）", url: "https://www.anthropic.com/news/disrupting-AI-espionage" },
  { label: "OWASP Top 10 for LLM — Prompt Injection (LLM01)", url: "https://genai.owasp.org/llmrisk/llm01-prompt-injection/" },
  { label: "WannaCry（Microsoft Security Blog, 2017）", url: "https://www.microsoft.com/en-us/security/blog/2017/05/12/wannacrypt-ransomware-worm-targets-out-of-date-systems/" },
  { label: "Viasat KA-SAT 攻撃の分析（SentinelLabs, AcidRain）", url: "https://www.sentinelone.com/labs/acidrain-a-modem-wiper-rains-down-on-europe/" }
];

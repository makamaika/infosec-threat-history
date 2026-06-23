/* =========================================================================
 *  情報セキュリティ脅威の40年史 — 動作スクリプト
 * ========================================================================= */
(function () {
  "use strict";

  var ERAS    = window.ERAS    || [];
  var IPA      = window.IPA2026 || { org: [], individual: [] };
  var COMPARE = window.COMPARE || [];
  var SOURCES = window.SOURCES || [];

  var reduceMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var ALL_PALETTES = ERAS.map(function (e) { return e.palette; })
    .concat(["era-violet"]);

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function el(id) { return document.getElementById(id); }

  /* ---------------------------------------------------------------------
   *  1. ERA セクションの生成
   * ------------------------------------------------------------------- */
  function renderEras() {
    var host = el("eras");
    if (!host) return;
    var html = "";
    ERAS.forEach(function (era) {
      var events = (era.events || []).map(function (ev, i) {
        var d = "d" + Math.min(i + 1, 6);
        var jp = ev.region === "日本";
        return (
          '<div class="ev reveal ' + d + '">' +
            '<div class="ev-top">' +
              '<span class="ev-year">' + esc(ev.y) + '</span>' +
              '<span class="ev-title">' + esc(ev.t) + '</span>' +
              '<span class="ev-tag' + (jp ? " jp" : "") + '">' +
                (jp ? "🇯🇵 " : "") + esc(ev.tag || "") +
              '</span>' +
            '</div>' +
            '<p class="ev-desc">' + esc(ev.d) + '</p>' +
            (ev.src ? '<a class="ev-src" href="' + esc(ev.src) + '" target="_blank" rel="noopener">🔗 出典</a>' : "") +
          '</div>'
        );
      }).join("");

      html +=
        '<section class="era" id="' + esc(era.id) + '" data-year="' +
            esc(era.yearStart) + '" data-palette="' + esc(era.palette) + '">' +
          '<div class="era-ghost" aria-hidden="true">' + esc(era.yearStart) + '</div>' +
          '<div class="era-inner">' +
            '<div class="era-text">' +
              '<div class="reveal"><div class="era-period">' + esc(era.period) + '</div>' +
                '<span class="era-kicker">' + esc(era.kicker) + '</span></div>' +
              '<h2 class="era-title reveal d1">' + esc(era.title) + '</h2>' +
              '<p class="era-lead reveal d1">' + esc(era.lead) + '</p>' +
              '<p class="era-body reveal d2">' + esc(era.body) + '</p>' +
              (era.motive ?
                '<div class="era-motive reveal d3">' +
                  '<span class="m-label">' + esc(era.motive.label) + '</span>' +
                  '<span class="m-value">' + esc(era.motive.value) + '</span>' +
                '</div>' : "") +
            '</div>' +
            '<div class="era-events">' + events + '</div>' +
          '</div>' +
        '</section>';
    });
    host.innerHTML = html;
  }

  /* ---------------------------------------------------------------------
   *  2. IPA 2026 一覧
   * ------------------------------------------------------------------- */
  function renderIPA() {
    var org = el("ipaOrg");
    if (org) {
      org.innerHTML = IPA.org.map(function (t) {
        var cls = "ipa-li" + (t.rank === 1 ? " top" : "") +
          (t.isNew ? " is-new" : "") + (t.isNewish ? " is-newish" : "");
        return (
          '<li class="' + cls + ' reveal">' +
            '<span class="ipa-rank">' + t.rank + '</span>' +
            '<div class="ipa-main">' +
              '<div class="ipa-name">' + esc(t.name) + '</div>' +
              '<div class="ipa-meta">初選出 ' + esc(t.first) + '年</div>' +
            '</div>' +
            '<span class="ipa-note-tag">' + esc(t.note) + '</span>' +
          '</li>'
        );
      }).join("");
    }
    var ind = el("ipaInd");
    if (ind) {
      ind.innerHTML = IPA.individual.map(function (t) {
        var cls = "ipa-li" + (t.isBack ? " is-back" : "");
        return (
          '<li class="' + cls + ' reveal">' +
            '<span class="ipa-dot"></span>' +
            '<div class="ipa-main">' +
              '<div class="ipa-name">' + esc(t.name) + '</div>' +
              '<div class="ipa-meta">初選出 ' + esc(t.first) + '年</div>' +
            '</div>' +
            '<span class="ipa-note-tag">' + esc(t.note) + '</span>' +
          '</li>'
        );
      }).join("");
    }
  }

  /* ---------------------------------------------------------------------
   *  3. 比較グリッド
   * ------------------------------------------------------------------- */
  function renderCompare() {
    var host = el("compareGrid");
    if (!host) return;
    host.innerHTML = COMPARE.map(function (c) {
      return (
        '<div class="cmp reveal">' +
          '<div class="cmp-head"><span class="cmp-ico">' + c.icon + '</span>' +
            '<span class="cmp-axis">' + esc(c.axis) + '</span></div>' +
          '<div class="cmp-row">' +
            '<div class="cmp-cell cmp-past"><span class="cmp-label">PAST ／ 昔</span>' + esc(c.past) + '</div>' +
            '<div class="cmp-arrow">→</div>' +
            '<div class="cmp-cell cmp-now"><span class="cmp-label">NOW ／ 今</span>' + esc(c.now) + '</div>' +
          '</div>' +
        '</div>'
      );
    }).join("");
  }

  /* ---------------------------------------------------------------------
   *  3.5 個人の被害（数字）
   * ------------------------------------------------------------------- */
  function renderStats() {
    var host = el("statsGrid");
    if (!host) return;
    var STATS = window.STATS || [];
    host.innerHTML = STATS.map(function (s, i) {
      var d = "d" + Math.min(i + 1, 6);
      return (
        '<div class="stat reveal ' + d + '">' +
          '<div class="stat-big">' + esc(s.big) + '</div>' +
          '<div class="stat-label">' + esc(s.label) + '</div>' +
          '<div class="stat-sub">' + esc(s.sub) + '</div>' +
          '<div class="stat-foot">' +
            '<span class="stat-ipa">' + esc(s.ipa) + '</span>' +
            (s.src ? '<a class="stat-src" href="' + esc(s.src) + '" target="_blank" rel="noopener">🔗 出典</a>' : "") +
          '</div>' +
        '</div>'
      );
    }).join("");
  }

  /* ---------------------------------------------------------------------
   *  4. 出典リスト
   * ------------------------------------------------------------------- */
  function renderSources() {
    var host = el("sourceList");
    if (!host) return;
    host.innerHTML = SOURCES.map(function (s) {
      return '<li><a href="' + esc(s.url) + '" target="_blank" rel="noopener">' +
        esc(s.label) + '</a></li>';
    }).join("");
  }

  /* ---------------------------------------------------------------------
   *  5. 左レール（年代ナビ）
   * ------------------------------------------------------------------- */
  var navTargets = []; // {id, year, label}
  function buildRail() {
    navTargets = [{ id: "hero", year: 1986, label: "START" }];
    ERAS.forEach(function (e) {
      navTargets.push({ id: e.id, year: e.yearStart, label: e.period });
    });
    navTargets.push({ id: "ipa2026", year: 2026, label: "10大脅威" });
    navTargets.push({ id: "compare", year: 2026, label: "昔と今" });
    navTargets.push({ id: "summary", year: 2026, label: "まとめ" });

    var rail = el("rail");
    if (!rail) return;
    // レールには年が重複しない代表ポイントのみ表示
    var shown = [
      { id: "hero", t: "'86" },
      { id: "y2000s", t: "'00" },
      { id: "apt", t: "'10" },
      { id: "y2016", t: "'16" },
      { id: "y2018", t: "'18" },
      { id: "y2021", t: "'21" },
      { id: "y2024", t: "'24" },
      { id: "y2026", t: "'26" }
    ];
    rail.innerHTML = shown.map(function (s) {
      return '<button class="rail-item" data-go="' + s.id + '">' +
        '<span class="rail-dot" aria-hidden="true"></span>' +
        '<span class="rail-yr">' + s.t + '</span></button>';
    }).join("");
    rail.querySelectorAll(".rail-item").forEach(function (b) {
      b.addEventListener("click", function () {
        stopAutoplay();
        scrollToId(b.getAttribute("data-go"));
      });
    });
  }

  function scrollToId(id) {
    var node = el(id);
    if (node) node.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  }

  /* ---------------------------------------------------------------------
   *  6. スクロール演出（reveal）＋ アクティブ判定
   * ------------------------------------------------------------------- */
  function setupReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (e) { e.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.18, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (e) { io.observe(e); });
  }

  var sections = [];   // すべての data-year を持つ節
  var bodyEl = document.body;
  var currentPalette = "";

  function collectSections() {
    sections = Array.prototype.slice.call(document.querySelectorAll("[data-year]"));
  }

  function setPalette(p) {
    if (!p || p === currentPalette) return;
    ALL_PALETTES.forEach(function (c) { bodyEl.classList.remove(c); });
    if (p) bodyEl.classList.add(p);
    currentPalette = p;
  }

  // スクロール位置から「流れる年号」を補間して算出
  var yearReadout = el("yearReadout");
  function updateYearAndPalette() {
    var mid = window.scrollY + window.innerHeight * 0.42;
    var active = null, activeIdx = 0;
    for (var i = 0; i < sections.length; i++) {
      var top = sections[i].offsetTop;
      if (top <= mid) { active = sections[i]; activeIdx = i; }
    }
    if (!active) active = sections[0];
    if (!active) return;

    // パレット：era セクションのものを採用、それ以外は最後のeraパレット維持/violet
    var pal = active.getAttribute("data-palette");
    if (pal) setPalette(pal);
    else if (active.id === "ipa2026" || active.id === "personal" || active.id === "compare" || active.id === "summary") setPalette("era-violet");

    // 年の補間
    var y0 = parseInt(active.getAttribute("data-year"), 10) || 1986;
    var next = sections[activeIdx + 1];
    var shownYear = y0;
    if (next) {
      var y1 = parseInt(next.getAttribute("data-year"), 10) || y0;
      var a = active.offsetTop, b = next.offsetTop;
      var frac = b > a ? (mid - a) / (b - a) : 0;
      frac = Math.max(0, Math.min(1, frac));
      shownYear = Math.round(y0 + (y1 - y0) * frac);
    }
    if (yearReadout) yearReadout.textContent = shownYear;

    // レールのアクティブ表示
    updateRailActive(shownYear);
  }

  function updateRailActive(year) {
    var items = document.querySelectorAll(".rail-item");
    if (!items.length) return;
    // data-go の年を取得して最も近いものをactive
    var best = null, bestDiff = 1e9;
    items.forEach(function (it) {
      var id = it.getAttribute("data-go");
      var node = el(id);
      var y = node ? (parseInt(node.getAttribute("data-year"), 10) || 1986) : 1986;
      var diff = Math.abs(y - year);
      // ただし現在のスクロール位置より上のものを優先したいので位置も加味
      if (node) {
        var rect = node.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.5) {
          if (diff <= bestDiff) { bestDiff = diff; best = it; }
        }
      }
    });
    items.forEach(function (it) { it.classList.remove("active"); });
    if (best) best.classList.add("active");
    else items[0].classList.add("active");
  }

  /* ---------------------------------------------------------------------
   *  7. 進行バー
   * ------------------------------------------------------------------- */
  var scrollBar = el("scrollBar");
  function updateProgress() {
    var h = document.documentElement;
    var max = (h.scrollHeight - h.clientHeight) || 1;
    var pct = (window.scrollY / max) * 100;
    if (scrollBar) scrollBar.style.width = pct.toFixed(2) + "%";
  }

  var scheduled = false;
  function runScrollUpdate() {
    scheduled = false;
    try {
      updateProgress();
      updateYearAndPalette();
    } catch (e) {
      if (window.console && console.warn) console.warn("scroll update error", e);
    }
  }
  function onScroll() {
    if (scheduled) return;
    scheduled = true;
    var ran = false;
    var go = function () { if (ran) return; ran = true; runScrollUpdate(); };
    // 通常は rAF（滑らか）。rAFが発火しない環境（バックグラウンド等）でも
    // setTimeout のフォールバックで必ず更新する。
    window.requestAnimationFrame(go);
    setTimeout(go, 100);
  }

  /* ---------------------------------------------------------------------
   *  8. 自動再生（映像のように進む）
   * ------------------------------------------------------------------- */
  var playing = false;
  var playTimer = null;
  var playIdx = 0;
  var playOrder = [];

  function buildPlayOrder() {
    playOrder = ["hero"].concat(ERAS.map(function (e) { return e.id; }))
      .concat(["ipa2026", "personal", "compare", "summary"]);
  }

  function currentSectionIndex() {
    var mid = window.scrollY + window.innerHeight * 0.42;
    var idx = 0;
    for (var i = 0; i < playOrder.length; i++) {
      var node = el(playOrder[i]);
      if (node && node.offsetTop <= mid) idx = i;
    }
    return idx;
  }

  function dwellFor(id) {
    // セクションの情報量に応じた表示時間（ms）
    var era = ERAS.filter(function (e) { return e.id === id; })[0];
    if (id === "hero") return 2600;
    if (id === "summary") return 9000;
    if (id === "ipa2026" || id === "compare") return 7000;
    if (era) return 4200 + (era.events ? era.events.length * 900 : 0);
    return 4200;
  }

  function playStep() {
    if (!playing) return;
    playIdx++;
    if (playIdx >= playOrder.length) { stopAutoplay(); return; }
    var id = playOrder[playIdx];
    scrollToId(id);
    playTimer = setTimeout(playStep, dwellFor(id));
  }

  function startAutoplay() {
    if (playing) return;
    playing = true;
    playIdx = currentSectionIndex();
    setPlayBtn(true);
    // すぐ次へ
    playTimer = setTimeout(playStep, 700);
  }
  function stopAutoplay() {
    playing = false;
    if (playTimer) { clearTimeout(playTimer); playTimer = null; }
    setPlayBtn(false);
  }
  function setPlayBtn(on) {
    var btn = el("playBtn"), ico = el("playIco"), lab = el("playLabel");
    if (!btn) return;
    btn.classList.toggle("playing", on);
    if (ico) ico.textContent = on ? "❚❚" : "▶";
    if (lab) lab.textContent = on ? "停止" : "自動再生";
  }

  /* ---------------------------------------------------------------------
   *  9. 初期化
   * ------------------------------------------------------------------- */
  function setupHeroStats() {
    var n = 0;
    ERAS.forEach(function (e) { n += (e.events ? e.events.length : 0); });
    var se = el("statEvents");
    if (se) se.textContent = n + "+";
  }

  function init() {
    renderEras();
    renderIPA();
    renderStats();
    renderCompare();
    renderSources();
    buildRail();
    buildPlayOrder();
    setupHeroStats();

    collectSections();
    setupReveal();

    // 初期パレットはスクロール位置から決定（ヒーローは:rootの既定色）
    updateProgress();
    updateYearAndPalette();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", function () { collectSections(); onScroll(); }, { passive: true });

    var playBtn = el("playBtn");
    if (playBtn) playBtn.addEventListener("click", function () {
      if (playing) stopAutoplay(); else startAutoplay();
    });
    var startBtn = el("startBtn");
    if (startBtn) startBtn.addEventListener("click", function () { stopAutoplay(); });

    // 自動再生中にユーザーが手動操作したら停止
    ["wheel", "touchstart", "keydown"].forEach(function (evt) {
      window.addEventListener(evt, function () { if (playing) stopAutoplay(); }, { passive: true });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else { init(); }
})();

#!/usr/bin/env python3
"""Regenerate public/preview.jpg (1200x630 link preview).

Draws the same kind of star cluster and night clouds as the hero, plus the logo,
name and one-line intro. Rendered with headless Chrome so Pretendard and SVG
filters look exactly like the site.

    pnpm og            # or: python3 scripts/og/generate.py

Requires Google Chrome (or Chromium) and, on macOS, `sips` for the JPEG step.
Edit TITLE / SUBTITLE below to change the copy.
"""
import math
import os
import random
import shutil
import subprocess
import sys
import tempfile

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
TITLE = ("Jeonhui", "Lee")
SUBTITLE = "이전희, 의약품 정산 SaaS를 만드는 소프트웨어 엔지니어"
BRAND = "jeonhui.com"
W, H = 1200, 630

PAPER, INK, INK2, MUTED = "#04070f", "#eef2f7", "#b8bec7", "#868d97"


def stars_svg() -> str:
    random.seed(20250501)
    cx, cy = 860, 290
    out = []
    for i in range(1500):
        if i < 1250:
            if random.random() < 0.35:
                u = max(random.random(), 1e-4)
                r = min(48 / math.sqrt(u ** (-2 / 3) - 1), 230)
            else:
                r = 230 * random.random() ** 0.7
            a = random.random() * math.tau
            x, y = cx + math.cos(a) * r * 1.2, cy + math.sin(a) * r * 0.9
        else:
            x, y = random.uniform(0, W), random.uniform(0, H)
        m = random.random() ** 5
        warm = random.random() < 0.16
        if 50 < x < 720 and 250 < y < 560 and m > 0.08:  # keep the copy area clear
            continue
        col = "#ffc58a" if warm else ("#dfe9ff" if m < 0.5 else "#ffffff")
        r = 0.45 + m * 2.4
        if m > 0.55:
            out.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="{r * 4.5:.1f}" fill="url(#glow{"W" if warm else "C"})" opacity="{0.45 * m:.2f}"/>')
        out.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="{r:.2f}" fill="{col}" opacity="{0.3 + 0.7 * m:.2f}"/>')
        if m > 0.95:  # only the very brightest get diffraction spikes
            L, c = r * 6, r * 0.22
            out.append(
                f'<path d="M{x:.1f} {y - L:.1f} Q{x + c:.1f} {y - c:.1f} {x + L:.1f} {y:.1f} '
                f'Q{x + c:.1f} {y + c:.1f} {x:.1f} {y + L:.1f} Q{x - c:.1f} {y + c:.1f} {x - L:.1f} {y:.1f} '
                f'Q{x - c:.1f} {y - c:.1f} {x:.1f} {y - L:.1f} Z" fill="#ffffff" opacity="0.8"/>'
            )
    return "".join(out)


def logo_paths() -> str:
    svg = open(os.path.join(ROOT, "public", "logo.svg"), encoding="utf-8").read()
    body = svg.split("</title>", 1)[1].rsplit("</svg>", 1)[0]
    return body


def html() -> str:
    font = "file://" + os.path.join(ROOT, "node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2")
    return f"""<!doctype html><html><head><meta charset="utf-8"><style>
@font-face {{ font-family: P; src: url('{font}') format('woff2'); font-weight: 45 920; }}
html,body {{ margin:0; width:{W}px; height:{H}px; overflow:hidden; background:{PAPER}; }}
.wrap {{ position:relative; width:{W}px; height:{H}px; font-family:P, sans-serif; }}
svg.bg {{ position:absolute; inset:0; }}
.copy {{ position:absolute; left:72px; bottom:84px; color:{INK}; }}
.brand {{ display:flex; align-items:center; gap:14px; font-size:26px; font-weight:600; margin-bottom:44px; }}
.brand svg {{ height:24px; width:auto; }}
h1 {{ margin:0; font-size:124px; line-height:0.9; font-weight:640; letter-spacing:-0.055em; }}
h1 span {{ color:{INK2}; }}
p {{ margin:30px 0 0; font-size:30px; line-height:1.45; color:{INK2}; letter-spacing:-0.01em; }}
</style></head><body><div class="wrap">
<svg class="bg" width="{W}" height="{H}" viewBox="0 0 {W} {H}"><defs>
 <radialGradient id="bloom" cx="0.7" cy="0.48" r="0.55"><stop offset="0" stop-color="#1b2443" stop-opacity="0.9"/><stop offset="1" stop-color="{PAPER}" stop-opacity="0"/></radialGradient>
 <radialGradient id="glowC"><stop offset="0" stop-color="#cfe0ff" stop-opacity="0.9"/><stop offset="1" stop-color="#cfe0ff" stop-opacity="0"/></radialGradient>
 <radialGradient id="glowW"><stop offset="0" stop-color="#ffb877" stop-opacity="0.9"/><stop offset="1" stop-color="#ffb877" stop-opacity="0"/></radialGradient>
 <filter id="clouds" x="0" y="0" width="100%" height="100%">
  <feTurbulence type="fractalNoise" baseFrequency="0.0042 0.011" numOctaves="5" seed="7"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0.36  0 0 0 0 0.40  0 0 0 0 0.54  0 0 0 2.6 -1.15"/>
 </filter>
 <linearGradient id="cloudMask" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity="0.45"/><stop offset="0.45" stop-color="#fff" stop-opacity="0.25"/><stop offset="1" stop-color="#fff" stop-opacity="1"/></linearGradient>
 <mask id="m"><rect width="{W}" height="{H}" fill="url(#cloudMask)"/></mask>
 <radialGradient id="scrim" cx="0.18" cy="0.72" r="0.55"><stop offset="0" stop-color="{PAPER}" stop-opacity="0.75"/><stop offset="1" stop-color="{PAPER}" stop-opacity="0"/></radialGradient>
</defs>
<rect width="{W}" height="{H}" fill="url(#bloom)"/>
{stars_svg()}
<rect width="{W}" height="{H}" filter="url(#clouds)" mask="url(#m)" opacity="0.8"/>
<rect width="{W}" height="{H}" fill="url(#scrim)"/>
</svg>
<div class="copy">
 <div class="brand"><svg viewBox="40 120 432 272">{logo_paths()}</svg>{BRAND}</div>
 <h1>{TITLE[0]} <span>{TITLE[1]}</span></h1>
 <p>{SUBTITLE}</p>
</div></div></body></html>"""


def find_chrome() -> str | None:
    for c in (
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        "/Applications/Chromium.app/Contents/MacOS/Chromium",
        shutil.which("google-chrome"),
        shutil.which("chromium"),
        shutil.which("chromium-browser"),
    ):
        if c and os.path.exists(c):
            return c
    return None


def main() -> int:
    chrome = find_chrome()
    if not chrome:
        print("Chrome/Chromium not found.", file=sys.stderr)
        return 1
    with tempfile.TemporaryDirectory() as tmp:
        page = os.path.join(tmp, "og.html")
        png = os.path.join(tmp, "og.png")
        open(page, "w", encoding="utf-8").write(html())
        subprocess.run(
            [chrome, "--headless=new", "--disable-gpu", "--hide-scrollbars", "--allow-file-access-from-files",
             f"--window-size={W},{H}", "--virtual-time-budget=3000", f"--screenshot={png}", "file://" + page],
            check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
        )
        out = os.path.join(ROOT, "public", "preview.jpg")
        if shutil.which("sips"):
            subprocess.run(["sips", "-s", "format", "jpeg", "-s", "formatOptions", "86", png, "--out", out],
                           check=True, stdout=subprocess.DEVNULL)
        else:
            out = os.path.join(ROOT, "public", "preview.png")
            shutil.copy(png, out)
            print("sips not found: wrote PNG; update INFO.PREVIEW_IMAGE if you keep it.")
    print(f"wrote {os.path.relpath(out, ROOT)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())

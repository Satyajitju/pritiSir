import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from scipy.interpolate import CubicSpline
from matplotlib.lines import Line2D
import matplotlib.patheffects as pe

# ==========================================================
# JOURNAL STYLE
# ==========================================================

plt.rcParams.update({
    "font.family": "serif",
    "font.serif": ["DejaVu Serif", "Times New Roman", "serif"],
    "font.size": 11,
    "axes.linewidth": 1.2,
    "figure.dpi": 300,
})

# ==========================================================
# FIGURE — tall enough for legend below
# ==========================================================

fig = plt.figure(figsize=(14, 8.5))

# Main axes occupies top portion; bottom strip reserved for legend
ax = fig.add_axes([0.08, 0.22, 0.89, 0.73])   # [left, bottom, width, height]

# ==========================================================
# SURFACE TOPOGRAPHY
# ==========================================================

x_topo = np.linspace(0, 100, 600)
y_topo = (
    0.3  * np.sin(x_topo / 18)
    + 0.9  * np.exp(-(x_topo - 42)**2 / 450)
    + 2.5  * np.exp(-(x_topo - 72)**2 / 350)
)

# ==========================================================
# PLATE FILLS
# ==========================================================

# Upper crust (Eurasian) — warm sand
ax.fill_between(x_topo, y_topo, 10, color="#EDE3C4", zorder=1)

# Lower crust / mantle wedge (India plate) — teal
ax.fill_between(x_topo, -45, y_topo, color="#5E9B96", zorder=0)

# ==========================================================
# TOPOGRAPHY LINE
# ==========================================================

ax.plot(x_topo, y_topo, color="black", lw=1.8, zorder=10)

# ==========================================================
# MAIN HIMALAYAN THRUST
# ==========================================================

fault_x = np.array([20, 30, 38, 50, 65, 80,  90,  100])
fault_y = np.array([ 0, -8, -13, -16, -17, -27, -34, -40])

cs = CubicSpline(fault_x, fault_y)
xx = np.linspace(20, 100, 700)
yy = cs(xx)

# Draw MHT in two layers: white halo + black line
ax.plot(xx, yy, color="white", lw=9,  solid_capstyle="round", zorder=6)
ax.plot(xx, yy, color="black", lw=6,  solid_capstyle="round", zorder=7)

# ==========================================================
# APRIL 25 SLIP PATCH  (red, on the thrust)
# ==========================================================

x_red  = np.linspace(38, 58, 300)
y_red  = cs(x_red)
ax.plot(x_red, y_red, color="#D73027", lw=12,
        solid_capstyle="round", zorder=8, alpha=0.92)

# ==========================================================
# MAY 12 SLIP PATCH  (blue, on the thrust)
# ==========================================================

x_blue = np.linspace(56, 67, 150)
y_blue = cs(x_blue)
ax.plot(x_blue, y_blue, color="#2166AC", lw=12,
        solid_capstyle="round", zorder=9, alpha=0.92)

# ==========================================================
# SEISMICITY — placed ON the fault plane (±3 km scatter)
# ==========================================================

np.random.seed(42)

# Aftershocks — scattered along red patch of thrust
t_after = np.random.uniform(38, 66, 45)
noise_after = np.random.normal(0, 2.2, 45)
x_after = t_after
y_after = cs(t_after) + noise_after

# Prior seismicity — along deeper thrust, eastward
t_prior = np.random.uniform(65, 95, 28)
noise_prior = np.random.normal(0, 2.5, 28)
x_prior = t_prior
y_prior = cs(t_prior) + noise_prior

# Draw prior first (underneath)
ax.scatter(x_prior, y_prior, s=110,
           color="#999999", edgecolor="black",
           linewidth=0.6, alpha=0.88, zorder=15)

ax.scatter(x_after, y_after, s=110,
           color="#E8423F", edgecolor="black",
           linewidth=0.6, alpha=0.88, zorder=16)

# ==========================================================
# KATHMANDU  (surface dot + leader + label)
# ==========================================================

kx, ky = 47, y_topo[np.argmin(np.abs(x_topo - 47))]

ax.scatter([kx], [ky + 0.15], s=200,
           color="black", zorder=30, clip_on=False)

ax.annotate(
    "Kathmandu",
    xy=(kx, ky + 0.15),
    xytext=(kx - 4, ky + 6.0),
    fontsize=11, fontstyle="italic", ha="center",
    arrowprops=dict(arrowstyle="-", lw=0.9, color="black"),
    zorder=35,
)

# ==========================================================
# FAULT SURFACE TRACES  — short vertical ticks on topography
# ==========================================================

fault_surface = {
    "MFT": 20,
    "MBT": 32,
    "MCT": 60,
}

for name, xf in fault_surface.items():
    yf = y_topo[np.argmin(np.abs(x_topo - xf))]
    # small tick line through surface
    ax.plot([xf, xf], [yf - 1.0, yf + 2.5],
            color="black", lw=1.5, zorder=20)
    ax.text(xf, yf + 3.0, name,
            fontsize=12, fontweight="bold",
            ha="center", va="bottom", zorder=25)

# ==========================================================
# GEOGRAPHIC REGION LABELS  — well above fault labels
# ==========================================================

region_labels = [
    (10,   8.5, "Gangetic\nPlain",  10),
    (40,   9.5, "Lesser Himalaya",  11),
    (76,   9.5, "Higher Himalaya",  11),
]

for xpos, ypos, label, fs in region_labels:
    ax.text(xpos, ypos, label,
            fontsize=fs, fontstyle="italic",
            color="#444444", ha="center", va="bottom")

# ==========================================================
# PLATE LABELS
# ==========================================================

ax.text(58, -1.5, "EURASIAN PLATE",
        fontsize=16, fontweight="bold",
        color="#4A3A10", alpha=0.80, ha="center")

ax.text(32, -33, "INDIA PLATE",
        fontsize=19, fontweight="bold",
        color="white", alpha=0.95, ha="center")

# ==========================================================
# MHT LABEL  — below thrust, white text with dark outline
# ==========================================================

txt = ax.text(42, cs(42) - 5.5,
              "Main Himalayan Thrust (MHT)",
              fontsize=10.5, fontstyle="italic",
              color="white", ha="center", rotation=-5, zorder=22)

txt.set_path_effects([
    pe.withStroke(linewidth=2.5, foreground="#1a1a1a")
])

# ==========================================================
# SCALE BAR  (bottom-right of plot area)
# ==========================================================

bx0, by = 76, -42.5
blen = 20

ax.plot([bx0, bx0 + blen], [by, by],
        color="black", lw=4.5, solid_capstyle="butt", zorder=25)

for xv in [bx0, bx0 + blen]:
    ax.plot([xv, xv], [by - 0.8, by + 0.8],
            color="black", lw=2, zorder=25)

ax.text(bx0 + blen / 2, by - 2.5, "100 km",
        ha="center", fontsize=11)

# ==========================================================
# AXES FORMATTING
# ==========================================================

ax.set_xlim(0, 100)
ax.set_ylim(-46, 11)

ax.set_ylabel("Depth (km)", fontsize=12, labelpad=8)
ax.set_xlabel("South  →  North", fontsize=12, labelpad=8)

ax.set_yticks([0, -10, -20, -30, -40])
ax.set_yticklabels(["0", "10", "20", "30", "40"], fontsize=11)
ax.set_xticks([])

ax.tick_params(direction="out", length=5, width=1.2)
ax.spines["top"].set_visible(False)
ax.spines["right"].set_visible(False)

# ==========================================================
# LEGEND — in its own dedicated axes below the main plot
# ==========================================================

legend_elements = [
    Line2D([0], [0], color="#D73027", lw=8,
           label="25 April 2015 slip patch"),
    Line2D([0], [0], color="#2166AC", lw=8,
           label="12 May 2015 slip patch"),
    Line2D([0], [0], marker="o", color="none",
           markerfacecolor="#E8423F", markeredgecolor="black",
           markersize=10, label="Aftershocks (2015)"),
    Line2D([0], [0], marker="o", color="none",
           markerfacecolor="#999999", markeredgecolor="black",
           markersize=10, label="Prior seismicity"),
    Line2D([0], [0], color="black", lw=5,
           label="Main Himalayan Thrust (MHT)"),
]

# Dedicated legend axes — completely outside main plot
leg_ax = fig.add_axes([0.05, 0.02, 0.90, 0.14])
leg_ax.set_axis_off()

leg = leg_ax.legend(
    handles=legend_elements,
    frameon=True,
    framealpha=0.0,
    edgecolor="none",
    fontsize=10.5,
    loc="center",
    ncol=5,
    handlelength=2.4,
    handletextpad=0.6,
    columnspacing=2.0,
    borderpad=0.5,
)

# Horizontal divider line between main plot and legend
line = plt.Line2D([0.05, 0.95], [0.17, 0.17],
                  transform=fig.transFigure,
                  color="#BBBBBB", linewidth=0.8)
fig.add_artist(line)
plt.show()

# ==========================================================
# SAVE
# ==========================================================

# for ext, dpi in [("png", 300), ("pdf", 600), ("svg", None)]:
#     kw = dict(bbox_inches="tight", facecolor="white")
#     if dpi:
#         kw["dpi"] = dpi
#     fig.savefig(f"/mnt/user-data/outputs/Himalayan_MHT_fixed.{ext}", **kw)

#print("Saved.")
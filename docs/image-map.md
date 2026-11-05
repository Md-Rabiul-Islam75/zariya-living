# Zariya Living — Media Map

## Where media lives

| Folder | Contents |
|---|---|
| `public/assets/video/` | The 14 site videos, each as `.mp4` and `.webm`. Muted, no audio track. |
| `public/assets/video-posters/` | First-frame poster for each video. |
| `public/assets/agro/`, `media/`, `resort/` | V2 photos, with the same names as the design handoff. |
| `public/images/` | Older photos that V2 reuses, plus the logo and `/offers` images. |

Reference videos by name (`<HeroVideo name="home-hero" />`, `<SectionVideo name="agro-market" />`) and photos with `next/image`, which serves AVIF and WebP.

**Replacing a file:** give it a new file name. `/assets/*` is cached by browsers for a year, so the same name would keep showing the old file.

## Design handoff names reused from `public/images`

Do not copy these from the handoff: the same picture is already here.

| Handoff file | Use |
|---|---|
| `zariya-logo-white.png` | `logo/zariya-living-white.png` (has the thinner separator bar) |
| `community-cover.jpg` | `community-hands.png` |
| `zariya-03.jpg` | `lotus-tower.png` |
| `zariya-06.jpg` | `sky-lounge.jpg` |
| `zariya-12.jpg` | `timber-ember.png` |
| `zariya-17.jpg` | `golden-sovereign.png` |
| `zariya-22.jpg` | `velvet-haven.png` |
| `zariya-32.jpg` | `dining-fine.png` |
| `zariya-33.jpg` | `dining-nature.png` |
| `zariya-44.jpg` | `agro-facility.png` |
| `zariya-45.jpg` | `offers/agro.jpg` |
| `zariya-59.jpg` | `project-niladri.jpg` (sharper than the handoff copy) |
| `zariya-60.jpg` | `project-noakhali.jpeg` (sharper than the handoff copy) |
| `zariya-65.jpg` | `villa-sunset.png` |
| `zariya-67.jpg` | `project-coxsbazar.jpg` (sharper than the handoff copy) |

Handoff files that are the same photo under two names: `agro/00A` = `agro/hero-3`, `agro/01A` = `agro/hero-2`, `agro/02A` = `media/brinjal-training`, `media/feature-image` = `resort/hero-12`.

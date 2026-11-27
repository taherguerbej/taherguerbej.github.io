# Taher Guerbej · Robotics Portfolio

Personal portfolio of Taher Guerbej, Robotics & Mechatronics engineering
student (ENISO – SIGMA Clermont double degree). Built with Next.js 16,
React 19, TypeScript, Tailwind CSS v4 and react-three-fiber.

It is a fully static site: no backend, no database, no environment secrets.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run build      # production build, every route is static
```

Node.js 20.9 or newer.

## Where things live

| What | Where |
| --- | --- |
| Name, role, tagline, stats, journey | `constants/hero-constants.ts` |
| Flagship projects + secondary projects | `constants/projects-constants.ts` |
| Focus areas | `constants/focus-constants.ts` |
| Experience and education | `constants/experience-constants.ts` |
| Skills and languages | `constants/skills-constants.ts` |
| Email, LinkedIn, GitHub, CV link | `constants/social-constants.ts` |
| SEO titles and descriptions | `constants/seo-constants.ts` |
| Robot arm kinematics and animation | `constants/robot-constants.ts` |
| Project media (videos, posters, images) | `public/media/<project>/` |
| Public CV (no phone number) | `public/cv/Taher_Guerbej_CV.pdf` |

### Adding project media

Put the file in `public/media/<project>/`, then add a `media` (main preview)
or a `gallery` entry to the project in `projects-constants.ts`:

```ts
media: {
  type: "video",                       // or "image"
  src: "/media/remain/inspection.mp4",
  poster: "/media/remain/inspection.jpg",  // first frame, for videos
  alt: "What the clip shows, for screen readers.",
  caption: "Real robot: … / Simulation (Gazebo): …",
},
```

Videos: H.264 MP4. Always say in the caption whether it is simulation or a
real robot. Projects without media show a "Media coming soon" panel.

### Updating the CV

The PDF is built from `pfe_2027/cv_en_2027_public.tex` in the CV repository
(the same CV without the phone number). Rebuild it there and copy the PDF to
`public/cv/Taher_Guerbej_CV.pdf`.

## The 3D hero

`components/portfolio/robot-arm.tsx` draws a 6-DOF arm whose joint chain is
the real AgileX Piper (origins, axes and limits from the URDF in
`constants/robot-constants.ts`). It unfolds on load, cycles through
joint-space keyframes and turns its base toward the pointer. The link shapes
are placeholders; phase 2 replaces them with the decimated Piper meshes
while keeping the chain and the animation.

The 3D canvases only mount on desktop-class devices with a hardware GPU and
without `prefers-reduced-motion` (see `hooks/use-deferred-3d.ts`).

## Credits

- Template: [Hasnain Irfan's 3D portfolio](https://github.com/HasnainIrfan/3d-portfolio) (MIT).
- Piper kinematics: [AgileX Robotics agx_arm_urdf](https://github.com/agilexrobotics/agx_arm_urdf) (MIT).

See `NOTICE` for what the MIT license does and does not cover. The
`docs/` folder holds the upstream template's documentation.

// Dedicated hero avatar data source - independent from ZANE_NETWORK
// These are purely decorative and curated for visual balance

export type HeroAvatarSize = "sm" | "md" | "lg"
export type HeroAvatarSide = "left" | "right"

export interface HeroAvatar {
  id: string
  image: string
  side: HeroAvatarSide
  size: HeroAvatarSize
  offsetY: number
}

// Curated set of professional images for hero decoration
// Images are positioned for visual balance, not semantic meaning
export const HERO_AVATARS: HeroAvatar[] = [
  // Left rail - top to bottom
  {
    id: "left-1",
    image: "https://static.wixstatic.com/media/6abdd9_fc4dfeaaa9c743d292921f1f9872cbc6~mv2.jpeg",
    side: "left",
    size: "lg",
    offsetY: 0,
  },
  {
    id: "left-2",
    image: "https://static.wixstatic.com/media/6abdd9_efd7bfa82b124e2bac9fcdabd7c72c6d~mv2.png",
    side: "left",
    size: "md",
    offsetY: 150,
  },
  {
    id: "left-3",
    image: "https://static.wixstatic.com/media/6abdd9_c4f2df4c348d495dbe22cf0457d514a4~mv2.png",
    side: "left",
    size: "md",
    offsetY: 300,
  },
  {
    id: "left-4",
    image: "https://static.wixstatic.com/media/6abdd9_51bfaeb92e884125a3bf65f5cbf31efe~mv2.png",
    side: "left",
    size: "sm",
    offsetY: 450,
  },

  // Right rail - top to bottom
  {
    id: "right-1",
    image: "https://static.wixstatic.com/media/6abdd9_9d04da37161741d08c1eb8b06dcf7d8f~mv2.png",
    side: "right",
    size: "lg",
    offsetY: 50,
  },
  {
    id: "right-2",
    image: "https://static.wixstatic.com/media/6abdd9_a66296ffa1ed43d9858084158814efca~mv2.png",
    side: "right",
    size: "md",
    offsetY: 200,
  },
  {
    id: "right-3",
    image: "https://static.wixstatic.com/media/6abdd9_3c1fbb3eef074c798ab841e9d332e4b6~mv2.png",
    side: "right",
    size: "md",
    offsetY: 350,
  },
  {
    id: "right-4",
    image: "https://static.wixstatic.com/media/6abdd9_cebde08412454abb9cc14b225fbabe7c~mv2.png",
    side: "right",
    size: "sm",
    offsetY: 500,
  },
]

import { LEGACY_GUIDE_CONTENT } from "./legacy"
import { ADDITIONAL_GUIDE_CONTENT } from "./additional"
import type { GuideContentEntry } from "./types"

export type { GuideContentEntry }

export const GUIDE_CONTENT: Record<string, GuideContentEntry> = {
  ...LEGACY_GUIDE_CONTENT,
  ...ADDITIONAL_GUIDE_CONTENT,
}

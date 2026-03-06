import { figmaData } from "./figma";
import { netflixData } from "./netflix";
import { cignaData } from "./cigna";
import { eliLillyData } from "./eli-lilly";
import type { CompanyData } from "./types";

export const companies: CompanyData[] = [
  figmaData,
  netflixData,
  cignaData,
  eliLillyData,
];

export const getCompanyBySlug = (slug: string): CompanyData | undefined =>
  companies.find((c) => c.slug === slug);

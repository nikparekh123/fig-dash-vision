import { figmaData } from "./figma";
import { netflixData } from "./netflix";
import { cignaData } from "./cigna";
import { eliLillyData } from "./eli-lilly";
import { integratedSensorData } from "./integrated-sensor";
import { adobeData } from "./adobe";
import { isrgData } from "./isrg";
import { mckData } from "./mck";
import type { CompanyData } from "./types";

export const companies: CompanyData[] = [
  figmaData,
  netflixData,
  adobeData,
  cignaData,
  eliLillyData,
  integratedSensorData,
  isrgData,
  mckData,
];

export const getCompanyBySlug = (slug: string): CompanyData | undefined =>
  companies.find((c) => c.slug === slug);

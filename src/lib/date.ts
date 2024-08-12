import { siteConfig } from "@/app/site-config";

const formatDate = (
  date: Date,
  options?: Intl.DateTimeFormatOptions & { excludeMonth?: boolean }
) => {
  const now = new Date(date).toLocaleDateString(siteConfig.locale, {
    year: "numeric",
    month: options?.excludeMonth ? undefined : "long",
    ...options,
  });

  return now;
};

export default formatDate;

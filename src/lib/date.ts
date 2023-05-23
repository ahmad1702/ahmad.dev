import { siteConfig } from "@/app/site-config";

const formatDate = (date: Date, options?: Intl.DateTimeFormatOptions) => {
  const now = new Date(date).toLocaleDateString(siteConfig.locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    ...options,
  });

  return now;
};

export default formatDate;

// date format: d MMM yyyy, H:mm, time should be specifed based on UTC time

export type EventData = {
  id: string;
  title: string;
  isActive?: boolean;
  validTill: string;
  bodyText: string | string[];
  chains?: number[];
  buttons?: {
    text: string;
    link: string;
    newTab?: boolean;
  }[];
};

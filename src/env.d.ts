declare interface Link {
    desc: string;
    link: string;
    icon: string;
  }

declare interface Contact {
    address: string;
    text?: string;
}

interface Institution {
  name: string;
  short: string;
  url: URL;
  place: string;
  in?: Institution[];
}

interface Roles {
  title: string;
  url: URL;
  institution: Institution;
  email: string;
}[]
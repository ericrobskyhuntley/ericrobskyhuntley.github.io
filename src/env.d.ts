declare interface Link {
    desc: string;
    link: string;
    icon: string;
  }

declare interface Config {
  name: string;
  desc: string;
  links: Link[];
  pages: {
    user: string;
    repo: string;
  },
  avatar: string;
}

declare interface Role {
  url: URL;
  links: Link[];
  email: string;
  order: number;
  published: boolean;
}[]
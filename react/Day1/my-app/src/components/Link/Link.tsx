type LinkProps = {
  text: string;
  url: string;
};

const Link = ({ text, url }: LinkProps) => {
  return <a href={url}>{text}</a>;
};

export default Link;

import { PropsWithChildren } from "react";

interface PageProps {
  title: string;
}

export function Page(props: PropsWithChildren<PageProps>) {
  return (
    <div className="post">
      <header className="post-header">
        <h1 className="post-title">{props.title}</h1>
      </header>

      <article className="post-content">{props.children}</article>
    </div>
  );
}

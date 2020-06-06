import { PropsWithChildren } from "react";
import config from "../config";
import Link from "next/link";
import Head from "next/head";

function Header() {
  return (
    <Link href="/">
      <a className="site-title fixed bg-blue p1 no-line-height top-0 left-0 z4">
        <svg width="40px" height="40px" viewBox="0 0 227 227">
          <title>logo copy</title>
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g id="logo-copy" fill="#FFFFFF">
              <path
                d="M113.5,207 C165.138624,207 207,165.138624 207,113.5 C207,61.8613759 165.138624,20 113.5,20 C61.8613759,20 20,61.8613759 20,113.5 C20,165.138624 61.8613759,207 113.5,207 L113.5,207 Z M113.5,227 L113.5,227 C50.8156809,227 0,176.184319 0,113.5 C0,50.8156809 50.8156809,0 113.5,0 C176.184319,0 227,50.8156809 227,113.5 C227,176.184319 176.184319,227 113.5,227 L113.5,227 Z"
                id="Shape"
              ></path>
              <g
                id="knife"
                transform="translate(100.444365, 117.673654) rotate(45.000000) translate(-100.444365, -117.673654) translate(32.944365, 98.173654)"
              >
                <path
                  d="M84.8406926,17.2276434 L84.8406926,10.3276433 L121.425959,10.3276433 C123.239968,10.3276433 124.743013,11.8547374 124.743013,13.7776433 C124.743013,15.7005492 123.239968,17.2276433 121.425959,17.2276433 L84.8406926,17.2276434 Z M121.425959,27.2276433 C128.79866,27.2276433 134.743013,21.1881765 134.743013,13.7776433 C134.743013,6.36711016 128.79866,0.327643333 121.425959,0.327643333 L79.8406926,0.327643333 L74.8406926,0.327643333 L74.8406926,5.32764333 L74.8406926,22.2276433 L74.8406926,27.2276433 L79.8406926,27.2276433 L121.425959,27.2276433 L121.425959,27.2276433 Z"
                  id="Shape"
                ></path>
                <path
                  d="M42.8784414,28.2053959 C37.2399696,26.9331427 30.579202,21.6833442 23.2201288,13.293639 C20.4167741,10.0976768 24.8641609,15.7531155 20.6881137,10.3276437 L74.3230319,10.3276438 L74.3230319,28.4943094 L45.3378631,28.49431 C44.5535914,28.49431 43.7347403,28.3986095 42.8784414,28.2053959 Z M79.323031,38.49431 L84.323031,38.49431 L84.323031,33.49431 L84.323031,5.32764333 L84.323031,0.327643333 L79.323031,0.327643333 L10.373034,0.327643333 L0.214850611,0.327643333 L6.41083447,8.37739328 C10.7163464,13.9710641 12.7119335,16.4785814 15.7023967,19.8878565 C24.3571851,29.7547408 32.3975833,36.0919188 40.6773965,37.960159 C42.2393166,38.3125874 43.7942062,38.4943099 45.3378629,38.49431 L79.323031,38.49431 Z"
                  id="Shape"
                ></path>
              </g>
              <g
                id="fork"
                transform="translate(116.291901, 118.192155) rotate(45.000000) translate(-116.291901, -118.192155) translate(96.791901, 49.192155)"
              >
                <path
                  d="M14.6827731,47.7007172 L14.6827731,132.30035 C14.6827731,135.061774 16.9213494,137.30035 19.6827731,137.30035 C22.4441969,137.30035 24.6827731,135.061774 24.6827731,132.30035 L24.6827731,47.7007172 C24.6827731,44.9392935 22.4441969,42.7007172 19.6827731,42.7007172 C16.9213494,42.7007172 14.6827731,44.9392935 14.6827731,47.7007172 L14.6827731,47.7007172 Z"
                  id="Shape"
                ></path>
                <path
                  d="M38.6827731,32.9433579 C38.6827731,43.4367682 30.1761834,51.9433579 19.6827731,51.9433579 C9.18936286,51.9433579 0.682773109,43.4367682 0.682773109,32.9433579 L38.6827731,32.9433579 L38.6827731,32.9433579 Z M0.682773109,0.3572034 L8.071662,0.3572034 L8.071662,32.9433579 L0.682773109,32.9433579 L0.682773109,0.3572034 L0.682773109,0.3572034 Z M31.2938842,0.3572034 L38.6827731,0.3572034 L38.6827731,32.9433579 L31.2938842,32.9433579 L31.2938842,0.3572034 L31.2938842,0.3572034 Z M15.9883287,0.3572034 L23.3772176,0.3572034 L23.3772176,32.9433579 L15.9883287,32.9433579 L15.9883287,0.3572034 L15.9883287,0.3572034 Z"
                  id="Oval-2"
                ></path>
              </g>
            </g>
          </g>
        </svg>
        <h1 className="hide">{config.site.title}</h1>
      </a>
    </Link>
  );
}

function Footer() {
  return (
    <footer className="footer bg-darken-1 clearfix py4 mt3">
      <div className="container px3 sm-px4">
        <div className="clearfix">
          <div className="sm-col sm-col-6">
            <p className="left-align mb2">
              <Link href="/search">
                <a>Search</a>
              </Link>
            </p>
          </div>
          <div className="sm-col sm-col-6">
            <p className="right-align mb2">
              Made with{" "}
              <svg
                className="js-geomicon geomicon"
                height="0.8em"
                data-icon="heart"
                viewBox="0 0 32 32"
                style={{ fill: "#007FFF" }}
              >
                <title>heart icon</title>
                <path d="M0 10 C0 6, 3 2, 8 2 C12 2, 15 5, 16 6 C17 5, 20 2, 24 2 C30 2, 32 6, 32 10 C32 18, 18 29, 16 30 C14 29, 0 18, 0 10"></path>
              </svg>{" "}
              by <a href="http://twitter.com/clarklab">@clarklab</a>, Next.js
              adaptation by <a href="http://twitter.com/skn0tt">@skn0tt</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface DefaultProps {
  twitterImageHref?: string;
}

export function Default(props: PropsWithChildren<DefaultProps>) {
  return (
    <>
      <Head>
        <title>{config.site.title}</title>
        <meta name="description" content={config.site.description} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={config.site.creator.twitter} />
        <meta name="twitter:title" content={config.site.title} />
        <meta name="twitter:description" content={config.site.description} />
        {props.twitterImageHref && (
          <meta name="twitter:image:src" content={props.twitterImageHref} />
        )}
      </Head>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </>
  );
}

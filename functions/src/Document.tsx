import * as React from "react";
import * as serializeJavascript from "serialize-javascript";
import * as manifest from "../../manifest.json";

interface DocumentProps {
    title: string;
    bundle: string;
    preloadedState: any;
    meta?: JSX.Element[] | JSX.Element;
}

function getFile(filename: string) {
    for (const entry in manifest) {
        if (entry === filename) {
            return manifest[entry].replace("../build/prod/", "");
        }
    }
}

export default class Document extends React.PureComponent<DocumentProps> {
    constructor(props: DocumentProps) {
        super(props);
    }
    
    createMarkup(data) {
        return {
            __html: `
                //<![CDATA[
                    window['APP_STATE'] = ${serializeJavascript(data, { isJSON: true })};
                //]]>`
        };
    }

    render() {
        const { title, meta, children, preloadedState } = this.props;

        return (
            <html>
                <head>
                    <link rel="icon" type="image/png" href="/assets/images/common/favicon.png" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0, shrink-to-fit=no, maximum-scale=1.0, user-scalable=no"
                    />
                    <link href="styles.css" rel="stylesheet" />
                    <title>{title}</title>
                    <meta name="robots" content="follow, all" />
                    <meta name="author" content="TPG" />
                    <meta name="description" content="Otestuj svoj prehľad ohľadom nadchádzajúcich volieb" />
                    <meta property="og:type" content="website" />
                    <meta property="og:description" content="Otestuj svoj prehľad ohľadom nadchádzajúcich volieb" />
                    <meta property="og:site_name" content="www.testpolitickejgramotnosti.sk" />
                    <meta property="og:image" content="http://tpg.sk/og_fb.png" />
                    <meta property="og:image:secure_url" content="http://tpg.sk/og_fb.png" />
                    <meta property="og:image:type" content="image/png" />
                    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
                    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
                    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
                    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
                    <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
                    <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
                    <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
                    <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
                    <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/manifest.json" />
                    <meta name="msapplication-TileColor" content="#ffffff" />
                    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
                    <meta name="theme-color" content="#ffffff" />
                    {meta}
                </head>
                <body>
                    <div id="app">{children}</div>
                    {preloadedState && <script dangerouslySetInnerHTML={this.createMarkup(preloadedState)} />}
                    <script src="/webgl.js" />
                    <script src="/__/firebase/7.5.0/firebase-app.js"></script>
                    <script src="/__/firebase/7.5.0/firebase-auth.js"></script>
                    <script src="/__/firebase/7.5.0/firebase-database.js"></script>
                    <script src="/__/firebase/7.5.0/firebase-analytics.js"></script>
                    <script src="init.js"></script>
                    <script src={getFile("vendor.js")} />
                    <script src={getFile("app.js")} />
                    <script src="/fb.js" />
                    <script src="https://connect.facebook.net/en_US/sdk.js"></script>
                </body>
            </html>
        );
    }
}

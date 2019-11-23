import * as React from "react";
import * as serializeJavascript from "serialize-javascript";
const version = require("../../../package.json").version;

interface DocumentProps {
    title: string;
    bundle: string;
    preloadedState: any;
    meta?: JSX.Element[] | JSX.Element;
    domain: string;
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
                    window['VERSION'] = '${version}';
                //]]>`
        };
    }

    render() {
        const { bundle, title, meta, children, preloadedState } = this.props;

        return (
            <html>
                <head>
                    <link rel="icon" type="image/png" href="/assets/images/common/favicon.png" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0, shrink-to-fit=no, maximum-scale=1.0, user-scalable=no"
                    />
                    <meta name="version" content={version} />
                    <link href="/css/styles.css" rel="stylesheet" />
                    <title>{title}</title>
                    <meta name="robots" content="follow, all" />
                    <meta name="author" content="Filmzie" />
                    <meta name="description" content="FILMZIE - Meet New Films." />
                    <meta property="og:type" content="website" />
                    <meta property="og:description" content="Filmzie - Meet New Films" />
                    <meta property="og:site_name" content="filmzie.com" />
                    {meta}
                </head>
                <body>
                    <div id="app">{children}</div>
                    {preloadedState && <script dangerouslySetInnerHTML={this.createMarkup(preloadedState)} />}

                    <script src="/vendor.js" />
                    <script src={`/${bundle}`} />
                    {process.env.NODE_ENV !== "production" && (
                        <script src={`http://localhost:35732/livereload.js`} />
                    )}
                    <script src="/__/firebase/7.5.0/firebase-app.js"></script>
                    <script src="/__/firebase/7.5.0/firebase-analytics.js"></script>
                    <script src="/__/firebase/init.js"></script>
                </body>
            </html>
        );
    }
}

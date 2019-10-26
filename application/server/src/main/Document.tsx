import * as React from "react";
import * as serializeJavascript from "serialize-javascript";
const version = require("../../../package.json").version;

interface DocumentProps {
    title: string;
    bundle: string;
    path?: string;
    preloadedState?: any;
    meta?: JSX.Element[] | JSX.Element;
    canonicalUrl?: string;
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
        const { bundle, title, meta, children, preloadedState, canonicalUrl, domain } = this.props;

        return (
            <html>
                <head>
                    <link rel="icon" type="image/png" href="/assets/images/common/favicon.png" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0, shrink-to-fit=no, maximum-scale=1.0, user-scalable=no"
                    />
                    <meta name="version" content={version} />
                    <link href="/assets/styles/app.css" rel="stylesheet" />
                    {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
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
                    <div id="root">{children}</div>
                    {preloadedState && <script dangerouslySetInnerHTML={this.createMarkup(preloadedState)} />}

                    <script src="/vendor.js" />
                    <script src={`/${bundle}`} />
                    {process.env.NODE_ENV !== "production" && (
                        <script src={`http://localhost:35732/livereload.js`} />
                    )}
                </body>
            </html>
        );
    }
}

import * as React from "react";
import * as serializeJavascript from "serialize-javascript";

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
                //]]>`
        };
    }

    render() {
        const { bundle, title, meta, children, preloadedState } = this.props;

        return (
            <html>
                <head>
                    <link rel="icon" type="image/png" href="/favicon.png" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0, shrink-to-fit=no, maximum-scale=1.0, user-scalable=no"
                    />
                    <link href="/styles.css" rel="stylesheet" />
                    <title>{title}</title>
                    <meta name="robots" content="follow, all" />
                    <meta name="author" content="TPG" />
                    <meta name="description" content="Test politickej gramotnosti" />
                    <meta property="og:type" content="website" />
                    <meta property="og:description" content="Test politickej gramotnosti" />
                    <meta property="og:site_name" content="testpolitickejgramotnosti.sk" />
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
                </body>
            </html>
        );
    }
}

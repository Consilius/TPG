import * as React from "react";

interface Props {
    result: number
}

function fb (result) {
    // @ts-ignore
    FB.ui({
        method: 'share',
        href: 'https://testpolitickejgramotnosti.sk/',
        quote: `Som super, ${result} / 10`
    }, function(response){
        console.log(response);
    });
}

const Summary: React.FunctionComponent<Props> = ({ result }) => (
    <div className="summary">
        <p className="result">
            {result} / 10
        </p>
        <div className="share">
            <button
                className="btn fb-share"
                onClick={() => fb(result)}
            >
                Zdieľaj výsledok na facebooku
            </button>
        </div>
        <div className="social">
            <a href="https://www.instagram.com/test_politickej_gramotnosti/">
                <img src="ig.png"></img>
                Test politickej gramotnosti
            </a>
            <a href="https://www.facebook.com/Test-politickej-gramotnosti-104774607714346/">
                <img src="fb.png"></img>
                Test politickej gramotnosti
            </a>
        </div>
    </div>
);

export default Summary;

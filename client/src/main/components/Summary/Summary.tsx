import * as React from "react";

interface Props {
    result: number;
    numberOfTestedUsers: number;
}

function fb (result) {
    // @ts-ignore
    FB.ui({
        method: 'share',
        href: 'https://testpolitickejgramotnosti.sk/',
        quote: `Môj výsledok ${result} / 10. Trúfneš si aj ty na kŕatky test?`
    });
}

const Summary: React.FunctionComponent<Props> = ({ result, numberOfTestedUsers }) => (
    <div className="summary">
        <div className="user-number">
            Už nás je <span className="bold">{numberOfTestedUsers + 1}</span>
        </div>
        <p className="result">
            Tvoj výsledok: {result} / 10
        </p>
        <div className="share">
            <button
                className="btn share-btn fb-share"
                onClick={() => fb(result)}
            >
                <img src="/fb-icon.png"></img>
                <span>Zdieľaj na Facebooku</span>
            </button>
            <a className="btn share-btn wa-share" href="https://wa.me/?text=https%3A%2F%2Ftpg.sk%2F">
                <img src="wa.png"></img>
                <span>Pošli na WhatsApp</span>
            </a>
        </div>
        <p className="users-to-unlock">Už len {249 - numberOfTestedUsers} vyskúšaných voličov a odomkneme ďalší test!</p>
        <div className="social">
            <a href="https://www.instagram.com/test_politickej_gramotnosti/">
                <img src="ig.png"></img>
            </a>
            <a href="https://www.facebook.com/Test-politickej-gramotnosti-104774607714346/">
                <img src="fb.png"></img>
            </a>
        </div>
    </div>
);

export default Summary;

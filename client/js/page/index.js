import React from 'react';

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <div className="mb-4">
          <b>あの人に心のエールを伝えたい！</b> でも、どうすれば…。
          <br />
          そんなあなたに、誰でも、誰にでも、気軽に称賛の気持ちを送るサービスがあります。
        </div>

        <h4>
          その名も、「<b className="mincho">えらい。</b>」
        </h4>

        <div className="mt-4">
          仕組みはシンプル。エールを伝えたい人のページへ行き、「
          <b className="mincho">えらい</b>」ボタン* を押す。
          <br />
          また、あなたの気持ちをツイートすることも、
          <br />
          それでも足りなければ、チップを送ることもできます。
          <br />
          <div className="mt-2">感謝の言玉が飛び交う、小さな憩いの場です。</div>
          <small className="text-muted d-block mt-4 text-left">
            * ボタンは複数種類あります
          </small>
        </div>
      </div>
    );
  }
}

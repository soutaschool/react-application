// アクションとはjsのオブジェクトのこと
export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const increment = () => ({
        type: "INCREMENT"
    })
// モジュールを読み込めるようにするために『export』を利用します。
// 外部で利用したいクラスに『export』を付けることで『import』が可能となります。



export const decrement = () => ({
        type: "DECREMENT"
    })
// それぞれのアクションクリエーターを作成する
export declare class Transaction {
    constructor(network: URL, keyPairs: Array);

    create(): this
    addInput(prevHash: string, script: string, fullAmount: number): this
    addOutput(recipient: string, balance: number, fee: number)
    sign(key: string)
    finalize(): this
    extract(): string
    broadcast(): this

}
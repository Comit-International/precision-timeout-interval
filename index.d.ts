type TimeoutController = {
    cancel(): void
}

declare function prcTimeout(milliseconds:number, callback: Function) : TimeoutController;
declare function prcTimeoutWithDelta(milliseconds:number, callback: Function) : TimeoutController;

type IntervalController = {
    cancel(): void,
    restart(): void,
    setPeriod(milliseconds:number): void,
    pauseResume(): void,
    callback: Function
}
declare function prcInterval(milliseconds:number, callback:Function) : IntervalController;
declare function prcIntervalWithDelta(milliseconds:number, callback:Function) : IntervalController;
export {prcTimeout, prcTimeoutWithDelta, prcInterval, prcIntervalWithDelta}
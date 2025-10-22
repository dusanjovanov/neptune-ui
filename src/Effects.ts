import { effect, type EffectOptions } from "@preact/signals-core";

export class Effects {
  private _effects: (() => void)[] = [];

  effect(fn: () => void | (() => void), options?: EffectOptions) {
    const dispose = effect(fn, options);
    this._effects.push(dispose);
    return dispose;
  }

  dispose() {
    for (let i = 0, len = this._effects.length; i < len; i++) {
      this._effects[i]();
    }
    this._effects.length = 0;
  }
}

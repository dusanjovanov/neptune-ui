import { Signal } from "@preact/signals-core";

export function getWindowSizeSignal() {
  const handler = () => {
    s.value = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };

  window.addEventListener("resize", handler);

  const s = new NeptuneSignal(
    { width: window.innerWidth, height: window.innerHeight },
    () => {
      window.removeEventListener("resize", handler);
    }
  );

  return s;
}

export class NeptuneSignal<T> extends Signal<T> {
  constructor(value: T, dispose: () => void) {
    super(value);
    this._dispose = dispose;
  }
  private _dispose;

  dispose() {
    this._dispose();
  }
}

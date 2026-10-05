/**
 * Ordered, lossless writer for a Node-style stream (stdout).
 *
 * `stream.write` returns false once its buffer is full, but it has still
 * buffered that chunk. Everything after it waits in the outbox until `drain`,
 * so responses are never dropped or reordered, however often the stream
 * reapplies backpressure.
 */
export interface WritableLike {
  write(chunk: string): boolean;
  once(event: "drain", listener: () => void): unknown;
}

export class Outbox {
  private queue: string[] = [];
  private awaitingDrain = false;

  constructor(private readonly stream: () => WritableLike = () => process.stdout) {}

  write(text: string): void {
    this.queue.push(text);
    this.flush();
  }

  private flush(): void {
    if (this.awaitingDrain) {
      return;
    }
    const stream = this.stream();
    while (this.queue.length > 0) {
      const chunk = this.queue.shift() as string;
      if (!stream.write(chunk)) {
        this.awaitingDrain = true;
        stream.once("drain", () => {
          this.awaitingDrain = false;
          this.flush();
        });
        return;
      }
    }
  }
}

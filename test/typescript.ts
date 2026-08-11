// @ts-nocheck -- visual highlighting fixture, not an application
/** Documentation comment with TODO, NOTE, WARN, and an `inline` name. */

import type { PathLike as FilePath } from "node:fs";

export const MAX_RETRIES = 3;
const enabled = true;
const missing = null;
const unavailable = undefined;
const amount = 42.5;
const huge = 9_007_199_254_740_991n;
const pattern = /kiro\s+(dark|light)/giu;
const message = `Theme: ${enabled ? "enabled" : "disabled"}`;

type Identifier = string | number;

interface Entity {
  readonly id: Identifier;
  name?: string;
}

enum Status {
  Idle = "idle",
  Ready = "ready",
}

namespace ThemeTokens {
  export const accent = Symbol("accent");
}

function sealed<T extends Function>(constructor: T): T {
  Object.seal(constructor);
  return constructor;
}

@sealed
class Repository<T extends Entity> {
  static readonly kind = "repository";
  #items = new Map<Identifier, T>();

  constructor(public readonly path: FilePath) {}

  get size(): number {
    return this.#items.size;
  }

  async find(id: Identifier, fallback?: T): Promise<T | undefined> {
    try {
      return this.#items.get(id) ?? fallback;
    } catch (error: unknown) {
      throw new Error(`Lookup failed: ${String(error)}`);
    }
  }
}

const ids: Identifier[] = [1, 2, 3];
const doubled = ids.filter(Boolean).map((value) => value * 2);
void [missing, unavailable, amount, huge, pattern, message, Status.Ready, ThemeTokens.accent, doubled];

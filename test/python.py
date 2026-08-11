"""Visual syntax-highlighting fixture."""

from __future__ import annotations

import re
from dataclasses import dataclass
from pathlib import Path as FilePath

MAX_RETRIES = 3
PATTERN = re.compile(r"kiro\s+(dark|light)", re.IGNORECASE)


def traced(function):
    return function


@dataclass(frozen=True)
class Theme:
    name: str
    path: FilePath | None = None
    enabled: bool = True

    @property
    def label(self) -> str:
        return f"Theme: {self.name!r}"

    @traced
    async def load(self, retries: int = MAX_RETRIES) -> dict[str, object]:
        for attempt in range(retries):
            if self.enabled and attempt >= 0:
                return {"name": self.name, "ready": True, "pattern": PATTERN.pattern}
        raise RuntimeError("theme failed to load")


theme = Theme(name="Kiro")
print(theme.label)

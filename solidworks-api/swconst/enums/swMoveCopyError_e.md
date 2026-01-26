---
type: enum
name: swMoveCopyError_e
description: Move/copy errors.
member_count: 3
docset: swconst
categories:
  - constants
used_by: []
---

# swMoveCopyError_e

Move/copy errors.

## Values

| Member | Value | Description |
|---|---|---|
| `swMoveCopyErrorFail` | 2 | = Failed to create destination directories or copy operation failed possibly because you do not have proper permissions |
| `swMoveCopyErrorNone` | 0 | = Successful |
| `swMoveCopyErrorSourceDoesNotExist` | 1 | = Source file does not exist |
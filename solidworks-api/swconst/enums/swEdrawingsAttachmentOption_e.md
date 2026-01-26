---
type: enum
name: swEdrawingsAttachmentOption_e
description: Configuration options for creating and attaching STEP files when publishing a part or assembly to eDrawings.
member_count: 4
docset: swconst
categories:
  - constants
used_by: []
---

# swEdrawingsAttachmentOption_e

Configuration options for creating and attaching STEP files when publishing a part or assembly to eDrawings.

## Values

| Member | Value | Description |
|---|---|---|
| `swEdrawingsAttachActive` | 1 | = Create and attach STEP files to the active configuration only |
| `swEdrawingsAttachAll` | 2 | = Create and attach STEP files to all configurations |
| `swEdrawingsAttachNone` | 0 | = Do not create and attach any STEP files |
| `swEdrawingsAttachSelected` | 3 | = Create and attach STEP files to specified configurations only |
---
type: enum
name: swPropMgrPageSliderStyle_e
description: PropertyManager page slider styles. Bitmask.
member_count: 5
docset: swconst
categories:
  - constants
used_by: []
---

# swPropMgrPageSliderStyle_e

PropertyManager page slider styles. Bitmask.

## Values

| Member | Value | Description |
|---|---|---|
| `swPropMgrPageSliderStyle_AutoTicks` | 2 | or 0x2; If set, then tick marks are created based on swPropMgrPageSliderStyle_BottomLeftTicks and swPropMgrPageSliderStyle_TopRightTicks |
| `swPropMgrPageSliderStyle_BottomLeftTicks` | 4 | or 0x4; If set, then tick marks appear at the bottom (horizontal) or left (vertical) of the slider |
| `swPropMgrPageSliderStyle_NotifyWhileTracking` | 16 | or 0x10; If set, then your application is notified when the user is dragging the slider, each time the value changes; if not set, then your application is not notified when the user is dragging the slider, only when the user is done dragging the slider; setting this bit allows your application to react immediately to changes, but it does generate many more callbacks, so it is less efficient |
| `swPropMgrPageSliderStyle_TopRightTicks` | 8 | or 0x8; If set, then tick marks appear at the top (horizontal) or right (vertical) of the slider |
| `swPropMgrPageSliderStyle_Vertical` | 1 | or 0x1; If set, then the slider is oriented vertically; if not set, then the slider is oriented horizontally |
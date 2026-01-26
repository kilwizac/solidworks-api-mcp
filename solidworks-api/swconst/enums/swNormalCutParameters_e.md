---
type: enum
name: swNormalCutParameters_e
description: Sheet metal normal cut parameters.
member_count: 2
docset: swconst
categories:
  - constants
used_by: []
---

# swNormalCutParameters_e

Sheet metal normal cut parameters.

## Values

| Member | Value | Description |
|---|---|---|
| `swNormalCutExtent` | 0 | = Cuts the maximum amount from the intersection profiles on the top and bottom of the sheet metal body |
| `swNormalCutOffsetPlane` | 1 | = Adjusts the layer where the intersection curve intersects the sheet metal body; Select a reference plane or top or bottom face to define the offset plane and then either set ISMNormalCutFeatureData2::LinkToKFactor to true or set ISMNormalCutFeatureData2::LayerAdjustmentValue to a value between 0 and 1 to adjust the layer |
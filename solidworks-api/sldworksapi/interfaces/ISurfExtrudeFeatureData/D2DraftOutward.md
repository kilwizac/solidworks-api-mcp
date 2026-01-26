---
type: property
interface: ISurfExtrudeFeatureData
member: D2DraftOutward
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISurfExtrudeFeatureData.D1DraftOutward
  - ISurfExtrudeFeatureData.D2CapEnd
  - ISurfExtrudeFeatureData.D2DraftAngle
keywords:
  - d2draftoutward
  - isurfextrudefeaturedata
  - surf
  - extrude
  - feature
  - data
  - d2
  - draft
  - outward
  - boolean
readonly: null
---

# ISurfExtrudeFeatureData.D2DraftOutward

Gets or sets whether to draft the extruded surface outward or inward in Direction 2.

## Signature

```csharp
System.Boolean D2DraftOutward {get; set;}
```
## Parameters

None.

## Return Value

True to draft the extruded surface outward in Direction 2, false to draft the extruded surface inward in Direction 2 (see Remarks )

## Remarks

This property is only available if:
ISurfExtrudeFeatureData::BothDirections
= true.
ISurfExtrudeFeatureData::D2DraftOn
= true.
See
Accessing Selections that Define Features
for additional details.

## Examples

- ISurfExtrudeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISurfExtrudeFeatureData)

## See Also

- `ISurfExtrudeFeatureData.D1DraftOutward`
- `ISurfExtrudeFeatureData.D2CapEnd`
- `ISurfExtrudeFeatureData.D2DraftAngle`
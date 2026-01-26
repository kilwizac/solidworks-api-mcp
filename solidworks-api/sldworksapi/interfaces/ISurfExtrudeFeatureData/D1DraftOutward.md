---
type: property
interface: ISurfExtrudeFeatureData
member: D1DraftOutward
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISurfExtrudeFeatureData.BothDirections
  - ISurfExtrudeFeatureData.D1CapEnd
  - ISurfExtrudeFeatureData.D1DraftAngle
  - ISurfExtrudeFeatureData.D2DraftOutward
keywords:
  - d1draftoutward
  - isurfextrudefeaturedata
  - surf
  - extrude
  - feature
  - data
  - d1
  - draft
  - outward
  - boolean
readonly: null
---

# ISurfExtrudeFeatureData.D1DraftOutward

Gets or sets whether to draft the extruded surface outward or inward in Direction 1.

## Signature

```csharp
System.Boolean D1DraftOutward {get; set;}
```
## Parameters

None.

## Return Value

True to draft the extruded surface outward in Direction 1, false to draft the extruded surface inward in Direction 1 (see Remarks )

## Remarks

This property is only available if
ISurfExtrudeFeatureData::D1DraftOn
= true.
See
Accessing Selections that Define Features
for additional details.

## Examples

- ISurfExtrudeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISurfExtrudeFeatureData)

## See Also

- `ISurfExtrudeFeatureData.BothDirections`
- `ISurfExtrudeFeatureData.D1CapEnd`
- `ISurfExtrudeFeatureData.D1DraftAngle`
- `ISurfExtrudeFeatureData.D2DraftOutward`
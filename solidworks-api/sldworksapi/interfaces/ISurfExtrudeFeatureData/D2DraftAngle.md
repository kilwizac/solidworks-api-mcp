---
type: property
interface: ISurfExtrudeFeatureData
member: D2DraftAngle
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISurfExtrudeFeatureData.D1DraftAngle
  - ISurfExtrudeFeatureData.D2CapEnd
  - ISurfExtrudeFeatureData.D2DraftOutward
keywords:
  - d2draftangle
  - isurfextrudefeaturedata
  - surf
  - extrude
  - feature
  - data
  - d2
  - draft
  - angle
  - double
readonly: null
---

# ISurfExtrudeFeatureData.D2DraftAngle

Gets or sets the angle of the draft of this extruded surface in Direction 2.

## Signature

```csharp
System.Double D2DraftAngle {get; set;}
```
## Parameters

None.

## Return Value

Draft angle in Direction 2 (see Remarks )

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

- `ISurfExtrudeFeatureData.D1DraftAngle`
- `ISurfExtrudeFeatureData.D2CapEnd`
- `ISurfExtrudeFeatureData.D2DraftOutward`
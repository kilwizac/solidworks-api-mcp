---
type: property
interface: ISurfExtrudeFeatureData
member: D1DraftAngle
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISurfExtrudeFeatureData.BothDirections
  - ISurfExtrudeFeatureData.D1CapEnd
  - ISurfExtrudeFeatureData.D1DraftOutward
  - ISurfExtrudeFeatureData.D2DraftAngle
keywords:
  - d1draftangle
  - isurfextrudefeaturedata
  - surf
  - extrude
  - feature
  - data
  - d1
  - draft
  - angle
  - double
readonly: null
---

# ISurfExtrudeFeatureData.D1DraftAngle

Gets or sets the angle of the draft of this extruded surface in Direction 1.

## Signature

```csharp
System.Double D1DraftAngle {get; set;}
```
## Parameters

None.

## Return Value

Draft angle in Direction 1 (see Remarks )

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
- `ISurfExtrudeFeatureData.D1DraftOutward`
- `ISurfExtrudeFeatureData.D2DraftAngle`
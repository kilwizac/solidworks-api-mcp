---
type: property
interface: ISurfExtrudeFeatureData
member: D2DraftOn
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISurfExtrudeFeatureData.D1DraftOn
  - ISurfExtrudeFeatureData.D2CapEnd
  - ISurfExtrudeFeatureData.D2DraftAngle
  - ISurfExtrudeFeatureData.D2DraftOutward
keywords:
  - d2drafton
  - isurfextrudefeaturedata
  - surf
  - extrude
  - feature
  - data
  - d2
  - draft
  - boolean
readonly: null
---

# ISurfExtrudeFeatureData.D2DraftOn

Gets or sets whether to draft the extruded surface in Direction 2.

## Signature

```csharp
System.Boolean D2DraftOn {get; set;}
```
## Parameters

None.

## Return Value

True to draft the extruded surface in Direction 2, false to not (see Remarks )

## Remarks

This property is only available if
ISurfExtrudeFeatureData::BothDirections
= true.
See
Accessing Selections that Define Features
for additional details.

## Examples

- ISurfExtrudeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISurfExtrudeFeatureData)

## See Also

- `ISurfExtrudeFeatureData.D1DraftOn`
- `ISurfExtrudeFeatureData.D2CapEnd`
- `ISurfExtrudeFeatureData.D2DraftAngle`
- `ISurfExtrudeFeatureData.D2DraftOutward`
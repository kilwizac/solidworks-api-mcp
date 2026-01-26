---
type: property
interface: ISurfExtrudeFeatureData
member: D2CapEnd
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISurfExtrudeFeatureData.D1CapEnd
  - ISurfExtrudeFeatureData.D2DraftAngle
  - ISurfExtrudeFeatureData.D2DraftOn
  - ISurfExtrudeFeatureData.D2DraftOutward
keywords:
  - d2capend
  - isurfextrudefeaturedata
  - surf
  - extrude
  - feature
  - data
  - d2
  - cap
  - end
  - boolean
readonly: null
---

# ISurfExtrudeFeatureData.D2CapEnd

Gets or sets whether to cap the end of the extruded surface in Direction 2.

## Signature

```csharp
System.Boolean D2CapEnd {get; set;}
```
## Parameters

None.

## Return Value

True to cap the end in Direction 2, false to not (see Remarks )

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

- `ISurfExtrudeFeatureData.D1CapEnd`
- `ISurfExtrudeFeatureData.D2DraftAngle`
- `ISurfExtrudeFeatureData.D2DraftOn`
- `ISurfExtrudeFeatureData.D2DraftOutward`
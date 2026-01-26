---
type: method
interface: IExtrudeFeatureData2
member: GetDraftAngle
returns: System.Double
parameters:
  -
    name: Forward
    type: System.Boolean
    description: True for forward direction, false for reverse
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IExtrudeFeatureData2.GetDraftOutward
  - IExtrudeFeatureData2.GetDraftWhileExtruding
  - IExtrudeFeatureData2.SetDraftAngle
  - IExtrudeFeatureData2.SetDraftOutward
  - IExtrudeFeatureData2.SetDraftWhileExtruding
keywords:
  - drafts
  - see
  - also
  - idraftfeaturedata2
  - extrude
  - getdraftangle
  - iextrudefeaturedata2
  - feature
  - data2
  - draft
  - angle
  - forward
  - boolean
  - double
---

# IExtrudeFeatureData2.GetDraftAngle

Gets the draft angle of the extrusion in the forward or reverse direction.

## Signature

```csharp
System.Double GetDraftAngle( 
   System.Boolean
Forward
)
```
## Parameters

- `Forward` (System.Boolean): True for forward direction, false for reverse

## Return Value

Draft angle of the extrusion in radians

## See Also

- `IExtrudeFeatureData2.GetDraftOutward`
- `IExtrudeFeatureData2.GetDraftWhileExtruding`
- `IExtrudeFeatureData2.SetDraftAngle`
- `IExtrudeFeatureData2.SetDraftOutward`
- `IExtrudeFeatureData2.SetDraftWhileExtruding`
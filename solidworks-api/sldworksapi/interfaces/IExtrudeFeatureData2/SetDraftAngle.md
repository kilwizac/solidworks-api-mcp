---
type: method
interface: IExtrudeFeatureData2
member: SetDraftAngle
returns: void
parameters:
  -
    name: Forward
    type: System.Boolean
    description: True for forward direction, false for reverse
  -
    name: DraftAngle
    type: System.Double
    description: Draft angle of the extrusion in radians
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IExtrudeFeatureData2.GetDraftAngle
  - IExtrudeFeatureData2.GetDraftOutward
  - IExtrudeFeatureData2.GetDraftWhileExtruding
  - IExtrudeFeatureData2.SetDraftOutward
  - IExtrudeFeatureData2.SetDraftWhileExtruding
keywords:
  - drafts
  - see
  - also
  - idraftfeaturedata2
  - extrude
  - setdraftangle
  - iextrudefeaturedata2
  - feature
  - data2
  - draft
  - angle
  - forward
  - boolean
  - double
  - void
---

# IExtrudeFeatureData2.SetDraftAngle

Sets the draft angle of the extrusion in the forward or reverse direction.

## Signature

```csharp
void SetDraftAngle( 
   System.Boolean
Forward
,
   System.Double
DraftAngle
)
```
## Parameters

- `Forward` (System.Boolean): True for forward direction, false for reverse
- `DraftAngle` (System.Double): Draft angle of the extrusion in radians

## Return Value

Unknown.

## See Also

- `IExtrudeFeatureData2.GetDraftAngle`
- `IExtrudeFeatureData2.GetDraftOutward`
- `IExtrudeFeatureData2.GetDraftWhileExtruding`
- `IExtrudeFeatureData2.SetDraftOutward`
- `IExtrudeFeatureData2.SetDraftWhileExtruding`
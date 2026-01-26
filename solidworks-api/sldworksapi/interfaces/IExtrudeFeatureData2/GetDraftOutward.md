---
type: method
interface: IExtrudeFeatureData2
member: GetDraftOutward
returns: System.Boolean
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
  - IExtrudeFeatureData2.GetDraftAngle
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
  - getdraftoutward
  - iextrudefeaturedata2
  - feature
  - data2
  - draft
  - outward
  - forward
  - boolean
---

# IExtrudeFeatureData2.GetDraftOutward

Gets whether the extrusion feature is drafted outward in the forward or reverse direction.

## Signature

```csharp
System.Boolean GetDraftOutward( 
   System.Boolean
Forward
)
```
## Parameters

- `Forward` (System.Boolean): True for forward direction, false for reverse

## Return Value

True if feature is drafted outward, false if not

## See Also

- `IExtrudeFeatureData2.GetDraftAngle`
- `IExtrudeFeatureData2.GetDraftWhileExtruding`
- `IExtrudeFeatureData2.SetDraftAngle`
- `IExtrudeFeatureData2.SetDraftOutward`
- `IExtrudeFeatureData2.SetDraftWhileExtruding`
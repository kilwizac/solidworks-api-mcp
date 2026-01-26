---
type: method
interface: IExtrudeFeatureData2
member: SetDraftOutward
returns: void
parameters:
  -
    name: Forward
    type: System.Boolean
    description: True for forward direction, false for reverse
  -
    name: DraftOutward
    type: System.Boolean
    description: True if feature is drafted outward, false if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IExtrudeFeatureData2.GetDraftAngle
  - IExtrudeFeatureData2.GetDraftOutward
  - IExtrudeFeatureData2.GetDraftWhileExtruding
  - IExtrudeFeatureData2.SetDraftAngle
  - IExtrudeFeatureData2.SetDraftWhileExtruding
keywords:
  - drafts
  - see
  - also
  - idraftfeaturedata2
  - extrude
  - setdraftoutward
  - iextrudefeaturedata2
  - feature
  - data2
  - draft
  - outward
  - forward
  - boolean
  - void
---

# IExtrudeFeatureData2.SetDraftOutward

Sets whether the extrusion feature should draft outward in the forward or reverse direction.

## Signature

```csharp
void SetDraftOutward( 
   System.Boolean
Forward
,
   System.Boolean
DraftOutward
)
```
## Parameters

- `Forward` (System.Boolean): True for forward direction, false for reverse
- `DraftOutward` (System.Boolean): True if feature is drafted outward, false if not

## Return Value

Unknown.

## See Also

- `IExtrudeFeatureData2.GetDraftAngle`
- `IExtrudeFeatureData2.GetDraftOutward`
- `IExtrudeFeatureData2.GetDraftWhileExtruding`
- `IExtrudeFeatureData2.SetDraftAngle`
- `IExtrudeFeatureData2.SetDraftWhileExtruding`
---
type: method
interface: IExtrudeFeatureData2
member: SetDraftWhileExtruding
returns: void
parameters:
  -
    name: Forward
    type: System.Boolean
    description: True for forward direction, false for reverse
  -
    name: DraftWhileExtrude
    type: System.Boolean
    description: True if the feature is drafted while extruding, false if not
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
  - IExtrudeFeatureData2.SetDraftOutward
keywords:
  - drafts
  - see
  - also
  - idraftfeaturedata2
  - extrude
  - setdraftwhileextruding
  - iextrudefeaturedata2
  - feature
  - data2
  - draft
  - while
  - extruding
  - forward
  - boolean
  - void
---

# IExtrudeFeatureData2.SetDraftWhileExtruding

Sets whether the feature is drafted while extruding in the forward or reverse direction.

## Signature

```csharp
void SetDraftWhileExtruding( 
   System.Boolean
Forward
,
   System.Boolean
DraftWhileExtrude
)
```
## Parameters

- `Forward` (System.Boolean): True for forward direction, false for reverse
- `DraftWhileExtrude` (System.Boolean): True if the feature is drafted while extruding, false if not

## Return Value

Unknown.

## See Also

- `IExtrudeFeatureData2.GetDraftAngle`
- `IExtrudeFeatureData2.GetDraftOutward`
- `IExtrudeFeatureData2.GetDraftWhileExtruding`
- `IExtrudeFeatureData2.SetDraftAngle`
- `IExtrudeFeatureData2.SetDraftOutward`
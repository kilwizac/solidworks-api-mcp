---
type: method
interface: IExtrudeFeatureData2
member: GetDraftWhileExtruding
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
  - IExtrudeFeatureData2.GetDraftOutward
  - IExtrudeFeatureData2.SetDraftAngle
  - IExtrudeFeatureData2.SetDraftOutward
  - IExtrudeFeatureData2.SetDraftWhileExtruding
keywords:
  - drafts
  - see
  - also
  - idraftfeaturedata2
  - extrude
  - getdraftwhileextruding
  - iextrudefeaturedata2
  - feature
  - data2
  - draft
  - while
  - extruding
  - forward
  - boolean
---

# IExtrudeFeatureData2.GetDraftWhileExtruding

Gets whether the feature is drafted while extruding in the forward or reverse direction.

## Signature

```csharp
System.Boolean GetDraftWhileExtruding( 
   System.Boolean
Forward
)
```
## Parameters

- `Forward` (System.Boolean): True for forward direction, false for reverse

## Return Value

True if feature is drafted while extruding, false if not

## See Also

- `IExtrudeFeatureData2.GetDraftAngle`
- `IExtrudeFeatureData2.GetDraftOutward`
- `IExtrudeFeatureData2.SetDraftAngle`
- `IExtrudeFeatureData2.SetDraftOutward`
- `IExtrudeFeatureData2.SetDraftWhileExtruding`
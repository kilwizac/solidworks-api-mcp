---
type: method
interface: IExtrudeFeatureData2
member: GetReverseOffset
returns: System.Boolean
parameters:
  -
    name: Fwd
    type: System.Boolean
    description: True gets the reverse offset setting in the forward direction, false gets it in the reverse direction
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IExtrudeFeatureData2.FromOffsetDistance
  - IExtrudeFeatureData2.FromOffsetReverse
  - IExtrudeFeatureData2.GetTranslateSurface
  - IExtrudeFeatureData2.SetReverseOffset
  - IExtrudeFeatureData2.SetTranslateSurface
keywords:
  - getreverseoffset
  - iextrudefeaturedata2
  - extrude
  - feature
  - data2
  - reverse
  - offset
  - fwd
  - boolean
---

# IExtrudeFeatureData2.GetReverseOffset

Gets the offset direction for this extrude feature.

## Signature

```csharp
System.Boolean GetReverseOffset( 
   System.Boolean
Fwd
)
```
## Parameters

- `Fwd` (System.Boolean): True gets the reverse offset setting in the forward direction, false gets it in the reverse direction

## Return Value

True if the reverse offset setting is enabled, false if it is disabled

## See Also

- `IExtrudeFeatureData2.FromOffsetDistance`
- `IExtrudeFeatureData2.FromOffsetReverse`
- `IExtrudeFeatureData2.GetTranslateSurface`
- `IExtrudeFeatureData2.SetReverseOffset`
- `IExtrudeFeatureData2.SetTranslateSurface`
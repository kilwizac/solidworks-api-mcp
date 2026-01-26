---
type: method
interface: IExtrudeFeatureData2
member: SetReverseOffset
returns: void
parameters:
  -
    name: Fwd
    type: System.Boolean
    description: True sets the reverse offset setting in the forward direction, false sets it in the reverse direction
  -
    name: ValIn
    type: System.Boolean
    description: True enables the reverse offset setting, false disables it
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IExtrudeFeatureData2.FromOffsetDistance
  - IExtrudeFeatureData2.FromOffsetReverse
  - IExtrudeFeatureData2.GetReverseOffset
  - IExtrudeFeatureData2.GetTranslateSurface
  - IExtrudeFeatureData2.SetTranslateSurface
keywords:
  - setreverseoffset
  - iextrudefeaturedata2
  - extrude
  - feature
  - data2
  - reverse
  - offset
  - fwd
  - boolean
  - val
  - void
---

# IExtrudeFeatureData2.SetReverseOffset

Sets the offset direction for this extrude feature.

## Signature

```csharp
void SetReverseOffset( 
   System.Boolean
Fwd
,
   System.Boolean
ValIn
)
```
## Parameters

- `Fwd` (System.Boolean): True sets the reverse offset setting in the forward direction, false sets it in the reverse direction
- `ValIn` (System.Boolean): True enables the reverse offset setting, false disables it

## Return Value

Unknown.

## See Also

- `IExtrudeFeatureData2.FromOffsetDistance`
- `IExtrudeFeatureData2.FromOffsetReverse`
- `IExtrudeFeatureData2.GetReverseOffset`
- `IExtrudeFeatureData2.GetTranslateSurface`
- `IExtrudeFeatureData2.SetTranslateSurface`
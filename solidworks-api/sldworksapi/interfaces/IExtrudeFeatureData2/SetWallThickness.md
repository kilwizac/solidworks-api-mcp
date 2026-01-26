---
type: method
interface: IExtrudeFeatureData2
member: SetWallThickness
returns: void
parameters:
  -
    name: Forward
    type: System.Boolean
    description: True for forward direction, false for reverse
  -
    name: WallThickness
    type: System.Double
    description: True for forward feature direction, false for reverse
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IExtrudeFeatureData2.CapEnds
  - IExtrudeFeatureData2.CapThickness
  - IExtrudeFeatureData2.GetWallThickness
  - IExtrudeFeatureData2.IsThinFeature
  - IExtrudeFeatureData2.ThinWallType
keywords:
  - thin
  - features
  - setwallthickness
  - iextrudefeaturedata2
  - extrude
  - feature
  - data2
  - wall
  - thickness
  - forward
  - boolean
  - double
  - void
---

# IExtrudeFeatureData2.SetWallThickness

Sets the wall thickness of the thin extrusion feature in a forward or reverse direction.

## Signature

```csharp
void SetWallThickness( 
   System.Boolean
Forward
,
   System.Double
WallThickness
)
```
## Parameters

- `Forward` (System.Boolean): True for forward direction, false for reverse
- `WallThickness` (System.Double): True for forward feature direction, false for reverse

## Return Value

Unknown.

## Remarks

This method is relevant only for thin features.

## See Also

- `IExtrudeFeatureData2.CapEnds`
- `IExtrudeFeatureData2.CapThickness`
- `IExtrudeFeatureData2.GetWallThickness`
- `IExtrudeFeatureData2.IsThinFeature`
- `IExtrudeFeatureData2.ThinWallType`
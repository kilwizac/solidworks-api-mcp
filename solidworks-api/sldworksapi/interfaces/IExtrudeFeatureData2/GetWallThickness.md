---
type: method
interface: IExtrudeFeatureData2
member: GetWallThickness
returns: System.Double
parameters:
  -
    name: Forward
    type: System.Boolean
    description: True for forward feature direction, false for reverse
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IExtrudeFeatureData2.CapEnds
  - IExtrudeFeatureData2.CapThickness
  - IExtrudeFeatureData2.IsThinFeature
  - IExtrudeFeatureData2.SetWallThickness
  - IExtrudeFeatureData2.ThinWallType
keywords:
  - thin
  - features
  - getwallthickness
  - iextrudefeaturedata2
  - extrude
  - feature
  - data2
  - wall
  - thickness
  - forward
  - boolean
  - double
---

# IExtrudeFeatureData2.GetWallThickness

Gets the wall thickness of the thin extrusion feature in forward or reverse direction.

## Signature

```csharp
System.Double GetWallThickness( 
   System.Boolean
Forward
)
```
## Parameters

- `Forward` (System.Boolean): True for forward feature direction, false for reverse

## Return Value

Wall thickness

## Remarks

This method is relevant only for thin features.

## See Also

- `IExtrudeFeatureData2.CapEnds`
- `IExtrudeFeatureData2.CapThickness`
- `IExtrudeFeatureData2.IsThinFeature`
- `IExtrudeFeatureData2.SetWallThickness`
- `IExtrudeFeatureData2.ThinWallType`
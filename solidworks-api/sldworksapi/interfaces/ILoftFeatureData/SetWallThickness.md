---
type: method
interface: ILoftFeatureData
member: SetWallThickness
returns: void
parameters:
  -
    name: Forward
    type: System.Boolean
    description: True for forward feature direction, false for reverse
  -
    name: WallThickness
    type: System.Double
    description: Wall thickness
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILoftFeatureData.GetWallThickness
  - ILoftFeatureData.IsThinFeature
  - ILoftFeatureData.ThinWallType
keywords:
  - setwallthickness
  - iloftfeaturedata
  - loft
  - feature
  - data
  - wall
  - thickness
  - forward
  - boolean
  - double
  - void
---

# ILoftFeatureData.SetWallThickness

Sets the wall thickness for this loft feature in the forward or reverse direction.

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

- `Forward` (System.Boolean): True for forward feature direction, false for reverse
- `WallThickness` (System.Double): Wall thickness

## Return Value

Unknown.

## See Also

- `ILoftFeatureData.GetWallThickness`
- `ILoftFeatureData.IsThinFeature`
- `ILoftFeatureData.ThinWallType`
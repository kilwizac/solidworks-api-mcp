---
type: method
interface: IRevolveFeatureData2
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
  - IRevolveFeatureData2.GetWallThickness
  - IRevolveFeatureData2.IsThinFeature
  - IRevolveFeatureData2.ThinWallType
keywords:
  - setwallthickness
  - irevolvefeaturedata2
  - revolve
  - feature
  - data2
  - wall
  - thickness
  - forward
  - boolean
  - double
  - void
---

# IRevolveFeatureData2.SetWallThickness

Sets the wall thickness of the thin revolution feature in forward/reverse direction.

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

## Remarks

This method only affects thin features.

## See Also

- `IRevolveFeatureData2.GetWallThickness`
- `IRevolveFeatureData2.IsThinFeature`
- `IRevolveFeatureData2.ThinWallType`
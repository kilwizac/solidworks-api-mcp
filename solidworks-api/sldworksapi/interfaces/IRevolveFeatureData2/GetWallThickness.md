---
type: method
interface: IRevolveFeatureData2
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
  - IRevolveFeatureData2.IsThinFeature
  - IRevolveFeatureData2.SetWallThickness
  - IRevolveFeatureData2.ThinWallType
keywords:
  - getwallthickness
  - irevolvefeaturedata2
  - revolve
  - feature
  - data2
  - wall
  - thickness
  - forward
  - boolean
  - double
---

# IRevolveFeatureData2.GetWallThickness

Gets the wall thickness of the thin revolution feature in forward or reverse direction.

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

This method only affects thin features.

## See Also

- `IRevolveFeatureData2.IsThinFeature`
- `IRevolveFeatureData2.SetWallThickness`
- `IRevolveFeatureData2.ThinWallType`
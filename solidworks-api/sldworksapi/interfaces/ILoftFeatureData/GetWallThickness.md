---
type: method
interface: ILoftFeatureData
member: GetWallThickness
returns: System.Double
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
  - ILoftFeatureData.IsThinFeature
  - ILoftFeatureData.SetWallThickness
  - ILoftFeatureData.ThinWallType
keywords:
  - getwallthickness
  - iloftfeaturedata
  - loft
  - feature
  - data
  - wall
  - thickness
  - forward
  - boolean
  - double
---

# ILoftFeatureData.GetWallThickness

Gets the wall thickness in the specified direction for this loft feature.

## Signature

```csharp
System.Double GetWallThickness( 
   System.Boolean
Forward
)
```
## Parameters

- `Forward` (System.Boolean): True for forward direction, false for reverse

## Return Value

Wall thickness

## See Also

- `ILoftFeatureData.IsThinFeature`
- `ILoftFeatureData.SetWallThickness`
- `ILoftFeatureData.ThinWallType`
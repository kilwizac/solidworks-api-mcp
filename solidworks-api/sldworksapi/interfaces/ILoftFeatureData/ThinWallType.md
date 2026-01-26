---
type: property
interface: ILoftFeatureData
member: ThinWallType
returns: System.Int16
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILoftFeatureData.GetWallThickness
  - ILoftFeatureData.IsThinFeature
  - ILoftFeatureData.SetWallThickness
keywords:
  - thinwalltype
  - iloftfeaturedata
  - loft
  - feature
  - data
  - thin
  - wall
  - type
  - int16
readonly: null
---

# ILoftFeatureData.ThinWallType

Gets or sets the thin wall type for this loft feature.

## Signature

```csharp
System.Int16 ThinWallType {get; set;}
```
## Parameters

None.

## Return Value

Thin feature type: 0 = One direction 1 = One direction reverse 2 = Midplane 3 = Two direction

## See Also

- `ILoftFeatureData.GetWallThickness`
- `ILoftFeatureData.IsThinFeature`
- `ILoftFeatureData.SetWallThickness`
---
type: property
interface: IExtrudeFeatureData2
member: ThinWallType
returns: System.Int32
parameters: []
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
  - IExtrudeFeatureData2.SetWallThickness
keywords:
  - thin
  - features
  - thinwalltype
  - iextrudefeaturedata2
  - extrude
  - feature
  - data2
  - wall
  - type
  - int32
readonly: null
---

# IExtrudeFeatureData2.ThinWallType

Gets or sets the thin wall type for a thin base extrude feature.

## Signature

```csharp
System.Int32 ThinWallType {get; set;}
```
## Parameters

None.

## Return Value

Thin feature type: 0 = One Direction 1 = One Direction Reverse 2 = Mid Plane 3 = Two Direction

## See Also

- `IExtrudeFeatureData2.CapEnds`
- `IExtrudeFeatureData2.CapThickness`
- `IExtrudeFeatureData2.GetWallThickness`
- `IExtrudeFeatureData2.IsThinFeature`
- `IExtrudeFeatureData2.SetWallThickness`
---
type: property
interface: IPartingSurfaceFeatureData
member: PullDirectionType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - parts
related:
  - IPartingSurfaceFeatureData.PullDirectionBase
keywords:
  - pulldirectiontype
  - ipartingsurfacefeaturedata
  - parting
  - surface
  - feature
  - data
  - pull
  - direction
  - type
  - int32
readonly: true
---

# IPartingSurfaceFeatureData.PullDirectionType

Gets the type of entity that specifies the direction of pull for this parting surface feature.

## Signature

```csharp
System.Int32 PullDirectionType {get;}
```
## Parameters

None.

## Return Value

Type of entity that represents the direction of pull as defined by swSelectType_e : swSelEDGES swSelDATUMAXES swSelDATUMPLANES swSelFaCES

## See Also

- `IPartingSurfaceFeatureData.PullDirectionBase`
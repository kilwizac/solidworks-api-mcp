---
type: method
interface: ICosmeticWeldBeadFeatureData
member: SetEntitiesWeldPath
returns: void
parameters:
  -
    name: Entities
    type: System.Object
    description: Array of entities of edges , sketches , or a combination of edges and sketches (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICosmeticWeldBeadFeatureData.GetEntitiesWeldPath
keywords:
  - setentitiesweldpath
  - icosmeticweldbeadfeaturedata
  - cosmetic
  - weld
  - bead
  - feature
  - data
  - entities
  - path
  - object
  - void
---

# ICosmeticWeldBeadFeatureData.SetEntitiesWeldPath

Sets the entities for this cosmetic weld bead, which was created using a weld path.

## Signature

```csharp
void SetEntitiesWeldPath( 
   System.Object
Entities
)
```
## Parameters

- `Entities` (System.Object): Array of entities of edges , sketches , or a combination of edges and sketches (see Remarks )

## Return Value

Unknown.

## See Also

- `ICosmeticWeldBeadFeatureData.GetEntitiesWeldPath`
---
type: method
interface: ICosmeticWeldBeadFeatureData
member: SetEntitiesWeldFrom
returns: void
parameters:
  -
    name: Entities
    type: System.Object
    description: Array of weld-from entities of faces or edges (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICosmeticWeldBeadFeatureData.GetEntitiesWeldFrom
  - ICosmeticWeldBeadFeatureData.GetEntitiesWeldTo
  - ICosmeticWeldBeadFeatureData.SetEntitiesWeldTo
keywords:
  - setentitiesweldfrom
  - icosmeticweldbeadfeaturedata
  - cosmetic
  - weld
  - bead
  - feature
  - data
  - entities
  - object
  - void
---

# ICosmeticWeldBeadFeatureData.SetEntitiesWeldFrom

Sets the weld-from entities for this cosmetic weld bead, which was created using weld geometry.

## Signature

```csharp
void SetEntitiesWeldFrom( 
   System.Object
Entities
)
```
## Parameters

- `Entities` (System.Object): Array of weld-from entities of faces or edges (see Remarks )

## Return Value

Unknown.

## Remarks

The weld-from entities must be the same type of entities; e.g., all faces or all edges.

## See Also

- `ICosmeticWeldBeadFeatureData.GetEntitiesWeldFrom`
- `ICosmeticWeldBeadFeatureData.GetEntitiesWeldTo`
- `ICosmeticWeldBeadFeatureData.SetEntitiesWeldTo`
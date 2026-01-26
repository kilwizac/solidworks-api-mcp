---
type: method
interface: ICosmeticWeldBeadFeatureData
member: SetEntitiesWeldTo
returns: void
parameters:
  -
    name: Entities
    type: System.Object
    description: Array of weld-to entities of faces or edges (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICosmeticWeldBeadFeatureData.GetEntitiesWeldFrom
  - ICosmeticWeldBeadFeatureData.GetEntitiesWeldTo
  - ICosmeticWeldBeadFeatureData.SetEntitiesWeldFrom
keywords:
  - setentitiesweldto
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

# ICosmeticWeldBeadFeatureData.SetEntitiesWeldTo

Sets the weld-to entities for this cosmetic weld bead, which was created using weld geometry.

## Signature

```csharp
void SetEntitiesWeldTo( 
   System.Object
Entities
)
```
## Parameters

- `Entities` (System.Object): Array of weld-to entities of faces or edges (see Remarks )

## Return Value

Unknown.

## Remarks

The weld-to entities must be the same type of entities; e.g., all faces or all edges.

## See Also

- `ICosmeticWeldBeadFeatureData.GetEntitiesWeldFrom`
- `ICosmeticWeldBeadFeatureData.GetEntitiesWeldTo`
- `ICosmeticWeldBeadFeatureData.SetEntitiesWeldFrom`
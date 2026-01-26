---
type: method
interface: ICosmeticWeldBeadFeatureData
member: GetEntities
returns: System.Object
parameters:
  -
    name: EntType
    type: System.Int32
    description: Entity type as defined in swSelectType_e
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - ICosmeticWeldBeadFeatureData.SetEntities
keywords:
  - getentities
  - icosmeticweldbeadfeaturedata
  - cosmetic
  - weld
  - bead
  - feature
  - data
  - entities
  - ent
  - type
  - int32
  - object
---

# ICosmeticWeldBeadFeatureData.GetEntities

Obsolete. Superseded by ICosmeticWeldBeadFeatureData::GetEntitiesWeldFrom and ICosmeticWeldBeadFeatureData::GetEntitiesWeldTo.

## Signature

```csharp
System.Object GetEntities( 
   out System.Int32
EntType
)
```
## Parameters

- `EntType` (System.Int32): Entity type as defined in swSelectType_e

## Return Value

Array of faces and edges

## See Also

- `ICosmeticWeldBeadFeatureData.SetEntities`
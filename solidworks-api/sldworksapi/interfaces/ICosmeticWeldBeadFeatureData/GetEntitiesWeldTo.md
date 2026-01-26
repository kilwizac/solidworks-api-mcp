---
type: method
interface: ICosmeticWeldBeadFeatureData
member: GetEntitiesWeldTo
returns: System.Object
parameters:
  -
    name: EntType
    type: System.Int32
    description: Weld-to entity type as defined in swSelectType_e ; i.e., either swSelFACES or swSelEDGES
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICosmeticWeldBeadFeatureData.GetEntitiesWeldFrom
  - ICosmeticWeldBeadFeatureData.SetEntitiesWeldFrom
  - ICosmeticWeldBeadFeatureData.SetEntitiesWeldTo
keywords:
  - getentitiesweldto
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
  - insert
  - using
  - geometric
  - vb
  - net
  - vba
---

# ICosmeticWeldBeadFeatureData.GetEntitiesWeldTo

Gets the weld-to entity type and weld-to entities for this cosmetic weld bead, which was created using weld geometry.

## Signature

```csharp
System.Object GetEntitiesWeldTo( 
   out System.Int32
EntType
)
```
## Parameters

- `EntType` (System.Int32): Weld-to entity type as defined in swSelectType_e ; i.e., either swSelFACES or swSelEDGES

## Return Value

Array of weld-to entities of faces or edges

## Examples

- Insert Cosmetic Weld Bead Using Geometric Entities (C#) (Insert_Cosmetic_Weld_Bead_Using_Geometric_Entities_Example_CSharp.htm)
- Insert Cosmetic Weld Bead Using Geometric Entities (VB.NET) (Insert_Cosmetic_Weld_Bead_Using_Geometric_Entities_Example_VBNET.htm)
- Insert Cosmetic Weld Bead Using Geometric Entities (VBA) (Insert_Cosmetic_Weld_Bead_Using_Geometric_Entities_Example_VB.htm)

## See Also

- `ICosmeticWeldBeadFeatureData.GetEntitiesWeldFrom`
- `ICosmeticWeldBeadFeatureData.SetEntitiesWeldFrom`
- `ICosmeticWeldBeadFeatureData.SetEntitiesWeldTo`
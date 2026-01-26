---
type: method
interface: ICosmeticWeldBeadFeatureData
member: GetEntitiesWeldFrom
returns: System.Object
parameters:
  -
    name: EntType
    type: System.Int32
    description: Weld-from entity type as defined in swSelectType_e ; i.e., either swSelFACES or swSelEDGES
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICosmeticWeldBeadFeatureData.GetEntitiesWeldTo
  - ICosmeticWeldBeadFeatureData.SetEntitiesWeldFrom
  - ICosmeticWeldBeadFeatureData.SetEntitiesWeldTo
keywords:
  - getentitiesweldfrom
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

# ICosmeticWeldBeadFeatureData.GetEntitiesWeldFrom

Gets the weld-from entity type and weld-from entities for this cosmetic weld bead, which was created using weld geometry.

## Signature

```csharp
System.Object GetEntitiesWeldFrom( 
   out System.Int32
EntType
)
```
## Parameters

- `EntType` (System.Int32): Weld-from entity type as defined in swSelectType_e ; i.e., either swSelFACES or swSelEDGES

## Return Value

Array of weld-from entities of faces or edges

## Examples

- Insert Cosmetic Weld Bead Using Geometric Entities (C#) (Insert_Cosmetic_Weld_Bead_Using_Geometric_Entities_Example_CSharp.htm)
- Insert Cosmetic Weld Bead Using Geometric Entities (VB.NET) (Insert_Cosmetic_Weld_Bead_Using_Geometric_Entities_Example_VBNET.htm)
- Insert Cosmetic Weld Bead Using Geometric Entities (VBA) (Insert_Cosmetic_Weld_Bead_Using_Geometric_Entities_Example_VB.htm)

## See Also

- `ICosmeticWeldBeadFeatureData.GetEntitiesWeldTo`
- `ICosmeticWeldBeadFeatureData.SetEntitiesWeldFrom`
- `ICosmeticWeldBeadFeatureData.SetEntitiesWeldTo`
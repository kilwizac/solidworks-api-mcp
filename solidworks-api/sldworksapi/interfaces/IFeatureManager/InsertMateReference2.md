---
type: method
interface: IFeatureManager
member: InsertMateReference2
returns: Feature
parameters:
  -
    name: BstrMateReferenceName
    type: System.String
    description: Name of mate reference
  -
    name: PrimaryReferenceEntity
    type: Entity
    description: Pointer to the primary mate, the IEntity object
  -
    name: PrimaryReferenceType
    type: System.Int32
    description: Primary mate's reference type as defined by swMateReferenceType_e
  -
    name: PrimaryReferenceAlignment
    type: System.Int32
    description: Primary mate's reference alignment type as defined swMateReferenceAlignment_e
  -
    name: PrimaryReferenceAlignAxes
    type: System.Boolean
    description: True to align with the axes of the coordinate system or origin when forming a mate, false to not
  -
    name: SecondaryReferenceEntity
    type: Entity
    description: Pointer to the secondary mate, the IEntity object
  -
    name: SecondaryReferenceType
    type: System.Int32
    description: Secondary mate's reference type as defined by swMateReferenceType_e
  -
    name: SecondaryReferenceAlignment
    type: System.Int32
    description: Secondary mate's alignment type as defined swMateReferenceAlignment_e
  -
    name: SecondaryReferenceAlignAxes
    type: System.Boolean
    description: True to align with the axes of the coordinate system or origin when forming a mate, false to not
  -
    name: TertiaryReferenceEntity
    type: Entity
    description: Pointer to the tertiary mate, the IEntity object
  -
    name: TertiaryReferenceType
    type: System.Int32
    description: Tertiary mate's reference type as defined by swMateReferenceType_e
  -
    name: TertiaryReferenceAlignment
    type: System.Int32
    description: Tertiary mate's reference alignment as defined by swMateReferenceAlignment_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IMateReference
keywords:
  - feature
  - see
  - also
  - ifeature
  - mate
  - reference
  - references
  - imatereference
  - insert
  - insertmatereference2
  - ifeaturemanager
  - manager
  - reference2
  - bstr
  - name
  - string
  - primary
  - entity
  - type
  - int32
  - alignment
  - align
  - axes
  - boolean
  - secondary
  - tertiary
  - edit
  - vb
  - net
  - vba
---

# IFeatureManager.InsertMateReference2

Inserts a mate reference for a part or assembly document.

## Signature

```csharp
Feature InsertMateReference2( 
   System.String
BstrMateReferenceName
,
   Entity
PrimaryReferenceEntity
,
   System.Int32
PrimaryReferenceType
,
   System.Int32
PrimaryReferenceAlignment
,
   System.Boolean
PrimaryReferenceAlignAxes
,
   Entity
SecondaryReferenceEntity
,
   System.Int32
SecondaryReferenceType
,
   System.Int32
SecondaryReferenceAlignment
,
   System.Boolean
SecondaryReferenceAlignAxes
,
   Entity
TertiaryReferenceEntity
,
   System.Int32
TertiaryReferenceType
,
   System.Int32
TertiaryReferenceAlignment
)
```
## Parameters

- `BstrMateReferenceName` (System.String): Name of mate reference
- `PrimaryReferenceEntity` (Entity): Pointer to the primary mate, the IEntity object
- `PrimaryReferenceType` (System.Int32): Primary mate's reference type as defined by swMateReferenceType_e
- `PrimaryReferenceAlignment` (System.Int32): Primary mate's reference alignment type as defined swMateReferenceAlignment_e
- `PrimaryReferenceAlignAxes` (System.Boolean): True to align with the axes of the coordinate system or origin when forming a mate, false to not
- `SecondaryReferenceEntity` (Entity): Pointer to the secondary mate, the IEntity object
- `SecondaryReferenceType` (System.Int32): Secondary mate's reference type as defined by swMateReferenceType_e
- `SecondaryReferenceAlignment` (System.Int32): Secondary mate's alignment type as defined swMateReferenceAlignment_e
- `SecondaryReferenceAlignAxes` (System.Boolean): True to align with the axes of the coordinate system or origin when forming a mate, false to not
- `TertiaryReferenceEntity` (Entity): Pointer to the tertiary mate, the IEntity object
- `TertiaryReferenceType` (System.Int32): Tertiary mate's reference type as defined by swMateReferenceType_e
- `TertiaryReferenceAlignment` (System.Int32): Tertiary mate's reference alignment as defined by swMateReferenceAlignment_e

## Return Value

IFeature

## Examples

- Edit Mate Reference (C#) (Edit_Mate_Reference_Example_CSharp.htm)
- Edit Mate Reference (VB.NET) (Edit_Mate_Reference_Example_VBNET.htm)
- Edit Mate Reference (VBA) (Edit_Mate_Reference_Example_VB.htm)

## See Also

- `IMateReference`
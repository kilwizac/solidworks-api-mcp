---
type: method
interface: IFeatureManager
member: InsertMateReference
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
deprecated: true
since_version: unknown
categories:
  - features
related:
  - IMateReference
keywords:
  - mate
  - references
  - see
  - also
  - imatereference
  - mates
  - imate2
  - feature
  - ifeature
  - reference
  - insertmatereference
  - ifeaturemanager
  - manager
  - insert
  - bstr
  - name
  - string
  - primary
  - entity
  - type
  - int32
  - alignment
  - secondary
  - tertiary
---

# IFeatureManager.InsertMateReference

Obsolete. Superseded by IFeatureManager::InsertMateReference2.

## Signature

```csharp
Feature InsertMateReference( 
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
   Entity
SecondaryReferenceEntity
,
   System.Int32
SecondaryReferenceType
,
   System.Int32
SecondaryReferenceAlignment
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
- `SecondaryReferenceEntity` (Entity): Pointer to the secondary mate, the IEntity object
- `SecondaryReferenceType` (System.Int32): Secondary mate's reference type as defined by swMateReferenceType_e
- `SecondaryReferenceAlignment` (System.Int32): Secondary mate's alignment type as defined swMateReferenceAlignment_e
- `TertiaryReferenceEntity` (Entity): Pointer to the tertiary mate, the IEntity object
- `TertiaryReferenceType` (System.Int32): Tertiary mate's reference type as defined by swMateReferenceType_e
- `TertiaryReferenceAlignment` (System.Int32): Tertiary mate's reference alignment as defined by swMateReferenceAlignment_e

## Return Value

Pointer to the IFeature object

## Remarks

Either select the mate references interactively or select them programmatically using
IModelDocExtension::SelectByID2
with marks of 1, 2, and 4. If the mate references are interactively selected, then specify NOTHING for PrimaryReferenceEntity, SecondaryReferenceEntity, and TertiaryReferenceEntity.

## See Also

- `IMateReference`
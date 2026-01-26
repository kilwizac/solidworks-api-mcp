---
type: method
interface: IMateReference
member: Edit
returns: System.Boolean
parameters:
  -
    name: BstrMateReferenceName
    type: System.String
    description: Name of the new mate reference, which replaces the selected mate reference
  -
    name: PrimaryReferenceEntity
    type: Entity
    description: Primary mate reference entity, a pointer to an IEntity object
  -
    name: PrimaryReferenceType
    type: System.Int32
    description: Type of mate as defined by swMateReferenceType_e for PrimaryReferenceEntity
  -
    name: PrimaryReferenceAlignment
    type: System.Int32
    description: Type of alignment as defined by swMateReferenceAlignment_e for PrimaryReferenceEntity
  -
    name: SecondaryReferenceEntity
    type: Entity
    description: Secondary mate reference entity, a pointer to an IEntity object
  -
    name: SecondaryReferenceType
    type: System.Int32
    description: Type of mate as defined by swMateReferenceType_e for SecondaryReferenceEntity
  -
    name: SecondaryReferenceAlignment
    type: System.Int32
    description: Type of alignment as defined by swMateReferenceAlignment_e for SecondaryReferenceEntity
  -
    name: TertiaryReferenceEntity
    type: Entity
    description: Tertiary mate reference entity, a pointer to an IEntity object
  -
    name: TertiaryReferenceType
    type: System.Int32
    description: Type of mate as defined by swMateReferenceType_e for TertiaryReferenceEntity
  -
    name: TertiaryReferenceAlignment
    type: System.Int32
    description: Type of alignment as defined by swMateReferenceAlignment_e for TertiaryReferenceEntity
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - edit
  - imatereference
  - mate
  - reference
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
  - boolean
  - vb
  - net
  - vba
---

# IMateReference.Edit

Lets you edit the selected mate reference.

## Signature

```csharp
System.Boolean Edit( 
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

- `BstrMateReferenceName` (System.String): Name of the new mate reference, which replaces the selected mate reference
- `PrimaryReferenceEntity` (Entity): Primary mate reference entity, a pointer to an IEntity object
- `PrimaryReferenceType` (System.Int32): Type of mate as defined by swMateReferenceType_e for PrimaryReferenceEntity
- `PrimaryReferenceAlignment` (System.Int32): Type of alignment as defined by swMateReferenceAlignment_e for PrimaryReferenceEntity
- `SecondaryReferenceEntity` (Entity): Secondary mate reference entity, a pointer to an IEntity object
- `SecondaryReferenceType` (System.Int32): Type of mate as defined by swMateReferenceType_e for SecondaryReferenceEntity
- `SecondaryReferenceAlignment` (System.Int32): Type of alignment as defined by swMateReferenceAlignment_e for SecondaryReferenceEntity
- `TertiaryReferenceEntity` (Entity): Tertiary mate reference entity, a pointer to an IEntity object
- `TertiaryReferenceType` (System.Int32): Type of mate as defined by swMateReferenceType_e for TertiaryReferenceEntity
- `TertiaryReferenceAlignment` (System.Int32): Type of alignment as defined by swMateReferenceAlignment_e for TertiaryReferenceEntity

## Return Value

Always True

## Remarks

To clear the previous references, you can pass Nothing or null for the primary, secondary, or tertiary reference entities.
This method applies the parameters to the actual features. After calling this method, call
IModelDoc2::EditRebuild
to rebuild the model, and then call
IModelDocExtension::NeedsRebuild
to determine if the rebuild was successful.

## Examples

- Edit Mate Reference (C#) (Edit_Mate_Reference_Example_CSharp.htm)
- Edit Mate Reference (VB.NET) (Edit_Mate_Reference_Example_VBNET.htm)
- Edit Mate Reference (VBA) (Edit_Mate_Reference_Example_VB.htm)
---
type: property
interface: IMateReference
member: ReferenceEntity
returns: Entity
parameters:
  -
    name: Index
    type: System.Int32
    description: Mate reference entity as define by swMateReferenceIndex_e
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - referenceentity
  - imatereference
  - mate
  - reference
  - entity
  - index
  - int32
  - properties
  - vba
readonly: true
---

# IMateReference.ReferenceEntity

Obsolete. Superseded by IMateReference::ReferenceEntity2.

## Signature

```csharp
Entity ReferenceEntity( 
   System.Int32
Index
) {get;}
```
## Parameters

- `Index` (System.Int32): Mate reference entity as define by swMateReferenceIndex_e

## Return Value

Entity

## Remarks

Before calling this property, call
IMateReference::ReferenceEntityCount
to determine the number of mate reference entities for the mate reference.

## Examples

- Get Mate Reference Properties (VBA) (Get_Mate_Reference_Properties_Example_VB.htm)
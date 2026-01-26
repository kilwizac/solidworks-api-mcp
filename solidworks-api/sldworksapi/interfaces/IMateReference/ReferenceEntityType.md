---
type: property
interface: IMateReference
member: ReferenceEntityType
returns: System.Int32
parameters:
  -
    name: Index
    type: System.Int32
    description: Mate reference entity as defined in swMateReferenceIndex_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - referenceentitytype
  - imatereference
  - mate
  - reference
  - entity
  - type
  - index
  - int32
  - properties
  - vba
  - vb
  - net
readonly: true
---

# IMateReference.ReferenceEntityType

Gets the exact entity type returned by IMateReference::ReferenceEntity2.

## Signature

```csharp
System.Int32 ReferenceEntityType( 
   System.Int32
Index
) {get;}
```
## Parameters

- `Index` (System.Int32): Mate reference entity as defined in swMateReferenceIndex_e

## Return Value

Value as defined in swSelectType_e

## Remarks

Call this property to determine the type returned by
IMateReference::ReferenceEntity2
. Then cast the object returned by IMateReference::ReferenceEntity2 into the appropriate type.

## Examples

- Get Mate Reference Properties (VBA) (Get_Mate_Reference_Properties_Example_VB.htm)
- Get Mate Reference Properties (VB.NET) (Get_Mate_Reference_Properties_Example_VBNET.htm)
- Get Mate Reference Properties (C#) (Get_Mate_Reference_Properties_Example_CSharp.htm)
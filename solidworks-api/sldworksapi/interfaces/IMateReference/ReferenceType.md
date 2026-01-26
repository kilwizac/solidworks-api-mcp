---
type: property
interface: IMateReference
member: ReferenceType
returns: System.Int32
parameters:
  -
    name: Index
    type: System.Int32
    description: Mate reference entity as defined by swMateReferenceIndex_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - referencetype
  - imatereference
  - mate
  - reference
  - type
  - index
  - int32
  - properties
  - vba
  - vb
  - net
readonly: true
---

# IMateReference.ReferenceType

Gets the mate type for the specified entity in this mate reference.

## Signature

```csharp
System.Int32 ReferenceType( 
   System.Int32
Index
) {get;}
```
## Parameters

- `Index` (System.Int32): Mate reference entity as defined by swMateReferenceIndex_e

## Return Value

Mate reference type as defined by swMateReferenceType_e

## Remarks

Before calling this property, call
IMateReference::ReferenceEntityCount
to determine the number of mate reference entities for the mate reference.
This method returns -1 if there is no reference entity. See
IMateReference::ReferenceEntity
for details.

## Examples

- Get Mate Reference Properties (VBA) (Get_Mate_Reference_Properties_Example_VB.htm)
- Get Mate Reference Properties (VB.NET) (Get_Mate_Reference_Properties_Example_VBNET.htm)
- Get Mate Reference Properties (C#) (Get_Mate_Reference_Properties_Example_CSharp.htm)
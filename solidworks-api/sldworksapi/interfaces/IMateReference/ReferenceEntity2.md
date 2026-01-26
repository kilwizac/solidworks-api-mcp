---
type: property
interface: IMateReference
member: ReferenceEntity2
returns: System.Object
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
  - referenceentity2
  - imatereference
  - mate
  - reference
  - entity2
  - index
  - int32
  - object
  - properties
  - vba
  - vb
  - net
readonly: true
---

# IMateReference.ReferenceEntity2

Gets the specified mate entity in this mate reference.

## Signature

```csharp
System.Object ReferenceEntity2( 
   System.Int32
Index
) {get;}
```
## Parameters

- `Index` (System.Int32): Mate reference entity as defined in swMateReferenceIndex_e

## Return Value

IEntity or ISketchPoint (see Remarks )

## Remarks

Before calling this property, call
IMateReference::ReferenceEntityCount
to determine the range of values for Index.
After calling this property, call
IMateReference::ReferenceEntityType
to determine which type this property returns and then cast the returned object into the appropriate type.

## Examples

- Get Mate Reference Properties (VBA) (Get_Mate_Reference_Properties_Example_VB.htm)
- Get Mate Reference Properties (VB.NET) (Get_Mate_Reference_Properties_Example_VBNET.htm)
- Get Mate Reference Properties (C#) (Get_Mate_Reference_Properties_Example_CSharp.htm)
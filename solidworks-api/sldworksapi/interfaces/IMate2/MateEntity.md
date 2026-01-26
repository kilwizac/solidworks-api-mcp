---
type: method
interface: IMate2
member: MateEntity
returns: MateEntity2
parameters:
  -
    name: Index
    type: System.Int32
    description: 0-based index of the entity associated with the mate
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - mates
  - see
  - also
  - imate2
  - entities
  - entity
  - ientity
  - mate
  - mateentity
  - mate2
  - index
  - int32
  - entity2
  - edit
  - vba
  - vb
  - net
---

# IMate2.MateEntity

Gets an entity associated with a mate.

## Signature

```csharp
MateEntity2 MateEntity( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): 0-based index of the entity associated with the mate

## Return Value

Mate entity

## Remarks

To get the number of entities for this mate, call
IMate2::GetMateEntityCount
.

## Examples

- Edit Mate (VBA) (Edit_Mate_Example_VB.htm)
- Get Mates and Mate Entities (C#) (Get_Mates_and_Mate_Entities_Example_CSharp.htm)
- Get Mates and Mate Entities (VB.NET) (Get_Mates_and_Mate_Entities_Example_VBNET.htm)
- Get Mates and Mate Entities (VBA) (Get_Mates_and_Mate_Entities_Example_VB.htm)
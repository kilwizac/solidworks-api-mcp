---
type: property
interface: IMateInPlace
member: MateEntityType
returns: System.Int32
parameters:
  -
    name: NIndex
    type: System.Int32
    description: 0-based index associated with this entity
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - mateentitytype
  - imateinplace
  - mate
  - place
  - entity
  - type
  - index
  - int32
  - component
  - names
  - types
  - inplace
  - vba
  - mates
  - vb
  - net
readonly: true
---

# IMateInPlace.MateEntityType

Gets the type of entity in this Inplace mate.

## Signature

```csharp
System.Int32 MateEntityType( 
   System.Int32
NIndex
) {get;}
```
## Parameters

- `NIndex` (System.Int32): 0-based index associated with this entity

## Return Value

Type of entity as defined by swSelectType_e

## Remarks

To get the name of the entity, call
IMateInPlace::MateEntity
.

## Examples

- Get Component Names and Types for Inplace Mate (VBA) (Get_Component_Names_and_Types_for_Inplace_Mate_Example_VB.htm)
- Get Mates (C#) (Get_Mates_Example_CSharp.htm)
- Get Mates (VB.NET) (Get_Mates_Example_VBNET.htm)
- Get Mates (VBA) (Get_Mates_Example_VB.htm)
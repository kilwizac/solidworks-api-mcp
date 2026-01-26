---
type: property
interface: IMateInPlace
member: MateComponentName
returns: System.String
parameters:
  -
    name: NIndex
    type: System.Int32
    description: 0-based index associated with the specified component
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - components
  - see
  - also
  - icomponent2
  - inplace
  - mates
  - matecomponentname
  - imateinplace
  - mate
  - place
  - component
  - name
  - index
  - int32
  - string
  - names
  - types
  - vba
  - vb
  - net
readonly: true
---

# IMateInPlace.MateComponentName

Gets the name of the specified component for this Inplace mate.

## Signature

```csharp
System.String MateComponentName( 
   System.Int32
NIndex
) {get;}
```
## Parameters

- `NIndex` (System.Int32): 0-based index associated with the specified component

## Return Value

Name of the specified component

## Examples

- Get Component Names and Types for Inplace MAte (VBA) (Get_Component_Names_and_Types_for_Inplace_Mate_Example_VB.htm)
- Get Mates (C#) (Get_Mates_Example_CSharp.htm)
- Get Mates (VB.NET) (Get_Mates_Example_VBNET.htm)
- Get Mates (VBA) (Get_Mates_Example_VB.htm)
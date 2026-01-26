---
type: method
interface: IComponent2
member: GetMates
returns: System.Object
parameters: []
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
  - inplace
  - imateinplace
  - getmates
  - icomponent2
  - component2
  - object
  - vb
  - net
  - vba
---

# IComponent2.GetMates

Gets the mates for this component.

## Signature

```csharp
System.Object GetMates()
```
## Parameters

None.

## Return Value

Array of mates (either IMate2 objects or IMateInPlace objects)

## Remarks

This method eliminates iterating through the list of mates, which can adversely affect performance when the list of mates is long.

## Examples

- Get Mates (VB.NET) (Get_Mates_Example_VBNET.htm)
- Get Mates (VBA) (Get_Mates_Example_VB.htm)
- Get Mates (C#) (Get_Mates_Example_CSharp.htm)
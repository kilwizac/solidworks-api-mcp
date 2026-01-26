---
type: property
interface: INote
member: Angle
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - note
  - see
  - also
  - inote
  - rotation
  - angle
  - double
  - corresponding
  - objects
  - assembly
  - component
  - vb
  - net
  - vba
readonly: null
---

# INote.Angle

Controls the rotation angle of this note.

## Signature

```csharp
System.Double Angle {get; set;}
```
## Parameters

None.

## Return Value

Rotation angle, in radians, of this note

## Remarks

The rotation angle of a note must be in the -360  to +360  range. If a value is specified that is outside of the range, the angle wraps around to be mapped back into range. For example, attempting to set this property to a value of 365  would result in the angle being set to 5.

## Examples

- Get Corresponding Objects in Assembly Component (C#) (Get_Corresponding_Objects_in_Assembly_Component_Example_CSharp.htm)
- Get Corresponding Objects in Assembly Component (VB.NET) (Get_Corresponding_Objects_in_Assembly_Component_Example_VBNET.htm)
- Get Corresponding Objects in Assembly Component (VBA) (Get_Corresponding_Objects_in_Assembly_Component_Example_VB.htm)
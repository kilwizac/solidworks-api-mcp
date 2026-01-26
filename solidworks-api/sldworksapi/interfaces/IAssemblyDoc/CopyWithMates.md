---
type: method
interface: IAssemblyDoc
member: CopyWithMates
returns: System.Boolean
parameters:
  -
    name: ComponentsToCopy
    type: System.Object
    description: Array of components to copy
  -
    name: Repeat
    type: System.Object
    description: Array of boolean values; each value indicates whether to use the existing mate reference for the corresponding component to copy: if true, copies the existing mate reference; if false, uses the corresponding entry in the NewEntityToMateTo array for the new mate reference
  -
    name: NewEnityToMateTo
    type: System.Object
    description: Array of new mate references that map to the Repeat arrays; if an entry in the Repeat array is false, then the corresponding entry in this array is the new entity with which to mate the component to copy
  -
    name: Values
    type: System.Object
    description: Array of distance or angle values for the mate references; specify distance in meters and angle in radians; valid for for distance and angle mates only
  -
    name: FlipAlignment
    type: System.Object
    description: Array of booleans that map to the NewEntityToMateTo array; each value indicates the corresponding mate's alignment; true to flip alignment, false otherwise; valid for distance and angle mates only
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related: []
keywords:
  - copywithmates
  - iassemblydoc
  - assembly
  - doc
  - copy
  - mates
  - components
  - object
  - repeat
  - new
  - enity
  - mate
  - values
  - flip
  - alignment
  - boolean
  - vba
  - vb
  - net
---

# IAssemblyDoc.CopyWithMates

Obsolete. Superseded by IAssemblyDoc::CopyWithMates2.

## Signature

```csharp
System.Boolean CopyWithMates( 
   System.Object
ComponentsToCopy
,
   System.Object
Repeat
,
   System.Object
NewEnityToMateTo
,
   System.Object
Values
,
   System.Object
FlipAlignment
)
```
## Parameters

- `ComponentsToCopy` (System.Object): Array of components to copy
- `Repeat` (System.Object): Array of boolean values; each value indicates whether to use the existing mate reference for the corresponding component to copy: if true, copies the existing mate reference; if false, uses the corresponding entry in the NewEntityToMateTo array for the new mate reference
- `NewEnityToMateTo` (System.Object): Array of new mate references that map to the Repeat arrays; if an entry in the Repeat array is false, then the corresponding entry in this array is the new entity with which to mate the component to copy
- `Values` (System.Object): Array of distance or angle values for the mate references; specify distance in meters and angle in radians; valid for for distance and angle mates only
- `FlipAlignment` (System.Object): Array of booleans that map to the NewEntityToMateTo array; each value indicates the corresponding mate's alignment; true to flip alignment, false otherwise; valid for distance and angle mates only

## Return Value

True if calling this method succeeded; false if it failed

## Examples

- Copy Components With Mates to Assembly (VBA) (Copy_Components_With_Mates_To_Assembly_Example_VB.htm)
- Copy Components With Mates to Assembly (VB.NET) (Copy_Components_With_Mates_To_Assembly_Example_VBNET.htm)
- Copy Components With Mates to Assembly (C#) (Copy_Components_With_Mates_To_Assembly_Example_CSharp.htm)
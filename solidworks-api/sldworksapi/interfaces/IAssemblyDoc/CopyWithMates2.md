---
type: method
interface: IAssemblyDoc
member: CopyWithMates2
returns: System.Boolean
parameters:
  -
    name: ComponentsToCopy
    type: System.Object
    description: Array of components to copy
  -
    name: Repeat
    type: System.Object
    description: Array of boolean values; each value indicates whether to use the existing mate reference for the corresponding component to copy; if true, copies the existing mate reference; if false, uses the corresponding entry in the NewEntityToMateTo array for the new mate reference
  -
    name: NewEnityToMateTo
    type: System.Object
    description: Array of new mate references that map to the Repeat array; if an entry in the Repeat array is false, then the corresponding entry in this array is the new entity with which to mate the component to copy
  -
    name: Values
    type: System.Object
    description: Array of distance or angle values for the mate references; specify distance in meters and angle in radians; valid for distance, angle, and profile center mates only
  -
    name: FlipAlignment
    type: System.Object
    description: Array of booleans that map to the NewEntityToMateTo array; each value indicates the corresponding mate's alignment; true to flip alignment, false to not
  -
    name: FlipDimension
    type: System.Object
    description: Array of booleans that map to the Values array; each value indicates the corresponding mate's distance; true for a positive distance dimension, false for a negative distance dimension; valid for distance, angle, and profile center mates only
  -
    name: LockRotation
    type: System.Object
    description: Array of booleans that map to the NewEntityToMateTo array; true to prevent the components from rotating, false to allow the components to rotate; valid for concentric and profile center mates only
  -
    name: Orientation
    type: System.Object
    description: Array of longs or integers that map to the Values array; each long or integer indicates the number of clicks in the user interface with which to orient the mate; a positive value indicates to orient the mate clockwise, a negative value indicates to orient the mate counterclockwise; valid for profile center mates only
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.AddComponent5
  - IAssemblyDoc.AddMate5
keywords:
  - assemblies
  - see
  - also
  - iassemblydoc
  - mates
  - components
  - icomponent2
  - imate2
  - copy
  - copywithmates2
  - assembly
  - doc
  - mates2
  - object
  - repeat
  - new
  - enity
  - mate
  - values
  - flip
  - alignment
  - dimension
  - lock
  - rotation
  - orientation
  - boolean
  - component
  - profile
  - center
  - vb
  - net
  - vba
---

# IAssemblyDoc.CopyWithMates2

Copies one or more components with mates in this assembly.

## Signature

```csharp
System.Boolean CopyWithMates2( 
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
,
   System.Object
FlipDimension
,
   System.Object
LockRotation
,
   System.Object
Orientation
)
```
## Parameters

- `ComponentsToCopy` (System.Object): Array of components to copy
- `Repeat` (System.Object): Array of boolean values; each value indicates whether to use the existing mate reference for the corresponding component to copy; if true, copies the existing mate reference; if false, uses the corresponding entry in the NewEntityToMateTo array for the new mate reference
- `NewEnityToMateTo` (System.Object): Array of new mate references that map to the Repeat array; if an entry in the Repeat array is false, then the corresponding entry in this array is the new entity with which to mate the component to copy
- `Values` (System.Object): Array of distance or angle values for the mate references; specify distance in meters and angle in radians; valid for distance, angle, and profile center mates only
- `FlipAlignment` (System.Object): Array of booleans that map to the NewEntityToMateTo array; each value indicates the corresponding mate's alignment; true to flip alignment, false to not
- `FlipDimension` (System.Object): Array of booleans that map to the Values array; each value indicates the corresponding mate's distance; true for a positive distance dimension, false for a negative distance dimension; valid for distance, angle, and profile center mates only
- `LockRotation` (System.Object): Array of booleans that map to the NewEntityToMateTo array; true to prevent the components from rotating, false to allow the components to rotate; valid for concentric and profile center mates only
- `Orientation` (System.Object): Array of longs or integers that map to the Values array; each long or integer indicates the number of clicks in the user interface with which to orient the mate; a positive value indicates to orient the mate clockwise, a negative value indicates to orient the mate counterclockwise; valid for profile center mates only

## Return Value

True if calling this method succeeded, false if it failed

## Examples

- Copy Component With Profile Center Mate (C#) (Copy_Component_With_Profile_Center_Mate_Example_CSharp.htm)
- Copy Component With Profile Center Mate (VB.NET) (Copy_Component_With_Profile_Center_Mate_Example_VBNET.htm)
- Copy Component With Profile Center Mate (VBA) (Copy_Component_With_Profile_Center_Mate_Example_VB.htm)

## See Also

- `IAssemblyDoc.AddComponent5`
- `IAssemblyDoc.AddMate5`
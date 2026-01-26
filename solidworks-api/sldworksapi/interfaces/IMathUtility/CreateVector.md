---
type: method
interface: IMathUtility
member: CreateVector
returns: System.Object
parameters:
  -
    name: ArrayDataIn
    type: System.Object
    description: Array of doubles representing the x,y,z components of the vector
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMathUtility.ICreateVector
keywords:
  - math
  - vector
  - see
  - imathvector
  - createvector
  - imathutility
  - utility
  - create
  - array
  - data
  - object
  - temporary
  - extruded
  - body
  - vba
  - angle
  - hole
  - not
  - normal
  - face
  - locate
  - apex
  - conical
  - drag
  - arrow
  - manipulator
  - vb
  - net
---

# IMathUtility.CreateVector

Creates a math vector.

## Signature

```csharp
System.Object CreateVector( 
   System.Object
ArrayDataIn
)
```
## Parameters

- `ArrayDataIn` (System.Object): Array of doubles representing the x,y,z components of the vector

## Return Value

Newly created math vector or NULL if the operation fails

## Examples

- Create Temporary Extruded Body (VBA) (Create_Temporary_Extruded_Body_Example_VB.htm)
- Get Angle of Hole Not Normal to a Face (VBA) (Get_Angle_of_Hole_Not_Normal_to_a_Face_Example_VB.htm)
- Locate Apex of Conical Face (VBA) (Locate_Apex_of_Conical_Face_Example_VB.htm)
- Create Drag Arrow Manipulator (C#) (Create_Drag_Arrow_Manipulator_Example_CSharp.htm)
- Create Drag Arrow Manipulator (VB.NET) (Create_Drag_Arrow_Manipulator_Example_VBNET.htm)
- Create Drag Arrow Manipulator (VBA) (Create_Drag_Arrow_Manipulator_Example_VB.htm)

## See Also

- `IMathUtility.ICreateVector`
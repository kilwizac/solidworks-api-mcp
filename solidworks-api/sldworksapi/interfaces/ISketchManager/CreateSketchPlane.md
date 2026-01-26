---
type: method
interface: ISketchManager
member: CreateSketchPlane
returns: System.Boolean
parameters:
  -
    name: Relation1
    type: System.Int32
    description: Relation as defined in swConstraintType_e for the first selection to position the 3D sketch plane
  -
    name: Relation2
    type: System.Int32
    description: Relation as defined in swConstraintType_e for the second selection to position the 3D sketch plane
  -
    name: Relation3
    type: System.Int32
    description: Relation as defined in swConstraintType_e for the third selection to position the 3D sketch plane
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - 3d
  - sketch
  - planes
  - see
  - also
  - irefplane
  - isketch
  - plane
  - createsketchplane
  - isketchmanager
  - manager
  - create
  - relation1
  - int32
  - relation2
  - relation3
  - boolean
  - vb
  - net
  - vba
---

# ISketchManager.CreateSketchPlane

Creates a 3D sketch plane.

## Signature

```csharp
System.Boolean CreateSketchPlane( 
   System.Int32
Relation1
,
   System.Int32
Relation2
,
   System.Int32
Relation3
)
```
## Parameters

- `Relation1` (System.Int32): Relation as defined in swConstraintType_e for the first selection to position the 3D sketch plane
- `Relation2` (System.Int32): Relation as defined in swConstraintType_e for the second selection to position the 3D sketch plane
- `Relation3` (System.Int32): Relation as defined in swConstraintType_e for the third selection to position the 3D sketch plane

## Return Value

True if the 3D sketch plane is created, false if not

## Remarks

This method gets the selected items from the selection list in the order in which they were selected and applies the specified relation to them. If fewer than three items were selected, then only the first, or first and second, values are used.

## Examples

- Create 3D Sketch Plane (C#) (Create_3D_Sketch_Plane_Example_CSharp.htm)
- Create 3D Sketch Plane (VB.NET) (Create_3D_Sketch_Plane_Example_VBNET.htm)
- Create 3D Sketch Plane (VBA) (Create_3D_Sketch_Plane_Example_VB.htm)
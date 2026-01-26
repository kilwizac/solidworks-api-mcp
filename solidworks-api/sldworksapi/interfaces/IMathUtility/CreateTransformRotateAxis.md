---
type: method
interface: IMathUtility
member: CreateTransformRotateAxis
returns: System.Object
parameters:
  -
    name: PointObjIn
    type: System.Object
    description: Center point of the axis of the transform
  -
    name: VectorObjIn
    type: System.Object
    description: Axis vector of the transform
  -
    name: Angle
    type: System.Double
    description: Angle of rotation about the X axis vector
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMathUtility.ComposeTransform
  - IMathUtility.CreateTransform
  - IMathUtility.ICreateTransform
  - IMathUtility.ICreateTransformRotateAxis
keywords:
  - transform
  - rotate
  - createtransformrotateaxis
  - imathutility
  - math
  - utility
  - create
  - axis
  - point
  - obj
  - object
  - vector
  - angle
  - double
  - assembly
  - component
  - using
  - idragoperator
  - drag
  - vba
  - vb
  - net
  - dragasui
---

# IMathUtility.CreateTransformRotateAxis

Creates a new math transform matrix that represents the rotation by an angle about a vector positioned at a point.

## Signature

```csharp
System.Object CreateTransformRotateAxis( 
   System.Object
PointObjIn
,
   System.Object
VectorObjIn
,
   System.Double
Angle
)
```
## Parameters

- `PointObjIn` (System.Object): Center point of the axis of the transform
- `VectorObjIn` (System.Object): Axis vector of the transform
- `Angle` (System.Double): Angle of rotation about the X axis vector

## Return Value

Newly created math transform or null or nothing if the operation fails

## Examples

- Rotate Assembly Component on Axis Using IDragOperator::Drag (VBA) (Rotate_Assembly_Component_on_Axis_Example_VB.htm)
- Rotate Assembly Component on Axis Using IDragOperator::Drag (VB.NET) (Rotate_Assembly_Component_on_Axis_Example_VBNET.htm)
- Rotate Assembly Component on Axis Using IDragOperator::Drag (C#) (Rotate_Assembly_Component_on_Axis_Example_CSharp.htm)
- Rotate Assembly Component on Axis Using IDragOperator::DragAsUI (VBA) (Rotate_Assembly_Component_on_Axis_Example2_VB.htm)
- Rotate Assembly Component on Axis Using IDragOperator::DragAsUI (VB.NET) (Rotate_Assembly_Component_on_Axis_Example2_VBNET.htm)
- Rotate Assembly Component on Axis Using IDragOperator::DragAsUI (C#) (Rotate_Assembly_Component_on_Axis_Example2_CSharp.htm)

## See Also

- `IMathUtility.ComposeTransform`
- `IMathUtility.CreateTransform`
- `IMathUtility.ICreateTransform`
- `IMathUtility.ICreateTransformRotateAxis`
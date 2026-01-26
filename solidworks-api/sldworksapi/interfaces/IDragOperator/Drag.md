---
type: method
interface: IDragOperator
member: Drag
returns: System.Boolean
parameters:
  -
    name: PXform
    type: System.Object
    description: Math transform that specifies the desired motion for this step
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IDragOperator.CollisionDetectionEnabled
  - IDragOperator.DragAsUI
  - IDragOperator.DynamicClearanceEnabled
  - IDragOperator.IDrag
  - IDragOperator.UseAbsoluteTransform
keywords:
  - drag
  - see
  - also
  - idragoperator
  - transform
  - operator
  - xform
  - object
  - boolean
  - rotate
  - assembly
  - component
  - axis
  - using
  - vba
  - vb
  - net
---

# IDragOperator.Drag

Sets the transform matrix for this drag operation.

## Signature

```csharp
System.Boolean Drag( 
   System.Object
PXform
)
```
## Parameters

- `PXform` (System.Object): Math transform that specifies the desired motion for this step

## Return Value

True if the move was successful, false if not (see Remarks )

## Remarks

This method is more precise than the
IDragOperator::DragAsUI
method. IDragOperator::DragAsUI is more like an interactive drag operation performed in the SOLIDWORKS 2001Plus software and it may give better graphics performance than IDragOperator::Drag.
You will see an improvement in performance when this method is used in the default state. If
collision detection
or
clearance
is enabled, then the original mode is used. This method is more efficient than making multiple calls to
IComponent2::SetTransformAndSolve
because this method reuses the solver.
Use
IDragOperator::UseAbsoluteTransforms
to set the transforms type to absolute or relative.
If the desired orientation set by this method was not honored and remedial action occurred, then the
IDragOperation::DragCorrected
property is set.
This method returns false if the drag cannot be performed. This typically occurs because of a collision.

## Examples

- Rotate Assembly Component on Axis Using IDragOperator::Drag (VBA) (Rotate_Assembly_Component_on_Axis_Example_VB.htm)
- Rotate Assembly Component on Axis Using IDragOperator::Drag (VB.NET) (Rotate_Assembly_Component_on_Axis_Example_VBNET.htm)
- Rotate Assembly Component on Axis Using IDragOperator::Drag (C#) (Rotate_Assembly_Component_on_Axis_Example_CSharp.htm)

## See Also

- `IDragOperator.CollisionDetectionEnabled`
- `IDragOperator.DragAsUI`
- `IDragOperator.DynamicClearanceEnabled`
- `IDragOperator.IDrag`
- `IDragOperator.UseAbsoluteTransform`
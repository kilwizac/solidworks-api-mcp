---
type: method
interface: IDragOperator
member: IDrag
returns: System.Boolean
parameters:
  -
    name: PXform
    type: MathTransform
    description: Pointer to an IMathTransform that specifies the desired motion for this step
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IDragOperator.CollisionDetectionEnabled
  - IDragOperator.Drag
  - IDragOperator.DynamicClearanceEnabled
  - IDragOperator.UseAbsoluteTransform
keywords:
  - drag
  - see
  - also
  - idragoperator
  - transform
  - idrag
  - operator
  - xform
  - math
  - boolean
---

# IDragOperator.IDrag

Sets the transform matrix for this drag operation.

## Signature

```csharp
System.Boolean IDrag( 
   MathTransform
PXform
)
```
## Parameters

- `PXform` (MathTransform): Pointer to an IMathTransform that specifies the desired motion for this step

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

## See Also

- `IDragOperator.CollisionDetectionEnabled`
- `IDragOperator.Drag`
- `IDragOperator.DynamicClearanceEnabled`
- `IDragOperator.UseAbsoluteTransform`
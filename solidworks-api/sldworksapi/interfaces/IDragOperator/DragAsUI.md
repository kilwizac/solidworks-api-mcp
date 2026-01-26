---
type: method
interface: IDragOperator
member: DragAsUI
returns: System.Boolean
parameters:
  -
    name: PXform
    type: MathTransform
    description: Pointer to IMathTransform that specifies the desired motion for this step
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IDragOperator.CollisionDetection
  - IDragOperator.DynamicClearanceEnabled
keywords:
  - drag
  - see
  - also
  - idragoperator
  - transform
  - dragasui
  - operator
  - ui
  - xform
  - math
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

# IDragOperator.DragAsUI

Sets the transform matrix for this drag operation.

## Signature

```csharp
System.Boolean DragAsUI( 
   MathTransform
PXform
)
```
## Parameters

- `PXform` (MathTransform): Pointer to IMathTransform that specifies the desired motion for this step

## Return Value

True if the move was successful, false if not (see Remarks )

## Remarks

This method returns false if the drag cannot be performed. This typically occurs because of a collision.
This method does not set
IDragOperator::DragCorrected
.
This method is not as precise as the
IDragOperator::Drag
or
IDragOperator::IDrag
method. IDragOperator::DragAsUI is more like an interactive drag operation performed in the SOLIDWORKS 2001Plus software. This method may give better graphics performance than IDragOperator::Drag.

## Examples

- Rotate Assembly Component on Axis Using IDragOperator::DragAsUI (VBA) (Rotate_Assembly_Component_on_Axis_Example2_VB.htm)
- Rotate Assembly Component on Axis Using IDragOperator::DragAsUI (VB.NET) (Rotate_Assembly_Component_on_Axis_Example2_VBNET.htm)
- Rotate Assembly Component on Axis Using IDragOperator::DragAsUI (C#) (Rotate_Assembly_Component_on_Axis_Example2_CSharp.htm)

## See Also

- `IDragOperator.CollisionDetection`
- `IDragOperator.DynamicClearanceEnabled`
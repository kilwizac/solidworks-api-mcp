---
type: property
interface: IDragOperator
member: TransformType
returns: System.Int16
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IDragOperator.UseAbsoluteTransform
keywords:
  - transformtype
  - idragoperator
  - drag
  - operator
  - transform
  - type
  - int16
  - rotate
  - assembly
  - component
  - axis
  - using
  - vba
  - vb
  - net
  - dragasui
readonly: null
---

# IDragOperator.TransformType

Gets or sets the type of transformation.

## Signature

```csharp
System.Int16 TransformType {get; set;}
```
## Parameters

None.

## Return Value

Translation 0 Transform is translation only Axial Rotation 1 Transform is rotation only General 2 Transform can be translation or rotation or both

## Examples

- Rotate Assembly Component on Axis Using IDragOperator::Drag (VBA) (Rotate_Assembly_Component_on_Axis_Example_VB.htm)
- Rotate Assembly Component on Axis Using IDragOperator::Drag (VB.NET) (Rotate_Assembly_Component_on_Axis_Example_VBNET.htm)
- Rotate Assembly Component on Axis Using IDragOperator::Drag (C#) (Rotate_Assembly_Component_on_Axis_Example_CSharp.htm)
- Rotate Assembly Component on Axis Using IDragOperator::DragAsUI (VBA) (Rotate_Assembly_Component_on_Axis_Example2_VB.htm)
- Rotate Assembly Component on Axis Using IDragOperator::DragAsUI (VB.NET) (Rotate_Assembly_Component_on_Axis_Example2_VBNET.htm)
- Rotate Assembly Component on Axis Using IDragOperator::DragAsUI (C#) (Rotate_Assembly_Component_on_Axis_Example2_CSharp.htm)

## See Also

- `IDragOperator.UseAbsoluteTransform`
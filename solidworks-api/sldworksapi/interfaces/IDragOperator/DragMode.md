---
type: property
interface: IDragOperator
member: DragMode
returns: System.Int16
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - dragmode
  - idragoperator
  - drag
  - operator
  - mode
  - int16
  - rotate
  - assembly
  - component
  - axis
  - using
  - vba
  - vb
  - net
readonly: null
---

# IDragOperator.DragMode

Gets or sets the drag mode for this drag operation.

## Signature

```csharp
System.Int16 DragMode {get; set;}
```
## Parameters

None.

## Return Value

0 = Maximum move (move geometries rigidly, if possible) 1 = Minimum move (move the smallest number of geometries) 2 = Relaxation (solve geometries using relaxation) 3 = No propagation (move geometries with minimal transform propagation)

## Examples

- Rotate Assembly Component on Axis Using IDragOperator::Drag (VBA) (Rotate_Assembly_Component_on_Axis_Example_VB.htm)
- Rotate Assembly Component on Axis Using IDragOperator::Drag (VB.NET) (Rotate_Assembly_Component_on_Axis_Example_VBNET.htm)
- Rotate Assembly Component on Axis Using IDragOperator::Drag (C#) (Rotate_Assembly_Component_on_Axis_Example_CSharp.htm)
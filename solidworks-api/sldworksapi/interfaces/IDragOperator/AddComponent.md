---
type: method
interface: IDragOperator
member: AddComponent
returns: System.Boolean
parameters:
  -
    name: PDisp
    type: System.Object
    description: Component to add to the list
  -
    name: AppendFlag
    type: System.Boolean
    description: True to append the component to the list, false to clear the list before adding the component
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IDragOperator.IAddComponent
keywords:
  - drag
  - see
  - also
  - idragoperator
  - components
  - addcomponent
  - operator
  - add
  - component
  - disp
  - object
  - append
  - flag
  - boolean
  - rotate
  - assembly
  - axis
  - using
  - dragasui
  - vba
  - vb
  - net
---

# IDragOperator.AddComponent

Adds a component to the list of components to drag.

## Signature

```csharp
System.Boolean AddComponent( 
   System.Object
PDisp
,
   System.Boolean
AppendFlag
)
```
## Parameters

- `PDisp` (System.Object): Component to add to the list
- `AppendFlag` (System.Boolean): True to append the component to the list, false to clear the list before adding the component

## Return Value

True if successful, false for failure; fixed components always return false (see Remarks )

## Remarks

Components that are constrained via mates are not considered fixed.

## Examples

- Rotate Assembly Component on Axis Using IDragOperator::DragAsUI (VBA) (Rotate_Assembly_Component_on_Axis_Example2_VB.htm)
- Rotate Assembly Component on Axis Using IDragOperator::DragAsUI (VB.NET) (Rotate_Assembly_Component_on_Axis_Example2_VBNET.htm)
- Rotate Assembly Component on Axis Using IDragOperator::DragAsUI (C#) (Rotate_Assembly_Component_on_Axis_Example2_CSharp.htm)
- Rotate Assembly Component on Axis Using IDragOperator::Drag (VBA) (Rotate_Assembly_Component_on_Axis_Example_VB.htm)
- Rotate Assembly Component on Axis Using IDragOperator::Drag (VB.NET) (Rotate_Assembly_Component_on_Axis_Example_VBNET.htm)
- Rotate Assembly Component on Axis Using IDragOperator::Drag (C#) (Rotate_Assembly_Component_on_Axis_Example_CSharp.htm)

## See Also

- `IDragOperator.IAddComponent`
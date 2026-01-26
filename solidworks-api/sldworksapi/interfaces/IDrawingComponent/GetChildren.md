---
type: method
interface: IDrawingComponent
member: GetChildren
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDrawingComponent.GetChildrenCount
  - IDrawingComponent.IGetChildren
keywords:
  - children
  - drawing
  - components
  - getchildren
  - idrawingcomponent
  - component
  - object
  - create
  - section
  - view
  - specified
  - location
  - vba
  - properties
  - hide
  - put
  - assembly
  - different
  - layers
  - vb
  - net
---

# IDrawingComponent.GetChildren

Gets the child components for this drawing component.

## Signature

```csharp
System.Object GetChildren()
```
## Parameters

None.

## Return Value

Array of IDrawingComponent objects that are child components of the drawing component

## Remarks

This method traverses the referenced component tree in a given view. Use
IDrawingComponent::Visible
to get or set the visibility of individual components in the given view.

## Examples

- Create Section View at Specified Location (VBA) (Create_Section_View_at_Specified_Location_Example_VB.htm)
- Get Components' Properties in Drawing View (VBA) (Get_Components_Properties_in_Drawing_View_Example_VB.htm)
- Hide Drawing Components (VBA) (Hide_Drawing_Components_Example_VB.htm)
- Put Assembly Components in Drawing View on Different Layers (VBA) (Put_Assembly_Components_in_Drawing_View_on_Different_Layers_Example_VB.htm)
- Get Components in Drawing View (C#) (Get_Components_in_Drawing_View_Example_CSharp.htm)
- Get Components in Drawing View (VB.NET) (Get_Components_in_Drawing_View_Example_VBNET.htm)
- Get Components in Drawing View (VBA) (Get_Components_in_Drawing_View_Example_VB.htm)

## See Also

- `IDrawingComponent.GetChildrenCount`
- `IDrawingComponent.IGetChildren`
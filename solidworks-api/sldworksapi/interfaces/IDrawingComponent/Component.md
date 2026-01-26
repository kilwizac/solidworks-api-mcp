---
type: property
interface: IDrawingComponent
member: Component
returns: Component2
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related: []
keywords:
  - component
  - idrawingcomponent
  - drawing
  - component2
  - components
  - view
  - vba
  - vb
  - net
  - select
readonly: true
---

# IDrawingComponent.Component

Gets the assembly component referenced in this drawing component.

## Signature

```csharp
Component2 Component {get;}
```
## Parameters

None.

## Return Value

Associated IComponent2 object for the referenced assembly document

## Remarks

The associated
IComponent2
object should have the same properties as the referenced configuration. For example, if the component is suppressed in the reference configuration, then the returned component should also be suppressed.

## Examples

- Get Components in Drawing View (VBA) (Get_Components_in_Drawing_View_Example_VB.htm)
- Get Components in Drawing View (VB.NET) (Get_Components_in_Drawing_View_Example_VBNET.htm)
- Get Components in Drawing View (C#) (Get_Components_in_Drawing_View_Example_CSharp.htm)
- Select Drawing Component (C#) (Select_Drawing_Component_Example_CSharp.htm)
- Select Drawing Component (VB.NET) (Select_Drawing_Component_Example_VBNET.htm)
- Select Drawing Component (VBA) (Select_Drawing_Component_Example_VB.htm)
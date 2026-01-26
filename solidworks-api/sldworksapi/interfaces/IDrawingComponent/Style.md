---
type: property
interface: IDrawingComponent
member: Style
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDrawingComponent.Layer
  - IDrawingComponent.Width
keywords:
  - style
  - idrawingcomponent
  - drawing
  - component
  - int32
  - components
  - properties
  - view
  - vba
readonly: null
---

# IDrawingComponent.Style

Gets or sets the style for the line for this component in this drawing view.

## Signature

```csharp
System.Int32 Style {get; set;}
```
## Parameters

None.

## Return Value

Line style as defined in swLineStyles_e

## Remarks

Use
IDrawingComponent::LayerOverride
to determine whether or not this component is
currently using its default layer line style.

## Examples

- Get Components' Properties in Drawing View (VBA) (Get_Components_Properties_in_Drawing_View_Example_VB.htm)

## See Also

- `IDrawingComponent.Layer`
- `IDrawingComponent.Width`
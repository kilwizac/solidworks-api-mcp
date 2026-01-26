---
type: property
interface: IDrawingComponent
member: Width
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDrawingComponent.Layer
  - IDrawingComponent.Style
keywords:
  - width
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

# IDrawingComponent.Width

Gets or sets the width of the line for this component for this drawing view.

## Signature

```csharp
System.Int32 Width {get; set;}
```
## Parameters

None.

## Return Value

Line width as defined in swLineWeights_e

## Remarks

Use
IDrawingComponent::LayerOverride
to determine if this component is using its default
layer line width.

## Examples

- Get Components' Properties in Drawing View (VBA) (Get_Components_Properties_in_Drawing_View_Example_VB.htm)

## See Also

- `IDrawingComponent.Layer`
- `IDrawingComponent.Style`
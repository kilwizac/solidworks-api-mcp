---
type: method
interface: IDrawingDoc
member: ChangeComponentLayer
returns: void
parameters:
  -
    name: Layername
    type: System.String
    description: Name of layer for components
  -
    name: AllViews
    type: System.Boolean
    description: True changes the component layer for all views in the drawing, false changes only the selected view
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IComponent2
  - IDrawingDoc.OnComponentProperties
  - IDrawingDoc.ResolveOutOfDateLightWeightComponents
keywords:
  - components
  - see
  - also
  - icomponent2
  - layers
  - drawings
  - idrawingdoc
  - changecomponentlayer
  - drawing
  - doc
  - change
  - component
  - layer
  - layername
  - string
  - all
  - views
  - boolean
  - void
  - create
  - selected
  - view
  - vba
---

# IDrawingDoc.ChangeComponentLayer

Puts the selected components on the specified layer.

## Signature

```csharp
void ChangeComponentLayer( 
   System.String
Layername
,
   System.Boolean
AllViews
)
```
## Parameters

- `Layername` (System.String): Name of layer for components
- `AllViews` (System.Boolean): True changes the component layer for all views in the drawing, false changes only the selected view

## Return Value

Unknown.

## Examples

- Create Layer for Selected View (VBA) (Create_Layer_for_Selected_View_Example_VB.htm)

## See Also

- `IComponent2`
- `IDrawingDoc.OnComponentProperties`
- `IDrawingDoc.ResolveOutOfDateLightWeightComponents`
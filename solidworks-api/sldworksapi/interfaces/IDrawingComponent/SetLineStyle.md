---
type: method
interface: IDrawingComponent
member: SetLineStyle
returns: void
parameters:
  -
    name: LineFontOption
    type: System.Int32
    description: Line font style of the component as defined in swDrawingComponentLineFontOption_e
  -
    name: Style
    type: System.Int32
    description: Line style as defined in swLineStyles_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDrawingComponent.GetLineStyle
  - IDrawingComponent.GetLineThickness
  - IDrawingComponent.SetLineThickness
  - IDrawingComponent.UseDocumentDefaults
keywords:
  - components
  - see
  - also
  - icomponent2
  - line
  - fonts
  - setlinestyle
  - idrawingcomponent
  - drawing
  - component
  - style
  - font
  - option
  - int32
  - void
  - view
  - vb
  - net
  - vba
---

# IDrawingComponent.SetLineStyle

Sets the line style for the drawing component.

## Signature

```csharp
void SetLineStyle( 
   System.Int32
LineFontOption
,
   System.Int32
Style
)
```
## Parameters

- `LineFontOption` (System.Int32): Line font style of the component as defined in swDrawingComponentLineFontOption_e
- `Style` (System.Int32): Line style as defined in swLineStyles_e

## Return Value

Unknown.

## Examples

- Get Components in Drawing View (C#) (Get_Components_in_Drawing_View_Example_CSharp.htm)
- Get Components in Drawing View (VB.NET) (Get_Components_in_Drawing_View_Example_VBNET.htm)
- Get Components in Drawing View (VBA) (Get_Components_in_Drawing_View_Example_VB.htm)

## See Also

- `IDrawingComponent.GetLineStyle`
- `IDrawingComponent.GetLineThickness`
- `IDrawingComponent.SetLineThickness`
- `IDrawingComponent.UseDocumentDefaults`
---
type: method
interface: IDrawingComponent
member: GetLineStyle
returns: System.Int32
parameters:
  -
    name: LineFontOption
    type: System.Int32
    description: Line font style of the component as defined in swDrawingComponentLineFontOption_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDrawingComponent.GetLineThickness
  - IDrawingComponent.SetLineStyle
  - IDrawingComponent.SetLineThickness
  - IDrawingComponent.UseDocumentDefaults
keywords:
  - components
  - see
  - also
  - icomponent2
  - line
  - fonts
  - getlinestyle
  - idrawingcomponent
  - drawing
  - component
  - style
  - font
  - option
  - int32
  - view
  - vb
  - net
  - vba
---

# IDrawingComponent.GetLineStyle

Gets the line style for the drawing component.

## Signature

```csharp
System.Int32 GetLineStyle( 
   System.Int32
LineFontOption
)
```
## Parameters

- `LineFontOption` (System.Int32): Line font style of the component as defined in swDrawingComponentLineFontOption_e

## Return Value

Line style as defined in swLineStyles_e

## Examples

- Get Components in Drawing View (C#) (Get_Components_in_Drawing_View_Example_CSharp.htm)
- Get Components in Drawing View (VB.NET) (Get_Components_in_Drawing_View_Example_VBNET.htm)
- Get Components in Drawing View (VBA) (Get_Components_in_Drawing_View_Example_VB.htm)

## See Also

- `IDrawingComponent.GetLineThickness`
- `IDrawingComponent.SetLineStyle`
- `IDrawingComponent.SetLineThickness`
- `IDrawingComponent.UseDocumentDefaults`
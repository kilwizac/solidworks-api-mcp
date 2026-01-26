---
type: method
interface: IDrawingComponent
member: GetLineThickness
returns: System.Int32
parameters:
  -
    name: LineFontOption
    type: System.Int32
    description: Line font style of the component as defined in swDrawingComponentLineFontOption_e
  -
    name: Thickness
    type: System.Double
    description: Thickness of line
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDrawingComponent.GetLineStyle
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
  - getlinethickness
  - idrawingcomponent
  - drawing
  - component
  - thickness
  - font
  - option
  - int32
  - double
  - view
  - vb
  - net
  - vba
---

# IDrawingComponent.GetLineThickness

Gets the line thickness for the drawing component.

## Signature

```csharp
System.Int32 GetLineThickness( 
   System.Int32
LineFontOption
,
   out System.Double
Thickness
)
```
## Parameters

- `LineFontOption` (System.Int32): Line font style of the component as defined in swDrawingComponentLineFontOption_e
- `Thickness` (System.Double): Thickness of line

## Return Value

Line weight style as defined in swLineWeights_e

## Examples

- Get Components in Drawing View (C#) (Get_Components_in_Drawing_View_Example_CSharp.htm)
- Get Components in Drawing View (VB.NET) (Get_Components_in_Drawing_View_Example_VBNET.htm)
- Get Components in Drawing View (VBA) (Get_Components_in_Drawing_View_Example_VB.htm)

## See Also

- `IDrawingComponent.GetLineStyle`
- `IDrawingComponent.SetLineStyle`
- `IDrawingComponent.SetLineThickness`
- `IDrawingComponent.UseDocumentDefaults`
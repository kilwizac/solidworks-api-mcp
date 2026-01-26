---
type: method
interface: IDrawingComponent
member: SetLineThickness
returns: void
parameters:
  -
    name: LineFontOption
    type: System.Int32
    description: Line font style of the component as defined in swDrawingComponentLineFontOption_e
  -
    name: LineWeights
    type: System.Int32
    description: Line weight style as defined in swLineWeights_e
  -
    name: Thickness
    type: System.Double
    description: Thickness of line; only valid if LineWeights set to swLW_CUSTOM
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDrawingComponent.GetLineStyle
  - IDrawingComponent.GetLineThickness
  - IDrawingComponent.SetLineStyle
  - IDrawingComponent.UseDocumentDefaults
keywords:
  - components
  - see
  - also
  - icomponent2
  - line
  - fonts
  - setlinethickness
  - idrawingcomponent
  - drawing
  - component
  - thickness
  - font
  - option
  - int32
  - weights
  - double
  - void
  - view
  - vb
  - net
  - vba
---

# IDrawingComponent.SetLineThickness

Sets the line thickness for the drawing component.

## Signature

```csharp
void SetLineThickness( 
   System.Int32
LineFontOption
,
   System.Int32
LineWeights
,
   System.Double
Thickness
)
```
## Parameters

- `LineFontOption` (System.Int32): Line font style of the component as defined in swDrawingComponentLineFontOption_e
- `LineWeights` (System.Int32): Line weight style as defined in swLineWeights_e
- `Thickness` (System.Double): Thickness of line; only valid if LineWeights set to swLW_CUSTOM

## Return Value

Unknown.

## Examples

- Get Components in Drawing View (C#) (Get_Components_in_Drawing_View_Example_CSharp.htm)
- Get Components in Drawing View (VB.NET) (Get_Components_in_Drawing_View_Example_VBNET.htm)
- Get Components in Drawing View (VBA) (Get_Components_in_Drawing_View_Example_VB.htm)

## See Also

- `IDrawingComponent.GetLineStyle`
- `IDrawingComponent.GetLineThickness`
- `IDrawingComponent.SetLineStyle`
- `IDrawingComponent.UseDocumentDefaults`
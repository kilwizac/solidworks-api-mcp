---
type: method
interface: IDisplayDimension
member: SetOrdinateDimensionArrowSize
returns: void
parameters:
  -
    name: UseDoc
    type: System.Boolean
    description: True to use the document setting for the diameter of the circle for the arrow of the base ordinate dimension, false to use the diameter of the circle for the arrow of the base ordinate dimension set by this method if the base ordinate dimension standard is set to DIN
  -
    name: ArrowSize
    type: System.Double
    description: Diameter of the circle for the arrow of the base ordinate dimension if the base ordinate dimension standard is set to DIN
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.AutoJogOrdinate
  - IDisplayDimension.DisplayAsChain
  - IDisplayDimension.Elevation
  - IDisplayDimension.EndSymbol
  - IDisplayDimension.GetOrdinateDimensionArrowSize
  - IDisplayDimension.GridBubble
  - IDisplayDimension.Jogged
  - IDrawingDoc.CreateOrdinateDim4
  - IDrawingDoc.InsertHorizontalOrdinate
  - IDrawingDoc.InsertOrdinate
  - IDrawingDoc.InsertVerticalOrdinate
  - IModelDocExtension.AddOrdinateDimension
keywords:
  - ordinate
  - dimensions
  - dimension
  - see
  - also
  - idimension
  - setordinatedimensionarrowsize
  - idisplaydimension
  - display
  - arrow
  - size
  - use
  - doc
  - boolean
  - double
  - void
  - create
  - vb
  - net
  - vba
---

# IDisplayDimension.SetOrdinateDimensionArrowSize

Sets the diameter of the circle for the arrow of the base ordinate dimension if the base ordinate dimension standard is set to DIN.

## Signature

```csharp
void SetOrdinateDimensionArrowSize( 
   System.Boolean
UseDoc
,
   System.Double
ArrowSize
)
```
## Parameters

- `UseDoc` (System.Boolean): True to use the document setting for the diameter of the circle for the arrow of the base ordinate dimension, false to use the diameter of the circle for the arrow of the base ordinate dimension set by this method if the base ordinate dimension standard is set to DIN
- `ArrowSize` (System.Double): Diameter of the circle for the arrow of the base ordinate dimension if the base ordinate dimension standard is set to DIN

## Return Value

Unknown.

## Examples

- Create Ordinate Dimensions (C#) (Create_Ordinate_Dimensions_Example_CSharp.htm)
- Create Ordinate Dimensions (VB.NET) (Create_Ordinate_Dimensions_Example_VBNET.htm)
- Create Ordinate Dimensions (VBA) (Create_Ordinate_Dimensions_Example_VB.htm)

## See Also

- `IDisplayDimension.AutoJogOrdinate`
- `IDisplayDimension.DisplayAsChain`
- `IDisplayDimension.Elevation`
- `IDisplayDimension.EndSymbol`
- `IDisplayDimension.GetOrdinateDimensionArrowSize`
- `IDisplayDimension.GridBubble`
- `IDisplayDimension.Jogged`
- `IDrawingDoc.CreateOrdinateDim4`
- `IDrawingDoc.InsertHorizontalOrdinate`
- `IDrawingDoc.InsertOrdinate`
- `IDrawingDoc.InsertVerticalOrdinate`
- `IModelDocExtension.AddOrdinateDimension`
---
type: method
interface: IDisplayDimension
member: GetOrdinateDimensionArrowSize
returns: void
parameters:
  -
    name: UseDoc
    type: System.Boolean
    description: True to use the document setting for the diameter of the circle for the arrow of the base ordinate dimension, false to use the diameter of the circle for the arrow of the base ordinate dimension set by IDisplayDimension::SetOrdinateDimensionArrowSize if the base ordinate dimension standard is set to DIN
  -
    name: ArrowSize
    type: System.Double
    description: Diameter of the circle for the arrow of the base ordinate dimension
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
  - getordinatedimensionarrowsize
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

# IDisplayDimension.GetOrdinateDimensionArrowSize

Gets the diameter of the circle for the arrow of the base ordinate dimension.

## Signature

```csharp
void GetOrdinateDimensionArrowSize( 
   out System.Boolean
UseDoc
,
   out System.Double
ArrowSize
)
```
## Parameters

- `UseDoc` (System.Boolean): True to use the document setting for the diameter of the circle for the arrow of the base ordinate dimension, false to use the diameter of the circle for the arrow of the base ordinate dimension set by IDisplayDimension::SetOrdinateDimensionArrowSize if the base ordinate dimension standard is set to DIN
- `ArrowSize` (System.Double): Diameter of the circle for the arrow of the base ordinate dimension

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
- `IDisplayDimension.GridBubble`
- `IDisplayDimension.Jogged`
- `IDrawingDoc.CreateOrdinateDim4`
- `IDrawingDoc.InsertHorizontalOrdinate`
- `IDrawingDoc.InsertOrdinate`
- `IDrawingDoc.InsertVerticalOrdinate`
- `IModelDocExtension.AddOrdinateDimension`
---
type: property
interface: IDisplayDimension
member: DisplayAsChain
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.AutoJogOrdinate
  - IDisplayDimension.Elevation
  - IDisplayDimension.EndSymbol
  - IDisplayDimension.ExtensionLineExtendsFromCenterOfSet
  - IDisplayDimension.ExtensionLineSameAsLeaderStyle
  - IDisplayDimension.ExtensionLineUseDocumentDisplay
  - IDisplayDimension.GetOrdinateDimensionArrowSize
  - IDisplayDimension.GridBubble
  - IDisplayDimension.Jogged
  - IDisplayDimension.ResetExtensionLineStyle
  - IDisplayDimension.RunBidirectionally
  - IDisplayDimension.SetOrdinateDimensionArrowSize
  - IModelDocExtension.AddOrdinateDimension
keywords:
  - dimension
  - see
  - also
  - idimension
  - ordinate
  - dimensions
  - angular
  - running
  - displayaschain
  - idisplaydimension
  - display
  - chain
  - boolean
  - insert
  - vba
  - vb
  - net
readonly: null
---

# IDisplayDimension.DisplayAsChain

Gets or sets whether the extension lines of every dimension in this set of angular running or ordinate dimensions are chained together.

## Signature

```csharp
System.Boolean DisplayAsChain {get; set;}
```
## Parameters

None.

## Return Value

True if extension lines are chained together, false if not

## Remarks

This property applies only to ordinate and angular running dimensions. This method does not affect other types of dimensions.
This property corresponds to:
Display as chain dimension
check box in the
Witness/Leader Display
panel of the
Leaders
tab of the
Dimension
PropertyManager page that appears when you right-click in a drawing and select
More Dimensions > Angular Running Dimension
.
Ordinate chain
check box in the
Witness/Leader Display
panel of the
Leaders
tab of the
Dimension
PropertyManager page that appears when you right-click in a drawing and select
More Dimensions > Ordinate
.
After using this property, use
IModelView::GraphicsRedraw
to redraw the graphics window to see your changes.

## Examples

- Insert Angular Running Dimension (VBA) (Set_Properties_of_Angular_Running_Dimension_Example_VB.htm)
- Insert Angular Running Dimension (VB.NET) (Set_Properties_of_Angular_Running_Dimension_Example_VBNET.htm)
- Insert Angular Running Dimension (C#) (Set_Properties_of_Angular_Running_Dimension_Example_CSharp.htm)

## See Also

- `IDisplayDimension.AutoJogOrdinate`
- `IDisplayDimension.Elevation`
- `IDisplayDimension.EndSymbol`
- `IDisplayDimension.ExtensionLineExtendsFromCenterOfSet`
- `IDisplayDimension.ExtensionLineSameAsLeaderStyle`
- `IDisplayDimension.ExtensionLineUseDocumentDisplay`
- `IDisplayDimension.GetOrdinateDimensionArrowSize`
- `IDisplayDimension.GridBubble`
- `IDisplayDimension.Jogged`
- `IDisplayDimension.ResetExtensionLineStyle`
- `IDisplayDimension.RunBidirectionally`
- `IDisplayDimension.SetOrdinateDimensionArrowSize`
- `IModelDocExtension.AddOrdinateDimension`
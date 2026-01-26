---
type: property
interface: IDisplayDimension
member: Elevation
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.AutoJogOrdinate
  - IDisplayDimension.DisplayAsChain
  - IDisplayDimension.GetOrdinateDimensionArrowSize
  - IDisplayDimension.GridBubble
  - IDisplayDimension.Jogged
  - IDisplayDimension.SetOrdinateDimensionArrowSize
  - IModelDocExtension.AddOrdinateDimension
keywords:
  - ordinate
  - dimensions
  - dimension
  - see
  - also
  - idimension
  - elevation
  - idisplaydimension
  - display
  - boolean
  - symbol
  - vba
readonly: null
---

# IDisplayDimension.Elevation

Gets or sets whether to display an elevation symbol, which is controlled by IDisplayDimension::EndSymbol, at the end of ordinate dimension extension lines.

## Signature

```csharp
System.Boolean Elevation {get; set;}
```
## Parameters

None.

## Return Value

True to display elevation symbol, false to not

## Examples

- Display Elevation Symbol (VBA) (Display_Elevation_Symbol_Example_VB.htm)

## See Also

- `IDisplayDimension.AutoJogOrdinate`
- `IDisplayDimension.DisplayAsChain`
- `IDisplayDimension.GetOrdinateDimensionArrowSize`
- `IDisplayDimension.GridBubble`
- `IDisplayDimension.Jogged`
- `IDisplayDimension.SetOrdinateDimensionArrowSize`
- `IModelDocExtension.AddOrdinateDimension`
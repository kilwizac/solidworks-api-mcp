---
type: property
interface: IDisplayDimension
member: EndSymbol
returns: System.Int32
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
  - endsymbol
  - idisplaydimension
  - display
  - end
  - symbol
  - int32
  - elevation
  - vba
readonly: null
---

# IDisplayDimension.EndSymbol

Gets or sets the ordinate dimension end symbol.

## Signature

```csharp
System.Int32 EndSymbol {get; set;}
```
## Parameters

None.

## Return Value

Ordinate dimension end symbol as defined in swOrdDimEndSymbol_e

## Remarks

IDisplayDimension::Elevation
controls whether to display an elevation symbol controlled by this property.

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
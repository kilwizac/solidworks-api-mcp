---
type: property
interface: IDisplayDimension
member: ShowDimensionValue
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.GetText
  - IDisplayDimension.SetText
keywords:
  - showdimensionvalue
  - idisplaydimension
  - display
  - dimension
  - show
  - value
  - boolean
  - properties
  - vba
readonly: null
---

# IDisplayDimension.ShowDimensionValue

Gets or sets whether the dimension value is displayed as part of the dimension text.

## Signature

```csharp
System.Boolean ShowDimensionValue {get; set;}
```
## Parameters

None.

## Return Value

True displays the dimension value, false does not

## Remarks

After using this property, use
IModelDoc2::GraphicsRedraw2
to redraw the graphics window to see your changes.

## Examples

- Get Display Dimension Properties (VBA) (Get_Display_Dimension_Properties_Example_VB.htm)

## See Also

- `IDisplayDimension.GetText`
- `IDisplayDimension.SetText`
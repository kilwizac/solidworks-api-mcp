---
type: property
interface: IDisplayDimension
member: ShowParenthesis
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
  - IDisplayDimension.ShowLowerParenthesis
keywords:
  - display
  - dimensions
  - see
  - also
  - idisplaydimension
  - parenthesis
  - showparenthesis
  - dimension
  - show
  - boolean
  - properties
  - vba
readonly: null
---

# IDisplayDimension.ShowParenthesis

Gets or sets whether to enclose the text above the dimension line of the display dimension in parentheses.

## Signature

```csharp
System.Boolean ShowParenthesis {get; set;}
```
## Parameters

None.

## Return Value

True to enclose the text above the dimension line of the display dimension in parentheses, false to not

## Remarks

After using this property, use
IModelDoc2::GraphicsRedraw2
to redraw the graphics window to see your changes.

## Examples

- Get Display Dimension Properties (VBA) (Get_Display_Dimension_Properties_Example_VB.htm)

## See Also

- `IDisplayDimension.GetText`
- `IDisplayDimension.SetText`
- `IDisplayDimension.ShowLowerParenthesis`
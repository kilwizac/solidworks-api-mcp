---
type: method
interface: IDisplayData
member: GetTextAngleAtIndex
returns: System.Double
parameters:
  -
    name: Index
    type: System.Int32
    description: Zero-based index of the desired piece of text
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IDisplayData.GetTextAtIndex
  - IDisplayData.GetTextCount
  - IDisplayData.GetTextFontAtIndex
  - IDisplayData.GetTextHeightAtIndex
  - IDisplayData.GetTextInBoxHeightAtIndex
  - IDisplayData.GetTextInBoxStyleAtIndex
  - IDisplayData.GetTextInBoxWidthAtIndex
  - IDisplayData.GetTextInvertAtIndex
  - IDisplayData.GetTextLineSpacingAtIndex
  - IDisplayData.GetTextPlaneAtIndex
  - IDisplayData.GetTextPositionAtIndex
  - IDisplayData.GetTextRefPositionAtIndex
  - IDisplayData.IGetTextPositionAtIndex
keywords:
  - gettextangleatindex
  - idisplaydata
  - display
  - data
  - text
  - angle
  - index
  - int32
  - double
---

# IDisplayData.GetTextAngleAtIndex

Gets the text angle for the specified piece of text.

## Signature

```csharp
System.Double GetTextAngleAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Zero-based index of the desired piece of text

## Return Value

Text angle for the specified text in radians measured CCW from the X axis

## See Also

- `IDisplayData.GetTextAtIndex`
- `IDisplayData.GetTextCount`
- `IDisplayData.GetTextFontAtIndex`
- `IDisplayData.GetTextHeightAtIndex`
- `IDisplayData.GetTextInBoxHeightAtIndex`
- `IDisplayData.GetTextInBoxStyleAtIndex`
- `IDisplayData.GetTextInBoxWidthAtIndex`
- `IDisplayData.GetTextInvertAtIndex`
- `IDisplayData.GetTextLineSpacingAtIndex`
- `IDisplayData.GetTextPlaneAtIndex`
- `IDisplayData.GetTextPositionAtIndex`
- `IDisplayData.GetTextRefPositionAtIndex`
- `IDisplayData.IGetTextPositionAtIndex`
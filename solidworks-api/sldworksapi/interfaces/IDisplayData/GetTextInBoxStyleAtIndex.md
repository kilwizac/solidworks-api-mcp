---
type: method
interface: IDisplayData
member: GetTextInBoxStyleAtIndex
returns: System.Int32
parameters:
  -
    name: Index
    type: System.Int32
    description: Zero-based index of the text and table cell to examine
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IDisplayData.GetTextAngleAtIndex
  - IDisplayData.GetTextAtIndex
  - IDisplayData.GetTextCount
  - IDisplayData.GetTextFontAtIndex
  - IDisplayData.GetTextHeightAtIndex
  - IDisplayData.GetTextInBoxHeightAtIndex
  - IDisplayData.GetTextInBoxWidthAtIndex
  - IDisplayData.GetTextInvertAtIndex
  - IDisplayData.GetTextLineSpacingAtIndex
  - IDisplayData.GetTextPlaneAtIndex
  - IDisplayData.GetTextPositionAtIndex
  - IDisplayData.GetTextRefPositionAtIndex
  - IDisplayData.IGetTextPositionAtIndex
keywords:
  - gettextinboxstyleatindex
  - idisplaydata
  - display
  - data
  - text
  - box
  - style
  - index
  - int32
---

# IDisplayData.GetTextInBoxStyleAtIndex

Gets the text-in-box style of the specified text and table cell in a table annotation.

## Signature

```csharp
System.Int32 GetTextInBoxStyleAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Zero-based index of the text and table cell to examine

## Return Value

Text-in-box style as defined by swTextInBoxStyle_e

## Remarks

Text-in-box refers to a fixed-size area slightly smaller than the table cell.

## See Also

- `IDisplayData.GetTextAngleAtIndex`
- `IDisplayData.GetTextAtIndex`
- `IDisplayData.GetTextCount`
- `IDisplayData.GetTextFontAtIndex`
- `IDisplayData.GetTextHeightAtIndex`
- `IDisplayData.GetTextInBoxHeightAtIndex`
- `IDisplayData.GetTextInBoxWidthAtIndex`
- `IDisplayData.GetTextInvertAtIndex`
- `IDisplayData.GetTextLineSpacingAtIndex`
- `IDisplayData.GetTextPlaneAtIndex`
- `IDisplayData.GetTextPositionAtIndex`
- `IDisplayData.GetTextRefPositionAtIndex`
- `IDisplayData.IGetTextPositionAtIndex`
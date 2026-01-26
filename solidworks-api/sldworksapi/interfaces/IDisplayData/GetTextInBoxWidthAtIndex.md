---
type: method
interface: IDisplayData
member: GetTextInBoxWidthAtIndex
returns: System.Double
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
  - IDisplayData.GetTextInBoxStyleAtIndex
  - IDisplayData.GetTextInvertAtIndex
  - IDisplayData.GetTextLineSpacingAtIndex
  - IDisplayData.GetTextPlaneAtIndex
  - IDisplayData.GetTextPositionAtIndex
  - IDisplayData.GetTextRefPositionAtIndex
  - IDisplayData.IGetTextPositionAtIndex
keywords:
  - gettextinboxwidthatindex
  - idisplaydata
  - display
  - data
  - text
  - box
  - width
  - index
  - int32
  - double
---

# IDisplayData.GetTextInBoxWidthAtIndex

Gets the text-in-box width of the specified text and table cell in the table annotation.

## Signature

```csharp
System.Double GetTextInBoxWidthAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Zero-based index of the text and table cell to examine

## Return Value

Width of the text-in-box in system units

## Remarks

Text-in-box refers to a fixed-size area slightly smaller than the table cell.
If
IDisplayData::GetTextInBoxStyleAtIndex
returns swTextInBoxStyleNone, then this method returns 0 as well.

## See Also

- `IDisplayData.GetTextAngleAtIndex`
- `IDisplayData.GetTextAtIndex`
- `IDisplayData.GetTextCount`
- `IDisplayData.GetTextFontAtIndex`
- `IDisplayData.GetTextHeightAtIndex`
- `IDisplayData.GetTextInBoxHeightAtIndex`
- `IDisplayData.GetTextInBoxStyleAtIndex`
- `IDisplayData.GetTextInvertAtIndex`
- `IDisplayData.GetTextLineSpacingAtIndex`
- `IDisplayData.GetTextPlaneAtIndex`
- `IDisplayData.GetTextPositionAtIndex`
- `IDisplayData.GetTextRefPositionAtIndex`
- `IDisplayData.IGetTextPositionAtIndex`
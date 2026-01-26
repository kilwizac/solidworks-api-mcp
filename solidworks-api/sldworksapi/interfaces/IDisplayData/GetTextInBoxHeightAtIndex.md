---
type: method
interface: IDisplayData
member: GetTextInBoxHeightAtIndex
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
  - IDisplayData.GetTextInBoxStyleAtIndex
  - IDisplayData.GetTextInBoxWidthAtIndex
  - IDisplayData.GetTextInvertAtIndex
  - IDisplayData.GetTextLineSpacingAtIndex
  - IDisplayData.GetTextPlaneAtIndex
  - IDisplayData.GetTextPositionAtIndex
  - IDisplayData.GetTextRefPositionAtIndex
  - IDisplayData.IGetTextPositionAtIndex
keywords:
  - gettextinboxheightatindex
  - idisplaydata
  - display
  - data
  - text
  - box
  - height
  - index
  - int32
  - double
---

# IDisplayData.GetTextInBoxHeightAtIndex

Gets the text-in-box height of the specified text and table cell in a table annotation.

## Signature

```csharp
System.Double GetTextInBoxHeightAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Zero-based index of the text and table cell to examine

## Return Value

Height of the text-in-box in system units

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
- `IDisplayData.GetTextInBoxStyleAtIndex`
- `IDisplayData.GetTextInBoxWidthAtIndex`
- `IDisplayData.GetTextInvertAtIndex`
- `IDisplayData.GetTextLineSpacingAtIndex`
- `IDisplayData.GetTextPlaneAtIndex`
- `IDisplayData.GetTextPositionAtIndex`
- `IDisplayData.GetTextRefPositionAtIndex`
- `IDisplayData.IGetTextPositionAtIndex`
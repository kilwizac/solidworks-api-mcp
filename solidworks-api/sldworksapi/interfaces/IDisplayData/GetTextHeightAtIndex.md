---
type: method
interface: IDisplayData
member: GetTextHeightAtIndex
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
  - IDisplayData.GetTextAngleAtIndex
  - IDisplayData.GetTextAtIndex
  - IDisplayData.GetTextCount
  - IDisplayData.GetTextFontAtIndex
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
  - gettextheightatindex
  - idisplaydata
  - display
  - data
  - text
  - height
  - index
  - int32
  - double
---

# IDisplayData.GetTextHeightAtIndex

Gets the text height for the specified piece of text .

## Signature

```csharp
System.Double GetTextHeightAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Zero-based index of the desired piece of text

## Return Value

Text height for the specified piece of text in meters

## See Also

- `IDisplayData.GetTextAngleAtIndex`
- `IDisplayData.GetTextAtIndex`
- `IDisplayData.GetTextCount`
- `IDisplayData.GetTextFontAtIndex`
- `IDisplayData.GetTextInBoxHeightAtIndex`
- `IDisplayData.GetTextInBoxStyleAtIndex`
- `IDisplayData.GetTextInBoxWidthAtIndex`
- `IDisplayData.GetTextInvertAtIndex`
- `IDisplayData.GetTextLineSpacingAtIndex`
- `IDisplayData.GetTextPlaneAtIndex`
- `IDisplayData.GetTextPositionAtIndex`
- `IDisplayData.GetTextRefPositionAtIndex`
- `IDisplayData.IGetTextPositionAtIndex`
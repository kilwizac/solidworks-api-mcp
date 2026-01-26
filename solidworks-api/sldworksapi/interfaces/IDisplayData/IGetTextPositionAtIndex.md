---
type: method
interface: IDisplayData
member: IGetTextPositionAtIndex
returns: System.Double
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the desired piece of text where the index begins at zero
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
  - IDisplayData.GetTextInBoxWidthAtIndex
  - IDisplayData.GetTextInvertAtIndex
  - IDisplayData.GetTextLineSpacingAtIndex
  - IDisplayData.GetTextPositionAtIndex
  - IDisplayData.GetTextRefPositionAtIndex
keywords:
  - igettextpositionatindex
  - idisplaydata
  - display
  - data
  - text
  - position
  - index
  - int32
  - double
---

# IDisplayData.IGetTextPositionAtIndex

Gets the text item offset relative to the note text point.

## Signature

```csharp
System.Double IGetTextPositionAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the desired piece of text where the index begins at zero

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

The return value is the following array of doubles:
[
textPtX, textPtY, textPtZ
]
where these text position values are actually offset values from the origin of this display data.

## See Also

- `IDisplayData.GetTextAngleAtIndex`
- `IDisplayData.GetTextAtIndex`
- `IDisplayData.GetTextCount`
- `IDisplayData.GetTextFontAtIndex`
- `IDisplayData.GetTextHeightAtIndex`
- `IDisplayData.GetTextInBoxHeightAtIndex`
- `IDisplayData.GetTextInBoxStyleAtIndex`
- `IDisplayData.GetTextInBoxWidthAtIndex`
- `IDisplayData.GetTextInvertAtIndex`
- `IDisplayData.GetTextLineSpacingAtIndex`
- `IDisplayData.GetTextPositionAtIndex`
- `IDisplayData.GetTextRefPositionAtIndex`
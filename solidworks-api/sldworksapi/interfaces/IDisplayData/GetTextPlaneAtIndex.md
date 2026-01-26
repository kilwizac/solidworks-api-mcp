---
type: method
interface: IDisplayData
member: GetTextPlaneAtIndex
returns: System.Object
parameters:
  -
    name: Index
    type: System.Int32
    description: Zero-based index of the text whose plane rotation matrix to retrieve (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IAnnotation.GetPlane
  - IDisplayData.GetTextAngleAtIndex
  - IDisplayData.GetTextAtIndex
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
  - gettextplaneatindex
  - idisplaydata
  - display
  - data
  - text
  - plane
  - index
  - int32
  - object
---

# IDisplayData.GetTextPlaneAtIndex

Gets the rotation matrix of the specified text relative to the X-Y plane of the model.

## Signature

```csharp
System.Object GetTextPlaneAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Zero-based index of the text whose plane rotation matrix to retrieve (see Remarks )

## Return Value

Array of nine doubles of the text plane rotation matrix (see Remarks )

## Remarks

Use
IDisplayData::GetTextCount
to specify Index.
The nine values of the returned rotation matrix (coord(
i
)) are ordered differently from other plane APIs. If you need to manipulate the text plane axes as is shown in the Example section, use the following assignments:
X-axis: coord(0), coord(3), coord(6)
Y-axis: coord(1), coord(4), coord(7)
Z-axis: coord(2), coord(5), coord(8)

## See Also

- `IAnnotation.GetPlane`
- `IDisplayData.GetTextAngleAtIndex`
- `IDisplayData.GetTextAtIndex`
- `IDisplayData.GetTextFontAtIndex`
- `IDisplayData.GetTextHeightAtIndex`
- `IDisplayData.GetTextInBoxHeightAtIndex`
- `IDisplayData.GetTextInBoxStyleAtIndex`
- `IDisplayData.GetTextInBoxWidthAtIndex`
- `IDisplayData.GetTextInvertAtIndex`
- `IDisplayData.GetTextLineSpacingAtIndex`
- `IDisplayData.GetTextPositionAtIndex`
- `IDisplayData.GetTextRefPositionAtIndex`
---
type: method
interface: IDrawingDoc
member: GetLineFontInfo2
returns: System.Object
parameters:
  -
    name: Index
    type: System.Int32
    description: Index position of the line font which is within the index range returned by IDrawingDoc::GetLineFontCount2
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.GetLineFontCount2
  - IDrawingDoc.GetLineFontId
  - IDrawingDoc.GetLineFontName2
  - IDrawingDoc.SetLineColor
  - IDrawingDoc.SetLineStyle
  - IDrawingDoc.SetLineWidth
keywords:
  - drawings
  - see
  - also
  - idrawingdoc
  - lines
  - fonts
  - getlinefontinfo2
  - drawing
  - doc
  - line
  - font
  - info2
  - index
  - int32
  - object
---

# IDrawingDoc.GetLineFontInfo2

Gets the detailed information about the specified line font.

## Signature

```csharp
System.Object GetLineFontInfo2( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index position of the line font which is within the index range returned by IDrawingDoc::GetLineFontCount2

## Return Value

Array containing the line font information (see Remarks )

## Remarks

This method breaks down the line font into its individual segment lengths.
Lines are repeating patterns of space and solid segments. The segCount argument returns the number of segments that define the pattern, and segLengths[] specifies the length of each segment. A negative length value indicates space.
For example:
Solid line: segCount = 1, segLenghts[] = {0.5}
Dashed line: segCount = 2, segLengths[] = {0.25, -0.25}
VARIANT format:
double segCount - Number of segments in the pattern
double segLengths[segCount] - Length of each segment

## See Also

- `IDrawingDoc.GetLineFontCount2`
- `IDrawingDoc.GetLineFontId`
- `IDrawingDoc.GetLineFontName2`
- `IDrawingDoc.SetLineColor`
- `IDrawingDoc.SetLineStyle`
- `IDrawingDoc.SetLineWidth`
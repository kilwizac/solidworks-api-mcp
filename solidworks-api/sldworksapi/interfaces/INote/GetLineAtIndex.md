---
type: method
interface: INote
member: GetLineAtIndex
returns: System.Object
parameters:
  -
    name: Index
    type: System.Int32
    description: Zero-based index of the desired line
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - INote.GetLineCount
  - INote.IGetLineAtIndex
keywords:
  - lines
  - notes
  - note
  - see
  - also
  - inote
  - getlineatindex
  - line
  - index
  - int32
  - object
---

# INote.GetLineAtIndex

Gets information for the specified line.

## Signature

```csharp
System.Object GetLineAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Zero-based index of the desired line

## Return Value

Array of doubles (see Remarks )

## Remarks

The return value is the following array of doubles :
[
lineType
,
startPt
[3],
endPt
[3]
where:
lineType
= the line type. Refer to the
swLineTypes_e
enumeration.
startPt
[3]
= the XYZ line start point
endPt
[3]
= the XYZ line end point
The data returned from this method is in terms of document space. If the document containing this note is a drawing, then the coordinates returned are based on the sheet origin. If the document is a part or assembly, then the coordinates are based on the model origin.

## See Also

- `INote.GetLineCount`
- `INote.IGetLineAtIndex`
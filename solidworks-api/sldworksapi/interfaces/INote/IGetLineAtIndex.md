---
type: method
interface: INote
member: IGetLineAtIndex
returns: System.Double
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the desired line where the index begins at 0
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - INote.GetLineAtIndex
  - INote.GetLineCount
keywords:
  - lines
  - notes
  - igetlineatindex
  - inote
  - note
  - line
  - index
  - int32
  - double
---

# INote.IGetLineAtIndex

Gets information for the specified line.

## Signature

```csharp
System.Double IGetLineAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the desired line where the index begins at 0

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

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

- `INote.GetLineAtIndex`
- `INote.GetLineCount`
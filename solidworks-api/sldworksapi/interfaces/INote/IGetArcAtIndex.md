---
type: method
interface: INote
member: IGetArcAtIndex
returns: System.Double
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the desired arc where the index begins at 0
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - INote.GetArcAtIndex
keywords:
  - note
  - see
  - also
  - inote
  - arcs
  - notes
  - igetarcatindex
  - arc
  - index
  - int32
  - double
---

# INote.IGetArcAtIndex

Gets information for the specified arc in this note.

## Signature

```csharp
System.Double IGetArcAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the desired arc where the index begins at 0

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
INote::GetArcCount
before calling this method to determine the size of the return array.
Return value is an array of doubles:
[
LineType, StartPt[3], EndPt[3], CenterPt[3], RotDir
]
where :
LineType
Line type. Valid returns are defined in
swLineTypes_e
. A LineType is a combination of a line style and line weight.
StartPt[3]
Array of 3 doubles (X,Y,Z) describing the start point.
EndPt[3]
Array of 3 doubles (X,Y,Z) describing the end point. If the arc is closed, then this is the same point as the
StartPt
.
CenterPt[3]
Array of 3 doubles (X,Y,Z) describing the center point.
RotDir
Rotational direction (CW = -1, CCW = 1)
The data returned from this method is in terms of document apace.
If the document containing this note is...
Then the coordinates returned are based on the...
Drawing
Sheet origin
Part or assembly
Model origin

## See Also

- `INote.GetArcAtIndex`
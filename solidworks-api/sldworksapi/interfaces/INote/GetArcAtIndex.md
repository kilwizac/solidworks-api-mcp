---
type: method
interface: INote
member: GetArcAtIndex
returns: System.Object
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
  - INote.GetArcCount
  - INote.IGetArcAtIndex
keywords:
  - note
  - see
  - also
  - inote
  - arcs
  - notes
  - getarcatindex
  - arc
  - index
  - int32
  - object
---

# INote.GetArcAtIndex

Gets information for the specified arc in this note.

## Signature

```csharp
System.Object GetArcAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the desired arc where the index begins at 0

## Return Value

Array of doubles (see Remarks )

## Remarks

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

- `INote.GetArcCount`
- `INote.IGetArcAtIndex`
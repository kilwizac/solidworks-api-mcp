---
type: method
interface: INote
member: IGetArrowHeadAtIndex
returns: System.Double
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the desired arrowhead where the index begins at 0
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - INote.GetArrowHeadAtIndex
  - INote.GetArrowHeadCount
  - INote.GetArrowHeadInfo
  - INote.IGetArrowHeadInfo
keywords:
  - note
  - see
  - also
  - inote
  - arrowheads
  - igetarrowheadatindex
  - arrow
  - head
  - index
  - int32
  - double
---

# INote.IGetArrowHeadAtIndex

Gets information on the specified arrowhead in this note.

## Signature

```csharp
System.Double IGetArrowHeadAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the desired arrowhead where the index begins at 0

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

This method returns an array of doubles that describe the geometry of the arrowhead on the far end of the leader line. This information is independent of whether this note actually has an arrowhead.
Format of return information is the following array of doubles:
return value[0] = arrow length (i.e. leader into arrowhead)
return value[1] = arrowhead length
return value[2] = arrowhead width

## See Also

- `INote.GetArrowHeadAtIndex`
- `INote.GetArrowHeadCount`
- `INote.GetArrowHeadInfo`
- `INote.IGetArrowHeadInfo`
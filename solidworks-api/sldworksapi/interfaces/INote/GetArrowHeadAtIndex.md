---
type: method
interface: INote
member: GetArrowHeadAtIndex
returns: System.Object
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
  - INote.GetArrowHeadCount
  - INote.GetArrowHeadInfo
  - INote.IGetArrowHeadAtIndex
  - INote.IGetArrowHeadInfo
keywords:
  - note
  - see
  - also
  - inote
  - arrowheads
  - getarrowheadatindex
  - arrow
  - head
  - index
  - int32
  - object
---

# INote.GetArrowHeadAtIndex

Gets information on the specified arrowhead in this note.

## Signature

```csharp
System.Object GetArrowHeadAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the desired arrowhead where the index begins at 0

## Return Value

Array of doubles (see Remarks )

## Remarks

This method returns an array of doubles that describe the geometry of the arrowhead on the far end of the leader line. This information is independent of whether this note actually has an arrowhead.
Format of return information is the following array of doubles:
return value[0] = arrow length (i.e. leader into arrowhead)
return value[1] = arrowhead length
return value[2] = arrowhead width

## See Also

- `INote.GetArrowHeadCount`
- `INote.GetArrowHeadInfo`
- `INote.IGetArrowHeadAtIndex`
- `INote.IGetArrowHeadInfo`
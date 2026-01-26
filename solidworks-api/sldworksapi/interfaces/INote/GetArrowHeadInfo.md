---
type: method
interface: INote
member: GetArrowHeadInfo
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - INote.GetArrowHeadAtIndex
  - INote.GetArrowHeadCount
  - INote.IGetArrowHeadAtIndex
  - INote.IGetArrowHeadInfo
keywords:
  - note
  - see
  - also
  - inote
  - arrowheads
  - getarrowheadinfo
  - arrow
  - head
  - info
  - object
---

# INote.GetArrowHeadInfo

Gets an array of doubles that describe the geometry of the arrowhead on the far end of the leader line.

## Signature

```csharp
System.Object GetArrowHeadInfo()
```
## Parameters

None.

## Return Value

Array of doubles (see Remarks )

## Remarks

This information is independent of whether this note actually has an arrowhead.
This method returns an array of doubles that describe the geometry of the arrowhead on the far end of the leader line.
Format of return information is the following array of doubles:
return value[0] = arrow length (i.e. leader into arrowhead)
return value[1] = arrowhead length
return value[2] = arrowhead width
return value[3] = arrowhead style as defined in
swArrowStyle_e

## See Also

- `INote.GetArrowHeadAtIndex`
- `INote.GetArrowHeadCount`
- `INote.IGetArrowHeadAtIndex`
- `INote.IGetArrowHeadInfo`
---
type: method
interface: INote
member: IGetArrowHeadInfo
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - INote.GetArrowHeadAtIndex
  - INote.GetArrowHeadCount
  - INote.GetArrowHeadInfo
  - INote.IGetArrowHeadAtIndex
keywords:
  - note
  - see
  - also
  - inote
  - arrowheads
  - igetarrowheadinfo
  - arrow
  - head
  - info
  - double
---

# INote.IGetArrowHeadInfo

Gets an array of doubles that describe the geometry of the arrowhead on the far end of the leader line.

## Signature

```csharp
System.Double IGetArrowHeadInfo()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

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
- `INote.GetArrowHeadInfo`
- `INote.IGetArrowHeadAtIndex`
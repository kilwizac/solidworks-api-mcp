---
type: method
interface: IView
member: IGetDatumTags
returns: DatumTag
parameters:
  -
    name: NumDatumTag
    type: System.Int32
    description: Total number of datum tags on the drawing view
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetDatumTagCount
  - IView.GetDatumTags
keywords:
  - datum
  - tags
  - see
  - also
  - idatumtag
  - annotations
  - view
  - iview
  - annotation
  - iannotation
  - igetdatumtags
  - num
  - tag
  - int32
---

# IView.IGetDatumTags

Gets all the datum tags on this drawing view.

## Signature

```csharp
DatumTag IGetDatumTags( 
   System.Int32
NumDatumTag
)
```
## Parameters

- `NumDatumTag` (System.Int32): Total number of datum tags on the drawing view

## Return Value

in-process, unmanaged C++: Pointer to an array of datum tags VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Use this method to obtain the array of datum tags all at once instead of calling
IView::GetFirstDatumTag
and then repeatedly calling
IDatumTag::GetNext
to obtain the remaining datum tags on this drawing view.
Before calling this method, call
IView::GetDatumTagCount
to get the value for numDatumTag.

## See Also

- `IView.GetDatumTagCount`
- `IView.GetDatumTags`
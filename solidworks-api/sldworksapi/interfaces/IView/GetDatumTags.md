---
type: method
interface: IView
member: GetDatumTags
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetDatumTagCount
  - IView.IGetDatumTags
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
  - getdatumtags
  - object
  - arrays
  - vb
  - net
  - vba
---

# IView.GetDatumTags

Gets all of the datum tags on this drawing view.

## Signature

```csharp
System.Object GetDatumTags()
```
## Parameters

None.

## Return Value

Array of datum tags

## Remarks

Use this method to obtain the array of datum tags all at once instead of calling
IView::GetFirstDatumTag
and then repeatedly calling
IDatumTag::GetNext
to obtain the remaining datum tags on this drawing view.

## Examples

- Get Annotations Arrays (VB.NET) (Get_Annotations_Arrays_Example_VBNET.htm)
- Get Annotations Arrays (C#) (Get_Annotations_Arrays_Example_CSharp.htm)
- Get Annotations Arrays (VBA) (Get_Annotations_Array_Example_VB.htm)

## See Also

- `IView.GetDatumTagCount`
- `IView.IGetDatumTags`
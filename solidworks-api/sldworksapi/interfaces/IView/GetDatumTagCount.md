---
type: method
interface: IView
member: GetDatumTagCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetDatumTags
keywords:
  - datum
  - tags
  - see
  - also
  - idatumtag
  - number
  - getdatumtagcount
  - iview
  - view
  - tag
  - count
  - int32
  - annotations
  - arrays
  - vb
  - net
  - vba
---

# IView.GetDatumTagCount

Gets the number of datum tags on this drawing view.

## Signature

```csharp
System.Int32 GetDatumTagCount()
```
## Parameters

None.

## Return Value

Number of datum tags

## Remarks

Call this method before calling
IView::IGetDatumTags
to determine the size of the array for that method.

## Examples

- Get Annotations Arrays (C#) (Get_Annotations_Arrays_Example_CSharp.htm)
- Get Annotations Arrays (VB.NET) (Get_Annotations_Arrays_Example_VBNET.htm)
- Get Annotations Arrays (VBA) (Get_Annotations_Array_Example_VB.htm)

## See Also

- `IView.GetDatumTags`
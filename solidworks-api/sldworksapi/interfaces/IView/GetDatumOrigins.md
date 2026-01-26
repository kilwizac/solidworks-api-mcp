---
type: method
interface: IView
member: GetDatumOrigins
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetDatumOriginCount
  - IView.IGetDatumOrigins
keywords:
  - datum
  - origins
  - see
  - also
  - idatumorigin
  - annotations
  - view
  - iview
  - annotation
  - iannotation
  - getdatumorigins
  - object
  - arrays
  - vba
  - vb
  - net
---

# IView.GetDatumOrigins

Gets all of the datum origins on this drawing view.

## Signature

```csharp
System.Object GetDatumOrigins()
```
## Parameters

None.

## Return Value

Array of datum origins

## Remarks

Use this method to obtain the array of datum origins all at once instead of calling
IView::GetFirstDatumOrigin
and then repeatedly calling
IDatumOrigin::GetNext
to obtain the remaining datum origins on this drawing view.

## Examples

- Get Annotations Arrays (VBA) (Get_Annotations_Array_Example_VB.htm)
- Get Annotations Arrays (VB.NET) (Get_Annotations_Arrays_Example_VBNET.htm)
- Get Annotations Arrays (C#) (Get_Annotations_Arrays_Example_CSharp.htm)

## See Also

- `IView.GetDatumOriginCount`
- `IView.IGetDatumOrigins`
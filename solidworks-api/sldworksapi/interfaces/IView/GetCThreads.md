---
type: method
interface: IView
member: GetCThreads
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IModelDocExtension.HasLegacyCThreads
  - IView.GetCThreadCount
  - IView.IGetCThreads
keywords:
  - view
  - see
  - also
  - iview
  - cosmetic
  - threads
  - icosmeticthreadfeaturedata
  - icthread
  - interfaces
  - annotations
  - annotation
  - iannotation
  - getcthreads
  - object
  - arrays
  - vba
  - vb
  - net
---

# IView.GetCThreads

Gets all of the cosmetic threads on this drawing view.

## Signature

```csharp
System.Object GetCThreads()
```
## Parameters

None.

## Return Value

Array of cosmetic threads

## Remarks

Use this method to obtain the array of cosmetic threads all at once instead of calling
IView::GetFirstCThread
and then repeatedly calling
ICThread::GetNext
to obtain the remaining cosmetic threads on the drawing view.

## Examples

- Get Annotations Arrays (VBA) (Get_Annotations_Array_Example_VB.htm)
- Get Annotations Arrays (VB.NET) (Get_Annotations_Arrays_Example_VBNET.htm)
- Get Annotations Arrays (C#) (Get_Annotations_Arrays_Example_CSharp.htm)

## See Also

- `IModelDocExtension.HasLegacyCThreads`
- `IView.GetCThreadCount`
- `IView.IGetCThreads`
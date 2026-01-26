---
type: method
interface: IView
member: GetCThreadCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetCThreads
keywords:
  - cosmetic
  - threads
  - see
  - also
  - icosmeticthreadfeaturedata
  - icthread
  - interfaces
  - number
  - getcthreadcount
  - iview
  - view
  - thread
  - count
  - int32
---

# IView.GetCThreadCount

Gets the number of cosmetic threads in this drawing view.

## Signature

```csharp
System.Int32 GetCThreadCount()
```
## Parameters

None.

## Return Value

Number of cosmetic threads

## Remarks

Call this method before calling
IView::IGetCThreads
to determine the size of the array for that method.

## See Also

- `IView.GetCThreads`
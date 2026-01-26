---
type: method
interface: IView
member: IGetCThreads
returns: CThread
parameters:
  -
    name: NumCThread
    type: System.Int32
    description: Total number of cosmetic threads on the drawing view
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetCThreadCount
  - IView.GetCThreads
  - IView.GetFirstCThread
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
  - igetcthreads
  - num
  - thread
  - int32
---

# IView.IGetCThreads

Gets all of the cosmetic threads on this drawing view.

## Signature

```csharp
CThread IGetCThreads( 
   System.Int32
NumCThread
)
```
## Parameters

- `NumCThread` (System.Int32): Total number of cosmetic threads on the drawing view

## Return Value

in-process, unmanaged C++: Pointer to an array of cosmetic threads VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Use this method to obtain the array of cosmetic threads all at once instead of calling
IView::GetFirstCThread
and then repeatedly calling
ICThread::GetNext
to obtain the remaining cosmetic threads on the drawing view.
Before calling this method, call
IView::GetCThreadCount
to get the value for numCThread.

## See Also

- `IView.GetCThreadCount`
- `IView.GetCThreads`
- `IView.GetFirstCThread`
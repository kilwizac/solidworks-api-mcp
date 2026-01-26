---
type: method
interface: IView
member: IGetDatumOrigins
returns: DatumOrigin
parameters:
  -
    name: NumDatumOrigin
    type: System.Int32
    description: Total number of datum origins on the drawing view
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetDatumOriginCount
  - IView.GetDatumOrigins
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
  - igetdatumorigins
  - num
  - origin
  - int32
---

# IView.IGetDatumOrigins

Gets all of the datum origins on this drawing view.

## Signature

```csharp
DatumOrigin IGetDatumOrigins( 
   System.Int32
NumDatumOrigin
)
```
## Parameters

- `NumDatumOrigin` (System.Int32): Total number of datum origins on the drawing view

## Return Value

in-process, unmanaged C++: Pointer to an array of datum origins VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Use this method to obtain the array of datum origins all at once instead of calling
IView::GetFirstDatumOrigin
and then repeatedly calling
IDatumOrigin::GetNext
to obtain the remaining datum origins on this drawing view.
Before calling this method, call
IView::GetDatumOriginCount
to get the value for numDatumOrigin.

## See Also

- `IView.GetDatumOriginCount`
- `IView.GetDatumOrigins`
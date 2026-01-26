---
type: method
interface: IView
member: IGetGTols
returns: Gtol
parameters:
  -
    name: NumGTol
    type: System.Int32
    description: Total number of geometric tolerances on this drawing view.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetGTols
keywords:
  - gtol
  - see
  - also
  - igtol
  - drawing
  - views
  - annotation
  - iannotation
  - view
  - iview
  - gtols
  - igetgtols
  - tols
  - num
  - tol
  - int32
---

# IView.IGetGTols

Gets all of the geometric tolerances on this drawing view.

## Signature

```csharp
Gtol IGetGTols( 
   System.Int32
NumGTol
)
```
## Parameters

- `NumGTol` (System.Int32): Total number of geometric tolerances on this drawing view.

## Return Value

in-process, unmanaged C++: Pointer to an array of geometric tolerances VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Use this method to obtain the array of geometric tolerances all at once instead of calling
IView::GetFirstGTOL
and then repeatedly calling
IGtol::GetNextGTOL
to obtain the remaining geometric tolerances in the drawing view.
Before calling this method, call
IView::GetGTolCount
to get the value for numGTol.

## See Also

- `IView.GetGTols`
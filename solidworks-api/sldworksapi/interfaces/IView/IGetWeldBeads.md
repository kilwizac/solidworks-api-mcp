---
type: method
interface: IView
member: IGetWeldBeads
returns: WeldBead
parameters:
  -
    name: NumWeldBead
    type: System.Int32
    description: Total number of weld beads on this drawing view
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetWeldBeads
keywords:
  - weld
  - beads
  - see
  - iweldmentbeadfeaturedata
  - iweldbead
  - interfaces
  - annotation
  - also
  - iannotation
  - view
  - iview
  - igetweldbeads
  - num
  - bead
  - int32
---

# IView.IGetWeldBeads

Gets all of the weld beads on this drawing view.

## Signature

```csharp
WeldBead IGetWeldBeads( 
   System.Int32
NumWeldBead
)
```
## Parameters

- `NumWeldBead` (System.Int32): Total number of weld beads on this drawing view

## Return Value

in-process, unmanaged C++: Pointer to an array of weld beads VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Use this method to obtain the array of weld beads all at once instead of calling
IView::GetFirstWeldBead
and then repeatedly calling
IWeldBead::GetNext
to obtain the weld beads in the drawing view.
Before calling this method, call
IView::GetWeldBeadCount
to get the value for numWeldBead.

## See Also

- `IView.GetWeldBeads`
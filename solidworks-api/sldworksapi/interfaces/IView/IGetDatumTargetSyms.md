---
type: method
interface: IView
member: IGetDatumTargetSyms
returns: DatumTargetSym
parameters:
  -
    name: NumDatumTargetSym
    type: System.Int32
    description: Total number of datum target symbols on the drawing view
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetDatumTargetSyms
keywords:
  - datum
  - targets
  - see
  - idatumtargetsym
  - annotation
  - also
  - iannotation
  - view
  - iview
  - igetdatumtargetsyms
  - target
  - syms
  - num
  - sym
  - int32
---

# IView.IGetDatumTargetSyms

Gets all of the datum target symbols on this drawing view.

## Signature

```csharp
DatumTargetSym IGetDatumTargetSyms( 
   System.Int32
NumDatumTargetSym
)
```
## Parameters

- `NumDatumTargetSym` (System.Int32): Total number of datum target symbols on the drawing view

## Return Value

in-process, unmanaged C++: Pointer to an array of datum target symbols VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Use this method to obtain the array of datum target symbols all at once instead of calling
IView::GetFirstDatumTargetSym
and then repeatedly calling
IDatumTargetSym::GetNext
to obtain the remaining datum target symbols on this drawing view.
Before calling this method, call
IView::GetDatumTargetSymCount
to get the value for numDatumTargetSym.

## See Also

- `IView.GetDatumTargetSyms`
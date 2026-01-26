---
type: method
interface: IView
member: IGetMultiJogLeaders
returns: MultiJogLeader
parameters:
  -
    name: NumMultiJogLeader
    type: System.Int32
    description: Number of multi-jog leaders in this drawing view.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetMultiJogLeaders
keywords:
  - multi
  - jog
  - leaders
  - see
  - also
  - imultijogleader
  - drawing
  - views
  - view
  - iview
  - annotation
  - iannotation
  - igetmultijogleaders
  - num
  - leader
  - int32
---

# IView.IGetMultiJogLeaders

Gets all of the multi-jog leaders in this drawing view.

## Signature

```csharp
MultiJogLeader IGetMultiJogLeaders( 
   System.Int32
NumMultiJogLeader
)
```
## Parameters

- `NumMultiJogLeader` (System.Int32): Number of multi-jog leaders in this drawing view.

## Return Value

in-process, unmanaged C++: Pointer to an array of multi-jog leaders VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Use this method to obtain the array of multi-jog leaders all at once instead of calling
IView::GetFirstMultiJogLeader
and then repeatedly calling
IMultiJogLeader::GetNext
to obtain the remaining multi-jog leaders in the drawing view.
Before calling this method, call
IView::GetMultiJogLeaderCount
to get the value for numMultiJogLeader.

## See Also

- `IView.GetMultiJogLeaders`
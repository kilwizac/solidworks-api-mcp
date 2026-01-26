---
type: method
interface: IView
member: GetWeldBeadCount
returns: System.Int32
parameters: []
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
  - getweldbeadcount
  - iview
  - view
  - bead
  - count
  - int32
---

# IView.GetWeldBeadCount

Gets the number of weld beads on this drawing view.

## Signature

```csharp
System.Int32 GetWeldBeadCount()
```
## Parameters

None.

## Return Value

Total number of weld beads on this drawing view

## Remarks

Call this method before calling
IView::IGetWeldBeads
to determine the size of the array for that method.

## See Also

- `IView.GetWeldBeads`
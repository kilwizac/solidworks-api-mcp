---
type: method
interface: IView
member: RemoveAlignment
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.AlignWithView
  - IView.GetAlignment
  - IView.UseDefaultAlignment
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - alignment
  - view
  - removealignment
  - remove
  - void
---

# IView.RemoveAlignment

Removes the alignment from this drawing view.

## Signature

```csharp
void RemoveAlignment()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

Using this method on a view only removes the alignment information from that view. It does not remove the alignments any child views have with this view.

## See Also

- `IView.AlignWithView`
- `IView.GetAlignment`
- `IView.UseDefaultAlignment`
---
type: method
interface: IView
member: GetAlignment
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.AlignWithView
  - IView.RemoveAlignment
  - IView.UseDefaultAlignment
keywords:
  - alignment
  - drawing
  - views
  - see
  - also
  - iview
  - view
  - getalignment
  - int32
---

# IView.GetAlignment

Gets the alignment information of this view.

## Signature

```csharp
System.Int32 GetAlignment()
```
## Parameters

None.

## Return Value

Alignment information as defined in swViewAlignment_e

## Remarks

The alignment information returned indicates if:
This view is aligned with a parent view.
There are child views that are aligned with this view.

## See Also

- `IView.AlignWithView`
- `IView.RemoveAlignment`
- `IView.UseDefaultAlignment`
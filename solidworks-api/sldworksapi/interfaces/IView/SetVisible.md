---
type: method
interface: IView
member: SetVisible
returns: void
parameters:
  -
    name: Visible
    type: System.Boolean
    description: True to set the view to visible, false to not
  -
    name: DependentsToo
    type: System.Boolean
    description: True to set the dependents of this view to visible, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetVisible
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - visibility
  - view
  - transforms
  - setvisible
  - visible
  - boolean
  - dependents
  - too
  - void
---

# IView.SetVisible

Sets the visibility of this drawing view.

## Signature

```csharp
void SetVisible( 
   System.Boolean
Visible
,
   System.Boolean
DependentsToo
)
```
## Parameters

- `Visible` (System.Boolean): True to set the view to visible, false to not
- `DependentsToo` (System.Boolean): True to set the dependents of this view to visible, false to not

## Return Value

Unknown.

## See Also

- `IView.GetVisible`
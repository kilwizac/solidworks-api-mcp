---
type: method
interface: ISldWorks
member: SetToolbarVisibility
returns: void
parameters:
  -
    name: Toolbar
    type: System.Int32
    description: Identifier of toolbar as defined in swToolbar_e
  -
    name: Visibility
    type: System.Boolean
    description: True to show the toolbar, false to hide it
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.GetToolbarVisibility
  - IModelDoc2.SetToolbarVisibility
  - ISldWorks.AddToolbar5
  - ISldWorks.GetToolbarState2
  - ISldWorks.GetToolbarVisibility
  - ISldWorks.HideToolbar2
  - ISldWorks.ShowToolbar2
keywords:
  - toolbars
  - settoolbarvisibility
  - isldworks
  - sld
  - works
  - toolbar
  - visibility
  - int32
  - boolean
  - void
---

# ISldWorks.SetToolbarVisibility

Sets whether the specified toolbar is visible.

## Signature

```csharp
void SetToolbarVisibility( 
   System.Int32
Toolbar
,
   System.Boolean
Visibility
)
```
## Parameters

- `Toolbar` (System.Int32): Identifier of toolbar as defined in swToolbar_e
- `Visibility` (System.Boolean): True to show the toolbar, false to hide it

## Return Value

Unknown.

## See Also

- `IModelDoc2.GetToolbarVisibility`
- `IModelDoc2.SetToolbarVisibility`
- `ISldWorks.AddToolbar5`
- `ISldWorks.GetToolbarState2`
- `ISldWorks.GetToolbarVisibility`
- `ISldWorks.HideToolbar2`
- `ISldWorks.ShowToolbar2`
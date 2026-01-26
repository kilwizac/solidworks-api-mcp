---
type: method
interface: ISldWorks
member: GetToolbarVisibility
returns: System.Boolean
parameters:
  -
    name: Toolbar
    type: System.Int32
    description: Identifier of toolbar as defined in swToolbar_e
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
  - ISldWorks.HideToolbar2
  - ISldWorks.SetToolbarVisibility
keywords:
  - toolbars
  - gettoolbarvisibility
  - isldworks
  - sld
  - works
  - toolbar
  - visibility
  - int32
  - boolean
---

# ISldWorks.GetToolbarVisibility

Gets whether this toolbar is visible.

## Signature

```csharp
System.Boolean GetToolbarVisibility( 
   System.Int32
Toolbar
)
```
## Parameters

- `Toolbar` (System.Int32): Identifier of toolbar as defined in swToolbar_e

## Return Value

True if the toolbar is visible, false if it is hidden

## See Also

- `IModelDoc2.GetToolbarVisibility`
- `IModelDoc2.SetToolbarVisibility`
- `ISldWorks.AddToolbar5`
- `ISldWorks.GetToolbarState2`
- `ISldWorks.HideToolbar2`
- `ISldWorks.SetToolbarVisibility`
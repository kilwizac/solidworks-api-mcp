---
type: method
interface: ICommandGroup
member: GetToolbarVisibility
returns: System.Boolean
parameters:
  -
    name: SwContext
    type: System.Int32
    description: Context in which to show or hide toolbar as defined in swDocumentTypes_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ICommandGroup.HasToolbar
  - ICommandGroup.SetToolbarVisibility
keywords:
  - toolbars
  - gettoolbarvisibility
  - icommandgroup
  - command
  - group
  - toolbar
  - visibility
  - sw
  - context
  - int32
  - boolean
---

# ICommandGroup.GetToolbarVisibility

Gets whether this toolbar is visible.

## Signature

```csharp
System.Boolean GetToolbarVisibility( 
   System.Int32
SwContext
)
```
## Parameters

- `SwContext` (System.Int32): Context in which to show or hide toolbar as defined in swDocumentTypes_e

## Return Value

True to show the toolbar, false to hide it

## See Also

- `ICommandGroup.HasToolbar`
- `ICommandGroup.SetToolbarVisibility`
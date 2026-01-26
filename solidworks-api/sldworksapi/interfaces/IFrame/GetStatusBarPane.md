---
type: method
interface: IFrame
member: GetStatusBarPane
returns: StatusBarPane
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IFrame.SetStatusBarText
keywords:
  - getstatusbarpane
  - iframe
  - frame
  - status
  - bar
  - pane
---

# IFrame.GetStatusBarPane

Gets a pointer to one of up to five panes on the right side of the status bar.

## Signature

```csharp
StatusBarPane GetStatusBarPane()
```
## Parameters

None.

## Return Value

Pointer to a status bar pane object

## Remarks

There are only 5 panes available starting from the right of the screen to the existing SOLIDWORKS panes.
This method returns a null pointer to a pane when you have used all possible panes.
These objects appear on the status bar until they go out of scope. To use them in a project, they should be declared globally in the Visual Basic project and managed during the life cycle of the client application.

## See Also

- `IFrame.SetStatusBarText`
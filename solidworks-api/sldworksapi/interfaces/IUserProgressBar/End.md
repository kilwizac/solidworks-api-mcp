---
type: method
interface: IUserProgressBar
member: End
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - end
  - iuserprogressbar
  - user
  - progress
  - bar
  - boolean
---

# IUserProgressBar.End

Removes the progress indicator from the SOLIDWORKS status bar.

## Signature

```csharp
System.Boolean End()
```
## Parameters

None.

## Return Value

True if the progress indicator is removed, false if not

## Remarks

This method does not immediately remove the progress bar from the status bar. Instead, a show-window event is posted to the message queue of the given window when this method is called. After Windows processes the message, the progress bar is removed
from the status bar.

## Examples

- IUserProgressBar (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IUserProgressBar)
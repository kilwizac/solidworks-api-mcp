---
type: method
interface: ISldWorks
member: DisplayStatusBar
returns: void
parameters:
  -
    name: OnOff
    type: System.Boolean
    description: True if you want the status bar displayed, false if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.Lock
  - IModelDoc2.UnLock
  - IStatusBarPane
keywords:
  - status
  - bar
  - displaystatusbar
  - isldworks
  - sld
  - works
  - display
  - off
  - boolean
  - void
---

# ISldWorks.DisplayStatusBar

Sets whether to display the status bar.

## Signature

```csharp
void DisplayStatusBar( 
   System.Boolean
OnOff
)
```
## Parameters

- `OnOff` (System.Boolean): True if you want the status bar displayed, false if not

## Return Value

Unknown.

## See Also

- `IModelDoc2.Lock`
- `IModelDoc2.UnLock`
- `IStatusBarPane`
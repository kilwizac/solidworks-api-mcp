---
type: method
interface: IFrame
member: SetStatusBarText
returns: void
parameters:
  -
    name: MessageString
    type: System.String
    description: Text to display in the status bar
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IFrame.GetStatusBarPane
keywords:
  - setstatusbartext
  - iframe
  - frame
  - status
  - bar
  - text
  - message
  - string
  - void
---

# IFrame.SetStatusBarText

Displays a text string in the main status bar area to the left of the status bar.

## Signature

```csharp
void SetStatusBarText( 
   System.String
MessageString
)
```
## Parameters

- `MessageString` (System.String): Text to display in the status bar

## Return Value

Unknown.

## See Also

- `IFrame.GetStatusBarPane`
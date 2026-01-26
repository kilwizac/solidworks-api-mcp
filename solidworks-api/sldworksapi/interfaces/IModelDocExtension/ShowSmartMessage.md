---
type: method
interface: IModelDocExtension
member: ShowSmartMessage
returns: void
parameters:
  -
    name: Name
    type: System.String
    description: Message to display in the ToolTip
  -
    name: TimeInMillSec
    type: System.Int32
    description: Time, in milliseconds, to display the message
  -
    name: ShowInStatusBar
    type: System.Boolean
    description: True to show the message on the SOLIDWORKS status bar, false to not
  -
    name: RemoveDefaultTip
    type: System.Boolean
    description: True to replace the default SOLIDWORKS ToolTip with this message for TimeInMillSec, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related: []
keywords:
  - status
  - bar
  - errors
  - messages
  - tooltips
  - showsmartmessage
  - imodeldocextension
  - model
  - doc
  - extension
  - show
  - smart
  - message
  - name
  - string
  - time
  - mill
  - sec
  - int32
  - boolean
  - remove
  - default
  - tip
  - void
---

# IModelDocExtension.ShowSmartMessage

Displays a SOLIDWORKS-style message as a ToolTip in the graphics area and on the status bar.

## Signature

```csharp
void ShowSmartMessage( 
   System.String
Name
,
   System.Int32
TimeInMillSec
,
   System.Boolean
ShowInStatusBar
,
   System.Boolean
RemoveDefaultTip
)
```
## Parameters

- `Name` (System.String): Message to display in the ToolTip
- `TimeInMillSec` (System.Int32): Time, in milliseconds, to display the message
- `ShowInStatusBar` (System.Boolean): True to show the message on the SOLIDWORKS status bar, false to not
- `RemoveDefaultTip` (System.Boolean): True to replace the default SOLIDWORKS ToolTip with this message for TimeInMillSec, false to not

## Return Value

Unknown.
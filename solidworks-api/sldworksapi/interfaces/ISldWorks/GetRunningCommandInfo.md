---
type: method
interface: ISldWorks
member: GetRunningCommandInfo
returns: void
parameters:
  -
    name: CommandID
    type: System.Int32
    description: Command's ID or PropertyManager page's command ID as defined in swCommands_e
  -
    name: PMTitle
    type: System.String
    description: Title of PropertyManager page
  -
    name: IsUiActive
    type: System.Boolean
    description: True if command or PropertyManager page is active in the user-interface, false if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - DSldWorksEvents_CommandCloseNotifyEventHandler
  - DSldWorksEvents_CommandOpenPreNotifyEventHandler
  - ISldWorks.IsCommandEnabled
  - ISldWorks.RunCommand
keywords:
  - propertymanager
  - page
  - see
  - also
  - ipropertymanagerpage2
  - title
  - active
  - command
  - id
  - solidworks
  - commands
  - getrunningcommandinfo
  - isldworks
  - sld
  - works
  - running
  - info
  - int32
  - pm
  - string
  - ui
  - boolean
  - void
  - fire
  - events
  - when
  - opened
  - canceled
  - vba
  - vb
  - net
---

# ISldWorks.GetRunningCommandInfo

Get a command's ID or PropertyManager page's command ID, title, and whether it is active in the user-interface.

## Signature

```csharp
void GetRunningCommandInfo( 
   out System.Int32
CommandID
,
   out System.String
PMTitle
,
   out System.Boolean
IsUiActive
)
```
## Parameters

- `CommandID` (System.Int32): Command's ID or PropertyManager page's command ID as defined in swCommands_e
- `PMTitle` (System.String): Title of PropertyManager page
- `IsUiActive` (System.Boolean): True if command or PropertyManager page is active in the user-interface, false if not

## Return Value

Unknown.

## Remarks

Before using this method, you must add a reference to the SOLIDWORKS commands type library or DLL to access the SOLIDWORKS commands.

## Examples

- Fire Events When PropertyManager Page Opened and Canceled (VBA) (Fire_Events_When_PropertyManager_Page_Opened_and_Canceled_Example_VB.htm)
- Fire Events When PropertyManager Page Opened and Canceled (VB.NET) (Fire_Events_When_PropertyManager_Page_Opened_and_Canceled_Example_VBNET.htm)
- Fire Events When PropertyManager Page Opened and Canceled (C#) (Fire_Events_When_PropertyManager_Page_Opened_and_Canceled_Example_CSharp.htm)

## See Also

- `DSldWorksEvents_CommandCloseNotifyEventHandler`
- `DSldWorksEvents_CommandOpenPreNotifyEventHandler`
- `ISldWorks.IsCommandEnabled`
- `ISldWorks.RunCommand`
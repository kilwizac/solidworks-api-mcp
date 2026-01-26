---
type: method
interface: ISldWorks
member: RunCommand
returns: System.Boolean
parameters:
  -
    name: CommandID
    type: System.Int32
    description: SOLIDWORKS command as defined in swCommands_e (see Remarks )
  -
    name: NewTitle
    type: System.String
    description: Your title for the SOLIDWORKS PropertyManager page, if invoked by this command
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
  - IModelDocExtension.RunCommand
  - ISldWorks.GetRunningCommandInfo
  - ISldWorks.IsCommandEnabled
  - ISldWorks.RecordLine
  - ISldWorks.RecordLineCSharp
  - ISldWorks.RecordLineVBnet
keywords:
  - commands
  - solidworks
  - runcommand
  - isldworks
  - sld
  - works
  - run
  - command
  - id
  - int32
  - new
  - title
  - string
  - boolean
  - fire
  - events
  - when
  - propertymanager
  - page
  - opened
  - canceled
  - vba
  - record
  - macros
  - vb
  - net
---

# ISldWorks.RunCommand

Runs the specified SOLIDWORKS command.

## Signature

```csharp
System.Boolean RunCommand( 
   System.Int32
CommandID
,
   System.String
NewTitle
)
```
## Parameters

- `CommandID` (System.Int32): SOLIDWORKS command as defined in swCommands_e (see Remarks )
- `NewTitle` (System.String): Your title for the SOLIDWORKS PropertyManager page, if invoked by this command

## Return Value

True if the SOLIDWORKS command ran, false if not

## Examples

- Fire Events When PropertyManager Page Opened and Canceled (VBA) (Fire_Events_When_PropertyManager_Page_Opened_and_Canceled_Example_VB.htm)
- Record Macros (C#) (Record_Macros_Example_CSharp.htm)
- Record Macros (VB.NET) (Record_Macros_Example_VBNET.htm)
- Record Macros (VBA) (Record_Macros_Example_VB.htm)

## See Also

- `DSldWorksEvents_CommandCloseNotifyEventHandler`
- `DSldWorksEvents_CommandOpenPreNotifyEventHandler`
- `IModelDocExtension.RunCommand`
- `ISldWorks.GetRunningCommandInfo`
- `ISldWorks.IsCommandEnabled`
- `ISldWorks.RecordLine`
- `ISldWorks.RecordLineCSharp`
- `ISldWorks.RecordLineVBnet`
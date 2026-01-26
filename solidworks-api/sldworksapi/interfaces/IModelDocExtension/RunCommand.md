---
type: method
interface: IModelDocExtension
member: RunCommand
returns: System.Boolean
parameters:
  -
    name: CommandID
    type: System.Int32
    description: SOLIDWORKS command as defined in swCommands_e
  -
    name: NewTitle
    type: System.String
    description: Your title for the SOLIDWORKS PropertyManager page, if invoked by this command
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - ISldWorks.IsCommandEnabled
  - ISldWorks.RunCommand
keywords:
  - solidworks
  - commands
  - runcommand
  - imodeldocextension
  - model
  - doc
  - extension
  - run
  - command
  - id
  - int32
  - new
  - title
  - string
  - boolean
  - vba
  - fire
  - events
  - when
  - propertymanager
  - page
  - opened
  - canceled
  - vb
  - net
---

# IModelDocExtension.RunCommand

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

- `CommandID` (System.Int32): SOLIDWORKS command as defined in swCommands_e
- `NewTitle` (System.String): Your title for the SOLIDWORKS PropertyManager page, if invoked by this command

## Return Value

True if the SOLIDWORKS command ran, false if not

## Examples

- Run SOLIDWORKS Commands (VBA) (Run_SOLIDWORKS_Commands_Example_VB.htm)
- Fire Events When PropertyManager Page Opened and Canceled (C#) (Fire_Events_When_PropertyManager_Page_Opened_and_Canceled_Example_CSharp.htm)
- Fire Events When PropertyManager Page Opened and Canceled (VB.NET) (Fire_Events_When_PropertyManager_Page_Opened_and_Canceled_Example_VBNET.htm)
- Fire Events When PropertyManager Page Opened and Canceled (VBA) (Fire_Events_When_PropertyManager_Page_Opened_and_Canceled_Example_VB.htm)

## See Also

- `ISldWorks.IsCommandEnabled`
- `ISldWorks.RunCommand`
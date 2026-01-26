---
type: method
interface: ISldWorks
member: IsCommandEnabled
returns: System.Boolean
parameters:
  -
    name: CommandID
    type: System.Int32
    description: Command ID as defined swCommands_e (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.RunCommand
keywords:
  - commands
  - solidworks
  - iscommandenabled
  - isldworks
  - sld
  - works
  - command
  - enabled
  - id
  - int32
  - boolean
---

# ISldWorks.IsCommandEnabled

Gets whether the specified command is enabled.

## Signature

```csharp
System.Boolean IsCommandEnabled( 
   System.Int32
CommandID
)
```
## Parameters

- `CommandID` (System.Int32): Command ID as defined swCommands_e (see Remarks )

## Return Value

True if the command is enabled, false if not

## Remarks

Before using this method, you must add a reference to the version-specific
SOLIDWORKS Commands type library
to access the SOLIDWORKS commands.

## See Also

- `ISldWorks.RunCommand`
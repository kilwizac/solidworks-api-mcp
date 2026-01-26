---
type: method
interface: IConfiguration
member: RenameDisplayState
returns: System.Boolean
parameters:
  -
    name: OldDisplayStateName
    type: System.String
    description: Existing name of the display state
  -
    name: NewDisplayStateName
    type: System.String
    description: New name for the display state
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IConfiguration.ApplyDisplayState
  - IConfiguration.CopyDisplayStateFromConfiguration
  - IConfiguration.CreateDisplayState
  - IConfiguration.DeleteDisplayState
keywords:
  - display
  - states
  - renamedisplaystate
  - iconfiguration
  - configuration
  - rename
  - state
  - old
  - name
  - string
  - new
  - boolean
---

# IConfiguration.RenameDisplayState

Renames a display state of this configuration.

## Signature

```csharp
System.Boolean RenameDisplayState( 
   System.String
OldDisplayStateName
,
   System.String
NewDisplayStateName
)
```
## Parameters

- `OldDisplayStateName` (System.String): Existing name of the display state
- `NewDisplayStateName` (System.String): New name for the display state

## Return Value

True if the display state is renamed, false if not

## Remarks

Use
IConfiguration::GetDisplayStates
or
IConfiguration::IGetDisplayStates
to get a list of the names of the existing display states for this configuration.

## See Also

- `IConfiguration.ApplyDisplayState`
- `IConfiguration.CopyDisplayStateFromConfiguration`
- `IConfiguration.CreateDisplayState`
- `IConfiguration.DeleteDisplayState`
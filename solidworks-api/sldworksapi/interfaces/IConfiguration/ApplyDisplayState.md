---
type: method
interface: IConfiguration
member: ApplyDisplayState
returns: System.Boolean
parameters:
  -
    name: DisplayStateName
    type: System.String
    description: Name of the display state to apply to this configuration
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IConfiguration.CopyDisplayStateFromConfiguration
  - IConfiguration.CreateDisplayState
  - IConfiguration.DeleteDisplayState
  - IConfiguration.GetDisplayStatesCount
  - IConfiguration.RenameDisplayState
  - IConfigurationManager.LinkDisplayStatesToConfigurations
keywords:
  - display
  - states
  - applydisplaystate
  - iconfiguration
  - configuration
  - apply
  - state
  - name
  - string
  - boolean
---

# IConfiguration.ApplyDisplayState

Applies the specified display state to this configuration.

## Signature

```csharp
System.Boolean ApplyDisplayState( 
   System.String
DisplayStateName
)
```
## Parameters

- `DisplayStateName` (System.String): Name of the display state to apply to this configuration

## Return Value

True if the display state is applied, false if not

## Remarks

Use
IConfiguration::GetDisplayStates
or
IConfiguration::IGetDisplayStates
to get the names of the display states for this configuration.

## See Also

- `IConfiguration.CopyDisplayStateFromConfiguration`
- `IConfiguration.CreateDisplayState`
- `IConfiguration.DeleteDisplayState`
- `IConfiguration.GetDisplayStatesCount`
- `IConfiguration.RenameDisplayState`
- `IConfigurationManager.LinkDisplayStatesToConfigurations`
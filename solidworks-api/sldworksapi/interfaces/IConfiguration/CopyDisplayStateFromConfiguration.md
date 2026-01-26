---
type: method
interface: IConfiguration
member: CopyDisplayStateFromConfiguration
returns: System.Boolean
parameters:
  -
    name: CopyFromConfig
    type: Configuration
    description: Pointer to the configuration from which to copy the display state
  -
    name: DisplayStateNameToCopy
    type: System.String
    description: Name of the display state to copy
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IConfiguration.ApplyDisplayState
  - IConfiguration.CreateDisplayState
  - IConfiguration.DeleteDisplayState
  - IConfiguration.GetDisplayStatesCount
  - IConfiguration.RenameDisplayState
  - IConfigurationManager.LinkDisplayStatesToConfigurations
keywords:
  - display
  - states
  - copydisplaystatefromconfiguration
  - iconfiguration
  - configuration
  - copy
  - state
  - config
  - name
  - string
  - boolean
---

# IConfiguration.CopyDisplayStateFromConfiguration

Copies the specified display state from the specified configuration to this configuration.

## Signature

```csharp
System.Boolean CopyDisplayStateFromConfiguration( 
   Configuration
CopyFromConfig
,
   System.String
DisplayStateNameToCopy
)
```
## Parameters

- `CopyFromConfig` (Configuration): Pointer to the configuration from which to copy the display state
- `DisplayStateNameToCopy` (System.String): Name of the display state to copy

## Return Value

True if the specified display is copied to this configuration, false if not

## Remarks

Use
IConfiguration::GetDisplayStates
or
IConfiguration::IGetDisplayStates
to get the names of the display states from the configuration from which to copy the display state.

## See Also

- `IConfiguration.ApplyDisplayState`
- `IConfiguration.CreateDisplayState`
- `IConfiguration.DeleteDisplayState`
- `IConfiguration.GetDisplayStatesCount`
- `IConfiguration.RenameDisplayState`
- `IConfigurationManager.LinkDisplayStatesToConfigurations`
---
type: method
interface: IConfiguration
member: DeleteDisplayState
returns: System.Boolean
parameters:
  -
    name: DisplayStateName
    type: System.String
    description: Name of display state to delete from this configuration
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IConfiguration.ApplyDisplayState
  - IConfiguration.CopyDisplayStateFromConfiguration
  - IConfiguration.GetDisplayStatesCount
  - IConfiguration.RenameDisplayState
  - IModelDocExtension.DeleteDisplayStateSpecificRenderMaterial
  - IModelDocExtension.IDeleteDisplayStateSpecificRenderMaterial
keywords:
  - display
  - states
  - deletedisplaystate
  - iconfiguration
  - configuration
  - delete
  - state
  - name
  - string
  - boolean
---

# IConfiguration.DeleteDisplayState

Deletes the specified display state from this configuration.

## Signature

```csharp
System.Boolean DeleteDisplayState( 
   System.String
DisplayStateName
)
```
## Parameters

- `DisplayStateName` (System.String): Name of display state to delete from this configuration

## Return Value

True if the specified display state is deleted, false if not

## Remarks

Use
IConfiguration::GetDisplayStates
or
IConfiguration::IGetDisplayStates
to get the names of the display states from the configuration from which to copy the display state.

## See Also

- `IConfiguration.ApplyDisplayState`
- `IConfiguration.CopyDisplayStateFromConfiguration`
- `IConfiguration.GetDisplayStatesCount`
- `IConfiguration.RenameDisplayState`
- `IModelDocExtension.DeleteDisplayStateSpecificRenderMaterial`
- `IModelDocExtension.IDeleteDisplayStateSpecificRenderMaterial`
---
type: method
interface: IConfiguration
member: IGetDisplayStates
returns: System.String
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of displays states for this configuration
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
  - IConfiguration.GetDisplayStates
  - IConfiguration.RenameDisplayState
  - IConfigurationManager.LinkDisplayStatesToConfigurations
keywords:
  - igetdisplaystates
  - iconfiguration
  - configuration
  - display
  - states
  - count
  - int32
  - string
---

# IConfiguration.IGetDisplayStates

Gets the names of the display states for this configuration.

## Signature

```csharp
System.String IGetDisplayStates( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of displays states for this configuration

## Return Value

in-process, unmanaged C++: Pointer to an array of names of the display states for this configuration VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IConfiguration::GetDisplayStatesCount
to determine the size of array for the output.

## See Also

- `IConfiguration.ApplyDisplayState`
- `IConfiguration.CopyDisplayStateFromConfiguration`
- `IConfiguration.CreateDisplayState`
- `IConfiguration.DeleteDisplayState`
- `IConfiguration.GetDisplayStates`
- `IConfiguration.RenameDisplayState`
- `IConfigurationManager.LinkDisplayStatesToConfigurations`
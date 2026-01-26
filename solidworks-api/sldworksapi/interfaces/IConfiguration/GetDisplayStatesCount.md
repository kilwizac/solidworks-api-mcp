---
type: method
interface: IConfiguration
member: GetDisplayStatesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IConfiguration.ApplyDisplayState
  - IConfiguration.CopyDisplayStateFromConfiguration
  - IConfiguration.DeleteDisplayState
  - IConfiguration.GetDisplayStateBodyProperties
  - IConfiguration.GetDisplayStateComponentProperties
  - IConfiguration.GetDisplayStateComponentVisibility
  - IConfiguration.GetDisplayStateFaceProperties
  - IConfiguration.GetDisplayStateFeatureProperties
  - IConfiguration.GetDisplayStateProperties
  - IConfiguration.GetDisplayStates
  - IConfiguration.IGetDisplayStates
  - IConfiguration.RenameDisplayState
keywords:
  - display
  - states
  - getdisplaystatescount
  - iconfiguration
  - configuration
  - count
  - int32
  - add
  - delete
  - appearances
  - specific
  - vb
  - net
  - vba
---

# IConfiguration.GetDisplayStatesCount

Gets the number of display states for this configuration.

## Signature

```csharp
System.Int32 GetDisplayStatesCount()
```
## Parameters

None.

## Return Value

Number of display states for this configuration

## Remarks

Call this method before calling
IConfiguration::IGetDisplayStates
to determine the size of the array needed.

## Examples

- Add and Delete Appearances from Specific Display States (C#) (Add_and_Delete_Materials_from_Specific_Display_States_Example_CSharp.htm)
- Add and Delete Appearances from Specific Display States (VB.NET) (Add_and_Delete_Materials_from_Specific_Display_States_Example_VBNET.htm)
- Add and Delete Appearances from Specific Display States (VBA) (Add_and_Delete_Materials_from_Specific_Display_States_Example_VB.htm)

## See Also

- `IConfiguration.ApplyDisplayState`
- `IConfiguration.CopyDisplayStateFromConfiguration`
- `IConfiguration.DeleteDisplayState`
- `IConfiguration.GetDisplayStateBodyProperties`
- `IConfiguration.GetDisplayStateComponentProperties`
- `IConfiguration.GetDisplayStateComponentVisibility`
- `IConfiguration.GetDisplayStateFaceProperties`
- `IConfiguration.GetDisplayStateFeatureProperties`
- `IConfiguration.GetDisplayStateProperties`
- `IConfiguration.GetDisplayStates`
- `IConfiguration.IGetDisplayStates`
- `IConfiguration.RenameDisplayState`
---
type: method
interface: IRoutingSettings
member: GetRoutingUserPreferenceToggle
returns: System.Boolean
parameters:
  -
    name: UserPreferenceToggle
    type: System.Int32
    description: User preference as defined in swUserPreferenceRoutingToggle_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IRoutingSettings.SetRoutingUserPreferenceToggle
keywords:
  - getroutinguserpreferencetoggle
  - iroutingsettings
  - routing
  - settings
  - user
  - preference
  - toggle
  - int32
  - boolean
---

# IRoutingSettings.GetRoutingUserPreferenceToggle

Gets whether the specified routing user preference is turned on.

## Signature

```csharp
System.Boolean GetRoutingUserPreferenceToggle( 
   System.Int32
UserPreferenceToggle
)
```
## Parameters

- `UserPreferenceToggle` (System.Int32): User preference as defined in swUserPreferenceRoutingToggle_e

## Return Value

True if on, false if off

## Examples

- IRoutingSettings (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IRoutingSettings)

## See Also

- `IRoutingSettings.SetRoutingUserPreferenceToggle`
---
type: method
interface: IRoutingSettings
member: SetRoutingUserPreferenceToggle
returns: void
parameters:
  -
    name: UserPreferenceValue
    type: System.Int32
    description: User preference as defined in swUserPreferenceRoutingToggle_e
  -
    name: OnFlag
    type: System.Boolean
    description: True to turn on, false to turn off
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IRoutingSettings.GetRoutingUserPreferenceToggle
keywords:
  - setroutinguserpreferencetoggle
  - iroutingsettings
  - routing
  - settings
  - user
  - preference
  - toggle
  - value
  - int32
  - flag
  - boolean
  - void
---

# IRoutingSettings.SetRoutingUserPreferenceToggle

Sets whether the specified routing user preference is turned on or off.

## Signature

```csharp
void SetRoutingUserPreferenceToggle( 
   System.Int32
UserPreferenceValue
,
   System.Boolean
OnFlag
)
```
## Parameters

- `UserPreferenceValue` (System.Int32): User preference as defined in swUserPreferenceRoutingToggle_e
- `OnFlag` (System.Boolean): True to turn on, false to turn off

## Return Value

Unknown.

## See Also

- `IRoutingSettings.GetRoutingUserPreferenceToggle`
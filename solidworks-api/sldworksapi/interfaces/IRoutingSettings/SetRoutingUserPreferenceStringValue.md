---
type: method
interface: IRoutingSettings
member: SetRoutingUserPreferenceStringValue
returns: System.Boolean
parameters:
  -
    name: UserPreference
    type: System.Int32
    description: User preference as defined in swUserPreferenceRoutingFileLocations_e
  -
    name: Value
    type: System.String
    description: String value of the specified user preference
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IRoutingSettings.GetRoutingUserPreferenceStringValue
keywords:
  - setroutinguserpreferencestringvalue
  - iroutingsettings
  - routing
  - settings
  - user
  - preference
  - string
  - value
  - int32
  - boolean
---

# IRoutingSettings.SetRoutingUserPreferenceStringValue

Sets a string value for the specified routing user preference.

## Signature

```csharp
System.Boolean SetRoutingUserPreferenceStringValue( 
   System.Int32
UserPreference
,
   System.String
Value
)
```
## Parameters

- `UserPreference` (System.Int32): User preference as defined in swUserPreferenceRoutingFileLocations_e
- `Value` (System.String): String value of the specified user preference

## Return Value

True if successful, false if not

## See Also

- `IRoutingSettings.GetRoutingUserPreferenceStringValue`
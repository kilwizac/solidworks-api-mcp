---
type: method
interface: IRoutingSettings
member: SetRoutingUserPreferenceDoubleValue
returns: System.Boolean
parameters:
  -
    name: UserPreferenceValue
    type: System.Int32
    description: User preference as defined in swUserPreferenceRoutingDouble_e
  -
    name: Value
    type: System.Double
    description: Double value of the specified user preference
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IRoutingSettings.GetRoutingUserPreferenceDoubleValue
keywords:
  - setroutinguserpreferencedoublevalue
  - iroutingsettings
  - routing
  - settings
  - user
  - preference
  - double
  - value
  - int32
  - boolean
---

# IRoutingSettings.SetRoutingUserPreferenceDoubleValue

Sets a double value for the specified routing user preference.

## Signature

```csharp
System.Boolean SetRoutingUserPreferenceDoubleValue( 
   System.Int32
UserPreferenceValue
,
   System.Double
Value
)
```
## Parameters

- `UserPreferenceValue` (System.Int32): User preference as defined in swUserPreferenceRoutingDouble_e
- `Value` (System.Double): Double value of the specified user preference

## Return Value

True if successful, false if not

## See Also

- `IRoutingSettings.GetRoutingUserPreferenceDoubleValue`
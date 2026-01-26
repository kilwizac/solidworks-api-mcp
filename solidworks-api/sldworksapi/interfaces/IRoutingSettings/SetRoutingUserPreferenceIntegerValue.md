---
type: method
interface: IRoutingSettings
member: SetRoutingUserPreferenceIntegerValue
returns: System.Boolean
parameters:
  -
    name: UserPreferenceValue
    type: System.Int32
    description: User preference as defined in swUserPreferenceRoutingInteger_e
  -
    name: Value
    type: System.Int32
    description: Integer value of the specified user preference
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IRoutingSettings.GetRoutingUserPreferenceIntegerValue
keywords:
  - setroutinguserpreferenceintegervalue
  - iroutingsettings
  - routing
  - settings
  - user
  - preference
  - integer
  - value
  - int32
  - boolean
---

# IRoutingSettings.SetRoutingUserPreferenceIntegerValue

Sets an integer value for the specified routing user preference.

## Signature

```csharp
System.Boolean SetRoutingUserPreferenceIntegerValue( 
   System.Int32
UserPreferenceValue
,
   System.Int32
Value
)
```
## Parameters

- `UserPreferenceValue` (System.Int32): User preference as defined in swUserPreferenceRoutingInteger_e
- `Value` (System.Int32): Integer value of the specified user preference

## Return Value

True if successful, false if not

## See Also

- `IRoutingSettings.GetRoutingUserPreferenceIntegerValue`
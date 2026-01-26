---
type: method
interface: IRoutingSettings
member: GetRoutingUserPreferenceDoubleValue
returns: System.Double
parameters:
  -
    name: UserPreferenceValue
    type: System.Int32
    description: User preference as defined in swUserPreferenceRoutingDouble_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IRoutingSettings.SetRoutingUserPreferenceDoubleValue
keywords:
  - getroutinguserpreferencedoublevalue
  - iroutingsettings
  - routing
  - settings
  - user
  - preference
  - double
  - value
  - int32
---

# IRoutingSettings.GetRoutingUserPreferenceDoubleValue

Gets the double value of the specified routing user preference.

## Signature

```csharp
System.Double GetRoutingUserPreferenceDoubleValue( 
   System.Int32
UserPreferenceValue
)
```
## Parameters

- `UserPreferenceValue` (System.Int32): User preference as defined in swUserPreferenceRoutingDouble_e

## Return Value

User preference

## Examples

- IRoutingSettings (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IRoutingSettings)

## See Also

- `IRoutingSettings.SetRoutingUserPreferenceDoubleValue`
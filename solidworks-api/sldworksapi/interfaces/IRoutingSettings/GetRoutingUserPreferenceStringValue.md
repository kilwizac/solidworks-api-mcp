---
type: method
interface: IRoutingSettings
member: GetRoutingUserPreferenceStringValue
returns: System.String
parameters:
  -
    name: UserPreference
    type: System.Int32
    description: User preference as defined in swUserPreferenceRoutingFileLocations_e
  -
    name: UseDefaultVal
    type: System.Boolean
    description: True to use the default, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IRoutingSettings.SetRoutingUserPreferenceStringValue
keywords:
  - getroutinguserpreferencestringvalue
  - iroutingsettings
  - routing
  - settings
  - user
  - preference
  - string
  - value
  - int32
  - use
  - default
  - val
  - boolean
---

# IRoutingSettings.GetRoutingUserPreferenceStringValue

Gets the string value of the specified routing user preference.

## Signature

```csharp
System.String GetRoutingUserPreferenceStringValue( 
   System.Int32
UserPreference
,
   System.Boolean
UseDefaultVal
)
```
## Parameters

- `UserPreference` (System.Int32): User preference as defined in swUserPreferenceRoutingFileLocations_e
- `UseDefaultVal` (System.Boolean): True to use the default, false to not

## Return Value

User preference

## Examples

- IRoutingSettings (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IRoutingSettings)

## See Also

- `IRoutingSettings.SetRoutingUserPreferenceStringValue`
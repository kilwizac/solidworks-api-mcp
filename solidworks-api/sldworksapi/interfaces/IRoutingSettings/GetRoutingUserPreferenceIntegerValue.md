---
type: method
interface: IRoutingSettings
member: GetRoutingUserPreferenceIntegerValue
returns: System.Int32
parameters:
  -
    name: UserPreferenceValue
    type: System.Int32
    description: User preference as defined in swUserPreferenceRoutingInteger_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - getroutinguserpreferenceintegervalue
  - iroutingsettings
  - routing
  - settings
  - user
  - preference
  - integer
  - value
  - int32
---

# IRoutingSettings.GetRoutingUserPreferenceIntegerValue

Gets the integer value of the specified routing user preference.

## Signature

```csharp
System.Int32 GetRoutingUserPreferenceIntegerValue( 
   System.Int32
UserPreferenceValue
)
```
## Parameters

- `UserPreferenceValue` (System.Int32): User preference as defined in swUserPreferenceRoutingInteger_e

## Return Value

User preference

## Examples

- IRoutingSettings (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IRoutingSettings)
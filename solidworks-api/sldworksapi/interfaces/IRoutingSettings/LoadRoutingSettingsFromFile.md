---
type: method
interface: IRoutingSettings
member: LoadRoutingSettingsFromFile
returns: System.Boolean
parameters:
  -
    name: RoutingSettingsFilename
    type: System.String
    description: Full path name of the .sqy file from which to load the routing settings
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - file-io
related:
  - IRoutingSettings.LoadDefaultRoutingSettings
  - IRoutingSettings.SaveRoutingSettingsToFile
keywords:
  - loadroutingsettingsfromfile
  - iroutingsettings
  - routing
  - settings
  - load
  - file
  - filename
  - string
  - boolean
---

# IRoutingSettings.LoadRoutingSettingsFromFile

Loads routing settings from the specified file.

## Signature

```csharp
System.Boolean LoadRoutingSettingsFromFile( 
   System.String
RoutingSettingsFilename
)
```
## Parameters

- `RoutingSettingsFilename` (System.String): Full path name of the .sqy file from which to load the routing settings

## Return Value

True if successful, false if not

## See Also

- `IRoutingSettings.LoadDefaultRoutingSettings`
- `IRoutingSettings.SaveRoutingSettingsToFile`
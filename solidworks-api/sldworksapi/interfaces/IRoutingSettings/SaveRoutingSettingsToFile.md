---
type: method
interface: IRoutingSettings
member: SaveRoutingSettingsToFile
returns: System.Boolean
parameters:
  -
    name: RoutingSettingsFilename
    type: System.String
    description: Full path name of file to which to save routing settings; file name must have an extension of .sqy
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - file-io
related:
  - IRoutingSettings.LoadRoutingSettingsFromFile
keywords:
  - saveroutingsettingstofile
  - iroutingsettings
  - routing
  - settings
  - save
  - file
  - filename
  - string
  - boolean
---

# IRoutingSettings.SaveRoutingSettingsToFile

Saves routing settings to the specified file.

## Signature

```csharp
System.Boolean SaveRoutingSettingsToFile( 
   System.String
RoutingSettingsFilename
)
```
## Parameters

- `RoutingSettingsFilename` (System.String): Full path name of file to which to save routing settings; file name must have an extension of .sqy

## Return Value

True if successful, false if not

## Examples

- IRoutingSettings (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IRoutingSettings)

## See Also

- `IRoutingSettings.LoadRoutingSettingsFromFile`
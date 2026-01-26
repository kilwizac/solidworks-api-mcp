---
type: method
interface: ISldWorks
member: LoadAdminSettingsFile
returns: System.Int32
parameters:
  -
    name: FilePath
    type: System.String
    description: Full local path name of the *.sldsettings file to load
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - file-io
  - ui
related:
  - ISldWorks.RestoreSettings
  - ISldWorks.SaveSettings
keywords:
  - solidworks
  - connected
  - 3dexperience
  - loadadminsettingsfile
  - isldworks
  - sld
  - works
  - load
  - admin
  - settings
  - file
  - path
  - string
  - int32
---

# ISldWorks.LoadAdminSettingsFile

Loads the specified *.sldsettings file into SOLIDWORKS Design Augmented.

## Signature

```csharp
System.Int32 LoadAdminSettingsFile( 
   System.String
FilePath
)
```
## Parameters

- `FilePath` (System.String): Full local path name of the *.sldsettings file to load

## Return Value

True if settings successfully applied, false if not

## Remarks

The 3DEXPERIENCE platform Admin authors the
*.sldsettings
platform file with settings appropriate for SOLIDWORKS Design Augmented. At launch, SOLIDWORKS Design Augmented reads a local copy. This method is used primarily by the 3DEXPERIENCE Add-in.

## See Also

- `ISldWorks.RestoreSettings`
- `ISldWorks.SaveSettings`
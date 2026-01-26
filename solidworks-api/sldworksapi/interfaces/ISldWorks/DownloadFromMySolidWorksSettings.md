---
type: method
interface: ISldWorks
member: DownloadFromMySolidWorksSettings
returns: System.Int32
parameters:
  -
    name: SystemOptions
    type: System.Boolean
    description: True to download, false to not
  -
    name: FileLocations
    type: System.Boolean
    description: True to download, false to not
  -
    name: Customizations
    type: System.Boolean
    description: True to download, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.UploadToMySolidWorksSettings
keywords:
  - 3dexperience
  - solidworks
  - connected
  - downloadfrommysolidworkssettings
  - isldworks
  - sld
  - works
  - download
  - my
  - solid
  - settings
  - options
  - boolean
  - file
  - locations
  - customizations
  - int32
---

# ISldWorks.DownloadFromMySolidWorksSettings

Downloads the specified SOLIDWORKS Design Augmented settings to SOLIDWORKS Design.

## Signature

```csharp
System.Int32 DownloadFromMySolidWorksSettings( 
   System.Boolean
SystemOptions
,
   System.Boolean
FileLocations
,
   System.Boolean
Customizations
)
```
## Parameters

- `SystemOptions` (System.Boolean): True to download, false to not
- `FileLocations` (System.Boolean): True to download, false to not
- `Customizations` (System.Boolean): True to download, false to not

## Return Value

Return code as defined by swConnectedSyncSettingsErrors_e

## Remarks

In order to use this method, you must be logged into SOLIDWORKS Design Augmented.
To turn on auto synchronization of settings, call:
ISldWorks::SetUserPreferenceToggle
(
swUserPreferenceToggle_e
.swAutomaticSyncSettings, True)
and then call one, two, or all three of:
ISldWorks::SetUserPreferenceToggle(swUserPreferenceToggle_e.swAutoSyncSettingsToInclude_SystemOptions, True)
ISldWorks::SetUserPreferenceToggle(swUserPreferenceToggle_e.swAutoSyncSettingsToInclude_FileLocations, True)
ISldWorks::SetUserPreferenceToggle(swUserPreferenceToggle_e.swAutoSyncSettingsToInclude_Customizations, True)
To get the timestamp of the last synchronization, call
ISldWorks::GetUserPreferenceStringValue
(
swUserPreferenceStringValue_e
.swLastSynchronizationTimeStamp).

## See Also

- `ISldWorks.UploadToMySolidWorksSettings`
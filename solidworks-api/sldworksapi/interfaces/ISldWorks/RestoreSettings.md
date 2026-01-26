---
type: method
interface: ISldWorks
member: RestoreSettings
returns: System.Int32
parameters:
  -
    name: FileName
    type: System.String
    description: Full path and filename of the settings to restore ( *.sldreg ) (see Remarks )
  -
    name: SystemOptions
    type: System.Boolean
    description: True to restore system options, false to not
  -
    name: ToolbarLayout
    type: System.Boolean
    description: True to restore the toolbar layout, false to not
  -
    name: KeyboardShortcuts
    type: System.Boolean
    description: True to restore keyboard shortcuts, false to not (see Remarks )
  -
    name: MouseGestures
    type: System.Boolean
    description: True to restore mouse gestures, false to not
  -
    name: MenuCustomization
    type: System.Boolean
    description: True to restore menu customizations, false to not
  -
    name: SavedViews
    type: System.Boolean
    description: True to restore saved views, false to not (see Remarks )
  -
    name: CreateBackup
    type: System.Boolean
    description: True to create a backup of the current settings, false to not (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.LoadAdminSettingsFile
keywords:
  - restoresettings
  - isldworks
  - sld
  - works
  - restore
  - settings
  - file
  - name
  - string
  - options
  - boolean
  - toolbar
  - layout
  - keyboard
  - shortcuts
  - mouse
  - gestures
  - menu
  - customization
  - saved
  - views
  - create
  - backup
  - int32
---

# ISldWorks.RestoreSettings

Restores the specified SOLIDWORKS settings from the specified *.sldreg file.

## Signature

```csharp
System.Int32 RestoreSettings( 
   System.String
FileName
,
   System.Boolean
SystemOptions
,
   System.Boolean
ToolbarLayout
,
   System.Boolean
KeyboardShortcuts
,
   System.Boolean
MouseGestures
,
   System.Boolean
MenuCustomization
,
   System.Boolean
SavedViews
,
   System.Boolean
CreateBackup
)
```
## Parameters

- `FileName` (System.String): Full path and filename of the settings to restore ( *.sldreg ) (see Remarks )
- `SystemOptions` (System.Boolean): True to restore system options, false to not
- `ToolbarLayout` (System.Boolean): True to restore the toolbar layout, false to not
- `KeyboardShortcuts` (System.Boolean): True to restore keyboard shortcuts, false to not (see Remarks )
- `MouseGestures` (System.Boolean): True to restore mouse gestures, false to not
- `MenuCustomization` (System.Boolean): True to restore menu customizations, false to not
- `SavedViews` (System.Boolean): True to restore saved views, false to not (see Remarks )
- `CreateBackup` (System.Boolean): True to create a backup of the current settings, false to not (see Remarks )

## Return Value

Error code as defined in swSaveRestoreSettingsResults_e

## Remarks

This method is valid only if
ISldWorks::SaveSettings
was called previously.
KeyboardShortcuts and SavedViews are valid only if these settings were previously saved using ISldWorks::SaveSettings.
If CreateBackup is true, this method backs up the current settings to
backup_
userid
_
yyyymmdd
_
hhmms
s
.sldreg
in the same location as specified in FileName.
For C++ only, specify all System.bool parameters using VARIANT_TRUE (-1) and VARIANT_FALSE (0).

## See Also

- `ISldWorks.LoadAdminSettingsFile`
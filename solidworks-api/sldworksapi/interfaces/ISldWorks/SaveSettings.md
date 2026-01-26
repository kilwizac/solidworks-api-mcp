---
type: method
interface: ISldWorks
member: SaveSettings
returns: System.Int32
parameters:
  -
    name: FileName
    type: System.String
    description: Full path and filename to which to save the settings ( *.sldreg )
  -
    name: SystemOptions
    type: System.Boolean
    description: True to save system options, false to not
  -
    name: ToolbarLayout
    type: System.Int32
    description: Toolbar layout as defined in swToolbarLayoutOption_e
  -
    name: KeyboardShortcuts
    type: System.Boolean
    description: True to save keyboard shortcuts, false to not
  -
    name: MouseGestures
    type: System.Boolean
    description: True to save mouse gestures, false to not
  -
    name: MenuCustomization
    type: System.Boolean
    description: True to save menu customizations, false to not
  -
    name: SavedViews
    type: System.Boolean
    description: True to save views, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - file-io
  - ui
related:
  - ISldWorks.LoadAdminSettingsFile
  - ISldWorks.RestoreSettings
keywords:
  - savesettings
  - isldworks
  - sld
  - works
  - save
  - settings
  - file
  - name
  - string
  - options
  - boolean
  - toolbar
  - layout
  - int32
  - keyboard
  - shortcuts
  - mouse
  - gestures
  - menu
  - customization
  - saved
  - views
---

# ISldWorks.SaveSettings

Saves the specified SOLIDWORKS settings to the specified *.sldreg file.

## Signature

```csharp
System.Int32 SaveSettings( 
   System.String
FileName
,
   System.Boolean
SystemOptions
,
   System.Int32
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
)
```
## Parameters

- `FileName` (System.String): Full path and filename to which to save the settings ( *.sldreg )
- `SystemOptions` (System.Boolean): True to save system options, false to not
- `ToolbarLayout` (System.Int32): Toolbar layout as defined in swToolbarLayoutOption_e
- `KeyboardShortcuts` (System.Boolean): True to save keyboard shortcuts, false to not
- `MouseGestures` (System.Boolean): True to save mouse gestures, false to not
- `MenuCustomization` (System.Boolean): True to save menu customizations, false to not
- `SavedViews` (System.Boolean): True to save views, false to not

## Return Value

Error code as defined in swSaveRestoreSettingsResults_e

## Remarks

For C++ only, specify all System.bool parameters using VARIANT_TRUE (-1) and VARIANT_FALSE (0).

## See Also

- `ISldWorks.LoadAdminSettingsFile`
- `ISldWorks.RestoreSettings`
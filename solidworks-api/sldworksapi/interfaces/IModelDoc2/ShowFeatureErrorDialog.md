---
type: property
interface: IModelDoc2
member: ShowFeatureErrorDialog
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - features
  - ui
related:
  - IModelDoc2.ForceRebuild3
keywords:
  - errors
  - features
  - feature
  - see
  - also
  - ifeature
  - error
  - dialog
  - showfeatureerrordialog
  - imodeldoc2
  - model
  - doc2
  - show
  - boolean
readonly: null
---

# IModelDoc2.ShowFeatureErrorDialog

Gets or sets whether to display the feature error dialog.

## Signature

```csharp
System.Boolean ShowFeatureErrorDialog {get; set;}
```
## Parameters

None.

## Return Value

True displays an error dialog, false does not

## Remarks

This property controls the display of error dialogs generated when an error occurs during a rebuild of a specific feature in the current SOLIDWORKS Design session. Use
ISldWorks::GetUserPreferenceToggle
or
ISldWorks::SetUserPreferenceToggle
to get or set swShowErrorsEveryRebuild, which controls the display of error dialogs generated when a rebuild warning error message is generated.
You can wrap the rebuild API call with the following code to suppress rebuild warning dialogs:
bValue = swApp.GetUserPreferenceToggle(swShowErrorsEveryRebuild)
swApp.SetUserPreferenceToggle swShowErrorsEveryRebuild, false
swModel.ForceRebuild3
swApp.SetUserPreferenceToggle swShowErrorsEveryRebuild, bValue

## See Also

- `IModelDoc2.ForceRebuild3`
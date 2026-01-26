---
type: property
interface: IFeatureManager
member: HideComponentSingleConfigurationOrDisplayStateNames
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - 3dexperience
  - solidworks
  - connected
  - hidecomponentsingleconfigurationordisplaystatenames
  - ifeaturemanager
  - feature
  - manager
  - hide
  - component
  - single
  - configuration
  - display
  - state
  - names
  - boolean
  - setcomponentidentifiers
readonly: null
---

# IFeatureManager.HideComponentSingleConfigurationOrDisplayStateNames

Gets or sets whether to hide a component's only configuration or display state.

## Signature

```csharp
System.Boolean HideComponentSingleConfigurationOrDisplayStateNames {get; set;}
```
## Parameters

None.

## Return Value

True to hide the single configuration or display state, false to display it

## Remarks

This property:
Works in both SOLIDWORKS Design and
SOLIDWORKS Design Augmented
.
Is analogous to the
Do not show Configuration or Display State name if only one exists
check box on the Component Name and Description dialog that appears after right-clicking on the top-level component in the FeatureManager design tree and selecting
Tree Display > Component Name and Description
.

## Examples

- IFeatureManager::SetComponentIdentifiers (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IFeatureManager~SetComponentIdentifiers)
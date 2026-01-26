---
type: method
interface: IFeatureManager
member: GetCornerManagementFolders
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - getcornermanagementfolders
  - ifeaturemanager
  - feature
  - manager
  - corner
  - management
  - folders
  - object
  - icornermanagementfolder
---

# IFeatureManager.GetCornerManagementFolders

Gets the structure system corner management folders.

## Signature

```csharp
System.Object GetCornerManagementFolders()
```
## Parameters

None.

## Return Value

Array of IFeature s

## Remarks

The features returned are
ICornerManagementFolder
s. Use
IFeature::GetSpecificFeature2
after calling this method to get the ICornerManagementFolders.

## Examples

- ICornerManagementFolder (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICornerManagementFolder)
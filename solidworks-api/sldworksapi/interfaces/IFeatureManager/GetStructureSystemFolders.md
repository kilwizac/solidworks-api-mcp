---
type: method
interface: IFeatureManager
member: GetStructureSystemFolders
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - getstructuresystemfolders
  - ifeaturemanager
  - feature
  - manager
  - structure
  - folders
  - object
---

# IFeatureManager.GetStructureSystemFolders

Gets the structure system folders.

## Signature

```csharp
System.Object GetStructureSystemFolders()
```
## Parameters

None.

## Return Value

Array of IFeature s

## Remarks

The features returned are
IStructureSystemFolder
s. Use
IFeature::GetSpecificFeature2
after calling this method to get the IStructureSystemFolders.
See the
IStructureSystemFolder
Remarks.
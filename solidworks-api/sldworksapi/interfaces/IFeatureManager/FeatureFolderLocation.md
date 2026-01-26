---
type: method
interface: IFeatureManager
member: FeatureFolderLocation
returns: Feature
parameters:
  -
    name: Feature
    type: Feature
    description: IFeature whose folder to get
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeatureManager.CutListFolderLocation
keywords:
  - featurefolderlocation
  - ifeaturemanager
  - feature
  - manager
  - folder
  - location
  - move
  - assembly
  - components
  - new
  - vba
  - vb
  - net
---

# IFeatureManager.FeatureFolderLocation

Gets the folder feature for the specified feature.

## Signature

```csharp
Feature FeatureFolderLocation( 
   Feature
Feature
)
```
## Parameters

- `Feature` (Feature): IFeature whose folder to get

## Return Value

IFeature folder

## Examples

- Move Assembly Components to New Folder (VBA) (Move_Assembly_Components_to_New_Folder_Example_VB.htm)
- Move Assembly Components to New Folder (VB.NET) (Move_Assembly_Components_to_New_Folder_Example_VBNET.htm)
- Move Assembly Components to New Folder (C#) (Move_Assembly_Components_to_New_Folder_Example_CSharp.htm)

## See Also

- `IFeatureManager.CutListFolderLocation`
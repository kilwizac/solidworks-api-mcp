---
type: method
interface: IStructureSystemFolder
member: GetCornerManagementFolder
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - getcornermanagementfolder
  - istructuresystemfolder
  - structure
  - folder
  - corner
  - management
  - object
---

# IStructureSystemFolder.GetCornerManagementFolder

Gets the corner management folder in this structure system folder.

## Signature

```csharp
System.Object GetCornerManagementFolder()
```
## Parameters

None.

## Return Value

IFeature

## Remarks

After calling this method to get the IFeature, use
IFeature::GetSpecificFeature2
to get an
ICornerManagementFolder
.
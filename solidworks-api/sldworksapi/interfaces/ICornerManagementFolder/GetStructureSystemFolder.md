---
type: method
interface: ICornerManagementFolder
member: GetStructureSystemFolder
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - getstructuresystemfolder
  - icornermanagementfolder
  - corner
  - management
  - folder
  - structure
  - object
---

# ICornerManagementFolder.GetStructureSystemFolder

Gets the structure system folder containing this corner management folder.

## Signature

```csharp
System.Object GetStructureSystemFolder()
```
## Parameters

None.

## Return Value

IFeature

## Remarks

After calling this method to get the IFeature, use
IFeature::GetSpecificFeature2
to get an
IStructureSystemFolder
.

## Examples

- ICornerManagementFolder (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICornerManagementFolder)